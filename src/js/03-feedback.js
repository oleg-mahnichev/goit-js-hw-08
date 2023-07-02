import throttle from 'lodash.throttle';


const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');


const saveFormData = () => {

    const formData = {
        email: emailInput.value,
        message: messageInput.value,
    };


    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};


const loadFormData = () => {
    const savedData = localStorage.getItem('feedback-form-state');

    if (savedData) {
        const formData = JSON.parse(savedData);
        emailInput.value = formData.email;
        messageInput.value = formData.message;
    }
};

const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
        email: emailInput.value,
        message: messageInput.value,
    };

    localStorage.removeItem('feedback-form-state');

    emailInput.value = '';
    messageInput.value = '';

    console.log(formData);
};

emailInput.addEventListener('input', throttle(saveFormData, 500));
messageInput.addEventListener('input', throttle(saveFormData, 500));

form.addEventListener('submit', handleSubmit);

loadFormData();
