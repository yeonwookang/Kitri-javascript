var myObject = {
    id: 12,
    author: 'yeonwoo',
    title: "Test object",
    isMale: false,
    comments: {}
}; // Object literal

Object.keys(myObject).map(function (key) {
    return console.log(myObject[key]);
})

var myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.dir(myArr);

var myFunc = function(a, b) {
    console.dir(arguments);

    Array.prototype.push.apply(arguments, [500]);

    console.dir(arguments);
    return a + b;
};

console.dir(myFunc(23, 45, 65));