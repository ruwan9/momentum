const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const USERNAME_KEY = "username"
const HIDDEN_CLASSNAME = "hidden"

function onLoginBtnSubmit(event) {
	event.preventDefault();
	loginForm.classList.add(HIDDEN_CLASSNAME);
	const username = loginInput.value;  // loginInput에 작성한 내용이 username에 저장
	localStorage.setItem(USERNAME_KEY, username);  // Local Storage에 Key = 'username', Value = username 저장
	printGreetings(username)
}

// greeting 관련 반복되니까 함수로 만들어주기
function printGreetings(username) {
	greeting.innerText = `Hello ${username}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

// Local Stroage에서 username 가져오기(없다면 savedUsername === null)
const savedUsername = localStorage.getItem(USERNAME_KEY);  
// savedUsername이 없다면
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME); // loginForm을 보여주고
  loginForm.addEventListener("submit", onLoginBtnSubmit);
  /*
	내용 작성 후 loginForm을 submit하면 onLoginBtnSubmit 함수에 의해
	1. loginForm이 안보이게되고, (hidden class 추가)
	2. greeting이 보이게 됨 (hidden class 제거)
	*/

	// savedUsername이 있다면
} else {
	printGreetings(savedUsername);  // greeting이 보이게 됨
}

