import React, {useEffect, useRef, useState} from 'react';
import {usePathname} from 'next/navigation';
import './sidebar.css';
import ListePeople from "@/app/components/ListePeople/listepeople";
import ListePeopleSlider from "@/app/components/ListePeopleSlider/listepeopleslider";
import Image from 'next/image';
import Link from 'next/link';
import {ReactSVG} from "react-svg";
import {getPeopleSidebar} from "@/app/api/people/get-people-sidebar";
import {getNbInscrits} from "@/app/api/people/get-nb-inscrits";

const Sidebar = () => {

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setTri('');
        setOrder('');
    };

    const [formData, setFormData] = useState({
        statut: 'online'
    });

    const [peoples, setPeoples] = useState([]);
    const [nbResults, setNbResults] = useState(0);
    const [nbInscrits, setNbInscrits] = useState(0);
    const [limit, setLimit] = useState(200);
    const [offset, setOffset] = useState(0);
    const [tri, setTri] = useState('');
    const [order, setOrder] = useState('');

    useEffect(() => {
        fetchData();
    }, [formData, tri, order]);

    useEffect(() => {
        fetchNbInscrits();
    }, []);

    const handleSortClick = (tri, order) => {
        setTri(tri);
        setOrder(order);
    };

    const fetchData = async () => {
        try {
            const data = await getPeopleSidebar({
                limit,
                offset,
                filter: formData.statut,
                tri,
                order
            });
            if (data && data.result) {
                setPeoples(data.result.value);
                setNbResults(data.result.nbOnline);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const fetchNbInscrits = async () => {
        try {
            const data = await getNbInscrits();
            if (data) {
                setNbInscrits(data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <div className="page-content-sidebar sidebar-wrapper">
            <div className="sidebar-container">
                <div className="sidebar">
                    <ListePeopleSlider data={peoples}/>
                    <div className="filtres">
                        <div className="inscrits">
                            <span className="blanc">{nbInscrits} inscrit(e)s dont </span>
                            <span className="noir">{nbResults} en lignes</span>
                        </div>
                        <div className="select-wrapper custom-input">
                            <select name="statut" id="statut" required onChange={handleChange}>
                                <option value="online" selected={formData.statut === "online"}>Personnes en ligne
                                </option>
                                <option value="proche" selected={formData.statut === "proche"}>Autour de vous</option>
                                <option value="photos" selected={formData.statut === "photos"}>Nouvelles photos</option>
                                <option value="favoris" selected={formData.statut === "favoris"}>Vos favoris</option>
                            </select>
                            <svg width="17" height="11" viewBox="0 0 17 11" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.5 11L-9.45698e-07 4.21161e-07L17 1.90735e-06L8.5 11Z" fill="#D9D9D9"/>
                            </svg>
                        </div>
                        <div className="filtre-order">
                            <div className="order alpha">
                                <span className={tri === "pseudo" ? "actif" : ""}>ABC</span>
                                <div className="arrow">
                                    <ReactSVG src={'/arrow-top.svg'}
                                              className={`icon arrow-top ${tri === "pseudo" && order === "asc" ? "actif" : ""}`}
                                              onClick={() => handleSortClick("pseudo", "asc")}/>
                                    <ReactSVG src={'/arrow-bottom.svg'}
                                              className={`icon arrow-down ${tri === "pseudo" && order === "desc" ? "actif" : ""}`}
                                              onClick={() => handleSortClick("pseudo", "desc")}/>
                                </div>
                            </div>
                            <div className="order age">
                                <span className={tri === "ages" ? "actif" : ""}>Âge</span>
                                <div className="arrow">
                                    <ReactSVG src={'/arrow-top.svg'}
                                              className={`icon arrow-top ${tri === "ages" && order === "asc" ? "actif" : ""}`}
                                              onClick={() => handleSortClick("ages", "asc")}/>
                                    <ReactSVG src={'/arrow-bottom.svg'}
                                              className={`icon arrow-down ${tri === "ages" && order === "desc" ? "actif" : ""}`}
                                              onClick={() => handleSortClick("ages", "desc")}/>
                                </div>
                            </div>
                            <div className="order sexe">
                                <span className={tri === "sexe" ? "actif" : ""}>Sexe</span>
                                <div className="arrow">
                                    <ReactSVG src={'/arrow-top.svg'}
                                              className={`icon arrow-top ${tri === "sexe" && order === "asc" ? "actif" : ""}`}
                                              onClick={() => handleSortClick("sexe", "asc")}/>
                                    <ReactSVG src={'/arrow-bottom.svg'}
                                              className={`icon arrow-down ${tri === "sexe" && order === "desc" ? "actif" : ""}`}
                                              onClick={() => handleSortClick("sexe", "desc")}/>
                                </div>
                            </div>
                            <div className="order tendance">
                                <span className={tri === "tendances" ? "actif" : ""}>Tendance</span>
                                <div className="arrow">
                                    <ReactSVG src={'/arrow-top.svg'}
                                              className={`icon arrow-top ${tri === "tendances" && order === "asc" ? "actif" : ""}`}
                                              onClick={() => handleSortClick("tendances", "asc")}/>
                                    <ReactSVG src={'/arrow-bottom.svg'}
                                              className={`icon arrow-down ${tri === "tendances" && order === "desc" ? "actif" : ""}`}
                                              onClick={() => handleSortClick("tendances", "desc")}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ListePeople data={peoples}/>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;