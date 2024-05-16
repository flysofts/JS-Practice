
const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOLIST_KEY = "todolist"
let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOLIST_KEY, JSON.stringify(toDos)); //toDos 내용을 localStorage 안에 넣어줌 하지만 그냥 넣기만하면 텍스트로 저장되기 때문에 json.stringify() 를 추가해줘야 array로 저장이됨  ex ([1,2,3,4]) => "[1,2,3,4]" 값을 string으로 바꿔줌
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li"); //  li 생성
    li.id = newTodo.id;
    const span = document.createElement("span"); // span 생성
    span.innerText = newTodo.text; 
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); // li 안에 span 넣어줌
    li.appendChild(button);
    toDoList.appendChild(li); // todolist 안에 li를 넣어줌
} 


function ToDoSumbit(event){
    event.preventDefault(); // 기본 function 실행 동작 막아줌
    const newTodo = toDoInput.value; 
    toDoInput.value = ""; // input 안에 적은 값을 초기화 시켜줌
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj); 
    paintToDo(newTodoObj); 
    saveToDos();
}



toDoForm.addEventListener("submit", ToDoSumbit)



const savedToDoList = localStorage.getItem(TODOLIST_KEY);

if(savedToDoList !== null){
    const parsedToDoList = JSON.parse(savedToDoList); // string을 array로 변환
    toDos = parsedToDoList;
    parsedToDoList.forEach(paintToDo);
}
