// messageContext.tsx
import React, { createContext, useState, useContext } from 'react';

// Créer le contexte du message
const MessageContext = createContext();

// Créer le provider pour le contexte du message
export const MessageProvider = ({ children }) => {
    const [message, setMessage] = useState(null);
    const [messageType, setMessageType] = useState(null); // Ajoutez messageType à votre state

    return (
        <MessageContext.Provider value={{ message, setMessage, messageType, setMessageType }}>
            {children}
        </MessageContext.Provider>
    );
};

// Custom hook pour accéder au contexte du message
export const useMessage = () => useContext(MessageContext);
