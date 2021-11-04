# 2.3 const and let
변수만들때 let, const, var차이
let 재선언 금지, 재할당 가능
const 재선언 금지, 재할당 금지
var 재선언 가능, 재할당 가능

let a = b;
let a = c;
//재선언 금지

let a = b;
a = c;
//재할당은 가능

const a = b;
const a = c;
//재선언 금지

const a = b;
a = c;
//재할당 금지

var a = b;
var a = c;
a = d;
//재선언, 재할당 가능

---
# 2.4 Booleans
1. true =/= "true"

2. false =/= "false"

3. null = 값이 없음
null =/= undefined
null =/= false

4. undefined = 값이 정의되지 않음

---
# 2.5 Arrays
데이터를 나열하기 위한 방법 중 하나.
항상 [ ] 안에 콤마(,)로 데이터들을 나열한다. 변수도 쓰일 수 있고, boolean, text, 숫자 등 데이터 정렬이 가능하다.
ex) const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

만약, 위의 변수에서 5번째 element 값을 알려주세요. 라고 한다면 어떻게 출력해야 할까?
ex) console.log(daysOfWeek[4]) 라고 해야 5번째 값을 출력할 수 있다.

왜?? 컴퓨터는 숫자를 0부터 세기 때문에, “mon”은 0번째라고 생각하면 된다.
JS의 주석처리는 //

위의 상태에서 daysOfWeek이란 변수에 하나의 값을 더 넣고 싶다면 다음과 같이한다.
ex) daysOfWeek.push(“holiday”) .push는 추가하는 기능.

아 ㅋㅋ 암튼, array는 하나의 변수 안에 데이터의 list를 가지는 것. 다른 프로그래밍 언어에도 있는 가장 기초적이고 필수적인 데이터 구조! 값을 리스트로 정리하는 것

---
# 2.6 Objects
object는 property를 가진 데이터를 저장해주며, { } 를 사용한다.

const player = {
name : tomato,
color : red,
food : true,
};

console.log(player);

property를 불러오는 방법은 2가지가 있다.

1. console.log(player.name); => tomato
2. console.log(player["name"]); => tomato

또한 property를 바꾸는 것은 가능하지만 선언된 object를 바꾸는 것은 불가능하다.
ex)
const player = {
name : tomato,
color : red,
food : true,
};

console.log(player);
player.color = "blue";
console.log(player.color);
--> blue

그리고 property를 추가 할 수도 있다.

player.koreanName = "토마토";

--> {name: "tomato", color: "blue", food: true, koreaName: "토마토"}


---
# 2.7 Functions
인수를 받기 위해서 함수를 선언할 때 function 함수명(variable명) { } 를 작성한다.
function sayHello(nameOfPerson, age) {
console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}
sayHello("nico", 10);
sayHello("dal", 23);

이제 player.name();이런식으로 만드러보려면
const player = {
name: "nico",
sayHello: function(otherPersonsName) {
console.log("Hello " + otherPersonsName + " nice to meet you!");
},
};
player.sayHello("lynn");


---
# 3.2
- getElementsByClassName() : 많은 element를 가져올때 씀(array를 반환)
- getElementsByTagName() : name을 할당할 수 있음(array를 반환)
- querySelector : element를 CSS selector방식으로 검색할 수 있음 (ex. h1:first-child)
단 하나의 element를 return해줌
⇒ hello란 class 내부에 있는 h1을 가지고 올 수 있다(id도 가능함)
- 첫번째 element만 가져옴
- 조건에 맞는 세개 다 가져오고 싶으면 querySelectorAll
⇒ 세개의 h1이 들어있는 array를 가져다 줌
- querySelector("#hello); 와 getElementById("hello"); 는 같은 일을 하는 것임
하지만 후자는 하위요소 가져오는 것을 못하므로 전자만 쓸거다


---
# 3.3
- 지금 js파일이 있기 때문에 js를 통해 html의 내용을 가져올 수 있는 거임
- document가 html이 js파일을 load하기 때문에 존재 → 그 다음에 browser가 우리가 document에 접근할 수 있게 해줌
- element의 내부를 보고 싶으면 console.dir()
기본적으로 object로 표시한 element를 보여줌(전부 js object임)
그 element 중 앞에 on이 붙은 것들은 event임
- event: 어떤 행위를 하는 것
모든 event는 js가 listen할 수 있음
- eventListener : event를 listen함 → js에게 무슨 event를 listen하고 싶은 지 알려줘야 함
- title.addEventListener("click") : 누군가가 title을 click하는 것을 listen할 거임 → 무언가를 해줘야함

const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
title.style.color = "blue";
}
title.addEventListener("click",handleTitleClick);
//click하면 handleTitleClick이라는 function이 동작하길 원함
//그래서 handle~ 함수에 () 를 안넣은 것임
//즉, js가 대신 실행시켜주길 바라는 것임!

- function이 js에게 넘겨주고 유저가 title을 click할 경우에 js가 실행버튼을 대신 눌러주길 바라는 것임( 직접 handleTitleClick(); 이렇게 하는 것이 아니라)
- 함수에서 () 이 두 괄호를 추가함으로써 실행버튼을 누를 수 있는 거임


---
# 3.5
title.onclick = handleMouseEnter;
title.addEventListener(“mouseenter” , handleMouseEnter);

위에 두 코드는 동일하나 addEventListener를 선호하는 이유는
removeEventListener을 통해서 event listener을 제거할수있기 때문이다.

document에서 body,head,title 은 중요해서 언제든
ex) document.body 로 가져올수있지만
div나 h1 등 element 들은 querySelector getElementById등으로 찾아야한다.
ex) document.querySelector(“h1”);

window는 기본제공
function handleWindowResize(){
document.body.style.backgroundColor = “tomato”;
}
function handleWindowCopy(){
alert(“copier”);
}

window.addEventListener(“resize”, handleWindowResize);
window.addEventListener(“copy”, handleWindowCopy);

---
# 3.8
classList 우리가 class들의 목록으로 작업할수 있게끔 허용해준다.
className은 이전calss를 상관하지않고 모든걸 교체해 버린다.

classList를 이용하는건
js에서 건드리는건 HTML element가 가지고있는 또하나의 요소 사용하는 것이다.
= element의 class내용물을 조작하는 것을 허용한다는 뜻

contains은 우리가 명시한 class가 HTML element의 class에 포함되어 있는지 말해준다

toggle은 토큰이 존재하면 토큰제거
토큰존재 하지않으면 토큰 추가

ex)
toggle은 h1의 classList에 clicked class가 이미있는지 확인하여
만약있다면 toggle 이 clicked를 제거해준다
만약 class name이 존재하지 않는다면 toggle은 classname 추가