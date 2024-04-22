import React from 'react';
import './pagination.css';
import {ReactSVG} from "react-svg";
import {useMessageContext} from "@/app/components/context/MessageContext";

const PaginationListeChat = () => {
    // @ts-ignore
    const { state, setPage } = useMessageContext();

    const pagesToShow = 1;
    const totalPages = Math.ceil(state.conversations.totalContact / 10);

    return (
        <div className="pagination pagination-liste-chat">
            <div className="pagination-nav">
                <div className="pagination-pages">
                    <div
                        className={`pagination-div prev ${state.page === 1 ? ' disabled' : ''}`}
                        onClick={() => state.page !== 1 && setPage(state.page - 1)}
                    >
                        <ReactSVG src={'/arrow-nav.svg'} className="icon prev"/>
                        Préc.
                    </div>
                    <div className={`pagination-page ${state.page === 1 ? ' active' : ''}`} onClick={() => setPage(1)}>1</div>
                    {state.page > pagesToShow + 1 && <span className="pagination-ellipsis">...</span>}
                    {state.page > 1 && state.page < totalPages && <div className="pagination-page active" onClick={() => setPage(state.page)}>{state.page}</div>}
                    {state.page < totalPages - pagesToShow && <span className="pagination-ellipsis">...</span>}
                    <div className={`pagination-page ${state.page === totalPages ? ' active' : ''}`} onClick={() => setPage(totalPages)}>
                        {totalPages}
                    </div>
                    <div className={`pagination-div next ${state.page === totalPages ? ' disabled' : ''}`}
                         onClick={() => state.page !== totalPages && setPage(state.page + 1)}>
                        Suiv.
                        <ReactSVG src={'/arrow-nav.svg'} className="icon next"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaginationListeChat;