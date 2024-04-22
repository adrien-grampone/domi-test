import React from 'react';
import './pagination.css';
import { ReactSVG } from "react-svg";

const Pagination = ({ limit, offset, nbResults, onPageChange }) => {
    const totalPages = Math.ceil(nbResults / limit);
    const currentPage = Math.floor(offset / limit) + 1;
    const pagesToShow = 3;

    const handleClick = (newOffset) => {
        onPageChange(newOffset);
    };

    const renderPageNumbers = () => {
        const pages = [];
        const minPage = Math.max(1, currentPage - pagesToShow);
        const maxPage = Math.min(totalPages, currentPage + pagesToShow);

        if (currentPage === 1) {
            // Si on est sur la première page, afficher les pages suivantes
            for (let i = currentPage; i <= Math.min(currentPage + pagesToShow, totalPages); i++) {
                pages.push(
                    // @ts-ignore
                    <div
                        key={i}
                        className={`pagination-page${i === currentPage ? ' active' : ''}`}
                        onClick={() => handleClick((i - 1) * limit)}
                    >
                        {i}
                    </div>
                );
            }
        } else if (currentPage === totalPages) {
            // Si on est sur la dernière page, afficher les pages précédentes
            for (let i = Math.max(currentPage - pagesToShow, 1); i <= currentPage; i++) {
                pages.push(
                    // @ts-ignore
                    <div
                        key={i}
                        className={`pagination-page${i === currentPage ? ' active' : ''}`}
                        onClick={() => handleClick((i - 1) * limit)}
                    >
                        {i}
                    </div>
                );
            }
        } else {
            // Sinon, afficher deux pages de chaque côté de la page actuelle
            for (let i = Math.max(currentPage - 2, 1); i <= Math.min(currentPage + 2, totalPages); i++) {
                pages.push(
                    // @ts-ignore
                    <div
                        key={i}
                        className={`pagination-page${i === currentPage ? ' active' : ''}`}
                        onClick={() => handleClick((i - 1) * limit)}
                    >
                        {i}
                    </div>
                );
            }
        }

        return pages;
    };

    return (
        <div className="pagination">
            <div className="pagination-nav">
                <div className="pagination-pages">
                    <div
                        className={`pagination-div prev desktop${currentPage === 1 ? ' disabled' : ''}`}
                        onClick={() => currentPage !== 1 && handleClick(Math.max(0, offset - limit))}
                    >
                        <ReactSVG src={'/arrow-nav.svg'} className="icon prev"/>
                        Précédent
                    </div>
                    <div
                        className={`pagination-div prev mobile${currentPage === 1 ? ' disabled' : ''}`}
                        onClick={() => currentPage !== 1 && handleClick(Math.max(0, offset - limit))}
                    >
                        <ReactSVG src={'/arrow-nav.svg'} className="icon prev"/>
                        Prév.
                    </div>
                    {currentPage > 3 && (
                        <div className="pagination-page" onClick={() => handleClick(0)}>1</div>
                    )}
                    {currentPage > pagesToShow + 1 && <span className="pagination-ellipsis">...</span>}
                    {renderPageNumbers()}
                    {currentPage < totalPages - pagesToShow && <span className="pagination-ellipsis">...</span>}
                    {currentPage < (totalPages-3) && (
                        <div className="pagination-page" onClick={() => handleClick((totalPages - 1) * limit)}>
                            {totalPages}
                        </div>
                    )}
                    <div
                        className={`pagination-div next desktop${currentPage === totalPages ? ' disabled' : ''}`}
                        onClick={() => currentPage !== totalPages && handleClick(Math.min(offset + limit, (totalPages * limit) - limit))}
                    >
                        Suivant
                        <ReactSVG src={'/arrow-nav.svg'} className="icon next"/>
                    </div>
                    <div
                        className={`pagination-div next mobile${currentPage === totalPages ? ' disabled' : ''}`}
                        onClick={() => currentPage !== totalPages && handleClick(Math.min(offset + limit, (totalPages * limit) - limit))}
                    >
                        Suiv.
                        <ReactSVG src={'/arrow-nav.svg'} className="icon next"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pagination;