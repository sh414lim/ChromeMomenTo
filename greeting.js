const form=document.querySelector(".js-form"),
input=form.querySelector("input"),
greeting=document.querySelector(".js-greeting")

const USER_STORAGE="currentUser",
 SHOWING="showing"

const paintGreeting=(text)=>{
    form.classList.remove(SHOWING)
    greeting.classList.add(SHOWING);
greeting.innerText=`Hello ${text}`
}

const saveName=(text)=>{
localStorage.setItem(USER_STORAGE,text)
}

const handleSumit=(event)=>{
 event.preventDefault();
 const currentValue=input.value;
 paintGreeting(currentValue);
 saveName(currentValue);
}

const askForName=()=>{
form.classList.add(SHOWING)
form.addEventListener("submit",handleSumit)
}


const loadNmae=()=>{
const currentUser=localStorage.getItem(USER_STORAGE);
if(currentUser ===null){
askForName();
}else{
    paintGreeting(currentUser);
}
}

function init(){
loadNmae();
}

init();