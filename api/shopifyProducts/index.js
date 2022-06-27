import axios from 'axios';
import { resolve } from '../../constants/resolver';
import { BASE_URL } from '../../constants/constants';
import { client } from './shopify_Client';

var config = {
    method: 'get',
    url: 'https://boxbuilder-dev.myshopify.com/admin/products.json',
    headers: {
        'X-Shopify-Access-Token': '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',
        'Cookie': '_master_udr=eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWxqTlRnMk1UY3pNeTA1TW1aakxUUTJZemN0WVRNME55MWhOR0UzTXpGak16WTBNV1lHT2daRlJnPT0iLCJleHAiOiIyMDI0LTA2LTI0VDIwOjMwOjAxLjIzMloiLCJwdXIiOiJjb29raWUuX21hc3Rlcl91ZHIifX0%3D--2e1fed506e81a926fc7109cda4a8cf01283c5d1e; _secure_admin_session_id=f46a5ed93fe41bc9eaa481854a51a703; _secure_admin_session_id_csrf=f46a5ed93fe41bc9eaa481854a51a703'
    },
};


// export const  getShopifyList = async () => {
//      const res =  axios(config)
//         .then(function (response) {
//             console.log(JSON.stringify(response.data));
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// }

export const getShopifyList = async () => {
    return await resolve(axios(config).then(res => console.log(res.data)));
}

// export const getShopifyList = async (context) => {
//     const products = await client.product.fetchAll(); // Fetch product
//     const infos = await client.shop.fetchInfo(); // Fetch shop Info if you think about SEO and title and ... to your page
//     const policies = await client.shop.fetchPolicies(); // fetch shop policy if you have any 
//     return {
//         props: {
//             infos: JSON.parse(JSON.stringify(infos)),
//             policies: JSON.parse(JSON.stringify(policies)),
//             products: JSON.parse(JSON.stringify(products)),
//         },
//     };
// };

// export const getShopifyList = async () => {
//     return await resolve(client.product.fetchAll().then(res => console.log(res.data)));
// }
