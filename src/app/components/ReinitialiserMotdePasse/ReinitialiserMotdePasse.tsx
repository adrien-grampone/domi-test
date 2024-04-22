'use client';
import React, {useState} from 'react';
import {useMessage} from '@/app/MessageContext';
import {useRouter} from 'next/navigation';
import {reinitialiserMotDePasse} from "@/app/api/user/reinitialiser-mot-de-passe";


const ReinitialiserMotDePasse = ({params}) => {
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const {setMessage, setMessageType} = useMessage();

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        //check if password1 and password2 are the same
        if (password1 !== password2 || password1 === '' || password2 === '') {
            setMessage('Les mots de passe ne correspondent pas');
            setMessageType('error');
            return;
        }

        //check if password has at least 8 characters, at least 1 uppercase letter, 1 lowercase letter, and 1 special character
        /*const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
        if (!passwordRegex.test(password1)) {
            setMessage('Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un caractère spécial');
            setMessageType('error');
            return;
        }*/

        try {

            console.log(params.timestamp);
            console.log(params.timestamp.replace(/_/g, "-").replace(/_/g, " ").replace(/_/g, ":") + ":00")

            let dateToformat = params.timestamp.split('_');

            let formData = {
                user: params.pseudo,
                idSite: 1,
                codeConfirmation: params.token,
                password: password1,
                dateSendMail: dateToformat[0] + "-" + dateToformat[1] + "-" + dateToformat[2] +
                    " " + dateToformat[3] + ":" + dateToformat[4] + ":00"
            }

            let response = await reinitialiserMotDePasse(formData);

            if (response) {
                setMessage(response.message);
                setMessageType(response.status);

                if(response.status === 'success') {
                    router.push('/connexion');
                }

            } else {
                setMessage('Une erreur est survenue lors de l\'envoi du formulaire');
                setMessageType('error');
            }

        } catch (error) {
            setMessage('Erreur lors de l\'envoi du formulaire');
            setMessageType('error');
        }
    };

    return (
        <div className="wrapper-form">
            <h1>Mot de passe oublié</h1>
            <form onSubmit={handleSubmit} className="custom-form">
                <div className="fields">
                    <input type="password" id="password1" value={password1} className="custom-input"
                           placeholder="Nouveau mot de passe"
                           onChange={(e) => setPassword1(e.target.value)}/>

                    <input type="password" id="password2" value={password2} className="custom-input"
                           placeholder="Confirmation mot de passe"
                           onChange={(e) => setPassword2(e.target.value)}/>
                </div>

                <div className="boutons">
                    <button className="btn" type="submit">Confirmer</button>
                </div>

            </form>
        </div>
    );
};

export default ReinitialiserMotDePasse;
