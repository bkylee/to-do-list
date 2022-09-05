export {
    projectList,
    Projects,
    ToDo
};

const projectList = ()=>{
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
};



class Projects {
    constructor(name, description){
    this.name = name;
    this.description = description;
    this.toDoList = [];
}
    set name(value) {
        if (value.length < 3){
            alert("Name must be at least 3 characters");
        return};
        this._name = value;
    };
    set description(value){
        if (value.length < 3){
            alert('Description must be at least 3 characters');
        return};
        this._description = value;
    };
    get name(){
        return this._name;
    };
    get description(){
        return this._description;
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
};

class ToDo extends Projects{
    constructor(name,description,dueDate, priority){
        super(name,description);
        this.dueDate = dueDate;
        this.priority = priority;
    };
    set name(value) {
        if (value.length < 3){
            alert("Name must be at least 3 characters");
        return};
        this._name = value;
    };
    set description(value){
        return this._description = value;
    };
    get name(){
        return this._name;
    };
    get description(){
        return this._description;
    };
    set dueDate(value) {
        return this._dueDate = value;
    };
    set priority(value){
       return this._priority = value;
    };
    get dueDate(){
        return this._dueDate;
    };
    get priority(){
        return this._priority;
    };

};