import axios from 'axios';
import { resolve } from '../../constants/resolver';
import { BASE_URL } from '../../constants/constants';

export const createBuilderSteps = async (object) => {
    return await resolve(axios.post(`${BASE_URL}builder-steps/`,object).then(res => res.data));
}

export const getBuilderSteps = async () => {
    return await resolve(axios.get(`${BASE_URL}builder-steps/`).then(res => res.data));
}

export const editBuilderSteps = async (id,object) => {
    return await resolve(axios.put(`${BASE_URL}builder-steps/${id}/`,object).then(res => res.data));
}

export const deleteBuilderSteps = async (id) => {
    return await resolve(axios.delete(`${BASE_URL}builder-steps/${id}/`).then(res => res.data));
}