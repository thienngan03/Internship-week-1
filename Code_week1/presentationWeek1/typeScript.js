var fName = "John";
var lName = "Doe";
var personObj = {
    "fName": fName, // shorthand property name
    lName: "Bing",
    fullName: function () {
        return "".concat(this.fName, " ").concat(this.lName);
    }
};
console.log(personObj["fName"]); // John
console.log(personObj); // John Bing
