//Question 1:
function result(marks){
    if(marks > 90){
        return "A Grade";
    }else if(marks > 70 && marks <= 90){
        return "B Grade";
    }else if(marks >= 50 && marks <=70){
        return "C Grade";
    }else if(marks < 50){
        return "C Grade";
    }
}
var marks = result(60)
console.log(marks)

//Question 2:
const num1 = 10;
const num2 = 25;
for(let i=num1;i<num2;i++){
    console.log(i)
}


//Question 3:
function check_number(num){
    num > 0 ?
    console.log("positive"): num == 0 ? console.log("zero") : console.log("negetive")
}
console.log(check_number(0))


//Question 4:
let x =10,y=20
console.log(x,y)


    let username = "admin"
    let pasword = "12345"

    if(username == "admin" && pasword == "12345"){
        console.log("login Successful");
    }else{
        console.log("username or password Wrong")
    }

//Question 5
function payment_method(type){
    switch(type){
        case "credit" :
            console.log("processing  fee for Credit Card 2%");
            break;
        case "debit":
            console.log("processing  fee for Debit Card 1.5%");
            break;
        case "paypal":
            console.log("processing  fee for Paypal is 3%");
            break;
        default:
            console.log("invalid")
    }
}
payment_method("credit")

//Question 6
function weather(temp){
    if(temp > 30){
        console.log("Hot")
    }else{
        console.log("Moderate")
    }
}
weather(30)

//Question 7
function sum_of_numbers(end){
    let start = 1
    let sum = 0
    do{
        sum +=start
        start++
    }while(start <= end)
    return sum
}
console.log(sum_of_numbers(2))