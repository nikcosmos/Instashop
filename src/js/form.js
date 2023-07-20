import { $formApi, SITE_ID } from './api.js';

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', onSubmitForm);

function onSubmitForm(el) {
   el.preventDefault();
   const defaultBody = {
      site_id: SITE_ID,
      lang: window.localStorage.getItem('lang'),
      type: 'feedback',
      //   name: '',
      //   email: '',
      //   phone: '',
      //   notes: '',
   };
   getFormData([...el.target.children]);

   //    $formApi.post('', postBody);
}

function getFormData(inputList) {
   const dataList = inputList.map((input) => inputValidator(input));
   console.log('dataList:', dataList);
}

function inputValidator(input) {
   if (input.value?.trim() === '') {
      return '';
   }
}
