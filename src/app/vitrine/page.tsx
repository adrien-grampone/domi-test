'use client';
import {useEffect, useState} from "react";
import Image from 'next/image';
//import {checkToken} from "@/app/api/user/check-token";
import Link from "next/link";
import '@/css/vitrine.css';

export default function Vitrine() {

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
        <main className="page-vitrine">
            <section className="vitrine">
                <figure className="vitrine-background">
                    <Image src='/background-login.png' alt="Domi" width={200} height={200}/>
                </figure>
                <div className="content">
                    <div className="wrapper">
                        <div className="logo-titre">
                            <Image className="vitrine-logo" src='/logo.svg' alt="Domi" width={200} height={200}/>
                            <h1>Le site des rencontres différentes</h1>
                        </div>
                        <div className="vitrine-liens">
                            <Link href="/inscription">S'inscrire</Link>
                            <Link href="/connexion">Se connecter</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
