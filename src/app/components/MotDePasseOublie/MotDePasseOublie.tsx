import React, {useState, useEffect} from 'react';
import Link from 'next/link'
import {useMessage} from '@/app/MessageContext';
import {useRouter} from 'next/navigation';
import {userAlready} from "@/app/api/user/user-already";
import {userExist} from "@/app/api/user/user-exist";


const MotDePasseOublie = () => {
    const [username, setUsername] = useState('');
    const {setMessage, setMessageType} = useMessage();
    const router = useRouter(); // Initialisation de useRouter

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const user = {
            email: username,
            idsite: "1",
            pseudo: "",
        }

        let userAlreadyResponse = await userAlready(user, true);

        //check if userAlreadyResponse is object
        if (typeof userAlreadyResponse === 'object') {
            setMessage(userAlreadyResponse.message);
            setMessageType(userAlreadyResponse.status);
        } else {
            let response = await userExist(user)
            console.log('mdp oublie response');

            if (response) {
                setMessage(response.message);
                setMessageType(response.status);
            } else {
                setMessage('Un mail de réinitialisation de mot de passe a été envoyé à votre adresse mail');
                setMessageType('success');
            }
        }
    };


    return (
        <div className="wrapper-form">
            <h1>Mot de passe oublié</h1>
            <form onSubmit={handleSubmit} className="custom-form">
                <div className="fields">
                    <input placeholder="Adresse mail" type="text" id="username" value={username}
                           className="custom-input"
                           onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="boutons">
                    <div className="inscription-link">
                        <p>Pas de compte, <Link href="/inscription">inscrivez vous</Link></p>
                    </div>
                    <button className="btn" type="submit">Suivant</button>
                </div>

            </form>
        </div>
    );
};

export default MotDePasseOublie;
