import React from "react";
import "./footer.scss";
import {BrowserRouter as Router, Link} from "react-router-dom";

export const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer__container container">
                    <p className="footer__text">Copyright by Jakub Klimczak</p>
                </div>
            </footer>
        </>
    );
}