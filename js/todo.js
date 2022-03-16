const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

const TODOS_KEY = "todos";
let toDos = [];


function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    // 클릭한 버튼의 부모를 탐색해 특정 li을 찾아낸다.
    const li = event.target.parentElement;
    // filter() 내의 함수는 항상 true를 리턴해야한다.
    // 만일 내가 배열요소중에 남기고 싶은 녀석이 있다면 true를 리턴
    // 만일 false를 리턴하면 해당 요소는 배열에 포함되지 않음
    // 모든 작업을 마치면 해당 함수는 새로운 배열을 리턴함(기존 배열의 요소가 달라지는게 아님)
    toDos = toDos.filter(todo => parseInt(li.id) !== todo.id);
    li.remove();
    saveToDos();
}

function paintToDo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    const btn = document.createElement("button");
    span.innerText = newTodoObj.text;
    btn.innerText = "❌";
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);

    btn.addEventListener("click", deleteToDo);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
