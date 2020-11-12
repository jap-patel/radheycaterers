let isFormValid = {};

function addEventListenerToElement(element, regex) {
  element.addEventListener("input", function(event) {
    if(regex.test(element.value) || element.value === '') {
      element.className = '';
      isFormValid[element.getAttribute("id")] = true;
    }
    else {
      element.className = 'invalid';
      isFormValid[element.getAttribute("id")] = false;
    }
  });
}

const email = document.getElementById("mail");
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const telno = document.getElementById("number");
const telnoRegExp = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const nameRegExp = /^[A-Za-z]{1,20}$/;

const message = document.getElementById("message");
const messageRegExp = /^[\s\S]+$/;

addEventListenerToElement(email, emailRegExp);
addEventListenerToElement(telno, telnoRegExp);
addEventListenerToElement(fname, nameRegExp);
addEventListenerToElement(lname, nameRegExp);
addEventListenerToElement(message, messageRegExp);

function validateMyForm() {
  invalidFormState = Object.values(isFormValid).includes(false);
  if(invalidFormState) {
    alert('Please fill the form correctly!');
  }
  else {
    alert("Your message has been sent successfully!");
  }
  return !invalidFormState;
}