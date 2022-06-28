import axios from 'axios';
import { resolve } from '../../constants/resolver';
import { BASE_URL } from '../../constants/constants';

export const createBuilderSettings = async (object) => {
    return await resolve(axios.post(`${BASE_URL}builder-settings/`,object).then(res => res.data));
}

export const editBuilderSettings = async (id) => {
    return await resolve(axios.post(`${BASE_URL}builder-settings/${id}/`,object).then(res => res.data));
}

export const getBuilderSettings = async () => {
    return await resolve(axios.get(`${BASE_URL}builder-settings/`).then(res => res.data));
}

export const deleteBuilderSettings = async (id) => {
    return await resolve(axios.delete(`${BASE_URL}builder-settings/${id}/`).then(res => res.data));
}