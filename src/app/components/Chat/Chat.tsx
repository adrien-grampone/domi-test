'use client';
import React, {useEffect, useReducer} from "react";
import SidebarChat from "@/app/components/Sidebar/SidebarChat";
import {checkToken} from "@/app/api/user/check-token";
import Conversation from "@/app/components/Conversations/Conversation";
import {initialState, chatReducer, useChat} from "@/app/reducers/chat";
import './chat.css';
import MessageContext from "@/app/components/context/MessageContext";
import {getList} from "@/app/api/chat/get-list";

const Chat: React.FC<{ id?: string }> = ({id}) => {

    /*useEffect(() => {
        const client = new W3CWebSocket('wss://pp-ws.domi.com:2277');

        client.onerror = (error) => {
            console.error('WebSocket Error:', error);
        };

        client.onopen = () => {
            console.log('WebSocket Client Connected');
            // Vous pouvez envoyer des messages au serveur ici, si nécessaire
        };

        client.onmessage = (message) => {
            console.log('Received message:', message.data);
            // Traitement des messages reçus du serveur WebSocket
        };

        return () => {
            client.close();
        };
    }, []);*/


    const [stateOld, dispatch] = useReducer(chatReducer, initialState);

    const {state, setPage, setConversations, setSelectedConversation} = useChat();

    const providerState = {
        state,
        setPage,
        dispatch,
        setSelectedConversation
    }

    const fetchData = async () => {
        dispatch({type: 'SET_LOADING', payload: true});
        try {
            let response_list = await getList(state.page);
            if (response_list) {
                setConversations(response_list);
            }
            /*setConversations( {
                "contacts": [
                    {
                        "id": "31190",
                        "pseudo": "Telomaster",
                        "uid": "94cda5dd0be6fc4a1f71ddd49b625781",
                        "pdp": null,
                        "connected": "offline",
                        "vEtes": "hommeslug",
                        "isBlur": "0",
                        "certificate": "1",
                        "certificateDate": "2024-04-02 10:50:38",
                        "certificateStatus": "Validé",
                        "ville": "Paris",
                        "codePostal": "75000",
                        "codeDepartement": "75",
                        "age": "25",
                        "messages": [
                            {
                                "id": "",
                                "from": "Telomaster",
                                "to": "alextest",
                                "type": "groupchat",
                                "body": "Bonjour ",
                                "timestamp": "1713362265243",
                                "status": "SENT",
                                "hasDelay": false,
                                "room": "",
                                "contactSource": "",
                                "idSrc": "31190",
                                "idDest": "176177",
                                "uidSrc": "94cda5dd0be6fc4a1f71ddd49b625781",
                                "uidDest": "776f585aea9fdf29f7e10f043fa17b8b"
                            }
                        ]
                    },
                    {
                        "id": "71477",
                        "pseudo": "Flo",
                        "uid": "b76ef6f9d85085790a2d02e08978ed72",
                        "pdp": "assets/file_uploaded/Flo+5de6691c9e60b.jpg",
                        "connected": "online",
                        "vEtes": "hommeslug",
                        "isBlur": "1",
                        "certificate": "1",
                        "certificateDate": null,
                        "certificateStatus": null,
                        "ville": "Paris",
                        "codePostal": "75000",
                        "codeDepartement": "75",
                        "age": "25",
                        "messages": [
                            {
                                "id": "",
                                "from": "Flo",
                                "to": "alextest",
                                "type": "groupchat",
                                "body": "Bonjour, mais je suis homme, désolé",
                                "timestamp": "1713362298643",
                                "status": "SENT",
                                "hasDelay": false,
                                "room": "",
                                "contactSource": "",
                                "idSrc": "71477",
                                "idDest": "176177",
                                "uidSrc": "b76ef6f9d85085790a2d02e08978ed72",
                                "uidDest": "776f585aea9fdf29f7e10f043fa17b8b"
                            }
                        ]
                    },
                    {
                        "id": "91420",
                        "pseudo": "Stan78",
                        "uid": "3849d2836023b2d5019261ced1f11654",
                        "pdp": "assets/file_uploaded/Stan78+5f6a788623d80.",
                        "connected": "offline",
                        "vEtes": "hommeslug",
                        "isBlur": "1",
                        "certificate": "0",
                        "certificateDate": null,
                        "certificateStatus": null,
                        "ville": "Paris",
                        "codePostal": "75000",
                        "codeDepartement": "75",
                        "age": "25",
                        "messages": [
                            {
                                "id": "",
                                "from": "Stan78",
                                "to": "alextest",
                                "type": "groupchat",
                                "body": "Bonjour tu vas bien? ",
                                "timestamp": "1713517727625",
                                "status": "SENT",
                                "hasDelay": false,
                                "room": "",
                                "contactSource": "",
                                "idSrc": "91420",
                                "idDest": "176177",
                                "uidSrc": "3849d2836023b2d5019261ced1f11654",
                                "uidDest": "776f585aea9fdf29f7e10f043fa17b8b"
                            }
                        ]
                    },
                    {
                        "id": "104995",
                        "pseudo": "clemsw",
                        "uid": "e08905eb8fd5fe22deee2e75c171d7e2",
                        "pdp": null,
                        "connected": "offline",
                        "vEtes": "hommeslug",
                        "isBlur": "0",
                        "certificate": "0",
                        "certificateDate": null,
                        "certificateStatus": null,
                        "ville": "Paris",
                        "codePostal": "75000",
                        "codeDepartement": "75",
                        "age": "25",
                        "messages": [
                            {
                                "id": "",
                                "from": "clemsw",
                                "to": "alextest",
                                "type": "groupchat",
                                "body": "hello, que pour femmes ?",
                                "timestamp": "1713454420327",
                                "status": "SENT",
                                "hasDelay": false,
                                "room": "",
                                "contactSource": "",
                                "idSrc": "104995",
                                "idDest": "176177",
                                "uidSrc": "e08905eb8fd5fe22deee2e75c171d7e2",
                                "uidDest": "776f585aea9fdf29f7e10f043fa17b8b"
                            }
                        ]
                    },
                    {
                        "id": "136726",
                        "pseudo": "Demlaura",
                        "uid": "1b788af0b4fea00af3274832333b7b8c",
                        "pdp": null,
                        "connected": "offline",
                        "vEtes": "femmeslug",
                        "isBlur": "0",
                        "certificate": "0",
                        "certificateDate": null,
                        "certificateStatus": "Initialisation",
                        "ville": "Paris",
                        "codePostal": "75000",
                        "codeDepartement": "75",
                        "age": "25",
                        "messages": [
                            {
                                "id": "",
                                "from": "Demlaura",
                                "to": "alextest",
                                "type": "groupchat",
                                "body": "Hello",
                                "timestamp": "1713363309404",
                                "status": "SENT",
                                "hasDelay": false,
                                "room": "",
                                "contactSource": "",
                                "idSrc": "136726",
                                "idDest": "176177",
                                "uidSrc": "1b788af0b4fea00af3274832333b7b8c",
                                "uidDest": "776f585aea9fdf29f7e10f043fa17b8b"
                            }
                        ]
                    },
                    {
                        "id": "146651",
                        "pseudo": "slavedu56",
                        "uid": "d05fa6a45a4c5420cf4d8c89b009b9a3",
                        "pdp": "assets/file_uploaded/slavedu56+63145ada1a353.jpg",
                        "connected": "offline",
                        "vEtes": "hommeslug",
                        "isBlur": "1",
                        "certificate": "1",
                        "certificateDate": "2022-11-09 13:36:10",
                        "certificateStatus": "Validé",
                        "ville": "Paris",
                        "codePostal": "75000",
                        "codeDepartement": "75",
                        "age": "25",
                        "messages": [
                            {
                                "id": "",
                                "from": "slavedu56",
                                "to": "alextest",
                                "type": "groupchat",
                                "body": "Bonjour, désolé je suis hétéro",
                                "timestamp": "1713362191612",
                                "status": "SENT",
                                "hasDelay": false,
                                "room": "",
                                "contactSource": "",
                                "idSrc": "146651",
                                "idDest": "176177",
                                "uidSrc": "d05fa6a45a4c5420cf4d8c89b009b9a3",
                                "uidDest": "776f585aea9fdf29f7e10f043fa17b8b"
                            }
                        ]
                    },
                    {
                        "id": "149943",
                        "pseudo": "Oursroux",
                        "uid": "63724dce4725802225e1df9508e02288",
                        "pdp": "assets/file_uploaded/Oursroux+6621057adc8f5.jpg",
                        "connected": "online",
                        "vEtes": "hommeslug",
                        "isBlur": "0",
                        "certificate": "1",
                        "certificateDate": "2024-04-15 05:24:08",
                        "certificateStatus": "Validé",
                        "ville": "Paris",
                        "codePostal": "75000",
                        "codeDepartement": "75",
                        "age": "25",
                        "messages": [
                            {
                                "id": "",
                                "from": "Oursroux",
                                "to": "alextest",
                                "type": "groupchat",
                                "body": "Bonjour comment va tu ?",
                                "timestamp": "1713362365886",
                                "status": "SENT",
                                "hasDelay": false,
                                "room": "",
                                "contactSource": "",
                                "idSrc": "149943",
                                "idDest": "176177",
                                "uidSrc": "63724dce4725802225e1df9508e02288",
                                "uidDest": "776f585aea9fdf29f7e10f043fa17b8b"
                            }
                        ]
                    },
                    {
                        "id": "183655",
                        "pseudo": "adritest1234",
                        "uid": "b38f5703f3dae360647326ec0df3e2ec",
                        "pdp": null,
                        "connected": "offline",
                        "vEtes": "hommeslug",
                        "isBlur": "1",
                        "certificate": "0",
                        "certificateDate": null,
                        "certificateStatus": null,
                        "ville": "Paris",
                        "codePostal": "75000",
                        "codeDepartement": "75",
                        "age": "30",
                        "messages": [
                            {
                                "id": "",
                                "from": "adritest1234",
                                "to": "alextest",
                                "type": "groupchat",
                                "body": "test",
                                "timestamp": "1713433997488",
                                "status": "SENT",
                                "hasDelay": false,
                                "room": "",
                                "contactSource": "",
                                "idSrc": "183655",
                                "idDest": "176177",
                                "uidSrc": "b38f5703f3dae360647326ec0df3e2ec",
                                "uidDest": "776f585aea9fdf29f7e10f043fa17b8b"
                            }
                        ]
                    },
                    {
                        "id": "183660",
                        "pseudo": "MaitreMat",
                        "uid": "7602cab3ceb65583fd747e713a552d91",
                        "pdp": null,
                        "connected": "offline",
                        "vEtes": "hommeslug",
                        "isBlur": "1",
                        "certificate": "0",
                        "certificateDate": null,
                        "certificateStatus": null,
                        "ville": "Paris",
                        "codePostal": "75000",
                        "codeDepartement": "75",
                        "age": "30",
                        "messages": [
                            {
                                "id": "",
                                "from": "MaitreMat",
                                "to": "alextest",
                                "type": "groupchat",
                                "body": "Bonsoir ",
                                "timestamp": "1713386111350",
                                "status": "SENT",
                                "hasDelay": false,
                                "room": "",
                                "contactSource": "",
                                "idSrc": "183660",
                                "idDest": "176177",
                                "uidSrc": "7602cab3ceb65583fd747e713a552d91",
                                "uidDest": "776f585aea9fdf29f7e10f043fa17b8b"
                            }
                        ]
                    }
                ],
                "totalContact": "26"
            })*/
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            dispatch({type: 'SET_LOADING', payload: false});
        }
    };

    useEffect(() => {
        checkToken();
        setTimeout(() => {
            fetchData();
        }, 1000);
    }, [state.page]);

    return (
        <MessageContext.Provider value={providerState}>
            <main className="page-chat">
                <section className="page">
                    <SidebarChat/>
                    <Conversation/>
                </section>
            </main>
        </MessageContext.Provider>
    )
}

export default Chat;