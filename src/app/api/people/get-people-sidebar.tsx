import variablesGlobales from '../../../variables';
import Cookies from "js-cookie";
import {checkToken} from "@/app/api/user/check-token";
import {json} from "stream/consumers";

export async function getPeopleSidebar(datas) {

    //let raw = await encryptDatas(JSON.stringify(datas));

    await checkToken();

    const token = Cookies.get('token');
    const requestOptions = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            'Accept': 'application/json',
        }
    };

    let orderRequestOptions = "";

    if (datas.tri != '' && datas.order != '') {
        orderRequestOptions = "&tri=" + datas.tri + "&order=" + datas.order;
    }

    return fetch(variablesGlobales.api + "api/left/list?first=" + datas.offset + "&max=" + datas.limit + "&filter=" + datas.filter + orderRequestOptions, requestOptions)
        .then(async response => {
            if (!response.ok) {
                return [];
            }
            return response.json();
        })
        .catch(error => console.log('error', error));
}