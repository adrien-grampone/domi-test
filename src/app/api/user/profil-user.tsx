import variablesGlobales from '@/variables';
import Cookies from "js-cookie";

export async function getProfilUser(uid) {

    const token = Cookies.get('token');

    const requestOptions = {
        method: 'GET',
        headers: {
             Authorization: `Bearer ${token}`,
            'Accept': 'application/json'
        },
    };

    return fetch(variablesGlobales.api + "api/"+uid+"/profil_user", requestOptions)
        .then(async response => {
            if (!response.ok) {
                return {
                    message: 'Une erreur est survenue lors de la vérification de l\'utilisateur. Veuillez réessayer plus tard.',
                    status: 'error'
                };
            }
            const successMessage = await response.json(); // Attendre la résolution de la promesse

            return successMessage;

        })
        .catch(error => console.log('error', error));
}