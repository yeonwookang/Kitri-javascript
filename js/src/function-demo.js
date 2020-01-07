// 변수로 선언하지 않으면 호이스팅됨
function sayHello(name) {
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

