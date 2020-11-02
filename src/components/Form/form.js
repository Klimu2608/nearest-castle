import React, {useState} from "react";
import "./form.scss";
import {useHistory} from 'react-router-dom';

export const Form = ({onDone, onCheck}) => {
    const [name, setName] = useState("");
    const [checked, setChecked] = useState(false);

    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();

        if (name !== "" && checked !== false) {
            onCheck(checked);
            onDone(name);
        } else {
            alert("Type your name and agree to use your location to continue");
        }

        let path = "/main";
        history.push(path);
    }

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit} className="form">
                    <div className="form__container">
                        <span className="form__hello">Hello,</span>
                        <p className="form__text">Type your name and tick checkbox below, to continue</p>
                        <input value={name} onChange={e => setName(e.target.value)} className="form__input__name"
                               type="text" placeholder="Type your name here"/>
                        <label className="form__checkbox">
                            <input checked={checked} onChange={() => setChecked(!checked)}
                                   className="form__checkbox__input" type="checkbox"/>
                            By ticking this checkbox, you agree this app to use your location.
                        </label>
                        <button className="form__btn">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}