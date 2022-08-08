import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state'
const form = document.querySelector('.feedback-form')
// const input = document.querySelector('.feedback-form input')
// const message = document.querySelector('.feedback-form textarea')
const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

form.addEventListener('submit', onSubmit);
form.addEventListener('input', throttle(onInput, 500));

savedInput();

function onSubmit(e) {
    // if (input.value === "" || message.value === "") {
    if (form.elements[0].value === "" || form.elements[1].value === "") {
        alert("Все поля должны быть заполнены!");
        return
    }
    e.preventDefault();
    console.log(data)
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}
function onInput(e) {
    data[e.target.name] = e.target.value
    const dataJson = JSON.stringify(data);
    localStorage.setItem(STORAGE_KEY, dataJson);
}
function savedInput() {
    const savedText = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedText) {
        Object.entries(savedText).forEach(([key, value]) => {
            data[key] = value;
            form.elements[key].value = value;
    // input.value = savedText.email || '';
    // message.value = savedText.message || '';
        });
    }
    }