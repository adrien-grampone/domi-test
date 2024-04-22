import variablesGlobales from '@/variables';

export function connexion(username: string, password: string) {

    const body = JSON.stringify({
        _email: username,
        _password: password,
        _ip: "",
    });

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: body,
    };

    return fetch(variablesGlobales.api + "1/login", requestOptions)
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

