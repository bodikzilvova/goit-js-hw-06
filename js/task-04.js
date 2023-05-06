

let counterValue = 0;

const btnDecrement = document.querySelector(`button[data-action="decrement"]`);
btnDecrement.style.backgroundColor = "red";
const btnIncrement = document.querySelector(`button[data-action="increment"]`);
btnIncrement.style.backgroundColor = "blue";
const newValue = document.querySelector(`span#value`);


btnDecrement.addEventListener("click", () => {
    counterValue -= 1;
    newValue.textContent = counterValue;
    
  });

  btnIncrement.addEventListener("click", () => {
    counterValue += 1;
    newValue.textContent = counterValue;
   
  });