console.log("Merged Class 2 ES6");

let ranks = [1, 2, 3, 4, 5 ,6];

let newfilterarr = ranks.filter((e, index) => {
    console.log(e)
    if(e%2===0)
        return e
})
console.log(newfilterarr);