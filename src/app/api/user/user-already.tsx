import variablesGlobales from '@/variables';

export async function userAlready(utilisateur, is_forget_password = false) {

    const raw = {
        email: utilisateur.email,
        //email: 'alexandre.s@af-developpement.com',
        idsite: "1",
        pseudo: utilisateur.pseudo
        //pseudo: "alextest"
    }

    const requestOptions = {
        method: 'POST',
        headers: {'Accept': 'application/json'},
        body: JSON.stringify(raw),
    };

    return fetch(variablesGlobales.api + "userAlready", requestOptions)
        .then(async response => {
            if (!response.ok) {
                return {
                    message: 'Une erreur est survenue lors de la vérification de l\'utilisateur. Veuillez réessayer plus tard.',
                    status: 'error'
                };
            }
            const successMessage = await response.json(); // Attendre la résolution de la promesse

            //si on est pas sur la page de mot de passe oublié, on est sur inscription donc on vérifie que l'utilisateur n'existe pas
            if(!is_forget_password) {
                if (successMessage.exist == true && successMessage.active == true) {
                    if (successMessage.faiAuthorization == true) {
                        return {
                            message: 'Un utilisateur avec cette adresse mail existe déjà. Veuillez vous connecter.',
                            status: 'error'
                        };
                    }
                    return {
                        message: 'Un utilisateur avec ce pseudo existe déjà. Veuillez en choisir un autre.',
                        status: 'error'
                    };
                }
            }
            //si on est sur la page de mot de passe oublié, on vérifie que l'utilisateur existe
            else {
                if (successMessage.exist == false || successMessage.active == false) {
                    return {
                        message: 'Votre adresse email n\'est pas reconnue. Veuillez vous inscrire.',
                        status: 'error'
                    };
                }
            }
            return true;
        })
        .catch(error => console.log('error', error));
}