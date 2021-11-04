const clock = document.querySelector("h1#clock")

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`; // 기존 적혀있던 00:00:00을 `${hours}:${minutes}:${seconds}`으로 교체
}

getClock()  // 새로고침 후 바로 getClock 함수 실행
setInterval(getClock, 1000)  // 매 1초가 지날때마다 getClock 함수 실행