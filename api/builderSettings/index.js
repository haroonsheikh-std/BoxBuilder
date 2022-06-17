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
