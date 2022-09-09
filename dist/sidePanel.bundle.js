"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([
  ["sidePanel"],
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

    /***/ "./src/sidepanel.js":
      /*!**************************!*\
  !*** ./src/sidepanel.js ***!
  \**************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ addScreen: () => /* binding */ addScreen,
          /* harmony export */ projectElement: () =>
            /* binding */ projectElement,
          /* harmony export */
        });
        /* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./script.js */ "./src/script.js");
        /* harmony import */ var _todoEditor__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./todoEditor */ "./src/todoEditor.js");

        function addScreen() {
          const wrapper = document.createElement("div");
          //the form to create the new project

          //name of new project
          const name = document.createElement("label");
          name.textContent = "Name";
          name.setAttribute("id", "Pname");
          wrapper.appendChild(name);

          const nameInput = document.createElement("input");
          nameInput.setAttribute("id", "PnameI");
          nameInput.setAttribute("type", "text");
          name.appendChild(nameInput);

          //description of new project
          const description = document.createElement("label");
          description.textContent = "Description";
          description.setAttribute("id", "PdescI");
          wrapper.appendChild(description);

          const descInput = document.createElement("textarea");
          descInput.setAttribute("id", "Pdesc");
          description.appendChild(descInput);

          //submit button and event listener
          const submit = document.createElement("button");
          submit.setAttribute("type", "button");
          submit.textContent = "Submit";
          wrapper.appendChild(submit);

          // list of projects in array
          const list = (0,
          _script_js__WEBPACK_IMPORTED_MODULE_0__.projectList)();

          //submit button
          submit.addEventListener("click", () => {
            const newItem =
              new _script_js__WEBPACK_IMPORTED_MODULE_0__.Projects(
                nameInput.value,
                descInput.value
              );
            list.add(newItem);
            projectElement(list.list);
            wrapper.remove(submit);
          });

          //reset button and event listener
          const reset = document.createElement("button");
          reset.setAttribute("type", "button");
          reset.textContent = "Reset";
          wrapper.appendChild(reset);

          reset.addEventListener("click", () => {
            nameInput.value = null;
            descInput.value = null;
          });

          //cancel button and event listener
          const cancel = document.createElement("button");
          cancel.setAttribute("type", "button");
          cancel.textContent = "Cancel";
          wrapper.appendChild(cancel);

          cancel.addEventListener("click", () => {
            wrapper.remove(submit);
          });

          return wrapper;
        }

        function sideWrap() {
          const sideWrap = document.createElement("div");
          sideWrap.setAttribute("id", "projectWrapper");

          return sideWrap;
        }

        function projectElement(projects) {
          //remove current listed projects
          const sidePanel = document.getElementById("sidePanel");
          sidePanel.removeChild(sidePanel.lastChild);

          //re-add sideWrap so it's empty
          SPAppend(sideWrap());

          const wrapper = document.getElementById("projectWrapper");
          projects.forEach((element) => {
            const projectName = document.createElement("div");
            projectName.textContent = element.name;
            projectName.setAttribute("class", "projectName");

            //button to add to-do
            const newB = document.createElement("button");
            newB.setAttribute("type", "button");
            newB.textContent = "+";
            projectName.appendChild(newB);

            newB.addEventListener("click", () => {
              const todoEditor = document.getElementById("editor");
              todoEditor.appendChild(
                (0, _todoEditor__WEBPACK_IMPORTED_MODULE_1__.TDEditor)()
              );
            });

            const TDSubmit = document.getElementById("TDSubmit");
            TDSubmit.addEventListener("click", () => {
              element.addToDo(getToDo());
              element.toDoList.forEach(todo, () => {
                const todoname = document.createElement("div");
                todoname.textContent = todo.name;
                todoname.addEventListener("click", () => {
                  //main wrapper
                  const todoEditor = document.getElementById("editor");
                  //remove last child in case they're already editing or looking at a current todo
                  todoEditor.removeChild(todoEditor.lastChild);

                  //wrapper for showing the todo details
                  const wrapper = document.createElement("div");
                  todoEditor.appendChild(wrapper);
                  wrapper.setAttribute("id", "showToDo");

                  const name = document.createElement("div");
                  name.textContent = todo.name;
                  wrapper.appendChild(name);

                  const description = document.createElement("div");
                  description.textContent = todo.description;
                  wrapper.appendChild(description);

                  const dueDate = document.createElement("div");
                  dueDate.textContent = todo.dueDate;
                  wrapper.appendChild(dueDate);

                  const priority = document.createElement("div");
                  priority.textContent = todo.priority;
                  wrapper.appendChild(priority);
                });
              });
            });

            wrapper.appendChild(projectName);
          });
        }

        /***/
      },

    /***/ "./src/todoEditor.js":
      /*!***************************!*\
  !*** ./src/todoEditor.js ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ TDEditor: () => /* binding */ TDEditor,
          /* harmony export */ getToDo: () => /* binding */ getToDo,
          /* harmony export */
        });
        /* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./script */ "./src/script.js");

        function TDEditor() {
          //get main wrapper
          const main = document.getElementById("editor");

          //create wrapper to hold form. Makes it easier to remove all after completing
          const wrapper = document.createElement("div");
          wrapper.setAttribute("id", "todoWrapper");
          main.appendChild(wrapper);

          //name of to-do
          const name = document.createElement("label");
          name.textContent = "Name";
          name.setAttribute("id", "TDname");
          wrapper.appendChild(name);

          const nameInput = document.createElement("input");
          nameInput.setAttribute("id", "TDname");
          nameInput.setAttribute("type", "text");
          name.appendChild(nameInput);

          //description of new to-do
          const description = document.createElement("label");
          description.textContent = "Description";
          description.setAttribute("id", "TDdesc");
          wrapper.appendChild(description);

          const descInput = document.createElement("textarea");
          descInput.setAttribute("id", "TDdesc");
          description.appendChild(descInput);

          //date due
          const dueDate = document.createElement("label");
          dueDate.textContent = "Date due";
          dueDate.setAttribute("id", "dueDate");
          wrapper.appendChild(dueDate);

          const dueDateInput = document.createElement("input");
          dueDateInput.setAttribute("id", "dueDate");
          dueDateInput.setAttribute("type", "date");
          dueDate.appendChild(dueDateInput);

          //priority
          const priority = document.createElement("label");
          priority.textContent = "Priority ranging from 1 (low) to 5 (high)";
          priority.setAttribute("id", "priority");
          wrapper.appendChild(priority);

          const priorityI = document.createElement("input");
          priorityI.setAttribute("type", "number");
          priorityI.setAttribute("min", "1");
          priorityI.setAttribute("max", "5");
          priority.appendChild(priorityI);

          //submit button and event listener
          const submit = document.createElement("button");
          submit.setAttribute("type", "button");
          submit.textContent = "TDSubmit";
          wrapper.appendChild(submit);

          const reset = document.createElement("button");
          reset.setAttribute("type", "button");
          reset.textContent = "Reset";
          wrapper.appendChild(reset);

          reset.addEventListener("click", () => {
            nameInput.value = null;
            descInput.value = null;
            dueDateInput.value = null;
            priority.value = null;
          });

          //cancel button and event listener
          const cancel = document.createElement("button");
          cancel.setAttribute("type", "button");
          cancel.textContent = "Cancel";
          wrapper.appendChild(cancel);

          cancel.addEventListener("click", () => {
            main.remove(wrapper);
          });

          return wrapper;
        }

        function getToDo() {
          const name = document.getElementById("TDName");
          const description = document.getElementById("TDDesc");
          const dueDate = document.getElementById("dueDate");
          const priority = document.getElementById("priority");

          const todo = new _script__WEBPACK_IMPORTED_MODULE_0__.ToDo(
            name.value,
            description.value,
            dueDate.value,
            priority.value
          );

          const todoEditor = document.getElementById("editor");
          const wrapper = document.getElementById("todoEditor");
          todoEditor.remove(wrapper);

          return todo;
        }

        /***/
      },
  },
  /******/ (__webpack_require__) => {
    // webpackRuntimeModules
    /******/ var __webpack_exec__ = (moduleId) =>
      __webpack_require__((__webpack_require__.s = moduleId));
    /******/ var __webpack_exports__ = __webpack_exec__("./src/sidepanel.js");
    /******/
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZVBhbmVsLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFJRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuR21DO0FBQ2M7QUFDWDs7O0FBR3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHVEQUFXOztBQUU1QjtBQUNBO0FBQ0EsNEJBQTRCLGdEQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMscURBQVE7QUFDM0MsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEoyQjtBQUNHOztBQUU5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHlDQUFJOztBQUV6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2NyaXB0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2lkZXBhbmVsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kb0VkaXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge1xuICAgIHByb2plY3RMaXN0LFxuICAgIFByb2plY3RzLFxuICAgIFRvRG9cbn07XG5cbmNvbnN0IHByb2plY3RMaXN0ID0gKCk9PntcbiAgICAvL3RoZSBhcnJheSBvZiBwcm9qZWN0c1xuICAgIGNvbnN0IGxpc3QgPSBbXTtcbiAgICAvL2Z1bmN0aW9uIHRvIGFkZCBwcm9qZWN0IHRvIGFycmF5O1xuICAgIGNvbnN0IGFkZCA9IChwcm9qZWN0KSA9PntcbiAgICAgICAgbGlzdC5wdXNoKHByb2plY3QpOyAgXG4gICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZSA9IChwcm9qZWN0KSA9PntcbiAgICAgICAgaW5kZXggPSBsaXN0LmZpbmRJbmRleChwcm9qZWN0KTtcbiAgICAgICAgbGlzdC5zcGxpY2UoaW5kZXgsMSk7XG4gICAgfTtcbiAgICByZXR1cm57XG4gICAgICAgIGxpc3QsXG4gICAgICAgIGFkZCwgXG4gICAgICAgIHJlbW92ZVxuICAgIH07XG59O1xuXG5cblxuY2xhc3MgUHJvamVjdHMge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uKXtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLnRvRG9MaXN0ID0gW107XG59XG4gICAgc2V0IG5hbWUodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA8IDMpe1xuICAgICAgICAgICAgYWxlcnQoXCJOYW1lIG11c3QgYmUgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzXCIpO1xuICAgICAgICByZXR1cm59O1xuICAgICAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gICAgfTtcbiAgICBzZXQgZGVzY3JpcHRpb24odmFsdWUpe1xuICAgICAgICBpZiAodmFsdWUubGVuZ3RoIDwgMyl7XG4gICAgICAgICAgICBhbGVydCgnRGVzY3JpcHRpb24gbXVzdCBiZSBhdCBsZWFzdCAzIGNoYXJhY3RlcnMnKTtcbiAgICAgICAgcmV0dXJufTtcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgICB9O1xuICAgIGdldCBuYW1lKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgIH07XG4gICAgZ2V0IGRlc2NyaXB0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgICB9O1xuICAgIGFkZFRvRG8odG9kbyl7XG4gICAgICAgIHRoaXMudG9Eb0xpc3QucHVzaCh0b2RvKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9Eb0xpc3Q7XG4gICAgfTtcbiAgICByZW1vdmVUb0RvKHRvZG8pe1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMudG9Eb0xpc3QuZmluZEluZGV4KHRvZG8pO1xuICAgICAgICB0aGlzLnRvRG9MaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHJldHVybiB0aGlzLnRvRG9MaXN0O1xuICAgIH07XG59O1xuXG5jbGFzcyBUb0RvIGV4dGVuZHMgUHJvamVjdHN7XG4gICAgY29uc3RydWN0b3IobmFtZSxkZXNjcmlwdGlvbixkdWVEYXRlLCBwcmlvcml0eSl7XG4gICAgICAgIHN1cGVyKG5hbWUsZGVzY3JpcHRpb24pO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfTtcbiAgICBzZXQgbmFtZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUubGVuZ3RoIDwgMyl7XG4gICAgICAgICAgICBhbGVydChcIk5hbWUgbXVzdCBiZSBhdCBsZWFzdCAzIGNoYXJhY3RlcnNcIik7XG4gICAgICAgIHJldHVybn07XG4gICAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgICB9O1xuICAgIHNldCBkZXNjcmlwdGlvbih2YWx1ZSl7XG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPCAzKXtcbiAgICAgICAgICAgIGFsZXJ0KCdEZXNjcmlwdGlvbiBtdXN0IGJlIGF0IGxlYXN0IDMgY2hhcmFjdGVycycpO1xuICAgICAgICByZXR1cm59O1xuICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICAgIH07XG4gICAgZ2V0IG5hbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfTtcbiAgICBnZXQgZGVzY3JpcHRpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICAgIH07XG4gICAgc2V0IGR1ZURhdGUodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2R1ZURhdGUgPSB2YWx1ZTtcbiAgICB9O1xuICAgIHNldCBwcmlvcml0eSh2YWx1ZSl7XG4gICAgICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5ID0gdmFsdWU7XG4gICAgfTtcbiAgICBnZXQgZHVlRGF0ZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fZHVlRGF0ZTtcbiAgICB9O1xuICAgIGdldCBwcmlvcml0eSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJpb3JpdHk7XG4gICAgfTtcblxufTsiLCJleHBvcnQge2FkZFNjcmVlbiwgcHJvamVjdEVsZW1lbnR9O1xuaW1wb3J0IHtwcm9qZWN0TGlzdCxQcm9qZWN0c30gZnJvbSAnLi9zY3JpcHQuanMnO1xuaW1wb3J0IHtUREVkaXRvcn0gZnJvbSAnLi90b2RvRWRpdG9yJztcblxuXG5mdW5jdGlvbiBhZGRTY3JlZW4gKCkge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvL3RoZSBmb3JtIHRvIGNyZWF0ZSB0aGUgbmV3IHByb2plY3RcblxuICAgIC8vbmFtZSBvZiBuZXcgcHJvamVjdFxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSBcIk5hbWVcIjtcbiAgICBuYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCdQbmFtZScpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobmFtZSk7XG5cbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywnUG5hbWVJJyk7XG4gICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKTtcbiAgICBuYW1lLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG5cblxuICAgIC8vZGVzY3JpcHRpb24gb2YgbmV3IHByb2plY3RcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uXCI7XG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsJ1BkZXNjSScpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgZGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBkZXNjSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ1BkZXNjJyk7XG4gICAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZGVzY0lucHV0KTtcblxuICAgIC8vc3VibWl0IGJ1dHRvbiBhbmQgZXZlbnQgbGlzdGVuZXIgXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG4gICAgLy8gbGlzdCBvZiBwcm9qZWN0cyBpbiBhcnJheVxuICAgIGNvbnN0IGxpc3QgPSBwcm9qZWN0TGlzdCgpO1xuXG4gICAgLy9zdWJtaXQgYnV0dG9uIFxuICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgY29uc3QgbmV3SXRlbSA9IG5ldyBQcm9qZWN0cyhuYW1lSW5wdXQudmFsdWUsIGRlc2NJbnB1dC52YWx1ZSk7XG4gICAgICAgIGxpc3QuYWRkKG5ld0l0ZW0pO1xuICAgICAgICBwcm9qZWN0RWxlbWVudChsaXN0Lmxpc3QpO1xuICAgICAgICB3cmFwcGVyLnJlbW92ZShzdWJtaXQpO1xuICAgIH0pO1xuXG4gICAgLy9yZXNldCBidXR0b24gYW5kIGV2ZW50IGxpc3RlbmVyXG4gICAgY29uc3QgcmVzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZXNldC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcbiAgICByZXNldC50ZXh0Q29udGVudCA9IFwiUmVzZXRcIjtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHJlc2V0KTtcblxuICAgIHJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgbmFtZUlucHV0LnZhbHVlID0gbnVsbDtcbiAgICAgICAgZGVzY0lucHV0LnZhbHVlID0gbnVsbDtcbiAgICB9KTtcblxuICAgIC8vY2FuY2VsIGJ1dHRvbiBhbmQgZXZlbnQgbGlzdGVuZXJcbiAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWwuc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG4gICAgY2FuY2VsLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNhbmNlbCk7XG5cbiAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIHdyYXBwZXIucmVtb3ZlKHN1Ym1pdCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gd3JhcHBlcjtcbn07XG5cbmZ1bmN0aW9uIHNpZGVXcmFwICgpe1xuICAgIGNvbnN0IHNpZGVXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZVdyYXAuc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3RXcmFwcGVyJyk7XG4gICAgXG4gICAgcmV0dXJuIHNpZGVXcmFwO1xufTtcblxuZnVuY3Rpb24gcHJvamVjdEVsZW1lbnQocHJvamVjdHMpe1xuICAgIC8vcmVtb3ZlIGN1cnJlbnQgbGlzdGVkIHByb2plY3RzXG4gICAgY29uc3Qgc2lkZVBhbmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGVQYW5lbCcpO1xuICAgIHNpZGVQYW5lbC5yZW1vdmVDaGlsZChzaWRlUGFuZWwubGFzdENoaWxkKTtcblxuICAgIC8vcmUtYWRkIHNpZGVXcmFwIHNvIGl0J3MgZW1wdHkgXG4gICAgU1BBcHBlbmQoc2lkZVdyYXAoKSk7XG5cbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RXcmFwcGVyJyk7XG4gICAgcHJvamVjdHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBlbGVtZW50Lm5hbWU7XG4gICAgICAgIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdwcm9qZWN0TmFtZScpO1xuICAgICAgICBcbiAgICAgICAgLy9idXR0b24gdG8gYWRkIHRvLWRvIFxuICAgICAgICBjb25zdCBuZXdCID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIG5ld0Iuc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG4gICAgICAgIG5ld0IudGV4dENvbnRlbnQgPSBcIitcIjtcbiAgICAgICAgcHJvamVjdE5hbWUuYXBwZW5kQ2hpbGQobmV3Qik7XG5cbiAgICAgICAgbmV3Qi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgIGNvbnN0IHRvZG9FZGl0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdG9yJyk7XG4gICAgICAgICAgICB0b2RvRWRpdG9yLmFwcGVuZENoaWxkKFRERWRpdG9yKCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBURFN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdURFN1Ym1pdCcpO1xuICAgICAgICBURFN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkVG9EbyhnZXRUb0RvKCkpO1xuICAgICAgICAgICAgZWxlbWVudC50b0RvTGlzdC5mb3JFYWNoKCh0b2RvKSwgKCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RvbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRvZG9uYW1lLnRleHRDb250ZW50ID0gdG9kby5uYW1lO1xuICAgICAgICAgICAgICAgIHRvZG9uYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgICAgICAgICAgICAgLy9tYWluIHdyYXBwZXJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0VkaXRvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0b3InKTtcbiAgICAgICAgICAgICAgICAgICAgLy9yZW1vdmUgbGFzdCBjaGlsZCBpbiBjYXNlIHRoZXkncmUgYWxyZWFkeSBlZGl0aW5nIG9yIGxvb2tpbmcgYXQgYSBjdXJyZW50IHRvZG9cbiAgICAgICAgICAgICAgICAgICAgdG9kb0VkaXRvci5yZW1vdmVDaGlsZCh0b2RvRWRpdG9yLmxhc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvL3dyYXBwZXIgZm9yIHNob3dpbmcgdGhlIHRvZG8gZGV0YWlscyBcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRWRpdG9yLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCdzaG93VG9EbycpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gdG9kby5uYW1lO1xuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKG5hbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gdG9kby5kdWVEYXRlO1xuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gdG9kby5wcmlvcml0eTtcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICAgICAgXG4gICAgfSk7XG59OyIsImV4cG9ydCB7VERFZGl0b3IsIGdldFRvRG99O1xuaW1wb3J0IHtUb0RvfSBmcm9tIFwiLi9zY3JpcHRcIjtcblxuZnVuY3Rpb24gVERFZGl0b3IgKCl7XG4gICAgLy9nZXQgbWFpbiB3cmFwcGVyIFxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdG9yJyk7XG5cbiAgICAvL2NyZWF0ZSB3cmFwcGVyIHRvIGhvbGQgZm9ybS4gTWFrZXMgaXQgZWFzaWVyIHRvIHJlbW92ZSBhbGwgYWZ0ZXIgY29tcGxldGluZ1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvV3JhcHBlcicpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQod3JhcHBlcik7XG5cbiAgICAvL25hbWUgb2YgdG8tZG9cbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBuYW1lLnRleHRDb250ZW50ID0gXCJOYW1lXCI7XG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywnVERuYW1lJyk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChuYW1lKTtcblxuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdURG5hbWUnKTtcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xuICAgIG5hbWUuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcblxuXG4gICAgLy9kZXNjcmlwdGlvbiBvZiBuZXcgdG8tZG9cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uXCI7XG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsJ1REZGVzYycpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgZGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBkZXNjSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ1REZGVzYycpO1xuICAgIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRlc2NJbnB1dCk7XG5cbiAgICAvL2RhdGUgZHVlIFxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IFwiRGF0ZSBkdWVcIjtcbiAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCdkdWVEYXRlJyk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdkdWVEYXRlJyk7XG4gICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ2RhdGUnKTtcbiAgICBkdWVEYXRlLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG5cbiAgICAvL3ByaW9yaXR5XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gXCJQcmlvcml0eSByYW5naW5nIGZyb20gMSAobG93KSB0byA1IChoaWdoKVwiO1xuICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCdwcmlvcml0eScpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwcmlvcml0eUkuc2V0QXR0cmlidXRlKCd0eXBlJywnbnVtYmVyJyk7XG4gICAgcHJpb3JpdHlJLnNldEF0dHJpYnV0ZSgnbWluJywgJzEnKTtcbiAgICBwcmlvcml0eUkuc2V0QXR0cmlidXRlKCdtYXgnLCAnNScpO1xuICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5SSk7XG5cbi8vc3VibWl0IGJ1dHRvbiBhbmQgZXZlbnQgbGlzdGVuZXIgXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9IFwiVERTdWJtaXRcIjtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbiAgICBjb25zdCByZXNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJlc2V0LnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuICAgIHJlc2V0LnRleHRDb250ZW50ID0gXCJSZXNldFwiO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQocmVzZXQpO1xuXG4gICAgcmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICBuYW1lSW5wdXQudmFsdWUgPSBudWxsO1xuICAgICAgICBkZXNjSW5wdXQudmFsdWUgPSBudWxsO1xuICAgICAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSBudWxsO1xuICAgICAgICBwcmlvcml0eS52YWx1ZSA9IG51bGw7XG4gICAgfSk7XG5cbiAgICAvL2NhbmNlbCBidXR0b24gYW5kIGV2ZW50IGxpc3RlbmVyXG4gICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuICAgIGNhbmNlbC50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChjYW5jZWwpO1xuXG4gICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBtYWluLnJlbW92ZSh3cmFwcGVyKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB3cmFwcGVyO1xuXG59O1xuXG5mdW5jdGlvbiBnZXRUb0RvKCl7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdURE5hbWUnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdURERlc2MnKTtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpO1xuXG4gICAgY29uc3QgdG9kbyA9IG5ldyBUb0RvKG5hbWUudmFsdWUsZGVzY3JpcHRpb24udmFsdWUsZHVlRGF0ZS52YWx1ZSxwcmlvcml0eS52YWx1ZSk7XG5cbiAgICBjb25zdCB0b2RvRWRpdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRvcicpO1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0VkaXRvcicpO1xuICAgIHRvZG9FZGl0b3IucmVtb3ZlKHdyYXBwZXIpO1xuXG4gICAgcmV0dXJuIHRvZG87IFxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
