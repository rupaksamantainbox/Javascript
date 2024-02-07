//Question 1
// const  squre = (num) =>{
// 	return num*num
// }
// console.log(squre(2))


//Question 2

// const ages = [19,22,19,24,20,25,26,24,25,24]
// ages.sort()
// const minAge = ages[0]
// const maxAge = ages[ages.length -1]
// var medianAge;
// if(ages.length % 2 === 0){
//   const middle1 = ages[Math.floor(ages.length/2)]
//   const middle2 = ages[Math.floor(ages.length/2)-1]
//   medianAge = middle1+middle2
// }else{
//     medianAge =  ages[Math.floor(ages.length/2)]
// }
// const sumAges = ages.reduce((sum,age) => sum + age,0)
// const avgAge = sumAges / ages.length
// const ageRange = maxAge - minAge
// const minDiff = Math.abs(avgAge - minAge)
// const maxDiff = Math.abs(maxAge - avgAge)

// console.log("Sorted Ages :"+ages)
// console.log("Min Age :"+minAge)
// console.log("Max Age :"+maxAge)
// console.log("Median Age :"+medianAge)
// console.log("Average Age :" +avgAge)
// console.log("Age Range :"+ageRange)
// console.log("Max - Avg :"+maxDiff)
// console.log("Avg - Min :"+minDiff)

//Question 3

// const UserMap = new Map()
// UserMap.set("Rupak",{
//     age:"28",
//     email:"rupak@gmail.com",
//     location:"Howrah"
// })
// UserMap.set("Samanta",{
//     age:"26",
//     email:"rupak2@gmail.com",
//     location:"Kolkata"
// })
// UserMap.set("Puchu",{
//     age:"2",
//     email:"puchu@gmail.com",
//     location:"Howrah"
// })
// function getUsers(name) {
//     return UserMap.get(name)
// }
// console.log(getUsers("Puchu"))


//Question 4
// const person1 = {name:"Rupak", age:"28"}
// const person2 = {name:"Puchu", age:"2"}

// function introduce(person){
//     console.log(`Hello, I'm ${person.name}, and I'm ${person.age} yeas old.`)
// }
// introduce(person1)

//Question 5
// let uniqueNumbers = new Set([1,3,5,7,5,8,9,7,1,8]);

// let numbersqure = new Map();

// uniqueNumbers.forEach(numbers=>{
//     numbersqure.set(numbers,numbers*numbers)
// });
// //console.log(uniqueNumbers)
// //console.log(numbersqure)
// console.log("Unique Numbers")
// console.log(Array.from(uniqueNumbers).join(','))
// console.log('Unique Number Squre')
// numbersqure.forEach((squre,number) =>{
//     console.log(`Number : ${number} Squre : ${squre}`)
// })

//Question 6
// function displayInfo(name,role){
//     console.log(`Name : ${name} Role : ${role}`)
// }
// displayInfo.call(null,"Rupak","Developer")
// displayInfo.apply(null,["Rupak","Student"])

// function greet(){
//     console.log(`Hello, ${this.name}`)
// }
// const user = {name:"Samanta"}
// const boundGreet = greet.bind(user);
// boundGreet()

//Question 7
// const calculator = {
//     add:function(a,b){
//         return a + b;
//     },
//     substract:function(a,b){
//         return a - b;
//     },
//     multiply:function(a,b){
//         return a * b;
//     },
//     calculate: function(operation,a,b){
//         if(operation == 'add'){
//             return this.add(a,b);
//         }else if(operation == 'substract'){
//             return this.substract(a,b);
//         }else if(operation =='multiply'){
//             return this.multiply(a,b);
//         }
//     }
// }
// const additionresult = calculator.calculate.call(calculator,'add',5,10)
// console.log(`Addition Result ${additionresult}`)

// const substractionresult = calculator.calculate.call(calculator,'substract',5,10)
// console.log(`Subsctriction Result ${substractionresult}`)

// const multiplicationresult = calculator.calculate.call(calculator,'multiply',5,10)
// console.log(`Multiplication Result ${multiplicationresult}`)

// const discountcalculator = {
//     discountPersentage:10,
//     applyDiscount:function(amount){
//         return amount - (amount * this.discountPersentage)/100
//     },
// };

// const calculateDiscount = discountcalculator.applyDiscount.bind(discountcalculator)
// const dicount = calculateDiscount(100);
// console.log("Discount :"+dicount)




