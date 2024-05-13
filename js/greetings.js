const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// function onLoginSubmit(){
//     const username = loginInput.value;
//     console.log(username);
// }

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    // greeting.innerText = "hello " + username;
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    //로컬스토리지의 key값이 없다면 form 을 보여준다.
}else{
    paintGreetings(savedUsername);
    //로컬스토리지의 key값이 있으면 
    // greeting.innerText = `hello ${username}`을 보여준다
}

