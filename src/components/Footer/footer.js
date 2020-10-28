import React from "react";
import "./footer.scss";

export const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer__container container">
                    <nav className="footer__nav">
                        <button className="footer__btn btn__contact">Contact us</button>
                        <button className="footer__btn btn__about">About</button>
                    </nav>
                    <p className="footer__text">Copyright by Jakub Klimczak</p>
                </div>
            </footer>
        </>
    );
}