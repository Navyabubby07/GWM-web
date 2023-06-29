const inputval= document.getElementsByClassName('inputVal')[0];
const addTaskBtn = document.getElementByClassName('btn')[0];
addTaskBtn.addEventListener('click',() =>{

        let localItems= JSON.parse(localStorage.getItem('localItem'))
        if(localItems === null){
           taskList = []
}else{ 
    taskList = localItems;
}
taskList.push(inputval.value)
localStorage.setItem('localItem',JSON.stringify(taslList))

})
function showList(){

    let output ='';
    let taskListShow = document.querySelector('.todoListItem')
    let localItems = JSON.parse( localStorage.getItem('localItem'))
        if(localItems === null){
            taskList =[]
        }
        else{
            taskList = localItems;
}
taskList.forEach((data ,index) => {
    <div class ="todoList">
        <p class ="pText">movies tonight</p>
        <button class ="deleteTask "onClick ="deleteItem(${index})">x</button>

    </div>
}
);

taskListShow.innerHTML =output;
}
showList()
function deleteItem(index)
    showList()
    
 function clearTask(){
            localStorage.clear()
                showItem()
            }
