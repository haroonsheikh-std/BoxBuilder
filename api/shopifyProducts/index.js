import axios from 'axios';
import { resolve } from '../../constants/resolver';
import { BASE_URL } from '../../constants/constants';

export const getShopifyList = async () => {
    return resolve(axios.get(`${BASE_URL}products-list/`)).then(res => res.data);
}