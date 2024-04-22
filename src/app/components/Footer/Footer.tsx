import React, {useState} from 'react';
import './footer.css';
import Link from 'next/link';

export default function Footer() {

    return (
        <footer className="footer">
            <div className="wrapper">
                <Link href={'/mentions-legales'}>
                    Mentions légales
                </Link>
                <Link href={'/donnees-personnelles'}>
                    Données personnelles
                </Link>
                <Link href={'/cgu'}>
                    CGU
                </Link>
                <Link href={'/cookies'}>
                    Politique des cookies
                </Link>
            </div>
        </footer>
    );
};