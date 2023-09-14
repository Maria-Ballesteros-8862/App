const btn = document.querySelector("[data-form-btn]");
console.log(btn);

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
    const content =  `<div>
        <i class="far fa-check-square icon"></i>
        <span class="task">${value}</span>
        </div> 
        <i class="fas fa-trash-alt trashIcon icon"></i>`; 
    //backticks 
    task.innerHTML = content;
    list.appendChild(task);
    console.log(content);
}

btn.addEventListener ("click", createTask);