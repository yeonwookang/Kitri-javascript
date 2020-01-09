// 변수로 선언하지 않으면 호이스팅됨
/*function sayHello(name) {
    return name + "님 안녕하세요.";
}

console.log(sayHello("강연우"));

var sayHello2 = (name) =>{
    return name + "님 안녕하세요!";
};

console.log(sayHello2("감면무"));


var adder = (a=0, b=0) =>{
    return a+b;
}

console.log(adder());
console.log(adder(3));
console.log(adder(3, 4));
console.log(adder(3, 4, 5));

var myObject = {
    id: 12,
    author: 'yeonwoo',
    title: "Test object",
    isMale: false,
    comments: {},
    like: 0,
    plusLike: function() {
        this.like++;
    }
}; // Object literal

myObject.plusLike();
myObject.plusLike();

console.log(myObject);



// 함수 추가
myObject.sleep = function() {};

function add(a) {
    console.log('hello', + a);
}*/


// 데이터를 앱내에서 처리하고자 할 때 사용
// 3가지 함수의 사용법을 먼저 숙지...
// map, filter, reduce

// 1. filter 작업
const sampleData = [23, 34, 65, 74, 64, 65 ,76];
const result = [];
for(let i = 0; i < sampleData.length; i++) {
    if(samleData[i] >= 50) {
        result.push(sampleData[i]);
    }
}

const functionResult = sampleData.filter(item => item >= 50);
//console.log(result);
for(let i = 0; i < sampleData.length; i++) {
    //console.log(result[i]);
}
//console.log(functionResult);

// 2. map 작업
const newResult = [];
for(let i = 0; i < sampleData.length; i++) {
    newResult.push(sampleData[i] * 2 - 3);
}