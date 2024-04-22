import React, { useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import './listepeopleslider.css';
import Image from 'next/image';
import Link from 'next/link';
import { ReactSVG } from "react-svg";
import Slider from 'react-slick';
import variablesGlobales from "@/variables";

const ListePeopleSlider = ({ data }) => {


    const [carte, setCarte] = useState(data[0]);
    const [prevArrowActive, setPrevArrowActive] = useState(false);
    const [nextArrowActive, setNextArrowActive] = useState(true);

    const settingsSlider = {
        dots: false,
        infinite: true,
        autoplay: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
    };

    const sliderRef = useRef();

    const slideSlick = (type: string) => {
        if(!sliderRef.current) return;

        if (type === 'next') {
            // @ts-ignore
            sliderRef.current.slickNext();
        } else {
            // @ts-ignore
            sliderRef.current.slickPrev();
        }
    }

    //on slick slide change
    const onSlideChange = (currentSlide: number) => {
        if(currentSlide === 0) {
            setPrevArrowActive(false);
            setNextArrowActive(true);
        } else if(currentSlide === data.length - 1) {
            setNextArrowActive(false);
            setPrevArrowActive(true);
        } else {
            setNextArrowActive(true);
            setPrevArrowActive(true);
        }
    }

    let localisation = '';

    return (
        <div className="liste-people-slider">
            <div className="container-next-prev">
                <div className={prevArrowActive ? 'prev arrow-custom-slick' : 'prev arrow-custom-slick disabled'} onClick={() => slideSlick('prev')} />
            </div>
            <Slider {...settingsSlider} ref={sliderRef} afterChange={onSlideChange}>
                {data.map((person, index) => {
                    if (person.ville && person.codepostal && person.dist) {
                        localisation = person.ville.split(' ')[0].trim() + ', ' + person.codepostal + ' (' + person.dist + 'km)';
                    } else if (person.ville && person.codepostal) {
                        localisation = person.ville.split(' ')[0].trim() + ', ' + person.codepostal;
                    } else if (person.ville) {
                        localisation = person.ville;
                    }
                    return (
                        <div className="people" key={index}>
                            <div className={`people-image ${person.isConnected ? "connected" : ""}`}>
                                {person.photo && <Image src={variablesGlobales.api + person.photo} alt="Image" width={41} height={41} unoptimized />}
                                {!person.photo && person.sexe == "M" && <Image src={'/default-homme.png'} alt="Image" width={41} height={41} /> }
                                {!person.photo && person.sexe == "F" && <Image src={'/default-femme.png'} alt="Image" width={41} height={41} /> }
                            </div>
                            <div className="people-info">
                                <div className="people-name">{person.firstName}</div>
                                <div className="people-info-perso">
                                    <span className="age">{person.age} ans</span>
                                    <span className="ville">{localisation}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
            <div className="container-next-prev">
                <div className={nextArrowActive ? 'next arrow-custom-slick' : 'next arrow-custom-slick disabled'} onClick={() => slideSlick('next')}/>
            </div>
        </div>
    );
};

export default ListePeopleSlider;