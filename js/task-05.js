// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
// підставляє його поточне значення в span#name-output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputName = document.querySelector(`input#name-input`);
const nameOutput = document.querySelector(`span#name-output`);
nameOutput.style.color = "tomato";


inputName.addEventListener("input", (event) =>{
    if (inputName.value === "") {
        nameOutput.textContent = "Anonymous";
    } else {nameOutput.textContent = event.currentTarget.value;
    }
    
});