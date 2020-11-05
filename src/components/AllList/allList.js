import React, {useState, useEffect} from "react";
import "./allList.scss";
import firebase from "../../firebase";
import bedzin from "../../images/bedzin.jpeg";
import bolkow from "../../images/bolkow.jpg";
import checiny from "../../images/checiny.jpg";
import czersk from "../../images/czersk.jpg";
import czocha from "../../images/czocha.jpg";
import kwidzyn from "../../images/kwidzyn.jpg";
import lidzbark from "../../images/lidzbark.jpeg";
import malbork from "../../images/malbork.jpg";
import niedzica from "../../images/niedzica.jpg";
import wawel from "../../images/wawel.jpg";


export const AllList = ({formName}) => {
    const [castles, setCastles] = useState([]);

    const images = [
        malbork,
        wawel,
        kwidzyn,
        niedzica,
        bolkow,
        bedzin,
        checiny,
        czersk,
        czocha,
        lidzbark,
    ];

    const handleAdd = () => {

    }

    useEffect(() => {

        const db = firebase.database();
        const rootRef = db.ref("castles");
        rootRef.on("value", snap => {
            let newState = [];
            snap.forEach(data => {
                const dataVal = data.val();
                newState.push({
                    id: dataVal.id,
                    name: dataVal.name,
                    description: dataVal.description
                });
            });
            setCastles(newState);
        });
    }, [])

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
                        {castles.map((castle, i) =>
                            <li className="allList__castle" key={parseInt(castle.id)}>
                                <img className="allList__castle__img" src={images[i]}/>
                                <span className="allList__castle--name">{castle.name}</span>
                                <p className="allList__castle--description">{castle.description}</p>
                                <div className="allList__btn__container">
                                    <button onClick={handleAdd} className="allList__btn">Add to your list</button>
                                </div>
                            </li>)
                        }
                    </ul>
                </div>
            </section>
        </>
    );
}