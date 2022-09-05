export {TDEditor};
import {ToDo} from "./script";

function TDEditor (){
    const wrapper = document.getElementById('editor');
    
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
        wrapper.remove(submit);
    });

    return wrapper;

};



