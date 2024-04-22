'use client';
import React, {useState, useEffect} from "react";
import Side from "@/app/components/Side/Side";
import MotdePasseOublie from "@/app/components/MotDePasseOublie/MotDePasseOublie";
import '@/css/connexion.css';
import '../components/LoginForm/login-form.css';
//import {checkToken} from '../api/user/check-token';

export default function MotDePasseOubliePage() {
    const [message, setMessage] = React.useState('');

    useEffect(() => {
        /*if (localStorage.getItem('token') && localStorage.getItem('token') !== null) {
            let token_valid = checkToken();
            //get result of Promise
            token_valid.then((result) => {
                console.log('result', result)
                if (result) {
                    window.location.href = "/dashboard";
                }
            });
        }*/
    }, []); // Le tableau de dépendances est vide pour exécuter cette vérification uniquement une fois lors du chargement de la page

    return (
        <main className="page-connexion custom-log-page">
            <section className="wrapper-log">
                <Side/>
                <MotdePasseOublie/>
            </section>
        </main>
    )
}
