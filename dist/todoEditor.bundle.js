"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["todoEditor"],{

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Projects": () => (/* binding */ Projects),
/* harmony export */   "ToDo": () => (/* binding */ ToDo),
/* harmony export */   "projectList": () => (/* binding */ projectList)
/* harmony export */ });


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

/***/ }),

/***/ "./src/todoEditor.js":
/*!***************************!*\
  !*** ./src/todoEditor.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TDEditor": () => (/* binding */ TDEditor),
/* harmony export */   "getToDo": () => (/* binding */ getToDo)
/* harmony export */ });
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script */ "./src/script.js");



function TDEditor (){
    //get main wrapper 
    const main = document.getElementById('editor');

    //create wrapper to hold form. Makes it easier to remove all after completing
    const wrapper = document.createElement('div');
    wrapper.setAttribute('id','todoWrapper');
    main.appendChild(wrapper);

    //name of to-do
    const name = document.createElement('label');
    name.textContent = "Name";
    name.setAttribute('id','TDname');
    wrapper.appendChild(name);

    const nameInput = document.createElement('input');
    nameInput.setAttribute('id','TDname');
    nameInput.setAttribute('type','text');
    name.appendChild(nameInput);


    //description of new to-do
    const description = document.createElement('label');
    description.textContent = "Description";
    description.setAttribute('id','TDdesc');
    wrapper.appendChild(description);

    const descInput = document.createElement('textarea');
    descInput.setAttribute('id','TDdesc');
    description.appendChild(descInput);

    //date due 
    const dueDate = document.createElement('label')
    dueDate.textContent = "Date due";
    dueDate.setAttribute('id','dueDate');
    wrapper.appendChild(dueDate);

    const dueDateInput = document.createElement('input');
    dueDateInput.setAttribute('id','dueDate');
    dueDateInput.setAttribute('type','date');
    dueDate.appendChild(dueDateInput);

    //priority
    const priority = document.createElement('label');
    priority.textContent = "Priority ranging from 1 (low) to 5 (high)";
    priority.setAttribute('id','priority');
    wrapper.appendChild(priority);

    const priorityI = document.createElement('input');
    priorityI.setAttribute('type','number');
    priorityI.setAttribute('min', '1');
    priorityI.setAttribute('max', '5');
    priority.appendChild(priorityI);

//submit button and event listener 
    const submit = document.createElement('button');
    submit.setAttribute('type','button');
    submit.textContent = "TDSubmit";
    wrapper.appendChild(submit);

    const reset = document.createElement('button');
    reset.setAttribute('type','button');
    reset.textContent = "Reset";
    wrapper.appendChild(reset);

    reset.addEventListener('click', ()=>{
        nameInput.value = null;
        descInput.value = null;
        dueDateInput.value = null;
        priority.value = null;
    });

    //cancel button and event listener
    const cancel = document.createElement('button');
    cancel.setAttribute('type','button');
    cancel.textContent = "Cancel";
    wrapper.appendChild(cancel);

    cancel.addEventListener('click',()=>{
        main.remove(wrapper);
    });

    return wrapper;

};

