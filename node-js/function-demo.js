const myArr = [1, 2, 3];

const myArr2 = [4, 5, 6];

// 펼쳐서 넣음
myArr.push(...myArr2);

console.log(myArr);

const myFunc = function(a, b) {
    return a+b;
}

const myFunc2 = (a, b) => {
    return a+b;
}