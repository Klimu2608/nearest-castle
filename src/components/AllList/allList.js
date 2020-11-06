import React from "react";
import "./allList.scss";


export const AllList = ({formName, images, allCastles, onAdd}) => {

    return (
        <>
            <section className="allList">
                <div className="allList__container">
                    {formName === "" ? null :
                        <div className="allList__username__container">
                            <span className="username__name">Hi, {formName}</span>
                            <span className="username__question">What would you like to visit today?</span>
                        </div>
                    }
                    <ul className="allList__castles--list">
                        {allCastles.map((castle, i) =>
                            <li className="allList__castle" key={parseInt(castle.id)}>
                                <img className="allList__castle__img"
                                     src={images[parseInt(castle.id) -1]}
                                />
                                <span className="allList__castle--name">{castle.name}</span>
                                <p className="allList__castle--description">{castle.description}</p>
                                <div className="allList__btn__container">
                                    <button onClick={() => onAdd(castle.name)} className="allList__btn">Add to your list</button>
                                </div>
                            </li>)
                        }
                    </ul>
                </div>
            </section>
        </>
    );
}