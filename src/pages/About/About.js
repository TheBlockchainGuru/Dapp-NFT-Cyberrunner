import React, { useRef } from 'react';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import './About.scss';
import back from '../../assets/img/bg/1.png';
import tag from '../../assets/img/tags/1.png';
import pic from '../../assets/img/bg/2.png';

import slideImg1 from '../../assets/img/charac/3.png';
import slideImg2 from '../../assets/img/charac/4.png';
import slideImg3 from '../../assets/img/charac/5.png';
import slideImg4 from '../../assets/img/charac/6.png';
import slideImg5 from '../../assets/img/charac/7.png';

const slideImages = [
    slideImg1, slideImg2, slideImg3, slideImg4, slideImg5
];

const SlideShow = () => {
    const slideRef = useRef();

    const properties = {
        duration: 3000,
        transitionDuration: 500,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        indicators: i => (<div className="indicator"></div>)
    };

    const mouseWheelEvent = ( ev ) => {
        // ev.preventDefault();
        const y = ev.deltaY;
        console.log(slideRef.current);
        if( y > 0 )
            slideRef.current.goNext();
        else
            slideRef.current.goBack();
    }

    return (
        <Slide easing="ease" {...properties} onWheel={ mouseWheelEvent } ref={ slideRef }>
            {slideImages.map((each, index) => (
                <div key={index} className="about__slider__eachItem">
                    <div style={{ backgroundImage: `url(${each})` }}>
                    </div>
                </div>
            ))}
        </Slide>
    )
};

const About = () => {
    return (
        <div className="about">
            <img alt="background" className="about__back" src={back}></img>
            <div className="about__content">
                <img alt="tag" className="about__content__tag" src={tag}></img>

                <div className="about__content__desc">
                    <div>
                        <p>
                            <span>8,888</span> uniquely illustrated rebels from the dystopian future.
                        </p>
                        <p>
                            The collection draws inspiration from popculture dystopian classics such as Akira, Ghost in the Shell, Bladrunner and Mad Max.
                        </p>
                        <p className="about__content__desc__bottom">
                            Each aspect was created with passion and strong attention to detail to ensure each CYBERUNNER was essentric and true to the universe we have created.
                        </p>
                    </div>
                    
                </div>
                <div className="about__content__pic">
                    <img alt="charac"  src={pic}></img>
                </div>
            </div>

            <div className="about__slider">
                <SlideShow />
            </div>
        </div>
    )
}

export default About;