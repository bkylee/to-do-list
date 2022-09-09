export {addScreen, createProjectList};
export const projs = projectList();
import {projectList,Projects} from './script.js';
import {TDEditor,todoUnderProject} from './todoEditor';
       // list of projects in array

function addScreen () {
    const wrapper = document.createElement('form');
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
    nameInput.setAttribute('size','10');
    nameInput.required = true;
    wrapper.appendChild(nameInput);


    //description of new project
    const description = document.createElement('label');
    description.textContent = "Description";
    description.setAttribute('for','PdescI');
    wrapper.appendChild(description);

    const descInput = document.createElement('textarea');
    descInput.setAttribute('id','PdescI');
    descInput.setAttribute('cols','8');
    descInput.setAttribute('rows','1');  
    wrapper.appendChild(descInput);

    //submit button and event listener 
    const submit = document.createElement('button');
    submit.setAttribute('type','button');
    submit.setAttribute('id','projectSubmit');
    submit.textContent = "✅";
    wrapper.appendChild(submit);

    //submit button 
    submit.addEventListener('click',()=>{
        if (nameInput.value == null){
            alert("Please enter a name");
            return;
        };
        const newItem = new Projects(nameInput.value, descInput.value);
        projs.add(newItem);
        createProjectList(projs);
        wrapper.remove(submit);
    });

    //reset button and event listener
    const reset = document.createElement('button');
    reset.setAttribute('type','button');
    reset.textContent = "↩️";
    wrapper.appendChild(reset);

    reset.addEventListener('click', ()=>{
        nameInput.value = null;
        descInput.value = null;
    });

    //cancel button and event listener
    const cancel = document.createElement('button');
    cancel.setAttribute('type','button');
    cancel.textContent = "❎";
    wrapper.appendChild(cancel);
    cancel.addEventListener('click',()=>{
        wrapper.remove(submit);
    });

    return wrapper;
};

function createProjectList(projs){
    const sidePanel = document.getElementById('sidePanel');
    // while (sidePanel.childElementCount > 3){
    //     sidePanel.removeChild(sidePanel.lastChild);
    // };
    if (sidePanel.childElementCount>3){
        for (let i = sidePanel.childElementCount; i > 3; i --){
            sidePanel.removeChild(sidePanel.lastChild);
        };
    };
    const list = projs.projects;
    list.forEach((project)=>{
        const pName = document.createElement('div');
        pName.textContent = project.name;
        pName.setAttribute('class','projectName');
        sidePanel.appendChild(pName);

        //button to create a todo for the project
        const newB = document.createElement('button');
        pName.appendChild(newB);
        newB.setAttribute('id','makeToDo');
        newB.setAttribute('type','button');
        newB.textContent = "➕";
        newB.addEventListener('click',()=>{
            const todoEditor = document.getElementById('editor');
            todoEditor.appendChild(TDEditor(project, projs));
        });

        const del = document.createElement('button');
        pName.appendChild(del);
        del.setAttribute('type','button');
        del.textContent = "➖";
        del.addEventListener('click',()=>{
            const index = list.findIndex((element)=>{
                element.name === pName.textContent;
            });
            list.splice(index,1);
            sidePanel.removeChild(pName);
        createProjectList(projs);
        });
        todoUnderProject(project,pName);
    });
};
