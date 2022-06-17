import axios from 'axios';
import { resolve } from '../../constants/resolver';
import { BASE_URL } from '../../constants/constants';

export const createBuilderSteps = async (object) => {
    return await resolve(axios.post(`${BASE_URL}create-builder-steps/`,object).then(res => res.data));
}
