'use client';
import React, {useState} from 'react';

const Step2 = ({formData, setFormData, nextStep, prevStep}) => {

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
                <input placeholder="Pays" type="text" id="pays" name="pays" required value={formData.pays}
                       className="custom-input"
                       onChange={handleChange}/>
                <input placeholder="Ville" type="text" id="ville" name="ville" required value={formData.ville}
                       className="custom-input"
                       onChange={handleChange}/>
                <input placeholder="Code postal" type="text" name="codePostal" id="code-postal" required
                       value={formData.codePostal}
                       className="custom-input"
                       onChange={handleChange}/>
            </div>
            <div className="boutons">
                <span className="back" onClick={prevStep}
                >Retour</span>
                <button type="submit" className="btn">Suivant</button>
            </div>
        </form>
    );
};

export default Step2;
