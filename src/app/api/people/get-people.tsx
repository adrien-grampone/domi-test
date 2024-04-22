import variablesGlobales from '../../../variables';
import Cookies from "js-cookie";
import {checkToken} from "@/app/api/user/check-token";
import {json} from "stream/consumers";

export async function getPeople(datas) {

    //let raw = await encryptDatas(JSON.stringify(datas));

    await checkToken();

    const requete = {
        "ageMax": datas.ageMax,
        "ageMin": datas.ageMin,
        "avecPhoto": datas.avecPhoto,
        "isConnected": datas.isConnected,
        "isDefault": datas.isDefault,
        "isInitSear": datas.isInitSear,
        "isSearch": datas.isSearch,
        "libelle": datas.libelle,
        "localisation": datas.localisation,
        "order": datas.order,
        "postRequest": datas.postRequest,
        "pratiques": datas.pratiques,
        "pseudo": datas.pseudo,
        "rencontre": datas.rencontre,
        "tendances": datas.tendances,
        "uidSearch": datas.uidSearch
    }

    const token = Cookies.get('token');
    const requestOptions = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Accept': 'application/json',
        },
        body: JSON.stringify(requete)
    };

    return fetch(variablesGlobales.api + "api/search?first=" + datas.offset + "&max=" + datas.limit, requestOptions)
        .then(async response => {
            if (!response.ok) {
                return [];
            }
            return response.json();
        })
        .catch(error => console.log('error', error));
}