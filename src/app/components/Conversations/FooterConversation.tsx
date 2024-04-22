import React, {useEffect, useState} from 'react';
import './conversation.css';
import {ReactSVG} from "react-svg";
import Image from "next/image";
import variables from "@/variables";
import Link from "next/link";

const FooterConversation = ({}) => {

    return (
        <div className="conversation-footer">
            <div className="wrapper">
                <ReactSVG src={'/plus.svg'} className="plus btn-conv"/>
                <div className="input-wrapper">
                    <input type="text" placeholder="Saisir le message..."/>
                    <ReactSVG src={'/emoji.svg'} className="emoji"/>
                </div>
                <ReactSVG src={'/send.svg'} className="btn-conv send"/>
            </div>
        </div>
    );
};

export default FooterConversation;
