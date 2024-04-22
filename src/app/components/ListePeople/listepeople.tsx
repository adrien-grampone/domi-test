import React, { useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import './listepeople.css';
import Image from 'next/image';
import Link from 'next/link';
import { ReactSVG } from "react-svg";
import variablesGlobales from "@/variables";

const ListePeople = ({ data }) => {
    let localisation = '';
    return (
        <div className="liste-people">
            {data.map((person, index) => {
                localisation = '';
                if (person.ville && person.codepostal) {
                    localisation = person.ville.split(' ')[0].trim() + ' (' + person.codepostal.substring(0, 2) + ')';
                } else if (person.ville) {
                    localisation = person.ville;
                }
                return (
                    <div className="people" key={index}>
                        <div className={`people-image ${person.isConnected ? "connected" : ""}`}>
                            {person.photo && <Image src={variablesGlobales.api + person.photo} alt="Image" width={60} height={60} unoptimized />}
                            {!person.photo && person.sexe == "M" && <Image src={'/default-homme.png'} alt="Image" width={100} height={100} /> }
                            {!person.photo && person.sexe == "F" && <Image src={'/default-femme.png'} alt="Image" width={100} height={100} /> }
                        </div>
                        <div className="people-info">
                            <div className="people-name">{person.firstName}</div>
                            <div className="people-info-perso">
                                <span className="age">{person.age} ans</span>{localisation != '' && <span className="ville">, {localisation}</span>}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ListePeople;