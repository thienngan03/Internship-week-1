
console.log("Hello world");

function greetPerson(name){
    var greeting = "Hello";
    if(name === "Alice") {
        console.log("Hello Alice!");
    }
    else if(name === "Bob") {
        console.log("Hello Bob!");
    }
    else {
        console.log("Hello stranger!");
    }
}
function loop(){
    for(let i = 0; i < 5; i++) {
        setTimeout(function(){
            console.log(`Iteration ${i}`);
        },1000);

    }
}
// Aroow function
const add = (a: number, b: number): String =>{
    return (a + b ).toString();
}
const arrow = (m: number) =>10*m;

var person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    },
    timeOut: function() {
        var self = this; // Capture 'this' in a variable
        setTimeout(function() {         
            console.log(`Hello, my name is ${self.name}`);
        }, 1000);
    },
    greetArrow: function() {
        setTimeout(() => console.log(`Hello, my name is ${this.name}`), 1000);
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

// // Rest Operators (...args) : returns an array of arguments passed to the function
// let displayColor = function(message: string, ...colors): void {
//     console.log(message);
//     for(let i of colors) {
//         console.log(i);
//     }
//     // for(let i in colors) {
//     //     console.log(colors[i]);
//     // }
// }
// let message = "Colors are: ";
// // displayColor(message,'Red');
// // displayColor(message,'Red', 'Green');
// // displayColor(message,'Red', 'Green', 'Blue');

// // Spread Operator (...array) : expands an array into individual elements
// let moreColors = ['Yellow', 'Pink', 'Purple']; // split an array into individual elements
// displayColor(message, ...moreColors);

// objects
let fName = "John";
let lName = "Doe";
let personObj = {
    "fName": fName, // shorthand property name
    lName : "Bing",
    fullName() {
        return `${this.fName} ${this.lName}`;
    }
};
// console.log(personObj["fName"]); // John
// console.log(personObj); // John Bing

function createPerson(firstName: string, lastName: string,age: number) {
    return {
        firstName,
        lastName,
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
        isSenior() {
            return age > 60;
        }
    };
}
// let person1 = createPerson("Alice", "Smith", 65);
// console.log(person1.fullName()); // Alice Smith
// console.log("is Senior:"+person1.isSenior()); // true

// destructuring array & objects
let numbers = [1, 2, 3, 4, 5];
let [first, second, ...rest] = numbers; // first = 1, second = 2, rest = [3, 4, 5]
let employee= {
    fName: "John",
    lName: "Doe",
    age: 30,
    gender: "Male",
};
let { fName: firstName, lName: lastName, ...otherDetails } = employee; // firstName = "John", lastName = "Doe", otherDetails


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


let ob1 ={};
let ob2 ={};
let myMap = new Map();
myMap.set("name", "John");
myMap.set(100, "Hundred");
myMap.set(ob1, "Object 1");
myMap.set("age",30);
// console.log(myMap); 
// console.log(myMap.get("name")); // John

// Symbols // Symbols are unique and immutable data types introduced in ES6
// 
let s = Symbol("id");
// console.log(typeof s); // symbol
// console.log(s.toString()); // Symbol(id)

let s2 = Symbol("id");  // same result when s2, s3 =Symbol();
let s3 = Symbol("id");

// if(s2 === s3) {
//     console.log("s2 and s3 are equal");
// } else {
//     console.log("s2 and s3 are not equal"); // This will be printed
// }

let s4 = Symbol.for("id"); // This will create a global symbol
let s5 = Symbol.for("id"); // This will return the same symbol as s4

// if(s4 === s5) {
//     console.log("s4 and s5 are equal"); // This will be printed
// }
// console.log(Symbol.keyFor(s4)); // id

let fname = Symbol();
let personSymbol = {
    [fname]: "John",
}
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