function getToDo(){
    const name = document.getElementById('TDName');
    const description = document.getElementById('TDDesc');
    const dueDate = document.getElementById('dueDate');
    const priority = document.getElementById('priority');

    const todo = new _script__WEBPACK_IMPORTED_MODULE_0__.ToDo(name.value,description.value,dueDate.value,priority.value);

    const todoEditor = document.getElementById('editor');
    const wrapper = document.getElementById('todoEditor');
    todoEditor.remove(wrapper);

    return todo; 
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/todoEditor.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb0VkaXRvci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBSUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRzJCO0FBQ0c7O0FBRTlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIseUNBQUk7O0FBRXpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvRWRpdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7XG4gICAgcHJvamVjdExpc3QsXG4gICAgUHJvamVjdHMsXG4gICAgVG9Eb1xufTtcblxuY29uc3QgcHJvamVjdExpc3QgPSAoKT0+e1xuICAgIC8vdGhlIGFycmF5IG9mIHByb2plY3RzXG4gICAgY29uc3QgbGlzdCA9IFtdO1xuICAgIC8vZnVuY3Rpb24gdG8gYWRkIHByb2plY3QgdG8gYXJyYXk7XG4gICAgY29uc3QgYWRkID0gKHByb2plY3QpID0+e1xuICAgICAgICBsaXN0LnB1c2gocHJvamVjdCk7ICBcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlID0gKHByb2plY3QpID0+e1xuICAgICAgICBpbmRleCA9IGxpc3QuZmluZEluZGV4KHByb2plY3QpO1xuICAgICAgICBsaXN0LnNwbGljZShpbmRleCwxKTtcbiAgICB9O1xuICAgIHJldHVybntcbiAgICAgICAgbGlzdCxcbiAgICAgICAgYWRkLCBcbiAgICAgICAgcmVtb3ZlXG4gICAgfTtcbn07XG5cblxuXG5jbGFzcyBQcm9qZWN0cyB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24pe1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMudG9Eb0xpc3QgPSBbXTtcbn1cbiAgICBzZXQgbmFtZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUubGVuZ3RoIDwgMyl7XG4gICAgICAgICAgICBhbGVydChcIk5hbWUgbXVzdCBiZSBhdCBsZWFzdCAzIGNoYXJhY3RlcnNcIik7XG4gICAgICAgIHJldHVybn07XG4gICAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgICB9O1xuICAgIHNldCBkZXNjcmlwdGlvbih2YWx1ZSl7XG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPCAzKXtcbiAgICAgICAgICAgIGFsZXJ0KCdEZXNjcmlwdGlvbiBtdXN0IGJlIGF0IGxlYXN0IDMgY2hhcmFjdGVycycpO1xuICAgICAgICByZXR1cm59O1xuICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICAgIH07XG4gICAgZ2V0IG5hbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfTtcbiAgICBnZXQgZGVzY3JpcHRpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICAgIH07XG4gICAgYWRkVG9Ebyh0b2RvKXtcbiAgICAgICAgdGhpcy50b0RvTGlzdC5wdXNoKHRvZG8pO1xuICAgICAgICByZXR1cm4gdGhpcy50b0RvTGlzdDtcbiAgICB9O1xuICAgIHJlbW92ZVRvRG8odG9kbyl7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy50b0RvTGlzdC5maW5kSW5kZXgodG9kbyk7XG4gICAgICAgIHRoaXMudG9Eb0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9Eb0xpc3Q7XG4gICAgfTtcbn07XG5cbmNsYXNzIFRvRG8gZXh0ZW5kcyBQcm9qZWN0c3tcbiAgICBjb25zdHJ1Y3RvcihuYW1lLGRlc2NyaXB0aW9uLGR1ZURhdGUsIHByaW9yaXR5KXtcbiAgICAgICAgc3VwZXIobmFtZSxkZXNjcmlwdGlvbik7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9O1xuICAgIHNldCBuYW1lKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPCAzKXtcbiAgICAgICAgICAgIGFsZXJ0KFwiTmFtZSBtdXN0IGJlIGF0IGxlYXN0IDMgY2hhcmFjdGVyc1wiKTtcbiAgICAgICAgcmV0dXJufTtcbiAgICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICAgIH07XG4gICAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlKXtcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA8IDMpe1xuICAgICAgICAgICAgYWxlcnQoJ0Rlc2NyaXB0aW9uIG11c3QgYmUgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzJyk7XG4gICAgICAgIHJldHVybn07XG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gICAgfTtcbiAgICBnZXQgbmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICB9O1xuICAgIGdldCBkZXNjcmlwdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gICAgfTtcbiAgICBzZXQgZHVlRGF0ZSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZHVlRGF0ZSA9IHZhbHVlO1xuICAgIH07XG4gICAgc2V0IHByaW9yaXR5KHZhbHVlKXtcbiAgICAgICByZXR1cm4gdGhpcy5fcHJpb3JpdHkgPSB2YWx1ZTtcbiAgICB9O1xuICAgIGdldCBkdWVEYXRlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9kdWVEYXRlO1xuICAgIH07XG4gICAgZ2V0IHByaW9yaXR5KCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcbiAgICB9O1xuXG59OyIsImV4cG9ydCB7VERFZGl0b3IsIGdldFRvRG99O1xuaW1wb3J0IHtUb0RvfSBmcm9tIFwiLi9zY3JpcHRcIjtcblxuZnVuY3Rpb24gVERFZGl0b3IgKCl7XG4gICAgLy9nZXQgbWFpbiB3cmFwcGVyIFxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdG9yJyk7XG5cbiAgICAvL2NyZWF0ZSB3cmFwcGVyIHRvIGhvbGQgZm9ybS4gTWFrZXMgaXQgZWFzaWVyIHRvIHJlbW92ZSBhbGwgYWZ0ZXIgY29tcGxldGluZ1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvV3JhcHBlcicpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQod3JhcHBlcik7XG5cbiAgICAvL25hbWUgb2YgdG8tZG9cbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBuYW1lLnRleHRDb250ZW50ID0gXCJOYW1lXCI7XG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywnVERuYW1lJyk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChuYW1lKTtcblxuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdURG5hbWUnKTtcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xuICAgIG5hbWUuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcblxuXG4gICAgLy9kZXNjcmlwdGlvbiBvZiBuZXcgdG8tZG9cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uXCI7XG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsJ1REZGVzYycpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgZGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBkZXNjSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ1REZGVzYycpO1xuICAgIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRlc2NJbnB1dCk7XG5cbiAgICAvL2RhdGUgZHVlIFxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IFwiRGF0ZSBkdWVcIjtcbiAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCdkdWVEYXRlJyk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdkdWVEYXRlJyk7XG4gICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ2RhdGUnKTtcbiAgICBkdWVEYXRlLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG5cbiAgICAvL3ByaW9yaXR5XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gXCJQcmlvcml0eSByYW5naW5nIGZyb20gMSAobG93KSB0byA1IChoaWdoKVwiO1xuICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCdwcmlvcml0eScpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwcmlvcml0eUkuc2V0QXR0cmlidXRlKCd0eXBlJywnbnVtYmVyJyk7XG4gICAgcHJpb3JpdHlJLnNldEF0dHJpYnV0ZSgnbWluJywgJzEnKTtcbiAgICBwcmlvcml0eUkuc2V0QXR0cmlidXRlKCdtYXgnLCAnNScpO1xuICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5SSk7XG5cbi8vc3VibWl0IGJ1dHRvbiBhbmQgZXZlbnQgbGlzdGVuZXIgXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9IFwiVERTdWJtaXRcIjtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbiAgICBjb25zdCByZXNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJlc2V0LnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuICAgIHJlc2V0LnRleHRDb250ZW50ID0gXCJSZXNldFwiO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQocmVzZXQpO1xuXG4gICAgcmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICBuYW1lSW5wdXQudmFsdWUgPSBudWxsO1xuICAgICAgICBkZXNjSW5wdXQudmFsdWUgPSBudWxsO1xuICAgICAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSBudWxsO1xuICAgICAgICBwcmlvcml0eS52YWx1ZSA9IG51bGw7XG4gICAgfSk7XG5cbiAgICAvL2NhbmNlbCBidXR0b24gYW5kIGV2ZW50IGxpc3RlbmVyXG4gICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuICAgIGNhbmNlbC50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChjYW5jZWwpO1xuXG4gICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBtYWluLnJlbW92ZSh3cmFwcGVyKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB3cmFwcGVyO1xuXG59O1xuXG5mdW5jdGlvbiBnZXRUb0RvKCl7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdURE5hbWUnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdURERlc2MnKTtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpO1xuXG4gICAgY29uc3QgdG9kbyA9IG5ldyBUb0RvKG5hbWUudmFsdWUsZGVzY3JpcHRpb24udmFsdWUsZHVlRGF0ZS52YWx1ZSxwcmlvcml0eS52YWx1ZSk7XG5cbiAgICBjb25zdCB0b2RvRWRpdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRvcicpO1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0VkaXRvcicpO1xuICAgIHRvZG9FZGl0b3IucmVtb3ZlKHdyYXBwZXIpO1xuXG4gICAgcmV0dXJuIHRvZG87IFxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=