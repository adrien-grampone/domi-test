import React from 'react';
import './conversation.css';
import { ReactSVG } from "react-svg";
import HeaderConversation from "@/app/components/Conversations/HeaderConversation";
import FooterConversation from "@/app/components/Conversations/FooterConversation";
import {useMessageContext} from "@/app/components/context/MessageContext";
import Messages from "@/app/components/Conversations/Messages";

const Conversation = () => {
    // @ts-ignore
    const { state } = useMessageContext();
    return (
        <div className={`conversation-wrapper ${state.selectedConversation == null ? 'no-conversation' : 'active'}`}>
            <HeaderConversation/>
            {state.selectedConversation == null ? (
                <div className="wrapper-messages">
                    <ReactSVG src={'/logo-chat.svg'} className="picto" />
                    <h1>Aucun message sélectionné</h1>
                </div>
            ) : (
                <Messages/>
            )}
            <FooterConversation/>
        </div>
    );

};

export default Conversation;
