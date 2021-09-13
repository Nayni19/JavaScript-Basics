console.log("Merged Class 2 ES6");

let concert = true;

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

// attendConcert.then((data)=>console.log(data));
// attendConcert.catch((error)=>console.log(error));

attendConcert.then((data)=>console.log(data)).catch((error)=>console.log(error));

console.log("HI, I WON'T WAIT FOR ANYONE")
console.log("HI, I AM DYNING, I DON'T WANT TO WAIT")


// Arrow function
// let attendConcert = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (concert) {
//             resolve("BOB ATTENDED THE CONCERT");
//         }
//         else {
//             reject("BOB FAILED TO ATTEND THE CONCERT");
//         }
//     }, 2000);
// });

// console.log(attendConcert)