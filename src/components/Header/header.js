import React, {useState} from "react";
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
                    <Link className="header__logo" to="/main">
                        <span>Nearest</span>
                        <div className="header__logo__castle"></div>
                        <span>Castle</span>
                    </Link>
                    <nav className="header__nav">
                        <Link to="/main" className="header__nav__link">main</Link>
                        <Link to="/all" className="header__nav__link">all</Link>
                        <Link to="/my" className="header__nav__link">my</Link>
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
                    <Link className="header__logo" to="/main">
                        <span>Nearest</span>
                        <div className="header__logo__castle"></div>
                        <span>Castle</span>
                    </Link>
                    {formName === "" ? null : <span className="header__username">Hi, {formName}</span>}
                    <button onClick={handleClickMenu} className="header__menu__button"/>
                    <nav className="header__nav--mobile hidden">
                        <Link to="/main" className="header__btn--mobile">Main</Link>
                        <Link to="/all" className="header__btn--mobile">All</Link>
                        <Link to="/my" className="header__btn--mobile">My</Link>
                    </nav>
                </div>
            </header>
        );
    }
}