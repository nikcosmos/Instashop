import { $formApi, SITE_ID } from './api.js';
import { loadInfoComplete, loadInfoStart } from './modules.js';

const formScreen = document.getElementById('formScreen');
const contactForm = document.getElementById('contactForm');
const phoneInputEl = contactForm?.querySelector('[name="phone"]');
const defaultBody = {
   site_id: SITE_ID,
   lang: window.localStorage.getItem('lang'),
   type: 'feedback',
   name: '',
   email: '',
   phone: '',
   notes: '',
};

contactForm?.addEventListener('submit', onSubmitForm);
contactForm?.addEventListener('input', () => {
   [...contactForm.children].forEach((input) => removeInputError(input));
});

async function onSubmitForm(el) {
   el.preventDefault();
   const formData = getFormData([...el.target.children]);
   if (formData) {
      try {
         loadInfoStart();
         await fetchForm(formData);
         dispatchFormStatus('success');
      } catch {
         dispatchFormStatus('error');
      } finally {
         loadInfoComplete();
      }
   }
}

async function fetchForm(formData) {
   return $formApi.post('', { ...defaultBody, ...formData });
}

function getFormData(inputList) {
   const dataObj = {};
   inputList.map((input) => {
      if (inputValidator(input, dataObj)) {
         dataObj[input.name] = inputValidator(input, dataObj);
      }
   });
   return Object.keys(dataObj).length > 2 && dataObj;
}

function inputValidator(input) {
   if (input.name === 'name') return validationName(input);
   if (input.name === 'email') return validationEmail(input);
   if (input.name === 'phone') return validationPhone(input);
   if (input.name === 'notes') return validationNotes(input);
}

function validationName(input) {
   const val = input.value.trim();
   if (val === '') return addInputError(input);
   return val;
}

const emailReg =
   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validationEmail(input) {
   const val = input.value.trim().toLowerCase();
   if (phoneInputEl.value === '' && val === '') return addInputError(input);
   if (val !== '' && !emailReg.test(val)) return addInputError(input);
   return val;
}
function validationPhone(input) {
   const val = input.value.trim();
   return val;
}
function validationNotes(input) {
   const val = input.value.trim();
   if (val === '') return addInputError(input);
   return val;
}

function addInputError(el) {
   el.classList.add('error');
   return null;
}
function removeInputError(el) {
   el.classList.remove('error');
}

function dispatchFormStatus(status) {
   if (status === 'success') formScreen.classList.add('success-form');
   if (status === 'error') formScreen.classList.add('error-form');
}