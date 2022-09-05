export {TDEditor, getToDo};
import {ToDo} from "./script";

function TDEditor (){
    //get main wrapper 
    const main = document.getElementById('editor');

    //create wrapper to hold form. Makes it easier to remove all after completing
    const wrapper = document.createElement('div');
    wrapper.setAttribute('id','todoWrapper');
    main.appendChild(wrapper);

    //name of to-do
    const name = document.createElement('label');
    name.textContent = "Name";
    name.setAttribute('id','TDname');
    wrapper.appendChild(name);

    const nameInput = document.createElement('input');
    nameInput.setAttribute('id','TDname');
    nameInput.setAttribute('type','text');
    name.appendChild(nameInput);


    //description of new to-do
    const description = document.createElement('label');
    description.textContent = "Description";
    description.setAttribute('id','TDdesc');
    wrapper.appendChild(description);

    const descInput = document.createElement('textarea');
    descInput.setAttribute('id','TDdesc');
    description.appendChild(descInput);

    //date due 
    const dueDate = document.createElement('label')
    dueDate.textContent = "Date due";
    dueDate.setAttribute('id','dueDate');
    wrapper.appendChild(dueDate);

    const dueDateInput = document.createElement('input');
    dueDateInput.setAttribute('id','dueDate');
    dueDateInput.setAttribute('type','date');
    dueDate.appendChild(dueDateInput);

    //priority
    const priority = document.createElement('label');
    priority.textContent = "Priority ranging from 1 (low) to 5 (high)";
    priority.setAttribute('id','priority');
    wrapper.appendChild(priority);

    const priorityI = document.createElement('input');
    priorityI.setAttribute('type','number');
    priorityI.setAttribute('min', '1');
    priorityI.setAttribute('max', '5');
    priority.appendChild(priorityI);

//submit button and event listener 
    const submit = document.createElement('button');
    submit.setAttribute('type','button');
    submit.textContent = "TDSubmit";
    wrapper.appendChild(submit);

    const reset = document.createElement('button');
    reset.setAttribute('type','button');
    reset.textContent = "Reset";
    wrapper.appendChild(reset);

    reset.addEventListener('click', ()=>{
        nameInput.value = null;
        descInput.value = null;
        dueDateInput.value = null;
        priority.value = null;
    });

    //cancel button and event listener
    const cancel = document.createElement('button');
    cancel.setAttribute('type','button');
    cancel.textContent = "Cancel";
    wrapper.appendChild(cancel);

    cancel.addEventListener('click',()=>{
        main.remove(wrapper);
    });

    return wrapper;

};

function getToDo(){
    const name = document.getElementById('TDName');
    const description = document.getElementById('TDDesc');
    const dueDate = document.getElementById('dueDate');
    const priority = document.getElementById('priority');

    const todo = new ToDo(name.value,description.value,dueDate.value,priority.value);

    const todoEditor = document.getElementById('editor');
    const wrapper = document.getElementById('todoEditor');
    todoEditor.remove(wrapper);

    return todo; 
}



