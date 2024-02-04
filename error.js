const fetchData = (url) =>{
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            if(Math.random() > 0.5){
                resolve("API Data success")
            }else{
                reject(new Error("Custom error"))
            }
        },1000)
    })
}

fetchData('url1')
    .then((res) => {console.log(res)})
    .catch((err) => { console.log(err)})