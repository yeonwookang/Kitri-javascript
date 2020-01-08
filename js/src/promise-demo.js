/*fetch('http://www.naver.com', function(res) {
    console.log(res);
});*/ // 비동기로 요청 -- 작동 X

fetch('http://localhost:8080').then(
    function(res) {
        console.log(res);
    }
).catch(function(err){
    console.log(err);
});

