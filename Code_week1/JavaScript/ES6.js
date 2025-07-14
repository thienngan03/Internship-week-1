
const person= {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
}

var test = function() {
    // let n1 =14;
    // const n2=12;

    // // arrow function
    // const sum =(n1,n2) => n1+n2;
    // console.log("Sum:", sum(n1, n2));
    // // object destructuring
    // console.log("Person Name:", person.name);

    // // array destructuring
    // const arr1 = [1, 2, 3, 4, 5];

    // // entries
    // for (const [index, value] of arr1.entries()) {
    //     console.log("entries"+`Index: ${index}, Value: ${value}`);
    // }
    // // spread operator
    // let min = Math.min(...arr1);
    // let max = Math.max(...arr1);
    // console.log("Min:", min, "Max:", max);
    // const arr2 = [6, 7, 8, 9, 10];
    // const mergedArray = [...arr1, ...arr2];
    // console.log("Merged Array:", mergedArray);

    // // for...of loop
    // for (num of mergedArray) {
    //     console.log("Number:", num);
    // }

    // // Maps
    // const map1 = new Map([
    //     ["name", "John"],
    //     ["age", 30],
    //     ["city", "New York"]
    // ]);
    // map1.set("name", "Alice");

    // // Sets
    // const set1 = new Set([1, 2, 3, 4, 5]);
    // set1.add(6);
    // set1.delete(3);
    // console.log("Set:", set1);

    // // class (not a object)
    // class Animal {
    //     constructor(name, age) {
    //         this.name = name;
    //         this.age = age;
    //     }
    //     speak() {
    //         console.log(`${this.name} makes a noise.`);
    //     }
    // }

    // const dog = new Animal("Dog", 5);
    // dog.speak();
    
    // // Promises
    // const promise = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve("Promise resolved!");
    //     }, 2000);
    // });
    // promise.then((message) => {
    //     console.log(message);
    // }).catch((error) => {
    //     console.error("Promise rejected:", error);
    // });
    // // Async/Await
    // const asyncFunction = async () => {
    //     try {
    //         const result = await promise;
    //         console.log("Async/Await Result:", result);
    //     } catch (error) {
    //         console.error("Async/Await Error:", error);
    //     }
    // };
    // asyncFunction();
    // // Symnol Type
    // const uniqueSymbol = Symbol("unique");

    // person[uniqueSymbol] = "This is a unique symbol property";
    // console.log("Symbol Property:", person[uniqueSymbol]);

    // // Default Parameters
    // function multiply(a, b = 1) {
    //     return a * b;
    // }   
    // console.log("Multiply:", multiply(5)); // 5 * 1 = 5

    // // rest parameters
    // function sumAll(...numbers) {
    //     return numbers.reduce((acc, num) => acc + num, 0); //reduce is used to sum all numbers
    // }
    // console.log("Sum All:", sumAll(1, 2, 3, 4, 5)); // 15

    // // string include
    // const str = "Hello, World!";
    // console.log("String includes 'World':", str.includes("World")); // true
    // // same with ".startsWith" & ".endsWith"

    // array.from()
    // let s = "Hello";
    // let arr = Array.from(s);
    // console.log("Array from string:", arr); // ['H', 'e', 'l', 'l', 'o']

    // // key()
    // let text ="";
    // for (let char of arr.keys()) {
    //     text += char + " "; // 0 1 2 3 4
    // }
    // console.log("Keys of array:", text.trim());

    // // find()
    // console.log("Find 'e' in array:", arr.find(char => char === 'e')); // 'e'

    // // Math.trnc()
    // let num = 5.67;
    // console.log("Truncated number:", Math.trunc(num)); // 5

    // Math.sign()
    console.log("Sign of -10:", Math.sign(-10)); // -1
    console.log("Sign of 0:", Math.sign(0)); // 0
    console.log("Sign of 10:", Math.sign(10)); // 1
    // Math.cbrt()
    console.log("Cube root of 27:", Math.cbrt(7)); // 3

    // Math.hypot()
    console.log("Hypotenuse of 3 and 4:", Math.hypot(3, 4)); // 5

    // Math.imul()
    console.log("Integer multiplication of 2 and 3:", Math.imul(2, 3)); // 6

    // isInteger()
    // isFinite()
    // isNaN()

    // import 
    // import { myFunction, num } from './myModule.js';
}

test();

