'use client';
import React from 'react';
import ReinitialiserMotdePasse from "@/app/components/ReinitialiserMotdePasse/ReinitialiserMotdePasse";
import Side from "@/app/components/Side/Side";
import '../components/LoginForm/login-form.css';
import '@/css/connexion.css';

export default function ReinitialiserMotDePassePage() {

    return (
        <main className="page-connexion custom-log-page">
            <section className="wrapper-log">
                <Side/>
                <ReinitialiserMotdePasse params={undefined}/>
            </section>
        </main>
    )
}
