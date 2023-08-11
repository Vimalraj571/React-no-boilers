/* let,const,var */
let a = 10;
// console.log(a);

const b = 20;
// console.log(b);

// b = 30;

// console.log(c);
var c = 30;
// console.log(c);
/* End let,const,var */

/* Spread  */

/* End Spread */

/* Destructure */

/* End Destructure */

/* The ES6 Stuffs */

const tickets = [
  {
    id: 1,
    name: "one",
    address: "bangalore",
    fare: 40,
  },
  {
    id: 2,
    name: "two",
    address: "bombay",
    fare: 30,
  },
  {
    id: 3,
    name: "three",
    address: "chennai",
    fare: 20,
  },
  {
    id: 4,
    name: "four",
    address: "bangalore",
    fare: 10,
  },
];

// Apply given things to all the element
// console.log(tickets.map((note) => `<>${note.id}</>`));

// Returns the matched condition array
// console.log(tickets.filter((note) => note.address === "bangalore"));

// Returns Boolean Stuff
// console.log(tickets.some((note) => note.address === "bangalore"));

// Find first and return as json
// console.log(tickets.find((note) => note.address === "bangalore"));

// Accumulate the value Dead Simple example
// console.log(tickets.reduce((acc,next)=>{
//     acc = next.fare+acc
//     return acc
// },0))

// Removes the first one
// console.log(tickets.shift());

// Append to the array and return as newly created array
// console.log(tickets.concat({
//     id: 5,
//     name: "five",
//     address: "madurai",
//     fare:100
// }));

// Template Literals

// let testVariable = 10;
// let testName = "RajiniKanth";

// console.log(`This is testVariabl ${testVariable} and testName ${testName}`);

// Function as argument to another function is called callback
// function add(a, b) {
//   return a + b;
// }

// function main(callback) {
//   return callback(1, 2);
// }

// console.log(main(add));

// Callback Hell
// function parent(callback) {
//   function child1(callback) {
//     function child2(callback) {
//       callback(1, 2);
//     }
//   }
// }
// http://callbackhell.com/

// Place holder for the async task

const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Promise Resolved");
  }
  reject(new Error("This is error"));
});

// promise
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err))
//     .finally(()=>console.log("This is finally"))

// async/await

async function simpleTest() {
  try {
    let result = await promise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

// simpleTest();

// Arrow Function vs Normal Function

function test1() {
  console.log(arguments);
  console.log("test1");
}

test1("arg1", "arg2", 2, 1, 2);

const test2 = () => {
  console.log("test2");
};

const obj = {
  name: "sample Name",
  print: function () {
    console.log(this);
  },
};

obj.print();

const obj2 = {
  name: "sample Name",
  print: () => {
    console.log(this);
  },
};

obj2.print();

// Some limitations

// HOC - Higher Order Components

// .map 

// apply the given condition or any style to all the component

/* End ES6 Stuffs */
