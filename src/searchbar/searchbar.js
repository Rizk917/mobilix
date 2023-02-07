fetch("Localhost:5000/phones")
.then(res => {
    if(res.ok){
        console.log("Success")
    } else{
        console.log("Not Successful")
    }
    })

.then(data => console.log(data))
.catch(error => console.log ('Error'))