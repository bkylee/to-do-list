export {
    projectList,
    Projects,
    ToDo
};

const projectList = ()=>{
    //the array of projects
    const projects = [];
    //function to add project to array;
    const add = (project) =>{
        projects.push(project);  
    };
    const remove = (project) =>{
        const index = projects.findIndex(project);
        projects.splice(index,1);
    };
    return{
        projects,
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
        return this._name = value;
    };
    set description(value){
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
        // return this.toDoList;
    };
    removeToDo(todo){
        const index = this.toDoList.findIndex((element)=>{
            element.name = todo.name;
        });
        this.toDoList.splice(index,1);
    };
};

class ToDo extends Projects{
    constructor(name,description,dueDate, priority){
        super(name,description);
        this.dueDate = dueDate;
        this.priority = priority;
    };
    set name(value) {
        return this._name = value;
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