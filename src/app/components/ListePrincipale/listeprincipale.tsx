import React, {useEffect, useRef, useState} from 'react';
import {usePathname} from 'next/navigation';
import './listeprincipale.css';
import Image from 'next/image';
import Link from 'next/link';
import {ReactSVG} from "react-svg";
import CartePeople from "@/app/components/CartePeople/cartepeople";
import Pagination from "@/app/components/Pagination/pagination";
import Loading from "@/app/components/Loading/Loading";
import {getPeople} from "@/app/api/people/get-people";


const ListePrincipale = () => {

    const [modeList, setModeList] = useState(false);

    const [peoples, setPeoples] = useState([]);
    const [nbResults, setNbResults] = useState(0);
    const [limit, setLimit] = useState(16);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);

    const [ageMax, setAgeMax] = useState(99);
    const [ageMin, setAgeMin] = useState(18);
    const [avecPhoto, setAvecPhoto] = useState(null);
    const [isConnected, setConnected] = useState(null);
    const [isDefault, setDefault] = useState(null);
    const [isInitSear, setInitSearch] = useState(false);
    const [isSearch, setSearch] = useState(true);
    const [libelle, setLibelle] = useState('');
    const [localisation, setLocalisation] = useState([0,1000]);
    const [order, setOrder] = useState('');
    const [postRequest, setPostRequest] = useState(true);
    const [pratiques, setPratiques] = useState([]);
    const [pseudo, setPseudo] = useState('');
    const [rencontre, setRencontre] = useState('');
    const [tendances, setTendances] = useState('');
    const [uidSearch, setUidSearch] = useState('');


    useEffect(() => {
        fetchData();
    }, [offset]);

    const fetchData = async () => {
        setLoading(true)
        try {
            const data = await getPeople({
                limit,
                offset,
                ageMax,
                ageMin,
                avecPhoto,
                isConnected,
                isDefault,
                isInitSear,
                isSearch,
                libelle,
                localisation,
                order,
                postRequest,
                pratiques,
                pseudo,
                rencontre,
                tendances,
                uidSearch
            });
            if (data && data.result) {
                setPeoples(data.result.value);
                setNbResults(data.result.nbResults);
                //setOffset(offset + limit);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    }

    const handlePageChange = (newOffset) => {
        setOffset(newOffset);
    };

    return (
        <section className="content-principale">
            {loading && <Loading number={16} classe={modeList} heightValue={undefined}/>}
            {!loading &&
                <div className={`liste-principale ${modeList ? "listing" : ""}`}>
                    {peoples.map((person, index) => {
                        return (
                            <CartePeople key={index} data={person} mode={modeList}/>
                        );
                    })}
                </div>
            }
            <Pagination limit={limit} offset={offset} nbResults={nbResults} onPageChange={handlePageChange} />
        </section>
    );
};

export default ListePrincipale;