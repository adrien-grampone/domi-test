import variablesGlobales from '../../../variables';
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

// Définir un type pour le token décodé
interface DecodedToken {
    exp: number;
    // Vous pouvez ajouter d'autres propriétés du token ici si nécessaire
}

export async function checkToken() {

    try {
        let tokenValid = await verifyToken(); // Attendre la résolution de la vérification du token
        if (tokenValid) {
            //console.log('token valide');
            return true;
        } else {
            console.log('rafraîchissement du token');
            //get token from cookie
            let token_refresh: string | undefined = '';
            token_refresh = Cookies.get('refresh_token');

            console.log('token_refresh', token_refresh);

            const response = await fetch(variablesGlobales.api + "token/refresh", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    refresh_token: token_refresh
                })
            });

            console.log('response', response);
            if (!response.ok) {
                console.log('La requête de rafraîchissement a échoué');
                Cookies.remove('token');
                Cookies.remove('refresh_token');
                Cookies.remove('user');
                window.location.href = "/connexion";
                return false;
            }
            const message = await response.json();
            Cookies.set('token', message.token, { expires: 7 });
            Cookies.set('refresh_token', message.refresh_token, { expires: 30 });
            Cookies.set('user', JSON.stringify(message.user), {expires: 7});
            return true;
        }
    } catch (error) {
        console.log('erreur', error);
        Cookies.remove('token');
        Cookies.remove('refresh_token');
        Cookies.remove('user');
        window.location.href = "/connexion";
        return false;
    }
}

async function verifyToken() {
    //get token from cookie
   let token = Cookies.get('token');

    if (!token || token == null) {
        return false;
    }
    let decoded: DecodedToken;
    decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Division par 1000 pour convertir en secondes
    if (decoded.exp < currentTime) {
        return false;
    }
    return true;
}
