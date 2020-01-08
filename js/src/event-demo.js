var btn = document.getElementById('btn');
var content = document.getElementsByTagName('h1')[0].textContent;

console.log(content);

btn.onclick = function () {
    document.getElementsByTagName('h1')[0].textContent = "안녕하세요?";
}