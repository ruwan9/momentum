# 1.4 Why JavaScript

> 모든 브라우저에 내장되어있고, 프론트엔드 개발자가 사용할 수 있는 유일한 프로그래밍 언어
>
> (백엔드에서는 python, ruby, go 등 다양한 프로그래밍 언어를 사용할 수 있다.)

- 모든 브라우저는 3가지의 언어만 이해한다.
  - HTML
  - CSS
  - JavaScript



# 1.5 Why JavaScript 2



## Framework

> 프로그래밍에서 특정 운영 체제를 위한 응용 프로그램 표준 구조를 구현하는 클래스와 라이브러리 모임

- Frame(틀) + Work(일) : 목적에 따라 효율적으로 구조를 짜놓는 개발 방식
- ex) angular.js, Django, React Native 등



---
# 2.0 First JS Project
> Javascript는 이미 브라우저에 설치되어 있다.

## Console
> Javascript를 사용하기 위해서는 브라우저의 Console를 이용하면 된다.
- 마우스 우클릭 -> Inspect -> Console
- 자바스크립트와 상호작용하긴 좋지만 긴 자바스크립트 프로그램을 작성할 때는 불편
- 때문에 Javascript File 생성 (`app.js`)


## 브라우저는 HTML을 열고, HTML은 CSS와 Javascript를 가져온다.
> HTML은 접착제 역할 (.html 파일을 브라우저에서 열고, HTML파일이 CSS파일과 JavaScript 파일을 가져온다.)
- .js 파일이나 .css 파일을 브라우저에서 열지 않는다.

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- CSS File -->
  <link rel="stylesheet" href="style.css">
  <title>Momentum</title>
</head>
<body>
  <!-- JavaScript File -->
  <script src="app.js"></script>
</body>
</html>
```

# 2.1 Basic Data Types
자바스크립트에는 type이 있고, 그걸 알아서 이해한다.
- integer, float, text, string
- 자바스크립트에서 text를 입력할 때는 `""`를 붙여줘야 한다.

---
# 2.2 Variables
> 변수: 반복을 줄이기 위해 사용
- 값을 저장하거나 유지하는 역할
- `const` 또는 `let` 키워드를 이용해 변수 생성
- 변수의 이름을 정할 때는 camelCase 사용

---
# 2.3 const and let
변수만들때 let, const, var차이
(기본적으로 const 사용, 필요할 때 let 사용)

## let : 재선언 금지(새로운 것을 생성할때만 사용), 재할당 가능
- 재선언 금지
    let a = b;  # 선언
    let a = c;  # 재선언 불가
- 재할당은 가능
    let a = b;  # 선언
    a = c;  # 재할당 가능

## const : 재선언 금지, 재할당 금지(상수, 값이 바뀔 수 없다.)
- 재선언 금지
    const a = b;  # 선언
    const a = c;  # 재선언 불가
- 재할당 금지
    const a = b;  # 선언
    a = c;  # 재할당 불가

## var : 재선언 가능, 재할당 가능 (사용 안함)
- 재선언, 재할당 가능
    var a = b;
    var a = c;
    a = d;

---
# 2.4 Booleans
> `true` or `false`
1. true =/= "true"
2. false =/= "false"
3. null = 값이 없음(nothing inside, variable 안에 아무것도 없다는 것을 확실하게 하기 위해 사용)
    - null =/= undefined
    - null =/= false (false는 false라는 값이 있다.)
4. undefined = 값이 정의되지 않음 (variable은 메모리 안에 존재하지만 값이 들어가지 않은 상태)


---
# 2.5 Arrays
- 하나의 변수 안에 데이터의 list를 가지는 것
- 데이터를 나열하기 위한 방법 중 하나
- 항상 `[]` 안에 콤마(,)로 데이터들을 나열
- 변수도 쓰일 수 있고, boolean, text, 숫자 등 데이터 정렬이 가능
    ex) const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
- daysOfWeek에서 5번째 element 값 출력 가능
    ex) console.log(daysOfWeek[4]) 라고 해야 5번째 값을 출력할 수 있다.
    - 컴퓨터는 숫자를 0부터 세기 때문
- daysOfWeek 변수(Array)에 하나의 값을 더 넣고 싶다면 `.push()` 사용
    ex) daysOfWeek.push(“holiday”) 
    - .push는 array 맨 마지막에 추가하는 기능.
- JS의 주석처리는 `//` 사용


