

const sizeControl = document.querySelector(`input#font-size-control`);

const textSize = document.querySelector(`span#text`);



sizeControl.addEventListener("input", () => {
    const size = sizeControl.value;
  textSize.style.fontSize = `${size}px`;

});