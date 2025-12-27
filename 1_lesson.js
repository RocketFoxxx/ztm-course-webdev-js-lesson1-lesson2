/* // 
JAVASCRIPT TYPES
-----------------
1. Number 
2. String
3. Boolean
4. Undefined
5. Null
<!-- 6. Symbol (new in ECMAScript 6) -->
7. Object

JAVASCRIPT COMPARISONS
-----------------

!==
===
>=
<=
>
<

JAVASCRIPT VARIABLES
-----------------
var
<!-- let (new in ECMAScript 6)-->  
<!-- const (new in ECMAScript 6)-->

JAVASCRIPT CONDITIONALS
-----------------
if
else
else if
<!-- ternary operator -->
<!-- switch -->


JAVASCRIPT LOGICAL OPERATORS
-----------------
&&
||
!

JAVASCRIPT FUNCTIONS
-----------------
var a = function name() {}
function name() {}
return
<!-- () => (new in ECMAScript 6) -->

JAVASCRIPT DATA STRUCTURES
-----------------
Array
Object

JAVASCRIPT LOOPING
-----------------
for
while
do 
forEach (new in ECMAScript 5) 


JAVASCRIPT KEYWORDS
-----------------
break
case
catch
class
const
continue
debugger
default
delete
do
else
export
extends
finally
for
function
if
import
in
instanceof
new
return
super
switch
this
throw
try
typeof
var
void
while
with
yield
// */
/* 
5 + "34" // "534"
5 - "4" // 1
10 % 5 // 0
5 % 10 // 5
"Java" + "Script" // "JavaScript"
" " + " " //  "  "
" " + 0 //  " 0"
true + true // 2
true + false // 1
false + true //  1
false - true //  -1
3 - 4 //  -1
"Bob" - "bill" // NAN


5 >= 1 // true
0 === 1 //  false
4 <= 1 //  false
1 != 1 //  false
"A" > "B" //  false
"B" < "C" //  true
"a" > "A" //  true
"b" < "A" //  false
true === false //  false
true != true // false


// Make the string: "HI There! It's sunny out" by using the + sign.
"Hi There! " + "It\'s \"sunny\" out" */
console.log("Hi There! " + "It\'s \"sunny\" out");

console.log("a");
console.log("a");
let a = 5;
let b = 10;
console.log(a + b, b - a, a * 10 - b);

function sayHello() {
    console.log("Hello world!");
}

sayHello();

/*var age = Number(prompt("Enter your age: "));*/
var age = 18;
if (age < 18) {
    console.log("Sorry, you are too young to drive this car. Powering off");
} else if (age === 18) {
    console.log("Congratulations on your first year of driving. Enjoy the ride!");
} else {
    console.log("Powering On. Enjoy the ride!");
}

function ageCheck(age) {
    if (age < 18) {
        console.log("Sorry, you are too young to drive this car. Powering off");
    }
    else if (age === 18) {
        console.log("Congratulations on your first year of driving. Enjoy the ride!");
    }
    else {
        console.log("Powering On. Enjoy the ride!");
    }
}

ageCheck(11);
ageCheck(18);
ageCheck(22);

var checkDriverAge2 = function(age) {
    if (age < 18) {
        console.log("Sorry, you are too young to drive this car. Powering off");
    }
    else if (age === 18) {
        console.log("Congratulations on your first year of driving. Enjoy the ride!");
    }
    else {
        console.log("Powering On. Enjoy the ride!");
    }
}

checkDriverAge2(2)
checkDriverAge2(22)

// anonymus func, bc no name 
var sayBye = function () {
    console.log("Bye!");
}

sayBye();

function sumAB(a, b) {
    return a + b;
}

sumAB(10, 20);

var ab = sumAB(10, 100);

console.log(ab);

var animals = ["tiger", "bird", "cat", "whale"];
console.log(animals[1]);

var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove the Banana from the array.
array.shift();
console.log(array);

// 2. Sort the array in order.
array.sort()
console.log(array);

// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi");
console.log(array);

// 4. Remove "Apples" from the array.
array.shift();
console.log(array);

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
array.reverse();
console.log(array);

// you should have at the end:
// ["Kiwi", "Oranges", "Blueberries"]

// using this array,
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
console.log(array2[1][1]);

// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
var users = {
    username: "Lauris",
    password: "1234",
};

// 2. Create an array which contains the object you have made above and name the array "database".
var database = [
    {username: "Lauris",
    password: "1234"
    }
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
    {
    username: "A",
    timelime: "I am fine!"
    }, 
    {
    username: "B",
    timelime: "Hey"
    },
    {
    username: "C",
    timelime: "That's awesome!"
    },
];

var todos = [
    "wash teeth",
    "gym",
    "learn js",
    "eat spaghetti",
    "sleep 8h"
];
var newtodos = [];
for (var i=0; i < todos.length; i++) {
    // var todo = todos[i];
    // todo = todo + "!";
    // newtodos.push(todo);

    // todos[i] = todos[i] + "!";
}

console.log(todos);

todos.forEach(function(y, i) {
    console.log(y, i, "!");
})