console.log("Operators in JavaScript");
// Assignment Operators // gán giá trị
let x =10; 
let y = 5;
// Arithmetic Operators // Toán tử số học// +,-,*,/,%,++,--
console.log(x%y);
// Comparison Operators
console.log(x > y);
console.log(x !== y);
// Logical Operators
console.log(x>y && x!=y);
// String Operators
console.log("Hello " + "World!"); // Concatenation //kết nối 

// Other Operators
// conditional (ternary) operator
let result = (x > y) ? "x is greater than y" : "x is not greater than y";
console.log(result); // "x is greater than y"
// Bitwise Operators
console.log(x & y); // Bitwise AND
console.log(x | y); // Bitwise OR

console.log("Type Conversion in JavaScript");
//  Type Conversion
// Implicit Conversion // JavaScript tự động chuyển đổi kiểu dữ liệu
console.log("5" + 10); // "510" (string concatenation) // "+"operator thực hiện nối chuỗi
console.log("5" - 10); // -5 (string to number conversion)
console.log("5" * "2"); // 10 (string to number conversion)
console.log("text1" / "text2"); // NaN (not a number, invalid operation)
console.log(true + 1); // 2 (boolean to number conversion)
console.log(null + 1); // 1 (null to number conversion, null is treated as 0)
console.log(undefined + 1); // NaN (undefined is not a number)
// Explicit Conversion // Chuyển đổi kiểu dữ liệu bằng tay
console.log(Number("5")); // 5 (string to number conversion)
console.log(parseInt("5")); // 5 (string to integer conversion)
console.log(parseFloat("5.5")); // 5.5 (string to float conversion)
console.log(parseInt("5.5")); // 5 (string to integer conversion, truncates decimal)
console.log(String(5)); // "5" (number to string conversion)
console.log((500).toString());
console.log(Boolean(1)); // true (number to boolean conversion, non-zero number is true)
console.log(Boolean(0)); // false (number to boolean conversion, zero is false)

console.log("Equality in JavaScript");
// Equality
const var1 = 5;
const var2 = "5";
const var3 = null;
const var4 = undefined;
// == (loose equality) // so sánh giá trị, không so sánh kiểu dữ liệu
console.log(var1 == var2); 
console.log(var3 == var4); // true, null và undefined được coi là bằng nhau
// === (strict equality) // so sánh giá trị và kiểu dữ liệu
console.log(var1 === var2); 

//Conditional Statements
console.log("Conditinal Statements in JavaScript");
// if, else if, else
if(var1 > 10) {
    console.log("var1 is greater than 10");
} else if(var1 < 10) {
    console.log("var1 is less than 10");
}  else {
    console.log("var1 is equal to 10");
}
// switch
const day = "1";
switch(day) {
    case 1:
        console.log("Monday");
        break; 
    case 2:
        console.log("Tuesday");
        break;  
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
        break;
}

//loop
// for loop
for(let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}
let arr = [1, 2, 3, 4, 5];
for(const num of arr) {
    console.log("Value: " + num);
}
for(let i in arr){
     console.log("Value: " +arr[i]);
}
arr.forEach(arrFunction);
function arrFunction(value, index, array) {
    console.log("Value: " + value + ", Index: " + index);
}
let letters = "abcde";
for(let letter of letters) {
    console.log("Letter: " + letter); // "a", "b", "c", "d", "e"
}

// while loop
let i = 0;
while (i < 5) {
    console.log("Iteration: " + i);
    i++;
}
// do while loop
do {
    console.log("Iteration: " + i);
    i++;
} while (i < 5);

// Functions
console.log("Functions in JavaScript");
//Function Declaration //  Khai báo hàm
function greet(name) {
    console.log("Hello, " + name + "!") ;
}
greet("Alice"); 
// Function Expression // Biểu thức hàm
const greetExpression = function(name) {
    console.log("Hello, " + name + "!");
}
greetExpression("Bob");
// Arrow Function // Hàm mũi tên
const greetArrow =(name) => {
    console.log("Hello, " + name + "!");
}
greetArrow("Charlie");

