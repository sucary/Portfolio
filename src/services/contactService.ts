import axios from 'axios';
import { baseUrl } from '../constants';
import { Contact } from '../types';

export const getAllContact = async () => {
  return axios
    .get<Contact[]>(`${baseUrl}/contacts`)
    .then(response => response.data);
};