import axios from 'axios';
import { resolve } from '../../constants/resolver';
import { BASE_URL } from '../../constants/constants';

export const createDiscounts = async (object) => {
    return await resolve(axios.post(`${BASE_URL}discount/`,object).then(res => res.data));
}

export const editDiscounts = async (id,object) => {
    return await resolve(axios.put(`${BASE_URL}discount/${id}/`,object).then(res => res.data));
}

export const getDiscounts = async () => {
    return await resolve(axios.get(`${BASE_URL}discount/`).then(res => res.data));
}

export const deleteDiscounts = async (id) => {
    return await resolve(axios.delete(`${BASE_URL}discount/${id}/`).then(res => res.data));
}