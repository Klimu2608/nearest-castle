import React from "react";
import {useHistory} from "react-router-dom";
import "./footer.scss";
import ls from "local-storage";

export const Footer = ({onUserName}) => {
    const history = useHistory();

    const handleLogOut = () => {
        history.push("/");
        ls.set("userName", "");
        ls.set("userCastles", "");
        ls.set("singleCastle", "");
        onUserName("");
    }

    return (
        <>
            <footer className="footer">
                <div className="footer__container container">
                    <button onClick={handleLogOut} className="footer__btn">Log out</button>
                    <p className="footer__text">Copyright by Jakub Klimczak</p>
                </div>
            </footer>
        </>
    );
}