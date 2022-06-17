import axios from 'axios';
import { resolve } from '../../constants/resolver';

const BASE_URL = ' https://fc1e-54-146-232-65.ngrok.io/api/create-builder-settings/';

export const createBuilderSettings = async (object) => {
    return await resolve(
        
        axios.post(BASE_URL, object, {

            headers: {
              'Content-Type': 'application/json',
            },
          
          }).then(response => {
            return response
          })
    );
}

export const editBuilderSettings = async (id) => {
    return await resolve(axios.post(`${BASE_URL}create-builder-settings/${id}/`,object).then(res => res.data));
}

export const getBuilderSettings = async () => {
    return await resolve(axios.get(`${BASE_URL}create-builder-settings/`).then(res => res.data));
}

export const deleteBuilderSettings = async (id) => {
    return await resolve(axios.delete(`${BASE_URL}create-builder-settings/${id}/`).then(res => res.data));
}