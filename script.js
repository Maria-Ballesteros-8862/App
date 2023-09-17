import checkComplete from "./Components/checkComplete"
import deleteIcon from "./Components/deleteIcon"

const btn = document.querySelector("[data-form-btn]");

/* listener: el método que nos va a ayudar a generar un listener es AaddEventListener.*/

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    const list = document.querySelector('[data-list]');
    const task = document.createElement('li');
    task.classList.add("card");
    input.value = '';
    const taskContent = document.createElement('div');

    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);

    /*backticks*/
    /*task.innerHTML = content;*/
    task.appendChild(taskContent);
    taskContent.appendChild(deleteIcon());
    list.appendChild(task);
};


btn.addEventListener ("click", createTask);
//las arrow functions (funciones flecha) o también conocidas como funciones anónimas.
