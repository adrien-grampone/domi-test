import React, {useEffect, useState} from 'react';
import './conversation.css';
import {ReactSVG} from "react-svg";
import Image from "next/image";
import {getHourMessage, getLoc, getPdp} from "@/app/utils/chat";
import {useMessageContext} from "@/app/components/context/MessageContext";

const Messages = () => {

    // @ts-ignore
    const {state, setSelectedConversation} = useMessageContext();

    console.log(state.selectedConversation);


    return (
        <div className="wrapper-messages">
            <div className="messages">
                {state.selectedConversation && state.selectedConversation.messages.map((message, index) => {
                    return (
                        <>
                            {
                                (index === 0 || new Date(parseInt(message.timestamp)).getDate() !== new Date(parseInt(state.selectedConversation.messages[index - 1].timestamp)).getDate()) && (
                                    <div className="date">
                                        {new Date(parseInt(message.timestamp)).toLocaleDateString()}
                                    </div>
                                )
                            }
                            <div
                                className={`message-conversation ${message.from === state.selectedConversation.pseudo ? 'to' : 'from'}`}
                                key={index}>
                                <div className="pp">
                                    <Image className="pdp" src={getPdp(message.from === state.selectedConversation.pseudo ? state.selectedConversation : state.user)} alt="Photo de profil" width={30} height={30}/>
                                </div>
                                <div className="content-time">
                                <span className="time">
                                    {getHourMessage(message.timestamp)}
                                </span>
                                    <div className="content">
                                        {message.body}
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </div>
    );
};

export default Messages;
