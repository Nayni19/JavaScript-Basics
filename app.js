console.log("Merged Class 2 ES6");

let concert = false;

let attendConcert = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (concert) {
            resolve("BOB ATTENDED THE CONCERT");
        }
        else {
            reject("BOB FAILED TO ATTEND THE CONCERT");
        }
    }, 2000);
});
console.log(attendConcert)

// attendConcert.then((data)=>console.log(data)).catch((error)=>console.log(error));

async function afunc(){
  try{
    let result = await attendConcert;
    console.log(result);
    return result;
  }
  catch(e){
    console.log(e);
  }
  
}
console.log("afunc",afunc());