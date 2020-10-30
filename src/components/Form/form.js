import React, {useState} from "react";
import "./form.scss";

export const Form = ({onDone, onCheck}) => {
    const [name, setName] = useState("");
    //const [isTrue, setIsTrue] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        onDone(name);
        //onCheck(isTrue);
    }

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit} className="form">
                    <div className="form__container">
                        <span className="form__hello">Hello,</span>
                        <p className="form__text">Type your name and tick checkbox below, to continue</p>
                        <input value={name} onChange={e => setName(e.target.value)}  className="form__input__name" type="text" placeholder="Type your name here"/>
                        <label className="form__checkbox">
                            <input /**onChange={setIsTrue(!isTrue)}**/ className="form__checkbox__input" type="checkbox"/>
                            <span className="form__checkbox__span"></span>
                            By ticking this checkbox, you agree this app to use your location.
                        </label>
                        <button className="form__btn">Ok</button>
                    </div>
                </form>
            </div>
        </>
    );
}