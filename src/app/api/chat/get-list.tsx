import variablesGlobales from '@/variables';
import Cookies from "js-cookie";

export function getList(page) {

    let token = Cookies.get('token');

    const requestOptions = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    };


    //return fetch(variablesGlobales.api + "api/chat/messagelistlimited/176177?page="+page+"&idpseudoCurrentContact=0&contactSearch=null", requestOptions)
    return fetch("http://fake-api-domi.af-developpement.com/contacts.json", requestOptions)
        .then(response => {
                if (!response.ok) {
                    return false
                } else {
                    return response.json();
                }
            }
        )
        .then(message => {
            return message;
        })
        .catch(error => {
            console.log('error', error);
            return error;
        });

}

