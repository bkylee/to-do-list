export {
    addScreen
};

//scripts for elements 

function addScreen () {
    const wrapper = document.createElement('div');
    wrapper.textContent = "New Project";
    
    //the form to create the new project
    const name = document.createElement('label');
    name.textContent = "Name";
    name.setAttribute('id','Pname');
    wrapper.appendChild(name);

    const nameInput = document.createElement('input');
    nameInput.setAttribute('id','Pname');
    nameInput.setAttribute('type','text');
    name.appendChild(nameInput);

    const description = document.createElement('label');
    description.textContent = "Description";
    description.setAttribute('id','Pdesc');
    wrapper.appendChild(description);

    const descInput = document.createElement('input');
    descInput.setAttribute('id','Pdesc');
    descInput.setAttribute('type','text');
    description.appendChild(descInput);


    const submit = document.createElement('button');
    submit.setAttribute('type','button');
    submit.textContent = "Submit";
    wrapper.appendChild(submit);

    submit.addEventListener('click',()=>{
        const project = new Projects(name.value, descInput.value);

    });


    return wrapper;
};

const projectList = (project)=>{
    //the array of projects
    const list = [];
    
    //function to add project to array;
    const add = (project) =>{
    list.push(project);
    };

    const remove = (project) =>{
        index = list.findIndex(project);
        list.splice(index,1);
    };

    return{
        list,
        add, 
        remove
    };
}


class Projects {
    constructor(name, description){
    this.name = name;
    this.description =description;
}
    set name(value) {
        if (value.length < 3){
            alert("Name must be at least 3 characters");
        return};
        this.name = value;
    };
    set description(value){
        if (value.length < 3){
            alert('Description must be at least 3 characters');
        return};
        this.description = value;
    };
    get name(){
        return this.name;
    };
    get description(){
        return this.description;
    };
};
