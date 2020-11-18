import React from "react";
import {useHistory} from "react-router-dom";
import "./footer.scss";

export const Footer = ({onUserName}) => {
    const history = useHistory();

    const handleLogOut = () => {
        history.push("/");
        localStorage.clear();
        onUserName("");
    }

    return (
        <>
            <footer className="footer">
                <div className="footer__container container">
                    <button onClick={handleLogOut} className="footer__btn">Log out</button>
                    <p className="footer__text">Created by Jakub Klimczak</p>
                </div>
            </footer>
        </>
    );
}