

const form = document.querySelector(`.login-form`);

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
      elements: { email, password }
    } = event.currentTarget;

    let data = {};
    if (email.value === "" || password.value === "") {
        return alert("Заповність усі поля");
      } else {
        data.email =email.value,
        data.password =password.value
      }
      console.log(data)
  event.currentTarget.reset();
};






