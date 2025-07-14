var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a;
console.log("Hello world");
function greetPerson(name) {
    var greeting = "Hello";
    if (name === "Alice") {
        console.log("Hello Alice!");
    }
    else if (name === "Bob") {
        console.log("Hello Bob!");
    }
    else {
        console.log("Hello stranger!");
    }
}
function loop() {
    var _loop_1 = function (i) {
        setTimeout(function () {
            console.log("Iteration ".concat(i));
        }, 1000);
    };
    for (var i = 0; i < 5; i++) {
        _loop_1(i);
    }
}
// Aroow function
var add = function (a, b) {
    return (a + b).toString();
};
var arrow = function (m) { return 10 * m; };
var person = {
    name: "John",
    age: 30,
    greet: function () {
        console.log("Hello, my name is ".concat(this.name));
    },
    timeOut: function () {
        var self = this; // Capture 'this' in a variable
        setTimeout(function () {
            console.log("Hello, my name is ".concat(self.name));
        }, 1000);
    },
    greetArrow: function () {
        var _this = this;
        setTimeout(function () { return console.log("Hello, my name is ".concat(_this.name)); }, 1000);
    }
};
// // Default parameters in TypeScript
// let percentBonus=()=> 0.1;
// let getValue = function(value:  number = 10, bonus:number =10*percentBonus()): void {
//     console.log(value- bonus);
//     console.log(arguments.length); // This will log the number of arguments passed to the function
// }
// getValue();
// getValue(100,40);
// getValue(20);// This will use the default value for bonus
// Rest Operators (...args) : returns an array of arguments passed to the function
let displayColor = function(message: string, ...colors): void {
    console.log(message);
    for(let i of colors) {
        console.log(i);
    }
    // for(let i in colors) {
    //     console.log(colors[i]);
    // }
}
// let message = "Colors are: ";
// // displayColor(message,'Red');
// // displayColor(message,'Red', 'Green');
// // displayColor(message,'Red', 'Green', 'Blue');
// // Spread Operator (...array) : expands an array into individual elements
// let moreColors = ['Yellow', 'Pink', 'Purple']; // split an array into individual elements
// displayColor(message, ...moreColors);
// objects
var fName = "John";
var lName = "Doe";
var personObj = {
    "fName": fName, // shorthand property name
    lName: "Bing",
    fullName: function () {
        return "".concat(this.fName, " ").concat(this.lName);
    }
};
// console.log(personObj["fName"]); // John
// console.log(personObj); // John Bing
function createPerson(firstName, lastName, age) {
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: function () {
            return "".concat(this.firstName, " ").concat(this.lastName);
        },
        isSenior: function () {
            return age > 60;
        }
    };
}
// let person1 = createPerson("Alice", "Smith", 65);
// console.log(person1.fullName()); // Alice Smith
// console.log("is Senior:"+person1.isSenior()); // true
// destructuring array & objects
var numbers = [1, 2, 3, 4, 5];
var first = numbers[0], second = numbers[1], rest = numbers.slice(2); // first = 1, second = 2, rest = [3, 4, 5]
var employee = {
    fName: "John",
    lName: "Doe",
    age: 30,
    gender: "Male",
};
var firstName = employee.fName, lastName = employee.lName, otherDetails = __rest(employee, ["fName", "lName"]); // firstName = "John", lastName = "Doe", otherDetails
// class
// class Animal{
//     constructor(name: String){
//         this.name = name;
//         console.log(`Animal created: ${this.name}`);
//     }
//     static staticMethod(){
//         console.log("This is a static method");
//     }
//     instanceMethod(){
//         console.log(`This is an instance method for ${this.name}`);
//     }
//     getAge(){
//        return 5; // Example method to get age
//     }
// };
// let dog = new Animal("Lu");
// dog.constructor;
// Animal.staticMethod(); // This is a static method
// dog.instanceMethod(); // This is an instance method for Lu
// class Fish extends Animal{
//     constructor(name : String, type: String){
//         super(name); // Call the parent class constructor       
//     }
//     getAge() {
//         let age =super.getAge();
//         console.log(age)// Example method to get age
//     }
// }
// let smallFish = new Fish("Nemo", "Clownfish");
// smallFish.constructor;
// smallFish.getAge();
//  Map and Set
// let mySet = Object.create(null);
// mySet.id = 1;
// if(mySet.id) {
//     console.log("id exists");
// }
// let myMap = Object.create(null);
// myMap.name = "John";
// console.log(myMap.name); // John
// myMap[100] = "Hundred";
// console.log(myMap["100"]); // Hundred
// let ob1 ={};
// let ob2 ={};
// myMap[ob2] = "Object 2";
// console.log(myMap[ob1]);
// console.log(ob1.toString()); // [object Object]
// console.log(ob2.toString()); // Object 2
// let mySet = new Set();
// mySet.add("hello");
// mySet.add(42);
// mySet.add(42);
// mySet.add(ob1);
// mySet.add(ob2);
// console.log(mySet);
// let chainSet = new Set().add("hello").add("world");
// // console.log(chainSet);
// let newSet = new Set([1, 2, 3, 4, 5]);
// newSet.delete(2);
// let key =null;
// newSet.add(key);
// // console.log(newSet);
// // key = [...newSet][0]; // Get the first element
// // console.log(key); // 1
// let weakSet = new WeakSet();
// let key = {};
// weakSet.add(key);
// // console.log(weakSet.has(key)); // true
// // console.log(weakSet);
var ob1 = {};
var ob2 = {};
var myMap = new Map();
myMap.set("name", "John");
myMap.set(100, "Hundred");
myMap.set(ob1, "Object 1");
myMap.set("age", 30);
// console.log(myMap); 
// console.log(myMap.get("name")); // John
// Symbols // Symbols are unique and immutable data types introduced in ES6
// 
var s = Symbol("id");
// console.log(typeof s); // symbol
// console.log(s.toString()); // Symbol(id)
var s2 = Symbol("id"); // same result when s2, s3 =Symbol();
var s3 = Symbol("id");
// if(s2 === s3) {
//     console.log("s2 and s3 are equal");
// } else {
//     console.log("s2 and s3 are not equal"); // This will be printed
// }
var s4 = Symbol.for("id"); // This will create a global symbol
var s5 = Symbol.for("id"); // This will return the same symbol as s4
// if(s4 === s5) {
//     console.log("s4 and s5 are equal"); // This will be printed
// }
// console.log(Symbol.keyFor(s4)); // id
var fname = Symbol();
var personSymbol = (_a = {},
    _a[fname] = "John",
    _a);
// console.log(personSymbol[fname]); // John
// console.log(Object.getOwnPropertySymbols(personSymbol)); // [ Symbol() ]
// let iterable =[1,2];
// function createIterator(array: number[]) {
//     let count =0;
//     return{
//         next: function() {
//             return count < array.length ?
//             {value:array[count++], done: false} :
//             {value: undefined, done: true};
//         }
//     }
// }
// let myIterator = createIterator(iterable);
// console.log(myIterator.next());
// console.log(myIterator.next()); // { value: 1, done: false }
// console.log(myIterator.next()); // { value: 1, done: false }
