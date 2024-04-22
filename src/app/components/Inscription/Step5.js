'use client';
import React, {useState} from 'react';
import Link from 'next/link'


const Step5 = ({formData, setFormData, nextStep, prevStep}) => {

    return (
        <form className="custom-form last-step">
            <div className="fields">
                <span className="inscription-info">Inscription terminée</span>
                <div className="info-mail">
                    <svg width="61" height="50" viewBox="0 0 61 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.5 0V50H60.919V0H0.5ZM28.2927 29.8958C28.9913 30.4334 29.8388 30.7238 30.7095 30.7238C31.5802 30.7238 32.4277 30.4334 33.1263 29.8958L36.0801 27.6042L56.8911 43.75V45.8333H4.52793V43.75L25.3389 27.6042L28.2927 29.8958ZM30.7095 26.5625L4.52793 6.25V4.16667H56.8911V6.25L30.7095 26.5625ZM4.52793 11.4583L21.9823 25L4.52793 38.5417V11.4583ZM56.8911 38.5417L39.4366 25L56.8911 11.4583V38.5417Z"
                            fill="#BE1212"/>
                    </svg>
                    <span>
                        N'oubliez pas de confirmer votre adresse mail
                    </span>
                </div>
            </div>
            <div className="boutons">
                <Link className="btn" href="/connexion">Se connecter</Link>
            </div>
        </form>
    );
};

export default Step5;
