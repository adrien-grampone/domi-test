import React, {useRef, useState} from 'react';
import './sidebar.css';
import ListeConversations from "@/app/components/Conversations/ListeConversations";
import PaginationListeChat from "@/app/components/Pagination/PaginationListeChat";
import Loading from "@/app/components/Loading/Loading";
import {useMessageContext} from "@/app/components/context/MessageContext";

const SidebarChat = () => {

    // @ts-ignore
    const { state } = useMessageContext();

    return (
        <div className="sidebar-wrapper sidebar-chat">
            <div className="sidebar-container">
                <div className="sidebar">
                    <div className="filtres">
                        <input type="text" placeholder="Recherche" className="search"/>
                    </div>
                    {state.loading && <Loading number={10} classe={'liste-conversations'} heightValue={'70px'}/>}
                    {!state.loading && state.conversations.contacts && state.conversations.contacts.length > 0 &&
                        <ListeConversations/>
                    }
                    {!state.loading && <PaginationListeChat/>}
                </div>
            </div>
        </div>
    );
};

export default SidebarChat;