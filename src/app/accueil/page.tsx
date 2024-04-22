'use client';
import {useEffect, useState} from "react";
import ListePrincipale from "@/app/components/ListePrincipale/listeprincipale";
import '@/css/accueil.css';
//import {checkToken} from "@/app/api/user/check-token";
import {checkToken} from "@/app/api/user/check-token";
import Sidebar from "@/app/components/Sidebar/sidebar";
import '@/css/accueil.css';

export default function Accueil() {


    useEffect(() => {
        //if (!localStorage.getItem('token') || localStorage.getItem('token') == null) {
        //window.location.href = "/vitrine";
        //}
        checkToken();
    }, []); // Le tableau de dépendances est vide pour exécuter cette vérification uniquement une fois lors du chargement de la page

    return (
        <main className="page-accueil">
            <Sidebar/>
            <ListePrincipale/>
        </main>
    )
}