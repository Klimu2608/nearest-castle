import React, {useState, useEffect} from "react";
import "./allList.scss";
import {useHistory} from 'react-router-dom';
import firebase from "../../firebase";

export const AllList = () => {
    const [castles, setCastles] = useState([]);

    const history = useHistory();

    const handleMore = () => {
        let path = "/castle/:id";
        history.push(path);
    }

    useEffect(() => {

        const db = firebase.database();
        const rootRef = db.ref("nearest-castle");
        rootRef.on("value", snap => {
            console.log(snap.val());
        });

    }, [])

    return (
        <>
            <section className="allList">
                <div className="allList__container">
                    <ul className="allList__castles--list">
                        {castles.map((castle) =>
                            <li className="allList__castle" key={castle.id}>
                                <span className="allList__castle--name">{castle.name}</span>
                                <p className="allList__castle--description">{castle.description.short}</p>
                                <button onClick={handleMore} className="castle__more">more</button>
                            </li>)
                        }
                    </ul>
                </div>
            </section>
        </>
    );
}