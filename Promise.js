Promise

const prommise =new Promise ((resolve, reject) =>
{
    setTimeout(() => {
        reject("data not found something went wrong");
    }, 2000);
});

Promise
.then((result) =>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
});