// chatReducer.ts


import {useCallback, useReducer} from "react";

export const chatReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CONVERSATIONS':
            return {
                ...state,
                conversations: action.payload,
                totalMessages: action.payload.totalContact,
                loading: false,
            };
        case 'SET_PAGE':
            return {
                ...state,
                page: action.payload,
            };
        case 'SET_SELECTED_CONVERSATION':
            return {
                ...state,
                selectedConversation: action.payload,
            };

        default:
            return state;
    }
};

export function useChat(){
    const [state, dispatch] = useReducer(chatReducer,{
        conversations: [],
        page: 1,
        totalMessages: 0,
        loading: true,
        selectedConversation: null,
        idContact: null,
    });

    return {
        state: state,
        setPage: useCallback((page) => {
            dispatch({type: 'SET_PAGE', payload: page});
        }, []),
        setConversations: useCallback((conversations) => {
            dispatch({type: 'SET_CONVERSATIONS', payload: conversations});
        }, []),
        setSelectedConversation: useCallback((id) => {
            dispatch({type: 'SET_SELECTED_CONVERSATION', payload: id});
        }, []),
    }
}

export function initialState(){
    return {
        conversations: [],
        page: 1,
        totalMessages: 0,
        loading: true,
        selectedConversation: null,
        idContact: null,
    }
}