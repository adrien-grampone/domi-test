import React, {useReducer} from 'react';
import Image from 'next/image';
import './conversation.css';
import variables from '@/variables';
import Link from "next/link";
import {afficherDate, getPdp, getUnreadMessages, getStatus} from "@/app/utils/chat";
import {chatReducer, initialState} from "@/app/reducers/chat";
import {useMessageContext} from "@/app/components/context/MessageContext";

const ListeConversations = () => {

    // @ts-ignore
    const { state, setSelectedConversation } = useMessageContext();

    return (
        <div className="conversations">
            {state.conversations.contacts.map((contact, index) => {
                const unreadMessages = getUnreadMessages(contact);
                const pdpSrc = getPdp(contact);
                const date = afficherDate(contact.messages[0].timestamp);
                const status = getStatus(contact);
                return (
                    <div
                        className={`conversation ${state.selectedConversation === contact.uid ? 'selected' : ''}`}
                        key={index} onClick={() => setSelectedConversation(contact)}>
                        <figure className="pp">
                            <Image src={pdpSrc} alt="Photo de profil" width={50} height={50}/>
                            {unreadMessages > 0 && <span className="notifs">{unreadMessages}</span>}
                            <div className={`status-user ${status}`}></div>
                        </figure>
                        <div className="content">
                            <div className="nom-message">
                                <div className="nom">{contact.pseudo}</div>
                                <div className="message-texte">{contact.messages[0].body}</div>
                            </div>
                            <div className="date">{date}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ListeConversations;