---
# 2.6 Objects
- object는 property를 가진 데이터를 저장해주며, `{}` 를 사용
ex)
```
const player = {
name : tomato,
color : red,
food : true,
};
```
- property를 불러오는 방법은 크게 2가지
1. console.log(player.name);  // tomato
2. console.log(player["name"]);  // tomato

- property를 바꾸는 것은 가능하지만 선언된 object를 바꾸는 것은 불가능
ex)
```
const player = {
name : tomato,
color : red,
food : true,
};
```
player.color = "blue";
console.log(player.color);  // blue

- property 추가 가능
player.koreanName = "토마토";
console.log(player);  // {name: "tomato", color: "blue", food: true, koreanName: "토마토"}


---
# 2.7 Functions
인수를 받기 위해서 함수를 선언할 때 `function 함수명(variable명) { }` 를 작성
```
function sayHello(nameOfPerson, age) {
console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}
```
sayHello("nico", 10);  // Hello my name is nico and I'm 10
sayHello("dal", 23);  // Hello my name is dal and I'm 23

메서드를 추가하려면
```
const player = {
name: "nico",
sayHello: function(otherPersonsName) {
console.log("Hello " + otherPersonsName + " nice to meet you!");
},
};
```
player.sayHello("lynn");  // Hello lynn nice to meet you!


---
# 3.2
- getElementsByClassName() : 많은 element를 가져올때 사용(array를 반환)
- getElementsByTagName() : name을 할당 가능(array를 반환)
- querySelector : element를 CSS selector방식으로 검색 가능 (ex. h1:first-child)
    - 단 하나의 element를 return해줌
    - hello란 class 내부에 있는 h1을 가지고 올 수 있다(id도 가능함)
    - 첫번째 element만 가져옴
    - 조건에 맞는 세개 다 가져오고 싶으면 querySelectorAll
        - 세개의 h1이 들어있는 array를 가져다 줌
- querySelector("#hello"); 와 getElementById("hello"); 는 같다
    - 하지만 후자는 하위요소 가져오는 것을 못하므로 전자를 사용하는게 좋다.


---
# 3.3
- document가 html이 js파일을 load하기 때문에 존재 → 그 다음에 browser가 우리가 document에 접근할 수 있게 해줌
- element의 내부를 보고 싶으면 console.dir() 사용
    - 기본적으로 object로 표시한 element를 보여줌(전부 js object임)
- element 중 앞에 on이 붙은 것들은 `event`
    - event: 어떤 행위를 하는 것
    - 모든 event는 js가 listen할 수 있음
- eventListener : event를 listen함
    - js에게 무슨 event를 listen하고 싶은 지 알려줘야 함
- title.addEventListener("click") : 누군가가 title을 click하는 것을 listen할 거임 → 무언가를 해줘야함

```
const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    title.style.color = "blue";
}

title.addEventListener("click",handleTitleClick);
```
// click하면 handleTitleClick이라는 function이 동작하길 원함
<br>
// 그래서 handle~ 함수에 () 를 안넣은 것임
<br>
// 즉, js가 대신 실행시켜주길 바라는 것

- function이 js에게 넘겨주고 유저가 title을 click할 경우에 js가 실행버튼을 대신 눌러주길 바라는 것을 의미
    (직접 handleTitleClick(); 이렇게 하는 것이 아니라)
- 함수에서 () 이 두 괄호를 추가함으로써 실행버튼 작동


---
# 3.5
```
title.onclick = handleMouseEnter;
title.addEventListener(“mouseenter” , handleMouseEnter);
```
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
- classList 우리가 class들의 목록으로 작업할수 있게끔 허용해 줌
- className은 이전calss를 상관하지않고 모든걸 교체

- classList를 이용하는건
    - js에서 건드리는건 HTML element가 가지고있는 또하나의 요소 사용하는 것이다.
        (element의 class내용물을 조작하는 것을 허용한다는 뜻)

- contains은 우리가 명시한 class가 HTML element의 class에 포함되어 있는지 말해준다

- toggle
    - 토큰이 존재하면 토큰제거
    - 토큰이 존재하지 않으면 토큰 추가

ex)
toggle은 h1의 classList에 clicked class가 이미있는지 확인하여
만약있다면 toggle 이 clicked를 제거해준다
만약 class name이 존재하지 않는다면 toggle은 classname 추가