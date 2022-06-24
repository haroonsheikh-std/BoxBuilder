import axios from 'axios';
import { resolve } from '../../constants/resolver';
import { BASE_URL } from '../../constants/constants';

export const createDiscounts = async (object) => {
    return await resolve(axios.post(`${BASE_URL}create-discount/`,object).then(res => res.data));
}

export const editDiscounts = async (id) => {
    return await resolve(axios.post(`${BASE_URL}create-discount/${id}/`,object).then(res => res.data));
}

export const getDiscounts = async () => {
    return await resolve(axios.get(`${BASE_URL}create-discount/`).then(res => res.data));
}

export const deleteDiscounts = async (id) => {
    return await resolve(axios.delete(`${BASE_URL}create-discount/${id}/`).then(res => res.data));
}