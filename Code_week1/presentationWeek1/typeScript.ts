let fName = "John";
let lName = "Doe";
let personObj = {
    "fName": fName, // shorthand property name
    lName : "Bing",
    fullName() {
        return `${this.fName} ${this.lName}`;
    }
};
console.log(personObj["fName"]); // John
console.log(personObj); // John Bing