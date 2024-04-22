import variablesGlobales from '@/variables';

export async function reinitialiserMotDePasse(formData) {

    const requestOptions = {
        method: 'POST',
        headers: {'Accept': 'application/json'},
        body: JSON.stringify(formData),
    };

    return fetch(variablesGlobales.api + "password/reset", requestOptions)
        .then(async response => {
            if (!response.ok) {
                return {
                    message: 'Une erreur est survenue lors de la vérification de l\'utilisateur. Merci de réessayer.',
                    status: 'error'
                };
            }
            const successMessage = await response.json(); // Attendre la résolution de la promesse

            console.log('reset', successMessage);
            if(successMessage.status == 500 || successMessage.errorExist){
                return {
                    message: 'Une erreur est survenue lors de la réinitialisaton de votre mot de passe. Merci de réessayer',
                    status: 'error'
                };
            }
            return {
                message: 'La réinitialisation du mot de passe a reussi. Identifiez-vous pour vous connecter',
                status: 'success'
            };
        })
        .catch(error => console.log('error', error));
}