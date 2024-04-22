'use client';
import React from 'react';
import ReinitialiserMotdePasse from "@/app/components/ReinitialiserMotdePasse/ReinitialiserMotdePasse";
import Side from "@/app/components/Side/Side";
import '@/css/connexion.css';
import '@/app/components/LoginForm/login-form.css';

export default function ReinitialiserMotDePassePage({ params }: { params: { id: string, token: string, pseudo: string, email: string, timestamp: string } }) {

    return (
        <main className="page-connexion custom-log-page">
            <section className="wrapper-log">
                <Side/>
                <ReinitialiserMotdePasse params={params}/>
            </section>
        </main>
    )
}
