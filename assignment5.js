//Question 1

 function sumAsync(a,b,callback){
    setTimeout(() => {
        const result = a+b
        callback(result)
    },1000)
 }

 sumAsync(5,3,(result) =>{
    console.log(result)
 });


//Question 2

function getData(){
    return new Promise((resolve) => {
        resolve("Data fetched successfully.");
    });
}

getData()
    .then((result) =>{
        console.log(result)
    });


//Question 3

async function fetchData(url){
    const response = await fetch(url)
    const data = await response.json()
    return data
}

fetchData('https://jsonplaceholder.typicode.com/todos/1').then((data) =>{
    console.log(data)
});


//Question 4

async function fetchData(url){
    const response = await fetch(url)
    const data = await response.json()
    return data
}

fetchData('https://jsonplaceholder.typicode.com/todos/1').then((data) =>{
    console.log(data)
})


//Question 5

function multiplyWithCallback(numbers,callback){
    const multiplied = numbers.map((num) => num * 2)
    callback(multiplied)
}

const numbers = [1,2,3,4,5]

multiplyWithCallback(numbers,(result) =>{
    console.log(result)
});


//Question 6

function fetchUserDataAndPosts(UserId){
    return fetch(`https://jsonplaceholder.typicode.com/users/${UserId}`)
        .then((response) => response.json())
        .then((userdata) =>{
            return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${UserId}`)
            .then((response) => response.json())
            .then((posts) =>({user:userdata,posts}));
        })

}

fetchUserDataAndPosts(1).then((result) =>{
    console.log(result)
});


//Question 7

function  fetchMultipleData(urls){
    const promises = urls.map((url) =>
        fetch(url).then((response) => response.json())
    );
    return Promise.all(promises);
}

const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3",
    "https://jsonplaceholder.typicode.com/todos/4"
];

fetchMultipleData(urls).then((response) =>{
    console.log(response);
})


//Question 8

function racePromises(promices){
    return Promise.race(promices)
}

const promise1 = new Promise((resolve) =>{
    setTimeout(() =>resolve("Promise 1 resolved"),1000)
})

const promise2 = new Promise((_,reject) =>{
    setTimeout(() =>reject("Promise 2 reject"),500)
})

racePromises([promise1,promise2])
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })

