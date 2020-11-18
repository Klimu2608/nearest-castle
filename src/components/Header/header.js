import React from "react";
import "./header.scss";
import {Link, useHistory} from "react-router-dom";
import logo from "../../icons/castle2.svg";
import user from "../../icons/user.svg";

export const Header = ({userName, onPopup}) => {
    const width = window.innerWidth;
    const history = useHistory();

    const handleClickMenu = () => {
        if (userName !== "") {
            const headerNav = document.querySelector(".header__nav--mobile");
            headerNav.classList.toggle("hidden");
        } else {
            onPopup(true);
        }
    }

    const handleClick = (e, path) => {
        e.preventDefault();
        if (userName !== "") {
            history.push(path);
        } else {
            onPopup(true);
        }
    }

    if (width > 768) {
        return (
            <header className="header">
                <div className="header__container">
                    <Link onClick={e => handleClick(e, "/all")} className="header__logo" to="/all">
                        <span>Nearest</span>
                        <img src={logo} className="header__logo__castle" alt="logo"/>
                        <span>Castle</span>
                    </Link>
                    <nav className="header__nav">
                        <Link onClick={e => handleClick(e, "/all")} to="/all" className="header__nav__link">castles</Link>
                        <Link onClick={e => handleClick(e, "/my")} to="/my" className="header__nav__link">my</Link>
                        <Link onClick={e => handleClick(e, "/contact")} to="/contact" className="header__nav__link">contact</Link>
                        <Link onClick={e => handleClick(e, "/about")} to="/about" className="header__nav__link">about</Link>
                    </nav>
                    <Link onClick={e => handleClick(e, "/my")} className="header__user" to="/my">
                        <img src={user} className="header__user__icon" alt="user-icon"/>
                        <span className="header__user__name">{userName}</span>
                    </Link>
                </div>
            </header>
        );
    } else {
        return (
            <header className="header">
                <div className="header__container">
                    <Link onClick={e => handleClick(e, "/all")} className="header__logo" to="/all">
                        <span>Nearest</span>
                        <img src={logo} className="header__logo__castle" alt="logo"/>
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