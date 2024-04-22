import React, {useState} from 'react';
import {usePathname, useRouter} from 'next/navigation';
import './header.css';
import Image from 'next/image';
import Link from 'next/link';
import {ReactSVG} from "react-svg";
import {deconnexion} from "@/app/api/user/deconnexion";
import {useMessage} from "@/app/MessageContext";

export default function Header() {

    const {setMessage, setMessageType} = useMessage();
    const router = useRouter(); // Initialisation de useRouter

    const logout = () => {
        let deconnect = deconnexion();
        if (deconnect){
            setMessage('Déconnexion réussie');
            setMessageType('success');
            router.push('/connexion');
        } else{
            setMessage({ text: 'Erreur lors de la déconnexion', type: 'error', show: true });
        }
    };

    return (
        <header>
            <div className="wrapper">
                <Link href="/" className="logo">
                    <Image src='/logo-header.svg' alt="Domi" width={200} height={200} className="desktop"/>
                    <Image src='/logo-header-mobile.svg' alt="Domi" width={200} height={200} className="mobile"/>
                </Link>

                <div className="right-header">
                    <div className="wrapper-right-header">
                        <div className="menu desktop">
                            <Link className={"item-menu " + (usePathname() === '/accueil' ? 'active' : '')} href="/">
                                <ReactSVG src={'/home.svg'} className="icon"/>
                                <label>Accueil</label>
                            </Link>
                            <Link className={"item-menu " + (usePathname() === '/messages' ? 'active' : '')}
                                  href="/messages">
                                <ReactSVG src={'/message.svg'} className="icon"/>
                                <label>
                                    Messages
                                    <span className="notif">1</span>
                                </label>

                            </Link>
                            <Link className={"item-menu " + (usePathname() === '/visiteurs' ? 'active' : '')}
                                  href="/visiteurs">
                                <ReactSVG src={'/visiteur.svg'} className="icon"/>
                                <label>Visiteurs</label>
                            </Link>
                            <Link className={"item-menu " + (usePathname() === '/favoris' ? 'active' : '')}
                                  href="/favoris">
                                <ReactSVG src={'/favoris.svg'} className="icon"/>
                                <label>Favoris</label>
                            </Link>
                        </div>
                        <Link href="/abonnement" className="btn">Abonnement</Link>
                        <div onClick={() => logout()} className="profil">
                            <figure className="avatar desktop">
                                <Image src="/avatar.png" alt="Avatar" width={60} height={60}/>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile bottom-bar">
                <div className="wrapper">
                    <Link className={"item-menu " + (usePathname() === '/accueil' ? 'active' : '')} href="/">
                        <ReactSVG src={'/home.svg'} className="icon"/>
                    </Link>
                    <Link className={"item-menu " + (usePathname() === '/chat' ? 'active' : '')}
                          href="/chat">
                        <ReactSVG src={'/message.svg'} className="icon"/>
                        <span className="notif">1</span>

                    </Link>
                    <Link className={"item-menu " + (usePathname() === '/visiteurs' ? 'active' : '')}
                          href="/visiteurs">
                        <ReactSVG src={'/visiteur.svg'} className="icon"/>
                    </Link>
                    <Link className={"item-menu " + (usePathname() === '/favoris' ? 'active' : '')}
                          href="/favoris">
                        <ReactSVG src={'/favoris.svg'} className="icon"/>
                    </Link>
                    <div onClick={() => logout()}>
                        <figure className="avatar">
                            <Image src="/avatar.png" alt="Avatar" width={24} height={24}/>
                        </figure>
                    </div>
                </div>
            </div>
        </header>
    //776f585aea9fdf29f7e10f043fa17b8b
    );
};