const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg",
];

const chosenImg = images[Math.floor(Math.random() * images.length)]

// JS에서 HTML에 적용될 element 만들기
const bgImg = document.createElement("img");  // <img> 태그를 만들어주기 위해 사용

// <img src="img/0.jpeg">
bgImg.src = `img/${chosenImg}`  // <img> 태그에 source 추가, src= `img/${chosenImg}`

// 위에서 만든 bgImg를 index.html의 <body> 태그 맨 마지막에 append
document.body.appendChild(bgImg)  // body에 html 추가