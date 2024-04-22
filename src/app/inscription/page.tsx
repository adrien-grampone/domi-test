'use client';
import React, {useState, useEffect} from "react";
import Side from "@/app/components/Side/Side";
import MultiStepForm from "@/app/components/Inscription/MultiStepForm";
import '@/css/connexion.css';
//import {checkToken} from '../api/user/check-token';

export default function Inscription() {
    const [message, setMessage] = React.useState('');

    useEffect(() => {
        /*if (localStorage.getItem('token') && localStorage.getItem('token') !== null) {
            let token_valid = checkToken();
            //get result of Promise
            token_valid.then((result) => {
                console.log('result', result)
                if (result) {
                    window.location.href = "/";
                }
            });
        }*/
    }, []); // Le tableau de dépendances est vide pour exécuter cette vérification uniquement une fois lors du chargement de la page

    return (
        <main className="page-register custom-log-page">
            <section className="wrapper-log">
                <Side/>
                <MultiStepForm />
            </section>
        </main>
    )
}
