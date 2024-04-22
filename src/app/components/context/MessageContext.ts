import React from 'react';

const MessageContext = React.createContext({});

export function useMessageContext() {
    return React.useContext(MessageContext);
}

export default MessageContext;