export {addScreen, projectElement};
import {projectList,Projects} from './script.js';
import {TDEditor} from './todoEditor';
import {ToDo} from "./script";

function addScreen () {
    const wrapper = document.createElement('div');
    //the form to create the new project

    //name of new project
    const name = document.createElement('label');
    name.textContent = "Name";
    name.setAttribute('id','Pname');
    wrapper.appendChild(name);

    const nameInput = document.createElement('input');
    nameInput.setAttribute('id','PnameI');
    nameInput.setAttribute('type','text');
    name.appendChild(nameInput);


    //description of new project
    const description = document.createElement('label');
    description.textContent = "Description";
    description.setAttribute('id','PdescI');
    wrapper.appendChild(description);

    const descInput = document.createElement('textarea');
    descInput.setAttribute('id','Pdesc');
    description.appendChild(descInput);

    //submit button and event listener 
    const submit = document.createElement('button');
    submit.setAttribute('type','button');
    submit.textContent = "Submit";
    wrapper.appendChild(submit);

    // list of projects in array
    const list = projectList();

    //submit button 
    submit.addEventListener('click',()=>{
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
    SPAppend(sideWrap());

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
        });

        wrapper.appendChild(projectName);
        
    });
};