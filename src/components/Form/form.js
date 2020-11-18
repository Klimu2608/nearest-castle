import React, {useState} from "react";
import "./form.scss";
import {useHistory} from 'react-router-dom';

export const Form = ({onDone, popup, onPopup}) => {
    const [name, setName] = useState("");

    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        if (name !== "") {
            onDone(name);
            let path = "/all";
            history.push(path);
        } else {
            onPopup(true);
        }
    }

    return (
        <>
            <div className="container">
                {
                    popup === true &&
                    <div className="form__popup">
                        <span className="popup__text">You have to type your name to continue!</span>
                        <button onClick={() => onPopup(false)} className="popup__btn">close</button>
                    </div>
                }
                <form onSubmit={handleSubmit} className="form">
                    <div className="form__container">
                        <span className="form__hello">Hello,</span>
                        <p className="form__text">Type your name to continue</p>
                        <input value={name} onChange={e => setName(e.target.value)} className="form__input__name"
                               type="text" placeholder="Type your name here"/>
                        <button className="form__btn">Ok</button>
                    </div>
                </form>
            </div>
        </>
    );
}