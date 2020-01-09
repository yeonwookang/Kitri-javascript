// 1. filter 작업
const sampleData = [23, 34, 65, 74, 64, 65 ,76];
const result = [];
for(let i = 0; i < sampleData.length; i++) {
    if(sampleData[i] >= 50) {
        result.push(sampleData[i]);
    }
}

const functionResult = sampleData.filter(item => item >= 50);
console.log(result);
console.log(functionResult);

// 2. map 작업
const newResult = [];
for(let i = 0; i < sampleData.length; i++) {
    newResult.push(sampleData[i] * 2 - 3);
}
const mapResult = sampleData.map(item=>item*2-3);
console.log(newResult);
console.log(mapResult);

// 3. reducing 작업
const sum = sampleData.reduce((a,b)=> a+b);
console.log(sum);

const pipeline = sampleData.filter(item => item >=50)
.map(item => item * 2 - 3)
.reduce((a,b)=>a+b,0);
console.log(pipeline);