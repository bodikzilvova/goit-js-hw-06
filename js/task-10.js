function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const inputAmount = document.querySelector(`input`);
console.log(inputAmount);
const btnCreate = document.querySelector(`button[data-create]`);
console.log(btnCreate);
const btnDestroy = document.querySelector(`button[data-destroy]`);
console.log(btnDestroy);
const boxes = document.querySelector(`div#boxes`);
console.log(boxes);



let boxWidth = 30;
let boxHeight = 30;

btnCreate.addEventListener('click', () => {
  createBoxes(Number(inputAmount.value));
});

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const container = document.createElement("div");
    container.style.width = `${boxWidth}px`;
    container.style.height = `${boxHeight}px`;
    container.style.backgroundColor = getRandomHexColor();

    boxWidth += 10;
    boxHeight += 10;

    boxes.append(container);
    
  }
};


btnDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
boxes.innerHTML = "";
boxWidth = 30;
boxHeight = 30;
};

