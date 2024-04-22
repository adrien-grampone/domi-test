import React, { useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import './cartepeople.css';
import variablesGlobales from '../../../variables';
import Image from 'next/image';
import Link from 'next/link';
import { ReactSVG } from "react-svg";

const CartePeople = ({ data, mode }) => {

    let localisation = '';
    if (data.ville && data.codepostal && data.dist) {
        localisation = data.ville.split(' ')[0].trim() + ', ' + data.codepostal + ' (' + data.dist + 'km)';
    } else if (data.ville && data.codepostal) {
        localisation = data.ville.split(' ')[0].trim() + ', ' + data.codepostal;
    } else if (data.ville) {
        localisation = data.ville;
    }
    return (
        <div className={`carte-people ${mode ? "listing" : ""}`}>
            <div className="carte-people-info">
                <div className="sexe">
                    {data.sexe && data.sexe == "M" && <ReactSVG src={'/male.svg'} className="icon male"/> }
                    {data.sexe && data.sexe == "F" && <ReactSVG src={'/femelle.svg'} className="icon femelle"/> }
                </div>
                {data.certificate == 1 && <div className="certifie">
                    <ReactSVG src={'/icon-certifie.svg'} className="icon"/>
                </div> }
                <div className={`carte-people-image ${data.isConnected ? "connected" : ""}`}>
                    {data.photo && <Image src={variablesGlobales.api + data.photo} alt="Image" width={100} height={100} />}
                    {!data.photo && data.sexe == "M" && <Image src={'/default-homme.png'} alt="Image" width={100} height={100} /> }
                    {!data.photo && data.sexe == "F" && <Image src={'/default-femme.png'} alt="Image" width={100} height={100} /> }
                </div>
                <div className="carte-people-content">
                    <h3 className="nom">{data.firstName}</h3>
                    <p className="age">{data.age} ans</p>
                    <p className="localisation">{localisation}</p>
                    <p className="tendance">{data.type}</p>
                </div>
            </div>
            <div className="carte-people-actions">
                <div onClick={() => console.log('Favoris')} className="fav">
                    <ReactSVG src={'/icon-fav.svg'} className={`icon ${data.favoris ? "actif" : ""}`}/>
                </div>
                <Link href={`/messages/${data.id}`} className="chat">
                    <ReactSVG src={'/icon-chat.svg'} className="icon"/>
                </Link>
            </div>
        </div>
    );
};

export default CartePeople;