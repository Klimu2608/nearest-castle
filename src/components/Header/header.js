import React from "react";
import "./header.scss";
import {Link, useHistory} from "react-router-dom";
import logo from "../../icons/castle2.svg"

export const Header = ({formName}) => {
    const width = window.innerWidth;
    const history = useHistory();

    const handleClickMenu = (e) => {
        e.preventDefault();

        if (formName !== "") {
            const headerNav = document.querySelector(".header__nav--mobile");
            headerNav.classList.toggle("hidden");

        } else {
            alert("Type your name to continue");
        }
    }

    const handleClickCastles = (e) => {
        e.preventDefault();
        if (formName !== "") {
            let path = "/all";
            history.push(path);
        } else {
            alert("Type your name to continue");
        }
    }
    const handleClickMy = (e) => {
        e.preventDefault();
        if (formName !== "") {
            let path = "/my";
            history.push(path);
        } else {
            alert("Type your name to continue");
        }
    }
    const handleClickContact = (e) => {
        e.preventDefault();
        if (formName !== "") {
            let path = "/contact";
            history.push(path);
        } else {
            alert("Type your name to continue");
        }
    }
    const handleClickAbout = (e) => {
        e.preventDefault();
        if (formName !== "") {
            let path = "/about";
            history.push(path);
        } else {
            alert("Type your name to continue");
        }
    }

    if (width > 768) {
        return (
            <header className="header">
                <div className="header__container">
                    <Link onClick={handleClickCastles} className="header__logo" to="/all">
                        <span>Nearest</span>
                        <img src={logo} className="header__logo__castle"/>
                        <span>Castle</span>
                    </Link>
                    <nav className="header__nav">
                        <Link onClick={handleClickCastles} to="/all" className="header__nav__link">castles</Link>
                        <Link onClick={handleClickMy} to="/my" className="header__nav__link">my</Link>
                        <Link onClick={handleClickContact} to="/contact" className="header__nav__link">contact</Link>
                        <Link onClick={handleClickAbout} to="/about" className="header__nav__link">about</Link>
                    </nav>
                    <Link onClick={handleClickMy} className="header__user" to="/my">
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
                    <Link onClick={handleClickCastles} className="header__logo" to="/all">
                        <span>Nearest</span>
                        <img src={logo} className="header__logo__castle"/>
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