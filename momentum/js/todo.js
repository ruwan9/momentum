const toDoForm = document.getElementById("toDo-form")
const toDoInput = document.querySelector("#toDo-form input")
const toDoList = document.getElementById("toDo-list")

const TODOS_KEY = "todos"

let toDos = [];


function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));  // string형식으로 전환
}


function deleteToDo(event) {
    const li = event.target.parentElement;  // target = click된 element
    li.remove()  // 삭제
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));  // db에서도 해당 항목 삭제
    saveToDos()  // 이상태로 저장
}


function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text; // span의 텍스트는 handleToDoSubmit에서 온 newToDo text가 됨
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo)
  li.appendChild(span); // li 태그 안에 span 태그 추가
  li.appendChild(button); // li 태그 안에 button태그 추가
  toDoList.appendChild(li);
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),  // 시간으로 고유한 id 만들어주기
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit)


const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos != null) {
  const parsedToDos = JSON.parse(savedToDos); // string 형식을 JS에서 사용 가능한 object(array)으로 반환
  toDos = parsedToDos;  // let으로 바뀐 toDos가 업데이트 되도록
  parsedToDos.forEach(paintToDo); // parsedToDos array의 각 item에 대해 paintToDo함수 실행
}

