import variablesGlobales from '@/variables';

export async function userExist(utilisateur) {

    const raw = {
        user: utilisateur.email,
        idSite: 1,
        lien: "https://www.domi.com/#/password/renderMail"
    }

    const requestOptions = {
        method: 'POST',
        headers: {'Accept': 'application/json'},
        body: JSON.stringify(raw),
    };

    return fetch(variablesGlobales.api + "userExist", requestOptions)
        .then(async response => {
            if (!response.ok) {
                return {
                    message: 'Une erreur est survenue lors de la vérification de l\'utilisateur. Veuillez réessayer plus tard.',
                    status: 'error'
                };
            }
            const successMessage = await response.json(); // Attendre la résolution de la promesse
            console.log('userExist', successMessage);
            if(successMessage.status == 500 || successMessage.result == false){
                return {
                    message: 'Une erreur est survenue lors de la vérification de l\'utilisateur. Veuillez réessayer plus tard.',
                    status: 'error'
                };
            }
            return {
                message: 'Un email de réinitialisation de mot de passe vous a été envoyé\n',
                status: 'success'
            };

        })
        .catch(error => console.log('error', error));
}