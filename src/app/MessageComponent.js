// MessageComponent.tsx
import React, { useEffect, useState } from 'react';
import { useMessage } from './MessageContext';

const MessageComponent = () => {
    const {message, setMessage, messageType} = useMessage();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(!!message);
        let timer;
        if (message) {
            timer = setTimeout(() => {
                setVisible(false);
                // Attendez un peu avant de réinitialiser le message pour permettre l'animation
                setTimeout(() => {
                    setMessage(null);
                }, 300); // ajustez la durée de votre animation si nécessaire
            }, 5000);
        }

        return () => clearTimeout(timer);
    }, [message, setMessage]);

    return (
        <div className={`message ${messageType} ${visible ? 'show' : ''}`}>
            {message}
        </div>
    );
};

export default MessageComponent;
