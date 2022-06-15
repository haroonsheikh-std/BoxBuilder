import axios from 'axios';
import { resolve } from '../../constants/resolver';

const BASE_URL = 'http://5caa-54-146-232-65.ngrok.io/api';

export const createBuilderSettings = async (object) => {
    return await resolve(axios.post(`${BASE_URL}/create-builder-settings/`, { object }).then(res => res.data));
}
