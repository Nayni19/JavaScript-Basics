// var --> global scope
// let --> local scope

// for (let i = 0; i<=10; i++){
//     console.log('iteration ' + i);
// }

// let a = 1
// while ( a < 10 ){
//     console.log(a)
//     a++
// }

const balls = document.getElementsByClassName('ball')
console.log(balls);
const body = document.querySelector('body')

const arr = [1,2,3,4,5]
arr.push(6)
console.log(arr);
while (arr.length<10){
    for(i=6; i<20; i++){
        arr.push(i)
    }
}
arr.splice(2,5)
console.log(arr);

arr.forEach((element)=> {
    console.log("Iteration");
    console.log(element);
})