/*fetch('http://www.naver.com', function(res) {
    console.log(res);
});*/ // 비동기로 요청 -- 작동 X

fetch('http://www.naver.com').then(
    function(res) {
        console.log(res);
    }
).catch(function(err){
    console.log(err);
});

