import "./style.css";

let balanceValue;
let incomeValue;
let expenseValue;
let transactionList;

const app = document.querySelector<HTMLDivElement>("#app")
const rootElement = document.createElement("div")
rootElement.className="ApplicationWrapper"
app?.appendChild(rootElement)


function createTitleComponent(){
  const titleComponent = document.createElement("span");
  titleComponent.textContent = "Expense Tracker"
  titleComponent.className="Title"
  rootElement?.appendChild(titleComponent)
}


function createDasboardComponent(){
  let dashboardTemplate = document.getElementById("DashboardTemplate") as HTMLTemplateElement;
  let dashboardComponent = dashboardTemplate?.content?.cloneNode(true) as HTMLDivElement;

  balanceValue = dashboardComponent.querySelector(".BalanceValue");
  incomeValue = dashboardComponent.querySelector(".IncomeValue");
  expenseValue = dashboardComponent.querySelector(".ExpenseValue");

  rootElement.appendChild(dashboardComponent);

}

function createHistoryComponent(){
  let historyTemplate = document.getElementById("HistoryTemplate") as HTMLTemplateElement;
  let historyComponent = historyTemplate?.content?.cloneNode(true) as HTMLDivElement;
  transactionList = historyComponent.querySelector("#TransactionList")

  let transactionTemplate = document.getElementById("TransactionTemplate") as HTMLTemplateElement;
  let transactionComponent1 = transactionTemplate?.content?.cloneNode(true) as HTMLDivElement;
  let transactionComponent2 = transactionTemplate?.content?.cloneNode(true) as HTMLDivElement;
  
  transactionList?.appendChild(transactionComponent1)
  transactionList?.appendChild(transactionComponent2)

  rootElement.appendChild(historyComponent);

}

function createAddTransactionFormComponent(){
}


createTitleComponent();
createDasboardComponent();
createHistoryComponent();
createAddTransactionFormComponent();

//<span>Expense Tracker</span>

