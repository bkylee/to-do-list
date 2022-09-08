export {addScreen,sideWrap};
import {projectList,Projects} from './script.js';
import {TDEditor} from './todoEditor';


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
    submit.textContent = "✅";
    wrapper.appendChild(submit);

    // list of projects in array
    const list = projectList();

    //submit button 
    submit.addEventListener('click',()=>{
        if (nameInput.value == null){
            alert("Please enter a name");
            return;
        };
        const newItem = new Projects(nameInput.value, descInput.value);
        list.add(newItem);
        projectElement(list.list);
        wrapper.remove(submit);

        createProjectList(list);
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

function createProjectList(projects){
    const sidePanel = document.getElementById('sidePanel');
    projects.forEach((project)=>{
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
            todoEditor.appendChild(TDEditor(project, pName));
        });
        const del = document.createElement('button');
        pName.appendChild(del);
        del.setAttribute('type','button');
        del.textContent = "➖";
        del.addEventListener('click',()=>{
            projects.remove(project);
            createProjectList(projects);
        });
    });
};

function projectElement(projects){
    //remove current listed projects
    const sidePanel = document.getElementById('sidePanel');
    sidePanel.appendChild(sideWrap());

    const wrapper = document.getElementById('projectWrapper');
    projects.forEach(element => {
        const projectName = document.createElement('div');
        projectName.textContent = element.name;

        newB.addEventListener('click',()=>{
        const todoEditor = document.getElementById('editor');
        todoEditor.appendChild(TDEditor());
            newToDoButton(todoEditor, element,projectName);
    });

        const del = document.createElement('button');
        del.setAttribute('type','button');
        del.textContent = "➖";
        del.addEventListener('click',()=>{
            const index = projects.findIndex((element)=>{
                element.name = projectName.textContent
            });
            projects.splice(index,1);
            wrapper.removeChild(projectName);
        });
    projectName.appendChild(del);

    wrapper.appendChild(projectName);
    });
};
