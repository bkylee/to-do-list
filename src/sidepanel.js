export {addScreen,sideWrap};
import {projectList,Projects} from './script.js';
import {TDEditor, getToDo} from './todoEditor';


function addScreen () {
    const wrapper = document.createElement('form');
    wrapper.setAttribute('onsubmit','return false');

    //the form to create the new project

    //name of new project
    const name = document.createElement('label');
    name.textContent = "Name";
    name.setAttribute('for','PnameI');
    wrapper.appendChild(name);

    const nameInput = document.createElement('input');
    nameInput.setAttribute('id','PnameI');
    nameInput.setAttribute('name','PnameI');
    nameInput.setAttribute('type','text');
    nameInput.setAttribute('minlength','3');
    nameInput.required = true;
    wrapper.appendChild(nameInput);


    //description of new project
    const description = document.createElement('label');
    description.textContent = "Description";
    description.setAttribute('for','PdescI');
    wrapper.appendChild(description);

    const descInput = document.createElement('textarea');
    descInput.setAttribute('id','PdescI');
    wrapper.appendChild(descInput);

    //submit button and event listener 
    const submit = document.createElement('button');
    submit.setAttribute('type','submit');
    submit.textContent = "Submit";
    wrapper.appendChild(submit);

    // list of projects in array
    const list = projectList();

    //submit button 
    submit.addEventListener('submit',()=>{
        const newItem = new Projects(nameInput.value, descInput.value);
        list.add(newItem);
        projectElement(list.list);
        wrapper.remove(submit);
    });

    //reset button and event listener
    const reset = document.createElement('button');
    reset.setAttribute('type','button');
    reset.textContent = "Reset";
    wrapper.appendChild(reset);

    reset.addEventListener('click', ()=>{
        nameInput.value = null;
        descInput.value = null;
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

function sideWrap (){
    const sideWrap = document.createElement('div');
    sideWrap.setAttribute('id','projectWrapper');
    
    return sideWrap;
};

function projectElement(projects){
    //remove current listed projects
    const sidePanel = document.getElementById('sidePanel');
    sidePanel.removeChild(sidePanel.lastChild);

    //re-add sideWrap so it's empty 
    sidePanel.appendChild(sideWrap());

    const wrapper = document.getElementById('projectWrapper');
    projects.forEach(element => {
        const projectName = document.createElement('div');
        projectName.textContent = element.name;
        projectName.setAttribute('class','projectName');
        
        //button to add to-do 
        const newB = document.createElement('button');
        newB.setAttribute('type','button');
        newB.textContent = "+";
        projectName.appendChild(newB);

        newB.addEventListener('click',()=>{
            const todoEditor = document.getElementById('editor');
            todoEditor.appendChild(TDEditor());
        const TDSubmit = document.getElementById('TDSubmit');
        TDSubmit.addEventListener('submit',()=>{
            element.addToDo(getToDo());
            element.toDoList.forEach((todo)=>{
                const todoname = document.createElement('div');
                projectName.appendChild(todoname);
                todoname.textContent = todo.name;

                //todo show on screen button 
                const showToDo = document.createElement('button');
                todoname.appendChild(showToDo);
                showToDo.textContent = "Show";
                showToDo.setAttribute('type','button');
                showToDo.addEventListener('click', ()=>{
                    //wrapper for showing the todo details 
                    const wrapper = document.createElement('div');
                    todoEditor.appendChild(wrapper);
                    wrapper.setAttribute('id','showToDo');
                    
                    const name = document.createElement('div');
                    name.textContent = todo.name;
                    wrapper.appendChild(name);

                    const description = document.createElement('div');
                    description.textContent = todo.description;
                    wrapper.appendChild(description);

                    const dueDate = document.createElement('div');
                    dueDate.textContent = todo.dueDate;
                    wrapper.appendChild(dueDate);

                    const priority = document.createElement('div');
                    priority.textContent = todo.priority;
                    wrapper.appendChild(priority);
                });

                //button to delete todo
                const remove = document.createElement('button');
                remove.setAttribute('id','delete');
                remove.setAttribute('type','button');
                remove.textContent = "X";
                remove.addEventListener('click',()=>{
                    element.removeToDo(todo);
                    projectName.removeChild(todoname);
                    todoEditor.removeChild(todoEditor.lastChild);
                    });
                todoname.appendChild(remove);
                });
            });
        });

    wrapper.appendChild(projectName);
        
    });
};