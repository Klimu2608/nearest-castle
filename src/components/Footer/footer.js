import React from "react";
import "./footer.scss";

export const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer__container container">
                    <button className="footer__contact">Contact us</button>
                    <p className="footer__text">Copyright by Jakub Klimczak</p>
                </div>
            </footer>
        </>
    );
}