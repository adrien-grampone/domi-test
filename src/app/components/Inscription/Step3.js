'use client';
import React, {useState} from 'react';

const Step3 = ({formData, setFormData, nextStep, prevStep}) => {

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        nextStep();
    };

    return (
        <form onSubmit={handleSubmit} className="custom-form">
            <div className="fields">
                <fieldset className="checkboxs-wrapper">
                    <div className="checkbox-wrapper">
                        <input type="radio" name="genre" value="homme" id="genre1" required onChange={handleChange} checked={formData.genre === "homme"} />
                        <label htmlFor="genre1">Homme</label>
                    </div>
                    <div className="checkbox-wrapper">
                        <input type="radio" name="genre" value="femme" id="genre2" required onChange={handleChange} checked={formData.genre === "femme"} />
                        <label htmlFor="genre2">Femme</label>
                    </div>
                    <div className="checkbox-wrapper">
                        <input type="radio" name="genre" value="autre" id="genre3" required onChange={handleChange} checked={formData.genre === "autre"} />
                        <label htmlFor="genre3">Autre</label>
                    </div>
                </fieldset>
                <div className="select-wrapper custom-input">
                    <select name="statut" id="statut" required onChange={handleChange}>
                        <option value="">Statut</option>
                        <option value="etudiant" selected={formData.statut === "etudiant"}>Etudiant</option>
                        <option value="salarie" selected={formData.statut === "salarie"}>Salarié</option>
                        <option value="retraite" selected={formData.statut === "retraite"}>Retraité</option>
                        <option value="sans-emploi" selected={formData.statut === "sans-emploi"}>Sans emploi</option>
                    </select>
                    <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 11L-9.45698e-07 4.21161e-07L17 1.90735e-06L8.5 11Z" fill="#D9D9D9"/>
                    </svg>
                </div>
                <div className="select-wrapper custom-input">
                    <select name="orientation" id="orientation" required onChange={handleChange}>
                        <option value="">Orientation sexuelle</option>
                        <option value="hetero" selected={formData.orientation === "hetero"}>Hétérosexuel</option>
                        <option value="homo" selected={formData.orientation === "homo"}>Homosexuel</option>
                    </select>
                    <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 11L-9.45698e-07 4.21161e-07L17 1.90735e-06L8.5 11Z" fill="#D9D9D9"/>
                    </svg>
                </div>
                <div className="select-wrapper custom-input">
                    <select name="tendance" id="tendance" required onChange={handleChange}>
                        <option value="">Votre tendance</option>
                        <option value="tendance1" selected={formData.tendance === "tendance1"}>Tendance 1</option>
                        <option value="tendance2" selected={formData.tendance === "tendance2"}>Tendance 2</option>
                    </select>
                    <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 11L-9.45698e-07 4.21161e-07L17 1.90735e-06L8.5 11Z" fill="#D9D9D9"/>
                    </svg>
                </div>
            </div>
            <div className="boutons">
                <span className="back" onClick={prevStep}
                >Retour</span>
                <button type="submit" className="btn">Suivant</button>
            </div>
        </form>
    );
};

export default Step3;
