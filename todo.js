const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput =toDoForm.querySelector("input"),
toDoList=document.querySelector(".js-toDoList");

const TODOS_LS="toDos"

const paintToDo=(text)=>{
console.log(text);
}

const handleSubmit=(event)=>{
    event.preventDefalut();
    const currentValue=toDoInput.value;
    paintToDo(currentValue)
    toDoInput.value="";
}

const loadToDos=()=>{
    const toDos=localStorage.getItem(TODOS_LS);
    if(toDos !==null){

    }else{

    }
}

function init(){
loadToDos();
toDoForm.addEventListener("submit",handleSubmit)
}

init();