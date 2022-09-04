"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["script"],{

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Projects": () => (/* binding */ Projects),
/* harmony export */   "projectList": () => (/* binding */ projectList)
/* harmony export */ });


const projectList = ()=>{
    //the array of projects
    const list = [];
    undefined.project = project;
    //function to add project to array;
    undefined.add = (project) =>{
        list.push(project);
    };

    undefined.remove = (project) =>{
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/script.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUdFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLElBQUksU0FBSTtBQUNSO0FBQ0EsSUFBSSxTQUFJO0FBQ1I7QUFDQTs7QUFFQSxJQUFJLFNBQUk7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7XG4gICAgcHJvamVjdExpc3QsXG4gICAgUHJvamVjdHNcbn07XG5cbmNvbnN0IHByb2plY3RMaXN0ID0gKCk9PntcbiAgICAvL3RoZSBhcnJheSBvZiBwcm9qZWN0c1xuICAgIGNvbnN0IGxpc3QgPSBbXTtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIC8vZnVuY3Rpb24gdG8gYWRkIHByb2plY3QgdG8gYXJyYXk7XG4gICAgdGhpcy5hZGQgPSAocHJvamVjdCkgPT57XG4gICAgICAgIGxpc3QucHVzaChwcm9qZWN0KTtcbiAgICB9O1xuXG4gICAgdGhpcy5yZW1vdmUgPSAocHJvamVjdCkgPT57XG4gICAgICAgIGluZGV4ID0gbGlzdC5maW5kSW5kZXgocHJvamVjdCk7XG4gICAgICAgIGxpc3Quc3BsaWNlKGluZGV4LDEpO1xuICAgIH07XG4gICAgcmV0dXJue1xuICAgICAgICBsaXN0LFxuICAgICAgICBhZGQsIFxuICAgICAgICByZW1vdmVcbiAgICB9O1xufTtcblxuXG5jbGFzcyBQcm9qZWN0cyB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24pe1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9ZGVzY3JpcHRpb247XG4gICAgdGhpcy50b0RvTGlzdCA9IFtdO1xufVxuICAgIHNldCBuYW1lKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPCAzKXtcbiAgICAgICAgICAgIGFsZXJ0KFwiTmFtZSBtdXN0IGJlIGF0IGxlYXN0IDMgY2hhcmFjdGVyc1wiKTtcbiAgICAgICAgcmV0dXJufTtcbiAgICAgICAgdGhpcy5uYW1lID0gdmFsdWU7XG4gICAgfTtcbiAgICBzZXQgZGVzY3JpcHRpb24odmFsdWUpe1xuICAgICAgICBpZiAodmFsdWUubGVuZ3RoIDwgMyl7XG4gICAgICAgICAgICBhbGVydCgnRGVzY3JpcHRpb24gbXVzdCBiZSBhdCBsZWFzdCAzIGNoYXJhY3RlcnMnKTtcbiAgICAgICAgcmV0dXJufTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICAgIH07XG4gICAgZ2V0IG5hbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9O1xuICAgIGdldCBkZXNjcmlwdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9O1xuICAgIGFkZFRvRG8odG9kbyl7XG4gICAgICAgIHRoaXMudG9Eb0xpc3QucHVzaCh0b2RvKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9Eb0xpc3Q7XG4gICAgfTtcbiAgICByZW1vdmVUb0RvKHRvZG8pe1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMudG9Eb0xpc3QuZmluZEluZGV4KHRvZG8pO1xuICAgICAgICB0aGlzLnRvRG9MaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHJldHVybiB0aGlzLnRvRG9MaXN0O1xuICAgIH07XG5cbiAgICBnZXQgdG9Eb0xpc3QoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9Eb0xpc3Q7XG4gICAgfTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=