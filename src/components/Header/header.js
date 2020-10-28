import React from "react";
import "./header.scss";

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
                    <a className="header__logo" href="#">
                        <span>Nearest</span>
                        <div className="header__logo__castle"></div>
                        <span>Castle</span>
                    </a>
                    <nav className="header__nav">
                        <button className="header__nav__btn btn__main">main</button>
                        <button className="header__nav__btn btn__all">all</button>
                        <button className="header__nav__btn btn__my">my</button>
                    </nav>
                    <a className="header__user" href="#">
                        <div className="header__user__icon"></div>
                        <span className="header__user__name">Hi, {formName}</span>
                    </a>
                </div>
            </header>
        );
    } else {
        return (
            <header className="header">
                <div className="header__container">
                    <a className="header__logo" href="#">
                        <span>Nearest</span>
                        <div className="header__logo__castle"></div>
                        <span>Castle</span>
                    </a>
                    <span className="header__username">Hi, {formName}</span>
                    <button onClick={handleClickMenu} className="header__menu__button"/>
                    <nav className="header__nav--mobile hidden">
                        <button className="header__btn--mobile mobile__main">Main</button>
                        <button className="header__btn--mobile mobile__all">All</button>
                        <button className="header__btn--mobile mobile__my">My</button>
                    </nav>
                </div>
            </header>
        );
    }
}