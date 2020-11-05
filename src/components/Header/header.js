import React from "react";
import "./header.scss";
import {Link} from "react-router-dom";

export const Header = ({formName}) => {
    const width = window.innerWidth;

    const handleClickMenu = () => {
        const headerNav = document.querySelector(".header__nav--mobile");
        headerNav.classList.toggle("hidden");
    }

    if (width > 768) {
        return (
            <header className="header">
                <div className="header__container">
                    <Link className="header__logo" to="/all">
                        <span>Nearest</span>
                        <div className="header__logo__castle"></div>
                        <span>Castle</span>
                    </Link>
                    <nav className="header__nav">
                        <Link to="/all" className="header__nav__link">castles</Link>
                        <Link to="/my" className="header__nav__link">my</Link>
                        <Link to="/contact" className="header__nav__link">contact</Link>
                        <Link to="/about" className="header__nav__link">about</Link>
                    </nav>
                    <Link className="header__user" to="/my">
                        <div className="header__user__icon"></div>
                        <span className="header__user__name">{formName}</span>
                    </Link>
                </div>
            </header>
        );
    } else {
        return (
            <header className="header">
                <div className="header__container">
                    <Link className="header__logo" to="/all">
                        <span>Nearest</span>
                        <div className="header__logo__castle"></div>
                        <span>Castle</span>
                    </Link>
                    <button onClick={handleClickMenu} className="header__menu__button"/>
                    <nav className="header__nav--mobile hidden">
                        <Link onClick={handleClickMenu} to="/all" className="header__btn--mobile">Castles</Link>
                        <Link onClick={handleClickMenu} to="/my" className="header__btn--mobile">My</Link>
                        <Link onClick={handleClickMenu} to="/contact" className="header__btn--mobile">Contact</Link>
                        <Link onClick={handleClickMenu} to="/about" className="header__btn--mobile">About</Link>
                    </nav>
                </div>
            </header>
        );
    }
}