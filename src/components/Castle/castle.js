import React, {useEffect} from "react";
import {useParams, Link, useHistory} from "react-router-dom";
import prev from "../../icons/prev.svg";
import next from "../../icons/next.svg";
import "./castle.scss";

export const Castle = ({castle, images, formName}) => {
    let {} = useParams();
    const width = window.innerWidth;
    const history = useHistory();

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    const handleClickBack = () => {
        history.goBack()
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
                            <button className="carousel--btn btn__prev">
                                <img className="prev__icon icon" src={prev} alt="prev-button"/>
                            </button>
                            <div className="carousel__container">
                                <ul className="carousel__track">
                                    <li className="track__slide current__slide">
                                        <img className="track--pic"
                                             src={images[parseInt(castle.id) - 1][0]}
                                             alt="castle-pic1"/>
                                    </li>
                                    <li className="track__slide">
                                        <img className="track--pic"
                                             src={images[parseInt(castle.id) - 1][1]}
                                             alt="castle-pic2"
                                        />
                                    </li>
                                    <li className="track__slide">
                                        <img className="track--pic"
                                             src={images[parseInt(castle.id) - 1][2]}
                                             alt="castle-pic3"
                                        />
                                    </li>
                                </ul>
                            </div>
                            <button className="carousel--btn btn__next">
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