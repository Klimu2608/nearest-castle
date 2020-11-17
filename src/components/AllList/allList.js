import React, {useEffect} from "react";
import {Link, useHistory} from "react-router-dom";
import "./allList.scss";
import "../../styles/_variables.scss";

export const AllList = ({formName, images, allCastles, double, onAdd, onMore,
                            popup, onPopup, currentCastle, onCurrentCastle}) => {

    const width = window.innerWidth;
    const history = useHistory();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if(formName === "") {
        const path = "/";
        history.push(path);
        return null;
    } else {
        return (
            <>
                <section className="allList">
                    <div className="allList__container">
                        {(formName === "" || width > 768) ?
                            <div className="allList__username__container">
                                <span className="username__question">What would you like to visit today?</span>
                            </div>
                            :
                            <div className="allList__username__container">
                                <span className="username__name">Hi, {formName}</span>
                                <span className="username__question">What would you like to visit today?</span>
                            </div>
                        }
                        {
                            popup === true &&
                            <div className="allList__popup">
                                {double === true ?
                                    <span className="popup__text">{currentCastle.name} already is on your list!</span>
                                    :
                                    <span className="popup__text">{currentCastle.name} was added to your list!</span>}
                                <button onClick={() => onPopup(false)} className="popup__btn">close</button>
                            </div>
                        }
                        <ul className="allList__castles--list">
                            {
                                allCastles.map((castle) =>
                                    <li className="allList__castle" key={parseInt(castle.id)}>
                                        <img className="allList__castle__img"
                                             src={images[parseInt(castle.id) - 1][0]}
                                             alt="castle"/>
                                        <span className="allList__castle--name">{castle.name}</span>
                                        <p className="allList__castle--description">{castle.description}</p>
                                        <div className="allList__btn__container">
                                            <button onClick={() => {
                                                onAdd(castle.name);
                                                onCurrentCastle(castle);
                                                onPopup(true);
                                            }}
                                                    className="allList__btn"
                                            >Add to your list
                                            </button>
                                            <Link to={`/castle/${castle.name}`}
                                                  onClick={() => onMore(castle)}
                                                  className="allList__btn"
                                            >More</Link>
                                        </div>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </section>
            </>
        );
    }
}