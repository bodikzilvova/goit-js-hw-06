function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const changeColor = document.querySelector(`body`);
console.log(changeColor);

const textColor = document.querySelector(`.color`);
console.log(textColor);

const btnColor = document.querySelector(`.change-color`);
console.log(btnColor);

btnColor.addEventListener("click", () => {
  changeColor.style.backgroundColor = getRandomHexColor();
  textColor.textContent = getRandomHexColor();

  
// Це чисто побавитись
  btnColor.style.backgroundColor = getRandomHexColor();
  btnColor.style.color = getRandomHexColor();
});

