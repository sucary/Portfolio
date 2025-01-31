import axios from 'axios';
import { baseUrl } from '../constants';
import { Project } from '../types';

export const getAllProjects =  async () => {
  return axios
    .get<Project[]>(`${baseUrl}/projects`)
    .then(response => response.data);
};