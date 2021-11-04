const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");  // string형태의 seconds 변수 길이가 2보다 작으면 2의 길이를 맞추기 위해 부족한 수만큼 앞에 "0" 추가

    clock.innerText = `${hours}:${minutes}:${seconds}`

}
getClock();  // 사이트 들어가자 마자 바로 함수 먼저 호출하고
setInterval(getClock, 1000);  // 1초(1000ms)마다 getClock함수 실행






/*
function sayHello() {
    console.log("hello")
}
setInterval(sayHello, 5000);  // 5초(5000ms)마다 sayHello 함수 실행
setTimeout(sayHello, 5000);   // 5초(5000ms) 후에 sayHello 함수 실행
*/ 

/*
padStart() : string형태로 받아주어야 함
"1".padStart(2, "0")  // string 길이가 2보다 작으면 길이가 2가 될때까지 앞에 0 추가
# "01"
"1".padEnd(2, "0")  // string 길이가 2보다 작으면 길이가 2가 될때까지 뒤에 0 추가
# "10"
*/ 