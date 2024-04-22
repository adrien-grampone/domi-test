import React, {useState, useEffect} from 'react';
import Link from 'next/link'
import {connexion} from '../../api/user/connexion';
import {useMessage} from '@/app/MessageContext';
import {useRouter} from 'next/navigation';
import './login-form.css';
import Cookies from 'js-cookie';


const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {setMessage, setMessageType} = useMessage();
    const router = useRouter(); // Initialisation de useRouter


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await connexion(username, password);
            if (response) {
                setMessage('Connexion réussie');
                setMessageType('success');
                const token = JSON.parse(response.content).token;
                console.log(token)
                //const refresh_token = response.refresh_token;
                //const user = response.user;
                if (token === undefined){
                    // || refresh_token === undefined) {
                    setMessage('Erreur lors de la connexion');
                    setMessageType('error');
                    return;
                } else{
                    Cookies.set('token', token, {expires: 7});
                    //Cookies.set('refresh_token', refresh_token, {expires: 30});
                    //Cookies.set('user', JSON.stringify(user), {expires: 7});
                    router.push('/');
                }
            } else {
                setMessage('Erreur lors de la connexion');
                setMessageType('error');
            }
        } catch (error) {
            setMessage('Erreur lors de la connexion');
            setMessageType('error');
        }
    };


    return (
        <div className="wrapper-form">
            <h1>Se connecter</h1>
            <form onSubmit={handleSubmit} className="custom-form">
                <div className="fields">
                    <input placeholder="Adresse mail" type="text" id="username" value={username} className="custom-input"
                           onChange={(e) => setUsername(e.target.value)}/>
                    <input placeholder="Mot de passe" type="password" id="password" value={password} className="custom-input"
                           onChange={(e) => setPassword(e.target.value)}/>
                    <Link className="forgot-password" href="/mot-de-passe-oublie">Mot de passe oublié</Link>
                </div>
                <div className="boutons">
                    <div className="inscription-link">
                        <p>Pas de compte, <Link href="/inscription">inscrivez vous</Link></p>
                    </div>
                    <button className="btn" type="submit">Se connecter</button>
                </div>

            </form>
        </div>
    );
};

export default LoginForm;
