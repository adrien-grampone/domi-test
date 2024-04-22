// MultiStepForm.js
import React, {useState} from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import '../LoginForm/login-form.css';
import './multi-step-form.css';

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        pseudo: 'test',
        prenom: 'test',
        nom: 'test',
        genre: 'homme',
        dateDeNaissance: '2024-03-13',
        email: 'adrien.grampone@outlook.fr',
        plainPassword: 'Test123@',
        cgu: true,
        codePostal: '59115',
        ville: 'Leers',
        pays: 'France',
        statut: 'salarie',
        orientation: 'hetero',
        tendance: 'tendance1',
        pratiques: [],
        recherche: '',
    });

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    // Fonction pour obtenir l'étape actuelle sur 4 étapes
    const getStepCountLabel = () => {
        return `Étape ${step}/4`;
    };

    return (
        <div className="wrapper-form">
            <h1>S'inscrire</h1>
            {step <= 4 && (
                <label className="step">{getStepCountLabel()}</label>
            )}
            {step === 1 && (
                <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep}/>
            )}
            {step === 2 && (
                <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep}/>
            )}
            {step === 3 && (
                <Step3 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep}/>
            )}
            {step === 4 && (
                <Step4 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep}/>
            )}
            {step === 5 && (
                <Step5 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep}/>
            )}
        </div>
    );
};

export default MultiStepForm;
