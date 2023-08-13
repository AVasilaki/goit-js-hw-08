import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const texyArea = document.querySelector('textarea');
const key = 'feedback-form-state';
const formData = {};

form.addEventListener('input', throttle(handlerInput, 500));
function handlerInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(key, JSON.stringify(formData));
}

const getData = localStorage.getItem(key);
const parceData = JSON.parse(getData);

if (parceData) {
  input.value = parceData.email;
  texyArea.value = parceData.message;
}

form.addEventListener('submit', handlerSubmit);
function handlerSubmit(evt) {
  evt.preventDefault();
  localStorage.removeItem(key);
  form.reset();
  console.log(parceData);
}
