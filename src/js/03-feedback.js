import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form')
const input = document.querySelector('.feedback-form input')
const message = document.querySelector('.feedback-form textarea')

form.addEventListener('submit', onSubmit);
input.addEventListener('input', throttle(onInput, 500));
message.addEventListener('input', throttle(onMessage, 500));
savedTextarea();
savedEmail();

function onSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem('feedback');
    localStorage.removeItem('email');
}

function onInput(e) {
    const inpValue = e.currentTarget.value;
    localStorage.setItem('email', inpValue);
}

function onMessage(e) {
    const msgValue = e.currentTarget.value;
    localStorage.setItem('feedback', msgValue);
}

function savedTextarea(e) {
    const textareaMessage = localStorage.getItem('feedback')
    if (textareaMessage) {
        message.value = textareaMessage;
    }  
}
function savedEmail(e) {
    const savedMail = localStorage.getItem('email')
    if (savedMail) {
        input.value = savedMail;
    }  
}
