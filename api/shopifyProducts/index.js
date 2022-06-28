import axios from 'axios';
import { resolve } from '../../constants/resolver';
import { BASE_URL } from '../../constants/constants';

// 'Access-Control-Allow-Origin': "*",
// 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
// "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, X-Requested-With",

// var config = {
//     method: 'get',
//     url: 'https://73ed-54-146-232-65.ngrok.io/api/products-list/',

// };
export const getShopifyList = async () => {
    return resolve(axios.get(`${BASE_URL}products-list/`)).then(res => res.data);
}