console.log("Merged Class 2 ES6");

let ranks = [1, 2, 3, 4, 5 ,6];

console.log(
  ranks.map((e, index) => {
    return e * 100;
  })
);

console.log(
  ranks.forEach((e, index) => {
    console.log(e*100);
    return e * 100;
  })
);

let newmaparr = ranks.map((e, index) => {
    console.log(e)
    if(e%2===0)
        return e
})
console.log(newmaparr);