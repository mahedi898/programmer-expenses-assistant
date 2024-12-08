
// add event listener for calculate button
let count = 0;
document.getElementById("calculate").addEventListener("click",function () {
    count ++;
    const income = parseFloat(document.getElementById("income").value);
    const software = parseFloat(document.getElementById("software").value);
    const courses = parseFloat(document.getElementById("courses").value);
    const internet = parseFloat(document.getElementById("internet").value);
    
    if (income <= 0 || isNaN(income)) {
        document.getElementById("income-error").classList.remove("hidden")
        return;
    }
    if (software <= 0 || isNaN(software)) {
        document.getElementById("software-error").classList.remove("hidden")
        return
    }
    if (courses <= 0 || isNaN(courses)) {
        document.getElementById("courses-error").classList.remove("hidden")
        return
    }
    if (internet <= 0 || isNaN(internet)) {
        document.getElementById("internet-error").classList.remove("hidden")
        return
    }

    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    if (totalExpenses > income) {
        document.getElementById("logic-error").classList.remove("hidden")
        return
    }

    const totalExpensesElement = document.getElementById("total-expenses");
    totalExpensesElement.innerText = totalExpenses.toFixed(2);
                
    const availableBalance = document.getElementById("balance");
    availableBalance.innerText = balance.toFixed(2); 

    const result = document.getElementById("results");
    result.classList.remove("hidden");

    const historyItem = document.createElement("div");
    historyItem.className = "bg-white p-3 rounded-md border-l-2 border-indigo-500"
    historyItem.innerHTML = `
    <p class= "text-xs text-gray-500 ">Serial: ${count}</p>
    <p class= "text-xs text-gray-500 ">${new Date().toLocaleDateString()}</p>
    <p class= "text-xs text-gray-500 "> income: $${income.toFixed(2)}</p>
    <p class= "text-xs text-gray-500 "> Expenses: $${totalExpenses.toFixed(2)}</p>
    <p class= "text-xs text-gray-500 "> balance: $${balance.toFixed(2)}</p>

    `
    const historyContainer = document.getElementById("history-list");
    historyContainer.insertBefore(historyItem,historyContainer.firstChild);



})


// add event listener for savings button

document.getElementById("calculate-savings").addEventListener("click",function () {
    const savingsElement = parseFloat(document.getElementById("savings").value);
 
    const income = parseFloat(document.getElementById("income").value);
    const software = parseFloat(document.getElementById("software").value);
    const courses = parseFloat(document.getElementById("courses").value);
    const internet = parseFloat(document.getElementById("internet").value);
    const savingsInput = parseFloat(document.getElementById("savings").value); 
    

    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    const savings = savingsElement * balance / 100;
    const remainingBalance = balance - savings ;
    const remainingBalanceText = document.getElementById("remaining-balance");
    remainingBalanceText.innerText = remainingBalance; 
    
    const savingsAmount = document.getElementById("savings-amount");
    savingsAmount.innerText = savings ;

    if (savingsInput <= 0 || isNaN(savingsInput)) {
        document.getElementById("savings-error").classList.remove("hidden")
        return
    }
    else{
        document.getElementById("savings-error").classList.add("hidden")
        return
    }
    
    
   
})

// add event listener for history button

const historyTab = document.getElementById("history-tab");
const assistantTab = document.getElementById("assistant-tab");
historyTab.addEventListener("click",function () {
    historyTab.classList.add(
        "text-white",
        "font-semibold",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    );
    historyTab.classList.remove("text-gray-600");
    assistantTab.classList.remove(
        "text-white",
        "font-semibold",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    );
    assistantTab.classList.add("text-gray-600");

    document.getElementById("expense-form").classList.add("hidden")
    const removeHiddenHistory = document.getElementById("history-section");
    removeHiddenHistory.classList.remove("hidden")


})
assistantTab.addEventListener("click",function () {
    assistantTab.classList.add(
        "text-white",
        "font-semibold",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    )

    historyTab.classList.remove(
        "text-white",
        "font-semibold",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    )
    document.getElementById("expense-form").classList.remove("hidden");
    const removeHiddenHistory = document.getElementById("history-section");
    removeHiddenHistory.classList.add("hidden")
})

// live input value error

document.getElementById("income").addEventListener("input",function () {
    const inputValue = parseFloat(document.getElementById("income").value);
    if (isNaN(inputValue) || inputValue <= 0) {
        document.getElementById("income-error").classList.remove("hidden")
        return;
    }
    else{
        document.getElementById("income-error").classList.add("hidden")
        return;
    }
})

function validateIncomeInput(inputId, errorId) {
    const inputValue = parseFloat(document.getElementById(inputId).value);
    if (isNaN(inputValue) || inputValue <= 0) {
        document.getElementById(errorId).classList.remove("hidden")
    }
    else{
        document.getElementById(errorId).classList.add("hidden")
    }
}

document.getElementById("software").addEventListener("input",function () {
    validateIncomeInput("software", "software-error");
})
document.getElementById("courses").addEventListener("input",function () {
    validateIncomeInput("courses", "courses-error");
})
document.getElementById("internet").addEventListener("input",function () {
    validateIncomeInput("internet", "internet-error");
})
document.getElementById("savings").addEventListener("input",function () {
    validateIncomeInput("savings", "savings-error");
})


