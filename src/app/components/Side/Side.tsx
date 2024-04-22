'use client';
import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import '@/css/vitrine.css';
import './side.css';
import { usePathname } from 'next/navigation'


export default function Side() {


    return (
        <div className="side page-vitrine">
            <section className="vitrine">
                <figure className="vitrine-background">
                    <Image src='/background-login.png' alt="Domi" width={200} height={200}/>
                </figure>
                <div className="content">
                    <div className="wrapper">
                        <div className="logo-titre">
                            <Image className="vitrine-logo" src='/logo.svg' alt="Domi" width={200} height={200}/>
                            <span>Le site des rencontres différentes</span>
                        </div>
                        <div className="vitrine-liens">
                            { usePathname() == '/inscription' ?
                                <Link href="/connexion">Se connecter</Link> :
                                <Link href="/inscription">S'inscrire</Link>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
