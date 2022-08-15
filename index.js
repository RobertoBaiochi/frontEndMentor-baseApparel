const form = document.getElementById('form');
const email = document.getElementById('email');
const alertSignal = document.querySelector('.alert');
const textAlert = document.querySelector('.text-alert');
const emailBtn = document.getElementById('email-btn');

form.addEventListener('submit', (evento) => {
    evento.preventDefault()

    submitEmail()
});

const submitEmail = () => {
    const emailValue = email.value

    checkEmail(emailValue) ? setSuccess() : setError()
};

const setSuccess = () => {
    email.classList.add('success')
    email.classList.remove('active')
    alertSignal.classList.remove('active')
    textAlert.classList.remove('active')
    cleanIntput()
    setTimeout(removeSuccess, 4000);

};

const removeSuccess = () => {
    email.classList.remove('success')
}

const setError = () => {
    email.classList.remove('success')
    email.classList.add('active')
    alertSignal.classList.add('active')
    textAlert.classList.add('active')
    
};

const cleanIntput = () => {
    document.getElementById('email').value = "";
;}


const checkEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
};