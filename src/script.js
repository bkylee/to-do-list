export {
    projectList,
    Projects
};

const projectList = ()=>{
    //the array of projects
    const list = [];
    this.project = project;
    //function to add project to array;
    this.add = (project) =>{
        list.push(project);
    };

    this.remove = (project) =>{
        index = list.findIndex(project);
        list.splice(index,1);
    };
    return{
        list,
        add, 
        remove
    };
};


class Projects {
    constructor(name, description){
    this.name = name;
    this.description =description;
    this.toDoList = [];
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
    addToDo(todo){
        this.toDoList.push(todo);
        return this.toDoList;
    };
    removeToDo(todo){
        const index = this.toDoList.findIndex(todo);
        this.toDoList.splice(index, 1);
        return this.toDoList;
    };

    get toDoList(){
        return this.toDoList;
    };
};
