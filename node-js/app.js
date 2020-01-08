// 전형적인 동기식 파일 읽기
/*var fs = require('fs');
var content = fs.readFile('./test/txt', 'UTF-8');
console.log(content);*/

// 자바스크립트는 비동기가 기본이다.
const fs = require('fs');
fs.readFile('./test.txt', 'utf-8', function(err, content) {
    if (err) {
        console.log(err);
    } else {       
    console.log(content);
    }
});
// end of program 이 먼저 출력되는 이유
// 파일을 읽는데 시간이 걸리므로 아래의 것 먼저 실행
// I/O non-blocking and async 특징
console.log('end of program');