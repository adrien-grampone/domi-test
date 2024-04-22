import React, { useEffect, useState } from 'react';
import './conversation.css';
import { ReactSVG } from "react-svg";
import Image from "next/image";
import variables from "@/variables";
import Link from "next/link";
import {getLoc, getPdp} from "@/app/utils/chat";
import {useMessageContext} from "@/app/components/context/MessageContext";

const HeaderConversation = () => {

    // @ts-ignore
    const { state, setSelectedConversation } = useMessageContext();

    return (
        <div className="conversation-header">
            <div className="left">
                <div className="goback" onClick={() => setSelectedConversation(null)}>
                    <ReactSVG src={'/arrow-left.svg'}/>
                </div>
                <div className="pdp-infos">
                    <Image className="pdp" src={getPdp(state.selectedConversation)} alt={'Photo de profil'} width={50} height={50}/>
                    <div className="infos">
                        <h1>{state.selectedConversation && state.selectedConversation.pseudo}</h1>
                        <p>{state.selectedConversation && state.selectedConversation.age + ' ans'}, {getLoc(state.selectedConversation)}</p>
                    </div>
                </div>
            </div>
            <div className="ellips">
                <ReactSVG src={'/ellips.svg'} className="ellips"/>
            </div>
        </div>
    );
};

export default HeaderConversation;
