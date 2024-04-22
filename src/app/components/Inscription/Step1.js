// Step1.js
import React from 'react';
import Link from "next/link";

const Step1 = ({formData, setFormData, nextStep}) => {

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
                <input placeholder="Pseudo" type="text" id="pseudo" name="pseudo" required value={formData.pseudo}
                       className="custom-input"
                       onChange={handleChange}/>
                <input placeholder="Adresse-mail" type="email" id="email" name="email" required value={formData.email}
                       className="custom-input"
                       onChange={handleChange}/>
                <input placeholder="Mot de passe" type="password" id="password" name="plainPassword" required value={formData.plainPassword}
                       className="custom-input"
                       onChange={handleChange}/>
                <input placeholder="Date de naissance" type="date" id="dateNaissance" name="dateDeNaissance" required value={formData.dateDeNaissance}
                       className="custom-input"
                       onChange={handleChange}/>
                <fieldset className="cgu">
                    <div className="input-wrapper">
                        <input type="checkbox" id="cgu" name="cgu" required onChange={handleChange} checked={formData.cgu}/>
                        <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 7.5L10 16L16.5 9L23 2" stroke="black" strokeWidth="3"/>
                        </svg>
                    </div>
                    <label htmlFor="cgu">Je certifie être majeur(e) et avoir lu et accepté les <Link
                        href="#"> Conditions générales de
                        vente</Link> ainsi que la <Link href="#">politique de confidentialité</Link> sur la vie privée
                        de Domi.</label>
                </fieldset>
            </div>
            <div className="boutons">
                <div className="inscription-link">
                    <p>Déjà un compte, <Link href="/connexion">connectez-vous</Link></p>
                </div>
                <button type="submit" className="btn">Suivant</button>
            </div>
        </form>
    );
};

export default Step1;
