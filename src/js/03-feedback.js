import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form')
const input = document.querySelector('.feedback-form input')
const message = document.querySelector('.feedback-form textarea')
const data = {};

form.addEventListener('submit', onSubmit);
input.addEventListener('input', throttle(onInput, 500));
message.addEventListener('input', throttle(onMessage, 500));
savedTextarea();
savedEmail();



function onSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();

    console.log(data)
    
    localStorage.removeItem('feedback');
    localStorage.removeItem('email');
}

function onInput(e) {
    const inpValue = e.target.value;
    localStorage.setItem('email', inpValue);
}

function onMessage(e) {
    const msgValue = e.target.value;
    localStorage.setItem('feedback', msgValue);
}

function savedTextarea(e) {
    const textareaMessage = localStorage.getItem('feedback')
    data.message = textareaMessage;

    if (textareaMessage) {
        message.value = textareaMessage;
    }  
}
function savedEmail(e) {
    const savedMail = localStorage.getItem('email')
    data.email = savedMail;

    if (savedMail) {
        input.value = savedMail;
    }  
}
