import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import variables from "@/variables"; // Assurez-vous d'ajuster le chemin d'importation

export const useWebSocket = () => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = io(variables.baseUrlWs, {
            path: '/', // Utiliser le chemin racine pour éviter "socket.io" dans l'URL
            transports: ['websocket'], // Forcer l'utilisation de WebSocket
            forceNew: true, // Ignorer les connexions existantes
        });

        newSocket.on('connect', () => {
            console.log('Connecté au serveur WebSocket');
        });


        newSocket.on('message', (message) => {
            console.log('Message reçu du serveur:', message);
            // Traitez le message comme vous le souhaitez
        });

        newSocket.on('error', (error) => {
            console.error('Erreur de connexion WebSocket:', error);
        });

        setSocket(newSocket);

        return () => {
            newSocket.disconnect();
            console.log('Déconnecté du serveur WebSocket');
        };
    }, []);

    const send = (msg) => {
        if (socket && socket.connected) {
            socket.emit('message', JSON.stringify(msg));
        } else {
            console.log('Erreur lors de l\'envoi du message: la connexion WebSocket n\'est pas établie');
        }
    };

    return {
        socket,
        send,
    };
};
