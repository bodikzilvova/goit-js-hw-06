
let styleValidation = document.querySelector("style");
console.log(styleValidation);
const validInput = document.querySelector("input#validation-input");
console.log(validInput);

// КОД ДЛЯ ПЕРВІРКИ ТОЧНО 6 СИМВОЛІВ

validInput.addEventListener("blur", () => {
    if (validInput.value.length === 6) {
        validInput.classList.add("valid");
        validInput.classList.remove("invalid");
    } else { 
        validInput.classList.add("invalid");
        validInput.classList.remove("valid");
    }

});

// КОД ДЛЯ ПЕРВІРКИ ВІД 6 СИМВОЛІВ

// validInput.addEventListener("blur", () => {
//     if (validInput.value.length >= 6) {
//         validInput.classList.add("valid");
//         validInput.classList.remove("invalid");
//     } else { 
//         validInput.classList.add("invalid");
//         validInput.classList.remove("valid");
//     }

// });



