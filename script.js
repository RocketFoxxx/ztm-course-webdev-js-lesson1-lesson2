// // // For all of these, what is the value of a when the function gets called with the alert()
// // // #1
// // function q1() {
// //     var a = 5;
// //     if(a > 1) {
// //         a = 3;
// //     }
// //     alert(a); //3
// // }

// // //#2
// // var a = 0;
// // function q2() {
// //     a = 5;
// // }

// // function q22() {
// //     alert(a); //5
// // }


// // //#3
// // function q3() {
// //     window.a = "hello"; //a = hello
// // }


// // function q32() {
// //     alert(a); //hello
// // }

// // //#4
// // var a = 1;
// // function q4() {
// //     var a = "test";
// //     alert(a); //test
// // }

// // //#5
// // var a = 2;   //5, 5 
// // if (true) {
// //     var a = 5;
// //     alert(a);
// // }
// // alert(a);


// // ternary operator
// function isUserValid(bool) {
//     return bool;
// }

// var user1 = isUserValid(true) ? "You may enter." : "Access denied.";

// // switch
// function moveCommand(direction) {
//     var whatHappens;
//     switch (direction) {
//         case "forward":
//             whatHappens = "You encounter a monster";
//             break;
//         case "right":
//             whatHappens = "You returned home";
//             break;
//         case "back":
//             whatHappens = "You found a sword";
//             break;
//         case "left":
//             whatHappens = "You meet an adventurer";
//             break;
//         default:
//             whatHappens = "Please enter a correct move.";
//     }
//     return whatHappens;
// }
// function winBattle(bool) {
//     return bool;
// }

// //#1 change this function into a ternary and assign it to variable called experiencePoints
// function experiencePoints(battle) {
//     var experiencePoints;
//     battle = winBattle(true) ? experiencePoints="You may enter." : experiencePoints="Access denied.";
//     return experiencePoints;
// }

// //Using this function, answer the questions below:
// function moveCommand(direction) {
//     var whatHappens;
//     switch (direction) {
//         case "forward":
//             break;
//             whatHappens = "you encounter a monster";
//         case "back":
//             whatHappens = "you arrived home";
//             break;
//             break;
//         case "right":
//             return whatHappens = "you found a river";
//             break;
//         case "left":
//             break;
//             whatHappens = "you run into a troll";
//             break;
//         default:
//             whatHappens = "please enter a valid direction";
//     }
//     return whatHappens;
// }

// //#2 return value when moveCommand("forward");

// //#3 return value when moveCommand("back");

// //#4 return value when moveCommand("right");

// //#5 return value when moveCommand("left");

// //BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

// // change everything below to the newer Javascript!

// // let + const
// let a = 'test';
// const b = true;
// const c = 789;
// let a = 'test2';


// // Destructuring
// var person = {
//     firstName : "John",
//     lastName  : "Doe",
//     age       : 50,
//     eyeColor  : "blue"
// };

// //new syntax
// const { firstName, lastName, age, eyeColor } = person;

// console.log(firstName);
// console.log(age);

// // old syntx
// var firstName = person.firstName;
// var lastName = person.lastName;
// var age = person.age;
// var eyeColor = person.eyeColor;


// // Object properties
// var a = 'test';
// var b = true;
// var c = 789;

// var okObj = {
//   a: a,
//   b: b,
//   c: c
// };

// let city = "London";

// // Template strings
// var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
// //new
// const message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no??`


// // default arguments
// // default age to 10;
// function isValidAge(age=10) {
//     return age
// }

// // Symbol
// // Create a symbol: "This is my first Symbol"

// let a = Symbol("This is my first Symbol");

// // Arrow functions
// function whereAmI(username, location) {
//     if (username && location) {
//         return "I am not lost";
//     } else {
//         return "I am totally lost!";
//     }
// }
// let username = "lauris";

// const userLoc = (username, location) => {
//     if (username && location) {
//         return "I am not lost!";
//     } else {
//         return "I am totally lost!"
//     }
// }

// const first = () => {
//     const hello = "Hi!";
//     const second = () => {
//         alert(hello);
//     }
//     return second;
// }

// const newFunc = first();
// newFunc();

// const curriedFunc = (a) => (b) => a * b;
// //curriedFunc(5)(10);
// //50
// //closures, currying, compose, determinism

// //Solve these problems:

// //#1 Create a one line function that adds adds two parameters

// //Closure: What does the last line return?
// const addTo = x => y => x + y
// var addToTen = addTo(10)
// addToTen(3) //13

// //Currying: What does the last line return?
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// curriedSum(30)(1) //31


// //Currying: What does the last line return?
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5)
// add5(12) //17

// //Composing: What does the last line return?
// const compose = (f, g) => (a) => f(g(a));
// const add1 = (num) => num + 1;
// const add5 = (num) => num + 5;
// compose(add1, add5)(10) //16

// //What are the two elements of a pure function?
// //no side effects, same value even after 1000 loops

// const array = [1, 3, 5, 10];
// const double = [];
// //newArray is undefiened
// const newArray = array.forEach(num => {
//     double.push(num * 2);
// })

// //map, filter, reduce
// //map, mapArray gets updated after each loop
// const mapArray = array.map(num => num * 2);

// //filter
// const filterArray = array.filter(num => num > 5);

// //reduce
// const reduceArray = array.reduce((accumulator, num) => {
//     return accumulator + num;
// }, 100) //100 is from what value does accumulator have

// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const newArrayUsernames = [];
const newArray = array.forEach((user) => {
    newArrayUsernames.push(user.username + "!");
})

//Create an array using map that has all the usernames with a "? to each of the usernames
const arrayMapUsernames = array.map(user => user.username + "?");

//Filter the array to only include users who are on team: red
const arrayFilterTeam = array.filter(user => {
    return user.team === "red";
})

//Find out the total score of all users using reduce
const arrayReduceScore = array.reduce((acc, user) => {
    return acc + user.score;
}, 0) //btw not array

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map(num => num * 2);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const arrayMapItems = array.map((user, i) => {
    let leng = user.items.length;
    const tempArray = [];
    console.log(leng);
    for (let it=0; it < leng; it++){
        tempArray.push(user.items[it] + "!");
        console.log(tempArray);
    }
    console.log(i);
    array[i].items = tempArray;
    return tempArray;
});
