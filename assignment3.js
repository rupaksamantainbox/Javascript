//Question 1:

/*const ordersList = [
    {name:"Laptop",price:120000},
    {name:"Mobile",price:70000},
    {name:"Mobile Charger",price:1500},
    {name:"Laptop Charger",price:10500}
];
let sum = 0;
ordersList.forEach((data) => {
    sum = sum + data.price;
});
console.log("Total Price :"+ sum);*/


//Question 2:

/*function randomNumberGenerator(){
    let random = Math.floor(Math.random()*10)
    console.log(random)
}
setInterval(function(){
    randomNumberGenerator()
},2000)*/


//Question 3:

/*let expenses = [
    {amount:100,category:"Utilities"},
    {amount:200,category:"Groceries"},
    {amount:50,category:"Entertaintment"}
];

let expensesWithTax = expenses.map((expenses) => {
    let tax = (expenses.amount*10)/100;
    return {...expenses ,tax:tax};
});

console.log(expensesWithTax)*/


//Question 4:

/*let expenses = [
    {amount:100,category:"Utilities"},
    {amount:200,category:"Groceries"},
    {amount:50,category:"Entertaintment"}
];

let expensesForGroceries = expenses.filter((expenses) =>{
    return expenses.category == "Groceries"
});
console.log(expensesForGroceries);*/


//Question 5:

/*let expenses = [
    {amount:100,category:"Utilities"},
    {amount:200,category:"Groceries"},
    {amount:50,category:"Entertaintment"}
];
let totalExpenses = expenses.reduce((total,expenses) => total + expenses.amount,0)
console.log(totalExpenses)*/


//Question 6:

/*let expenses = [
    {amount:100,category:"Utilities"},
    {amount:200,category:"Groceries"},
    {amount:50,category:"Entertaintment"}
];
function expenseCategory(expenses){
    if(expenses.amount > 100){
        return "High Expense";
    }else{
        return "Low Expense";
    }
}
let categoryWiseExpense = expenses.map((expenses) => expenseCategory(expenses));
console.log(categoryWiseExpense)*/

//Question 7:

/*let originalNumbers = [2,5,8,10,3]

originalNumbers.forEach((Number,index,array) => {
    array[index] = Number * 2
});

console.log(originalNumbers)*/


//Question 8:

/*let originalNumbers = [2,5,8,10,3]
let evenNumbers = []

originalNumbers.forEach((number) =>{
    if(number % 2 == 0){
        evenNumbers.push(number);
    }
})
console.log(evenNumbers)*/



