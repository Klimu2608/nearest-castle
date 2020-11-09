import React, {useEffect} from "react";
import {useParams, Link, useHistory} from "react-router-dom";
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
                            <img className="singleCastle__view--pic"
                                 src={images[parseInt(castle.id) - 1]}
                            />
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