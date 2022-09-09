export {TDEditor, getToDo,todoUnderProject};
import {ToDo} from "./script";
import {createProjectList, projs} from "./sidepanel";

function TDEditor (project){
    //get main wrapper 
    const main = document.getElementById('editor');

    //create wrapper to hold form. Makes it easier to remove all after completing
    const wrapper = document.createElement('form');
    wrapper.setAttribute('id','todoWrapper');
    main.appendChild(wrapper);

    //name of to-do
    const name = document.createElement('label');
    name.textContent = "Name";
    name.setAttribute('for','TDnameI');
    wrapper.appendChild(name);

    const nameInput = document.createElement('input');
    nameInput.setAttribute('id','TDnameI');
    nameInput.setAttribute('name','TDnameI');
    nameInput.setAttribute('type','text');
    nameInput.setAttribute('minlength','3');
    nameInput.setAttribute('maxlength','20');
    nameInput.setAttribute('size','10');
    nameInput.require = true;
    wrapper.appendChild(nameInput);


    //description of new to-do
    const description = document.createElement('label');
    description.textContent = "Description";
    description.setAttribute('for','TDdescI');
    wrapper.appendChild(description);

    const descInput = document.createElement('textarea');
    descInput.setAttribute('id','TDdescI');
    descInput.setAttribute('maxlength','200'); 
    descInput.setAttribute('cols','8');
    descInput.setAttribute('rows','1');  
    wrapper.appendChild(descInput);

    //date due 
    const dueDate = document.createElement('label')
    dueDate.textContent = "Date due";
    dueDate.setAttribute('for','dueDateI');
    wrapper.appendChild(dueDate);

    const dueDateInput = document.createElement('input');
    dueDateInput.setAttribute('id','dueDateI');
    dueDateInput.setAttribute('type','date');
    dueDateInput.required = true;
    wrapper.appendChild(dueDateInput);

    //priority
    const priority = document.createElement('label');
    priority.textContent = "Priority ranging from 1 (low) to 5 (high)";
    priority.setAttribute('for','priorityI');
    wrapper.appendChild(priority);

    const priorityI = document.createElement('input');
    priorityI.setAttribute('type','number');
    priorityI.setAttribute('min', '1');
    priorityI.setAttribute('max', '5');
    priorityI.setAttribute('id','priorityI');
    priorityI.setAttribute('value','1');
    priorityI.required = true;
    wrapper.appendChild(priorityI);

//submit button and event listener 
    const submit = document.createElement('button');
    submit.setAttribute('type','button');
    submit.setAttribute('id','TDSubmit');
    submit.textContent = "✅";
    submit.addEventListener('click',()=>{
        const todo = getToDo();
        project.addToDo(todo);
        createProjectList(projs);
    });
    wrapper.appendChild(submit);

    const reset = document.createElement('button');
    reset.setAttribute('type','button');
    reset.textContent = "↩️";
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
    cancel.textContent = "❎";
    wrapper.appendChild(cancel);

    cancel.addEventListener('click',()=>{
        main.removeChild(wrapper);
    });

    return wrapper;

};

function getToDo(){
    const name = document.getElementById('TDnameI').value;
    const description = document.getElementById('TDdescI').value;
    const dueDate = document.getElementById('dueDateI').value;
    const priority = document.getElementById('priorityI').value;

    const todo = new ToDo(name,description,dueDate,priority);

    const todoEditor = document.getElementById('editor');
    const wrapper = document.getElementById('todoWrapper');
    todoEditor.removeChild(wrapper);

    return todo; 
};

function todoUnderProject(project,pName){
    while (pName.children.length >2){
        pName.removeChild(pName.lastChild);
    };
    project.toDoList.forEach((todo)=>{
        const todoname = document.createElement('div');
        todoname.setAttribute('class','todoSide');
        pName.appendChild(todoname);
        todoname.textContent = todo.name;
        const show = document.createElement('button');
        todoname.appendChild(show);
        show.textContent = "Show";
        show.setAttribute('type','button');
        show.setAttribute('id','showToDo');
        show.addEventListener('click',()=>{
            const editor = document.getElementById('editor');
            editor.appendChild(showToDo(todo,project,pName));
        });
        
        const del = document.createElement('button');
        todoname.appendChild(del);
        del.textContent = "Delete";
        del.setAttribute('type','button');
        del.setAttribute('id','todoDelSide');
        del.addEventListener('click',()=>{
            project.removeToDo(todo);
            todoUnderProject(project,pName);
        });
    });
};

function showToDo(todo,project,pName){
        //wrapper for showing the todo details 
        const wrapper = document.createElement('div');
        wrapper.setAttribute('id','showToDo');
        
        const name = document.createElement('div');
        name.setAttribute('class','tdname');
        name.textContent = todo.name;
        wrapper.appendChild(name);

        const description = document.createElement('div');
        description.textContent = `Description: ${todo.description}`;
        wrapper.appendChild(description);

        const dueDate = document.createElement('div');
        dueDate.textContent = `Due date: ${todo.dueDate}`;
        wrapper.appendChild(dueDate);

        const priority = document.createElement('div');
        priority.textContent = `Priority: ${todo.priority}`;
        wrapper.appendChild(priority);

        const edit = document.createElement('button');
        wrapper.appendChild(edit);
        edit.setAttribute('id','edit');
        edit.setAttribute('type','button');
        edit.textContent = "Edit";
        edit.addEventListener('click', ()=>{

        })

        //button to delete todo
        const remove = document.createElement('button');
        remove.setAttribute('id','delete');
        remove.setAttribute('type','button');
        remove.textContent = "Delete";
        remove.addEventListener('click',()=>{
            project.removeToDo(todo);
            const wrapper = document.getElementById('editor');
            wrapper.removeChild(wrapper.lastChild);
            todoUnderProject(project,pName);
            });
        wrapper.appendChild(remove);

        return wrapper;
};
