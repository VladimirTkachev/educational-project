import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from '../const/localStorage';

export const axiosApi = axios.create({
  baseURL: __API__,
  headers: {
    authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) ?? '',
  },
});
