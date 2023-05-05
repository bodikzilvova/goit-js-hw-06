// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, 
// оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const sizeControl = document.querySelector(`input#font-size-control`);
console.log(sizeControl);
const textSize = document.querySelector(`span#text`);
console.log(textSize);


sizeControl.addEventListener("input", () => {
    const size = sizeControl.value;
  textSize.style.fontSize = `${size}px`;

});