import React, {useState} from "react";
import "./mainView.scss";

export const MainView = () => {
    const [castles, setCastles] = useState([
        {
            name: "Zamek1",
            description: "Fajny zamek adasdf asdfas dfasdf asdfas dfasdf asdf asdfa sdfasdf asdfas df sadf asdf asdf asdf.",
        },
        {
            name: "Zamek2",
            description: "Też fajny zamek ono n ojn non noj i ji bu uv y vu hhbuh buhbv uvuvh "
        }
    ]);

    return (
        <>
            <section className="mainView">
                <div className="mainView__container">
                    <span className="mainView__header">What would you like to visit today?</span>
                    <ul className="mainView__castles--list">
                        {castles.map((castle, i) =>
                            <li className="mainView__castle" key={i}>
                                <span className="mainView__castle--name">{castle.name}</span>
                                <img className="mainView__castle--image" src="../../images/bolkow-1.jpg"/>
                                <p className="mainView__castle--description">{castle.description}</p>
                                <div className="mainView__castle--buttons">
                                    <button className="castle__button button__add">+</button>
                                    <button className="castle__button button__more">info</button>
                                </div>
                            </li>)}
                    </ul>
                </div>
            </section>
        </>
    );
}