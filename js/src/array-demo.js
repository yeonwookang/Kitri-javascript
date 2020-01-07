var myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

myArr.length = 15;

console.log(myArr[14]);

console.dir(myArr);

myArr.push(66);

console.dir(myArr);

var arr = ["test", 1234, true, {}];

arr.forEach(function (item) {
    console.log(item + 'from foreach');
});


// 각각의 항목에 3을 더하는 방법 map
var mapTest = [1, 2, 3, 4];

var mapTest2 = mapTest.map(function(item) {
    return item + 3;
});

console.dir(mapTest2);

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