//Creating the elements in HTML 

import './style.css';
import cap from './cap.png';
import {projectList,Projects} from './script.js';

const header = (()=>{
    const wrapper = document.createElement('div');
    document.body.appendChild(wrapper);
    wrapper.setAttribute('id', 'header');
})();


//function to append element functions to header wrapper element
function appendHeader(ElementFunction) {
    const wrapper = document.getElementById('header');
    wrapper.appendChild(ElementFunction);
};

appendHeader(searchBar());
appendHeader(profile());
appendHeader(settings());

//function that returns the search bar; 
function searchBar() {
    const search = document.createElement('input');
    search.setAttribute('type', 'text');
    search.setAttribute('id', 'search');

    const searchLabel = document.createElement('label');
    searchLabel.setAttribute('id', 'search');
    searchLabel.textContent = "Search:";

    searchLabel.appendChild(search);
    
    return searchLabel; 
};

//profile icon
function profile() {
    const pic = new Image();
    pic.src = cap; 
    pic.width = 25;
    pic.height = 25;

    return pic;
};

//settings gear icon 
function settings() { 
    const settings = document.createElement('div');
    settings.textContent = '⚙️';

    return settings; 
};

//stuff below header wrapper
const main = (()=>{
    const wrapper = document.createElement('div');
    wrapper.setAttribute('id','main');
    document.body.appendChild(wrapper);
})();

//side panel wrapper 
const sidePanel = (()=>{
    const wrapper = document.createElement('div');
    wrapper.setAttribute('id','sidePanel');

    const main = document.getElementById('main');
    main.appendChild(wrapper);
})();

//editor wrapper
const editor = (()=>{
    const wrapper = document.createElement('div');
    wrapper.setAttribute('id','editor');
    wrapper.textContent = "test";
    
    const main = document.getElementById('main');
    main.appendChild(wrapper);
})();

//function to append elements to side panel 
function SPAppend(ElementFunction) {
    const sidePanel = document.getElementById('sidePanel');
    sidePanel.appendChild(ElementFunction);
};

//append things to side panel 
SPAppend(SPTitle());
SPAppend(addButton());
SPAppend(sideWrap());

//title for side panel 
function SPTitle(){
    const projects = document.createElement('h2');
    projects.setAttribute('id', 'PTitle');
    projects.textContent = "Projects";
    
    return projects;
};

function addButton () {
    const but = document.createElement('button');
    but.setAttribute('type','button');
    but.setAttribute('id','addition');
    but.textContent = "+"
    but.addEventListener('click',()=>{
        document.body.appendChild(addScreen());
    });
    return but;
};


function addScreen () {
    const wrapper = document.createElement('div');
    wrapper.textContent = "New Project";
    
    //the form to create the new project

    //name of new project
    const name = document.createElement('label');
    name.textContent = "Name";
    name.setAttribute('id','Pname');
    wrapper.appendChild(name);

    const nameInput = document.createElement('input');
    nameInput.setAttribute('id','Pname');
    nameInput.setAttribute('type','text');
    name.appendChild(nameInput);


    //description of new project
    const description = document.createElement('label');
    description.textContent = "Description";
    description.setAttribute('id','Pdesc');
    wrapper.appendChild(description);

    const descInput = document.createElement('input');
    descInput.setAttribute('id','Pdesc');
    descInput.setAttribute('type','text');
    description.appendChild(descInput);

    //submit button and event listener 
    const submit = document.createElement('button');
    submit.setAttribute('type','button');
    submit.textContent = "Submit";
    wrapper.appendChild(submit);

    const list = projectList();

    submit.addEventListener('click',()=>{
        const newItem = new Projects(nameInput.value, descInput.value);
        list.add(newItem);
        document.body.removeChild(document.body.lastChild);
        projectElement(list);
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
        wrapper.appendChild(projectName);
    });
};