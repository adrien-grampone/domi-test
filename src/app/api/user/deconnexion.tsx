import Cookies from 'js-cookie';
export function deconnexion() {
    try {
        Cookies.remove('token');
        //Cookies.remove('refresh_token');
        //Cookies.remove('user');
        if(Cookies.get('token')){
            //|| Cookies.get('refresh_token') || Cookies.get('user')) {
            return false;
        }
        return true;
    } catch (error) {
        console.error('Erreur lors de la déconnexion :', error);
        return false;
    }
}