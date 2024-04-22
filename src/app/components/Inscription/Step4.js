'use client';
import React, {useState} from 'react';
import Select from 'react-select'


const Step4 = ({formData, setFormData, nextStep, prevStep}) => {


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        nextStep();
    };

    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6'];
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleSelect = (option) => {

        //If clicked option is  already selected, remove it
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter((item) => item !== option));
            setFormData({...formData, 'pratiques': selectedOptions.filter((item) => item !== option)});
            return;
        }

        if (selectedOptions.length < 6 && !selectedOptions.includes(option)) {
            setSelectedOptions([...selectedOptions, option]);
            setFormData({...formData, 'pratiques': [...selectedOptions, option]});
        }
    };

    const handleRemove = (option) => {
        setSelectedOptions(selectedOptions.filter((item) => item !== option));
        setFormData({...formData, 'pratiques': selectedOptions.filter((item) => item !== option)});
    };

    return (
        <form onSubmit={handleSubmit} className="custom-form">
            <div className="fields">
                <div className="select-wrapper custom-input multi-select">
                    <label>Vos pratiques (6 max)</label>
                    <select onChange={(e) => handleSelect(e.target.value)}>
                        {options.map((option) => (
                            <option key={option} value={option} selected={formData.pratiques.includes(option)}>{option}</option>
                        ))}
                    </select>
                    <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 11L-9.45698e-07 4.21161e-07L17 1.90735e-06L8.5 11Z" fill="#D9D9D9"/>
                    </svg>
                </div>
                <div className="select-wrapper custom-input">
                    <select name="recherche" id="recherche" required onChange={handleChange}>
                        <option value="">Votre recherche</option>
                        <option value="recherche1" selected={formData.recherche === "recherche1"}>Recherche 1</option>
                        <option value="tendance2" selected={formData.recherche === "recherche2"}>Recherche 2</option>
                    </select>
                    <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 11L-9.45698e-07 4.21161e-07L17 1.90735e-06L8.5 11Z" fill="#D9D9D9"/>
                    </svg>
                </div>

                <div className="liste-choix">
                    {formData.pratiques.map((option) => (
                        <span key={option}>
                            {option}
                            <button onClick={() => handleRemove(option)}>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
<path d="M11.923 10.5134L2.05127 0.641602L0.641016 2.05185L10.5128 11.9236L11.923 10.5134Z" fill="white"/>
<path d="M10.5128 0.641167L0.641022 10.5129L2.05127 11.9232L11.923 2.05142L10.5128 0.641167Z" fill="white"/>
</svg>

                            </button>
                        </span>
                    ))}
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

export default Step4;
