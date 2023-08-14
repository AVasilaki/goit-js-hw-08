import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');

const key = 'feedback-form-state';
let formData = {};
const getData = localStorage.getItem(key);
const parceData = JSON.parse(getData);
if (parceData) {
  form.elements.email.value = parceData.email;
  form.elements.message.value = parceData.message;
}
form.addEventListener('input', throttle(handlerInput, 500));
function handlerInput() {
  const userData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  formData = userData;
  localStorage.setItem(key, JSON.stringify(userData));
}

form.addEventListener('submit', handlerSubmit);
function handlerSubmit(evt) {
  if (form.elements.email.value === '' || form.elements.message.value === '') {
    return alert('Please fill in all the fields!');
  }
  evt.preventDefault();
  console.log(formData);
  localStorage.removeItem(key);
  form.reset();
}
