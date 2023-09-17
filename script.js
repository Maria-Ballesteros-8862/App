const btn = document.querySelector("[data-form-btn]");

// listener: el método que nos va a ayudar a generar un listener es AaddEventListener.
//las arrow functions (funciones flecha) o también conocidas como funciones anónimas.

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement('li');
    input.value = '';
    task.classList.add("card");
    const taskContent = document.createElement('div');
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement('span');
    titleTask.classList.add('Task');
    taskContent.appendChild(titleTask);
    titleTask.innerText = value
    const content =  `
        ${checkComplete()}; 
        <i class="fas fa-trash-alt trashIcon icon"></i>`; 
    //backticks 
   // task.innerHTML = content;
    task.appendChild(taskContent);
    list.appendChild(task);
};


btn.addEventListener ("click", createTask);

const checkComplete = () => {
    const i = document.createElement("i")
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click', completeTask)
    return i; 
};

// Imediately invaked function expression (IIFE)
const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle('fas');
    element.classList.toggle('completeIncon');
    element.classList.toggle('far');
};
