const container = document.createElement('div');
container.setAttribute(
    'style', 
    'max-width:400px; border:none; padding:20px; margin:20px; background-color:bisque; border-radius: 20px; cursor:pointer;');
document.body.appendChild(container);

let titleh = document.createElement('h1');
titleh.innerText = 'ToDo list';
titleh.setAttribute('style', 'text-align:center; color:rgb(202, 147, 80);')
container.appendChild(titleh);

const input = document.createElement('input');input.type = 'text';input.placeholder = "Enter your task";input.id = 'input1';

const button1 = document.createElement('button');
button1.innerText = 'Add';
button1.id = 'Add';
container.appendChild(input);
container.appendChild(button1);
button1.addEventListener("click", List);



const todolist = document.createElement('div');
todolist.id = "todo-list";
todolist.setAttribute('style',
    'margin-top:20px; min-height:30px;'
)
container.appendChild(todolist);

function List (){
   let task =input.value;
   
   if(task){
    let todoItem = document.createElement('div');
    todoItem.innerText = task;
    todoItem.addEventListener("click", () => {
        todoItem.style.textDecoration = "line-through";
        todoItem.style.opacity = "0.6";
    });
    let x = document.createElement('button');
    x.innerText = "❌";
    x.onclick = () => {
        todoItem.remove();
    };
    todoItem.appendChild(x);
    todolist.appendChild(todoItem);
   }
}

const flterTask = document.createElement('div');
flterTask.style.display = 'flex';
const allButton = document.createElement('button');
const activeButton = document.createElement('button');
const completedButton = document.createElement('button');
flterTask.appendChild(allButton);
flterTask.appendChild(activeButton);
flterTask.appendChild(completedButton);
container.appendChild(flterTask);
allButton.innerText = "All";
activeButton.innerText = "Active";
completedButton.innerText = "Completed";




