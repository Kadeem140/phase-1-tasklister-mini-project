document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

const inputField = document.querySelector("#new-task-description");
const addBtn = document.querySelector("button");
const todoList = document.querySelector("#tasks");

//Select the Button
//Add a Click Event to this button
//Prevent the Default 
addBtn.addEventListener("click", function(event) {
  event.preventDefault();

  let userData = inputField.value;
  let getlocalStorage = localStorage.getItem("tasks"); //getting localStorage

  if(getlocalStorage == null){
    listArr = []; //create empty array
  }else{
    listArr = JSON.parse(getlocalStorage);
    console.log(listArr)
  }
  listArr.push(inputField.value);
  localStorage.setItem("tasks", JSON.stringify(listArr)); //transform js object
  ShowTasks(); //Calls function
});

function ShowTasks(){
  let getlocalStorage = localStorage.getItem("tasks"); //getting localStorage
  if(getlocalStorage == null){
    listArr = []; //create empty array
  } else{
    listArr = JSON.parse(getlocalStorage);
    console.log(listArr)
  }
  let newLiTag = "";
  listArr.forEach((element, index) => {
    newLiTag = `<li> ${element}</li>`
  });
  todoList.innerHTML = newLiTag // adding new tasks
}