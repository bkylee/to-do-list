//Creating the elements in HTML 

import './style.css';
import cap from './cap.png';
import {addScreen,sideWrap} from './sidepanel';

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

//editor of todo stuff page 
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