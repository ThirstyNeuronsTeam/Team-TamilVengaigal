import "./style.css";


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
function createBalanceComponent(){
   const label = document.createElement("span");
   label.textContent = "Your Balance"

   const value = document.createElement("span")
   value.textContent = "0.00"
   value.className = "BalanceValue"
 

   const wrapper = document.createElement("div");
   wrapper.className = "Balance Column"
   //<div class="BalanceComponent"></div>
   wrapper.appendChild(label);
   wrapper.appendChild(value);

   rootElement?.appendChild(wrapper)
}

function createIncomeComponent(){
  const label = document.createElement("span");
  label.textContent = "Income"

  const value = document.createElement("span")
  value.textContent = "0.00"
  value.className = "Income IncomeValue"

  const wrapper = document.createElement("div");
  wrapper.className = "Column"
  //<div class="BalanceComponent"></div>
  wrapper.appendChild(label);
  wrapper.appendChild(value);

  return wrapper;

}

function createExpenseComponent(){
  const label = document.createElement("span");
  label.textContent = "Expense"

  const value = document.createElement("span")
  value.textContent = "0.00"
  value.className = "Expense ExpenseValue"

  const wrapper = document.createElement("div");
  wrapper.className = "Column"
  //<div class="BalanceComponent"></div>
  wrapper.appendChild(label);
  wrapper.appendChild(value);

  return wrapper;

 
}


function createDasboardComponent(){
  createBalanceComponent()
  const incomeWrapper = createIncomeComponent()
  const expenseWrapper = createExpenseComponent()

  const incomeExpenseGroup = document.createElement("div");
  incomeExpenseGroup.className ="IncomeExpenseGroup"

  incomeExpenseGroup.appendChild(incomeWrapper);
  incomeExpenseGroup.appendChild(expenseWrapper);

  rootElement?.appendChild(incomeExpenseGroup);
}

function createHistoryComponent(){
}

function createAddTransactionFormComponent(){
}


createTitleComponent();
createDasboardComponent();
createHistoryComponent();
createAddTransactionFormComponent();

//<span>Expense Tracker</span>

