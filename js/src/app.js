console.log("hello world");

var myNumber = 5;
var myFloatNumber = 3.5;

console.log(myNumber);
console.log(myFloatNumber);
console.log(typeof myFloatNumber);

var myBoolean = false; // false

console.log(myBoolean);
console.log(typeof myBoolean);

var myString = "Hello World!!";

console.log(myString);

var myObject = {
    id: 12,
    author: 'yeonwoo',
    title: "Test object",
    isMale: false,
    comments: {}
}; // Object literal

console.log(typeof myObject);
console.log(myObject);

console.group(myObject.comments);

var myArray = [12, 'kang', 'Good afternoon', 30, true, {}];

console.log(myArray[2]);

myObject.id = 13;
console.log(myObject);
