import axios from 'axios';

export const API_URL = 'https://api.cardoapi.com/api/v2';
export const SITE_ID = '424936';

export const $localApi = axios.create({
   baseURL: API_URL,
   params: {
      site_id: SITE_ID,
   },
});
export const $formApi = axios.create({
   baseURL: API_URL + '/form/add',
   headers: {
      'Content-Type': 'multipart/form-data',
   },
});
