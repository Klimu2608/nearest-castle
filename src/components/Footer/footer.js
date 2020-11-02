import React from "react";
import "./footer.scss";
import {BrowserRouter as Router, Link} from "react-router-dom";

export const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer__container container">
                    <nav className="footer__nav">
                        <Link to="/contact" className="footer__link">Contact us</Link>
                        <Link to="/about" className="footer__link">About</Link>
                    </nav>
                    <p className="footer__text">Copyright by Jakub Klimczak</p>
                </div>
            </footer>
        </>
    );
}