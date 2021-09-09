console.log("ES6 Class 1");

var arr = [1, 2, 3, 4];
console.log(arr[2]);

var [one, two, three, four, five] = arr; //ES6 Destructuring
console.log(three);
console.log(four);
console.log(five);

function getscores() {
  return [90, 100];
}

let [x, y, z] = getscores();
console.log(x);
console.log(y);
console.log(z);

const obj = {
  fullname: "Nayni Shah",
  email: "naynishah6@gmail.com",
  age: 20,
};

console.log(obj.email);

let { dum, age, email, fullname } = obj;
console.log(fullname);
console.log(dum);

let person = {
  firstname: "Nayni",
  lastname: "Shah",
  age1: 20,
  middlename: "Nimesh",
};
let { age1, firstname, lastname, middlename = "" } = person;
console.log(age1);
console.log(firstname);
console.log(lastname);
console.log(middlename);

// function add(x, y) {
//     return x+y;
// }
// console.log(add(10, 20));

// let add = function(x,y) {
//     return x+y;
// }
// console.log(add(10,20))

let add = (x, y) => {
  return x + y;
};
console.log(add(10, 20));


const counter = {
    count: 1,
    next: function() {
        return ++(this.count);
    },
    key: this,
    // Arrow function doesnt have this value
    // back: () => {
    //     return --(this.count);
    // }
    back: function() {
        return --(this.count);
    }
}
console.log(counter);
console.log(counter.back());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter);