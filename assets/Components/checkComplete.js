const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click', completeTask);
    return i; 
};

// Imediately invaked function expression (IIFE)
const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle('fas');
    element.classList.toggle('completeIncon');
    element.classList.toggle('far');
};


export default checkComplete;