// Scope // Phạm vi
console.log("Scope in JavaScript");
//  Global Scope
let globalVar = "I am a global variable"; // Biến toàn cục
function globalFunction() {
    let variable = "I am a local variable"; // Biến cục bộ
    console.log(variable); // Có thể truy cập biến cục bộ
    console.log(globalVar); // Có thể truy cập biến toàn cục
}
globalFunction();
// Local Scope
if(true) {
    let variable = "I am a local variable 1"; // Biến cục bộ
    let localVar = "I am a local variable 2"; // Biến cục bộ
    console.log(localVar , variable); // Có thể truy cập biến cục bộ
}
// Block Scope // variables declared inside a block (e.g., inside curly braces) are not accessible outside that block
for(let i = 0; i < 3; i++) {
    let blockVar = "I am a block variable"; // Biến khối
    console.log(blockVar); // Có thể truy cập biến khối
}
// Nested Scope
let outerVar = "I am an outer variable"; // Biến ngoài
function outerFunction() {
    let innerVar = "I am an inner variable"; // Biến trong
    function innerFunction() {
        let innerVar2 = "I am a nested inner variable"; // Biến lồng
        console.log(outerVar); // Có thể truy cập biến ngoài
        console.log(innerVar); // Có thể truy cập biến trong
        console.log(innerVar2); // Có thể truy cập biến lồng}
    }
    innerFunction();
}
outerFunction();

// Closure // Closure là một hàm có thể truy cập biến từ phạm vi bên ngoài của nó,
 //ngay cả khi phạm vi bên ngoài đã kết thúc.
console.log("Closure in JavaScript");
function outer(){
    let count =0;
    function inner() {
        count++;
        console.log("Count: " + count);
    }
    return inner;
}
const fn = outer();
fn(); 
fn();

// Currying
console.log("Currying in JavaScript");
function curry(fn){
    return function(a){
        return function(b){
            return function(c){
                return fn(a, b, c);
            }
        }
    }
}
function add(a, b,c) {
    return a + b+c;
}
const curlyAdd = curry(add);
const add1 = curlyAdd(1);
const add2 = add1(2);
const add3 = add2(3);
console.log(add3);

// This Keyword
// console.log("This Keyword in JavaScript");
function showName(name) {
    console.log(`my name is ${name}`);
}
showName('John Doe');
const person = {
    name: "Alice",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
globalThis.name  = "Global Name"; // Set a global name for demonstration 
function greet() {
    console.log(`Hello, my name is ${this.name}`);
}
greet(); 
greet.call(person); 
// sayMyName.apply(person); 

// prototype
// console.log("Prototype in JavaScript");
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person1 = new Person("Alice", 30);

Person.prototype.greet = function() {
    return `${this.name} is ${this.age} years old`;
}
console.log(person1.greet()); 

// // Inheritance
// // console.log("Inheritance in JavaScript");
// function Animal(name) {
//     this.name = name;
// }
// Animal.prototype.speak = function() {
//     console.log(`${this.name} makes a noise.`);
// };
// Dog.prototype = Object.create(Animal.prototype); // Inherit from Animal
// function Dog(name) {
//     Animal.call(this, name); // Call the parent constructor
// }
// Dog.prototype.eat = function() {
//     console.log(`${this.name} is eating.`);
// };
// const dog = new Dog("Buddy");
// console.log(dog.name);
// dog.speak(); // "Buddy makes a noise."
// dog.eat(); // "Buddy is eating."

// Classses
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}
const dog2 = new Animal("Generic Animal");
console.log(dog2.name); // "Generic Animal"
dog2.speak(); // "Generic Animal makes a noise."
class Dog extends Animal {
    constructor(name) {
        super(name); // Call the parent constructor
    }
    eat(){
        console.log(`${this.name} is eating.`);
    }
}
const myDog = new Dog("Buddy");
console.log(myDog.name); // "Buddy"
myDog.speak(); // "Buddy makes a noise."
myDog.eat(); // "Buddy is eating."



