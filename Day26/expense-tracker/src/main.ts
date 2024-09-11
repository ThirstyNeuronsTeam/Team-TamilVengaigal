import "./style.css";
import { v4 } from "uuid";

let balanceValue;
let incomeValue;
let expenseValue;
let transactionList;
let transactions = [
  {
    id: v4(),
    reason: "Salary",
    value: 10000000,
  },
  {
    id: v4(),
    reason: "Cinema",
    value: -5000,
  },
  {
    id: v4(),
    reason: "Food",
    value: -2000,
  },
];

console.log(transactions);

const app = document.querySelector<HTMLDivElement>("#app");
const rootElement = document.createElement("div");
rootElement.className = "ApplicationWrapper";
app?.appendChild(rootElement);

function createTitleComponent() {
  const titleComponent = document.createElement("span");
  titleComponent.textContent = "Expense Tracker";
  titleComponent.className = "Title";
  rootElement?.appendChild(titleComponent);
}

function createDasboardComponent() {
  //Get that template
  let dashboardTemplate = document.getElementById(
    "DashboardTemplate"
  ) as HTMLTemplateElement;

  //Clone the Template
  let dashboardComponent = dashboardTemplate?.content?.cloneNode(
    true
  ) as HTMLDivElement;

  //Get the required elements where you are going the change the data
  balanceValue = dashboardComponent.querySelector(".BalanceValue");
  incomeValue = dashboardComponent.querySelector(".IncomeValue");
  expenseValue = dashboardComponent.querySelector(".ExpenseValue");

  if (balanceValue) {
    balanceValue.textContent = String(99.99);
  }

  if (incomeValue) {
    incomeValue.textContent = String(88.78787);
  }

  rootElement.appendChild(dashboardComponent);
}

function createHistoryComponent() {
  //Get that template
  let historyTemplate = document.getElementById(
    "HistoryTemplate"
  ) as HTMLTemplateElement;

  //Clone the template
  let historyComponent = historyTemplate?.content?.cloneNode(
    true
  ) as HTMLDivElement;

  //idhu dhaan adhu
  transactionList = historyComponent.querySelector("#TransactionList");

  let transactionTemplate = document.getElementById(
    "TransactionTemplate"
  ) as HTMLTemplateElement;

  for (let index = 0; index < transactions.length; index++) {
    const transactionData = transactions[index];

    let transactionComponent = transactionTemplate?.content?.cloneNode(
      true
    ) as HTMLDivElement;

    const greenIndicator = transactionComponent.querySelector(".GreenIndicator") as HTMLDivElement
    const redIndicator = transactionComponent.querySelector(".RedIndicator") as HTMLDivElement


    const reasonSpan = transactionComponent.querySelector("#reason");
    const valueSpan = transactionComponent.querySelector("#value");

    if (reasonSpan) reasonSpan.textContent = transactionData.reason;

    if (valueSpan) valueSpan.textContent = String(Math.abs(transactionData.value));

    //indicator
    if(transactionData.value  > 0){
          //ShowGreen
          if(greenIndicator){
            greenIndicator.style.display = "block"
          }
          if(redIndicator){
            redIndicator.style.display = "none"
          }

          //HideREd
    }else{
          //HideGreen
          //ShowRed
          if(greenIndicator){
            greenIndicator.style.display = "none"
          }
          if(redIndicator){
            redIndicator.style.display = "block"
          }
    }

    transactionList?.appendChild(transactionComponent);
  }

  rootElement.appendChild(historyComponent);
}

function createAddTransactionFormComponent() {}

createTitleComponent();
createDasboardComponent();
createHistoryComponent();
createAddTransactionFormComponent();

//<span>Expense Tracker</span>
