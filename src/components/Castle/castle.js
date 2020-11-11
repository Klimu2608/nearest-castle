import React, {useState, useEffect} from "react";
import {useParams, useHistory} from "react-router-dom";
import prev from "../../icons/prev.svg";
import next from "../../icons/next.svg";
import "./castle.scss";

export const Castle = ({castle, images, formName}) => {
    const [currentSlide, setCurrentSlide] = useState(images[parseInt(castle.id) - 1][0]);
    let {} = useParams();
    const width = window.innerWidth;
    const history = useHistory();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleClickBack = () => {
        history.goBack()
    }

    const handleClickNext = () => {
        if (currentSlide === images[parseInt(castle.id) - 1][2]) {
            setCurrentSlide(images[parseInt(castle.id) - 1][0]);
        } else if (currentSlide === images[parseInt(castle.id) - 1][0]) {
            setCurrentSlide(images[parseInt(castle.id) - 1][1]);
        } else {
            setCurrentSlide(images[parseInt(castle.id) - 1][2]);
        }
    }

    const handleClickPrev = () => {
        if (currentSlide === images[parseInt(castle.id) - 1][0]) {
            setCurrentSlide(images[parseInt(castle.id) - 1][2]);
        } else if (currentSlide === images[parseInt(castle.id) - 1][2]) {
            setCurrentSlide(images[parseInt(castle.id) - 1][1]);
        } else {
            setCurrentSlide(images[parseInt(castle.id) - 1][0]);
        }
    }

    return (
        <>
            <section className="singleCastle">
                <div className="singleCastle__container">
                    {(formName === "" || width > 768) ? null :
                        <div className="singleCastle__username__container">
                            <span className="username__name">Hi, {formName}</span>
                        </div>
                    }
                    <div className="singleCastle__view">
                        <div className="singleCastle__view__container">
                            <button onClick={handleClickPrev} className="carousel__btn btn__prev">
                                <img className="prev__icon icon" src={prev} alt="prev-button"/>
                            </button>
                            <div className="carousel__container">
                                <div className="carousel__slide">
                                    <img className="carousel--pic"
                                         src={currentSlide}
                                         alt="castle-pic1"
                                    />
                                </div>
                            </div>
                            <button onClick={handleClickNext} className="carousel__btn btn__next">
                                <img className="next__icon icon" src={next} alt="next-button"/>
                            </button>
                        </div>
                        <span className="singleCastle__view--title">{castle.name}</span>
                        <p className="singleCastle__view--description">{castle.long}</p>
                        <button onClick={handleClickBack} className="singleCastle__view--button">Back</button>
                    </div>
                </div>
            </section>
        </>
    );
}