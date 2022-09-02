//Creating the elements in HTML 

import './style.css';
import cap from './cap.png';

const header = (()=>{
    const wrapper = document.createElement('div');
    document.body.appendChild(wrapper);
    wrapper.setAttribute('id', 'header');




    wrapper.appendChild(searchBar());
    wrapper.appendChild(profile());
    wrapper.appendChild(settings());
})();


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

function profile() {
    const pic = new Image();
    pic.src = cap; 
    pic.width = 25;
    pic.height = 25;

    return pic;
};

function settings() { 
    const settings = document.createElement('div');
    settings.textContent = '⚙️';

    return settings; 
}