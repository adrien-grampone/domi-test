'use client';
import React, {useState, useEffect} from "react";
import Side from "@/app/components/Side/Side";
import LoginForm from "@/app/components/LoginForm/LoginForm";
import '@/css/connexion.css';
import {checkToken} from "@/app/api/user/check-token";
import Cookies from 'js-cookie';

export default function Connexion() {
    const [message, setMessage] = React.useState('');

    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            let token_valid = checkToken();
            //get result of Promise
            token_valid.then((result) => {
                console.log('result', result)
                if (result) {
                    window.location.href = "/";
                }
            });
        }
    }, []); // Le tableau de dépendances est vide pour exécuter cette vérification uniquement une fois lors du chargement de la page

    return (
        <main className="page-connexion custom-log-page">
            <section className="wrapper-log">
                <Side/>
                <LoginForm/>
            </section>
        </main>
    )
}
