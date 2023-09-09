const btn = document.querySelector("[data-form-btn]");
console.log(btn);

// listener: el método que nos va a ayudar a generar un listener es AaddEventListener.
//las arrow functions (funciones flecha) o también conocidas como funciones anónimas.

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]")
    console.log(input.value);
}

btn.addEventListener ("click", createTask);