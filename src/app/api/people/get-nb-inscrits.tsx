import variablesGlobales from '../../../variables';
import Cookies from "js-cookie";
import {checkToken} from "@/app/api/user/check-token";
import {json} from "stream/consumers";

export async function getNbInscrits() {

    await checkToken();

    const token = Cookies.get('token');
    const requestOptions = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            'Accept': 'application/json',
        }
    };

    return fetch(variablesGlobales.api + "api/admin/search/nbRegisteredUsers", requestOptions)
        .then(async response => {
            if (!response.ok) {
                return [];
            }
            return response.json();
        })
        .catch(error => console.log('error', error));
}