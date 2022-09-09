"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([
  ["script"],
  {
    /***/ "./src/script.js":
      /*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Projects: () => /* binding */ Projects,
          /* harmony export */ ToDo: () => /* binding */ ToDo,
          /* harmony export */ projectList: () => /* binding */ projectList,
          /* harmony export */
        });

        const projectList = () => {
          //the array of projects
          const list = [];
          //function to add project to array;
          const add = (project) => {
            list.push(project);
          };

          const remove = (project) => {
            index = list.findIndex(project);
            list.splice(index, 1);
          };
          return {
            list,
            add,
            remove,
          };
        };

        class Projects {
          constructor(name, description) {
            this.name = name;
            this.description = description;
            this.toDoList = [];
          }
          set name(value) {
            if (value.length < 3) {
              alert("Name must be at least 3 characters");
              return;
            }
            this._name = value;
          }
          set description(value) {
            if (value.length < 3) {
              alert("Description must be at least 3 characters");
              return;
            }
            this._description = value;
          }
          get name() {
            return this._name;
          }
          get description() {
            return this._description;
          }
          addToDo(todo) {
            this.toDoList.push(todo);
            return this.toDoList;
          }
          removeToDo(todo) {
            const index = this.toDoList.findIndex(todo);
            this.toDoList.splice(index, 1);
            return this.toDoList;
          }
        }

        class ToDo extends Projects {
          constructor(name, description, dueDate, priority) {
            super(name, description);
            this.dueDate = dueDate;
            this.priority = priority;
          }
          set name(value) {
            if (value.length < 3) {
              alert("Name must be at least 3 characters");
              return;
            }
            this._name = value;
          }
          set description(value) {
            if (value.length < 3) {
              alert("Description must be at least 3 characters");
              return;
            }
            this._description = value;
          }
          get name() {
            return this._name;
          }
          get description() {
            return this._description;
          }
          set dueDate(value) {
            return (this._dueDate = value);
          }
          set priority(value) {
            return (this._priority = value);
          }
          get dueDate() {
            return this._dueDate;
          }
          get priority() {
            return this._priority;
          }
        }

        /***/
      },
  },
  /******/ (__webpack_require__) => {
    // webpackRuntimeModules
    /******/ var __webpack_exec__ = (moduleId) =>
      __webpack_require__((__webpack_require__.s = moduleId));
    /******/ var __webpack_exports__ = __webpack_exec__("./src/script.js");
    /******/
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFJRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7XG4gICAgcHJvamVjdExpc3QsXG4gICAgUHJvamVjdHMsXG4gICAgVG9Eb1xufTtcblxuY29uc3QgcHJvamVjdExpc3QgPSAoKT0+e1xuICAgIC8vdGhlIGFycmF5IG9mIHByb2plY3RzXG4gICAgY29uc3QgbGlzdCA9IFtdO1xuICAgIC8vZnVuY3Rpb24gdG8gYWRkIHByb2plY3QgdG8gYXJyYXk7XG4gICAgY29uc3QgYWRkID0gKHByb2plY3QpID0+e1xuICAgICAgICBsaXN0LnB1c2gocHJvamVjdCk7ICBcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlID0gKHByb2plY3QpID0+e1xuICAgICAgICBpbmRleCA9IGxpc3QuZmluZEluZGV4KHByb2plY3QpO1xuICAgICAgICBsaXN0LnNwbGljZShpbmRleCwxKTtcbiAgICB9O1xuICAgIHJldHVybntcbiAgICAgICAgbGlzdCxcbiAgICAgICAgYWRkLCBcbiAgICAgICAgcmVtb3ZlXG4gICAgfTtcbn07XG5cblxuXG5jbGFzcyBQcm9qZWN0cyB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24pe1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMudG9Eb0xpc3QgPSBbXTtcbn1cbiAgICBzZXQgbmFtZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUubGVuZ3RoIDwgMyl7XG4gICAgICAgICAgICBhbGVydChcIk5hbWUgbXVzdCBiZSBhdCBsZWFzdCAzIGNoYXJhY3RlcnNcIik7XG4gICAgICAgIHJldHVybn07XG4gICAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgICB9O1xuICAgIHNldCBkZXNjcmlwdGlvbih2YWx1ZSl7XG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPCAzKXtcbiAgICAgICAgICAgIGFsZXJ0KCdEZXNjcmlwdGlvbiBtdXN0IGJlIGF0IGxlYXN0IDMgY2hhcmFjdGVycycpO1xuICAgICAgICByZXR1cm59O1xuICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICAgIH07XG4gICAgZ2V0IG5hbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfTtcbiAgICBnZXQgZGVzY3JpcHRpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICAgIH07XG4gICAgYWRkVG9Ebyh0b2RvKXtcbiAgICAgICAgdGhpcy50b0RvTGlzdC5wdXNoKHRvZG8pO1xuICAgICAgICByZXR1cm4gdGhpcy50b0RvTGlzdDtcbiAgICB9O1xuICAgIHJlbW92ZVRvRG8odG9kbyl7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy50b0RvTGlzdC5maW5kSW5kZXgodG9kbyk7XG4gICAgICAgIHRoaXMudG9Eb0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9Eb0xpc3Q7XG4gICAgfTtcbn07XG5cbmNsYXNzIFRvRG8gZXh0ZW5kcyBQcm9qZWN0c3tcbiAgICBjb25zdHJ1Y3RvcihuYW1lLGRlc2NyaXB0aW9uLGR1ZURhdGUsIHByaW9yaXR5KXtcbiAgICAgICAgc3VwZXIobmFtZSxkZXNjcmlwdGlvbik7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9O1xuICAgIHNldCBuYW1lKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPCAzKXtcbiAgICAgICAgICAgIGFsZXJ0KFwiTmFtZSBtdXN0IGJlIGF0IGxlYXN0IDMgY2hhcmFjdGVyc1wiKTtcbiAgICAgICAgcmV0dXJufTtcbiAgICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICAgIH07XG4gICAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlKXtcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA8IDMpe1xuICAgICAgICAgICAgYWxlcnQoJ0Rlc2NyaXB0aW9uIG11c3QgYmUgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzJyk7XG4gICAgICAgIHJldHVybn07XG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gICAgfTtcbiAgICBnZXQgbmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICB9O1xuICAgIGdldCBkZXNjcmlwdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gICAgfTtcbiAgICBzZXQgZHVlRGF0ZSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZHVlRGF0ZSA9IHZhbHVlO1xuICAgIH07XG4gICAgc2V0IHByaW9yaXR5KHZhbHVlKXtcbiAgICAgICByZXR1cm4gdGhpcy5fcHJpb3JpdHkgPSB2YWx1ZTtcbiAgICB9O1xuICAgIGdldCBkdWVEYXRlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9kdWVEYXRlO1xuICAgIH07XG4gICAgZ2V0IHByaW9yaXR5KCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcbiAgICB9O1xuXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
