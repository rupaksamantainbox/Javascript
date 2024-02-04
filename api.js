// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(data => console.log(data))



// async function getData(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/tod');
//         const data = await response.json();
//         console.log(data)
//     }
//     catch(error){
//         console.log(JSON.stringify(error))
//     }
//     finally{
//         console.log("End")
//     }
// }
// getData()

fetch('https://api.example.com/data',
    {
        method: 'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({key:'value'})
    })
    .then(response => {
        console.log(response.json())
    })
    .catch(error =>{
        console.log(JSON.stringify(error))

    })