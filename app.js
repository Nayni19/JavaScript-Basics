// const rock= document.querySelector('#rock')
// console.log(rock);

// const paper= document.querySelector('#paper')
// console.log(paper);

// const scissor= document.querySelector('#scissor')
// console.log(scissor);

// Function
function logName(name = "Enter your Name"){
    console.log(name);
}
logName('Nayni Shah');

const add = (a=0, b=0) => {
    return a+b;
}
console.log(add(12,23));