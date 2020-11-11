import React, {useEffect} from "react";
import "./userList.scss";
import {Link} from "react-router-dom";

export const UserList = ({formName, onRemove, onMore, userCastles, images, popup, onPopup, currentCastle, onCurrentCastle}) => {

    const width = window.innerWidth;

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    if (userCastles.length === 0) {
        return (
          <>
              <section className="userList">
                  <div className="userList__container">
                      {
                          popup === true &&
                          <div className="userList__popup">
                              <span className="popup__text">{currentCastle.name} was removed from your list!</span>
                              <button onClick={() => onPopup(false)} className="popup__btn">close</button>
                          </div>
                      }
                      {(formName === "" || width > 768) ? null :
                          <div className="userList__username__container">
                              <span className="username__name">Hi, {formName}</span>
                          </div>
                      }
                      <div className="userList__empty">
                          <span>Add some castles to see your list</span>
                      </div>
                  </div>
              </section>
          </>
        );

    } else {

        return (
            <>
                <section className="userList">
                    <div className="userList__container">
                        {(formName === "" || width > 768) ? null :
                            <div className="userList__username__container">
                                <span className="username__name">Hi, {formName}</span>
                                <span className="username__visit">Your castles to visit:</span>
                            </div>
                        }
                        {
                            (popup === true && userCastles.length > 0) &&
                            <div className="userList__popup">
                                <span className="popup__text">{currentCastle.name} was removed from your list!</span>
                                <button onClick={() => onPopup(false)} className="popup__btn">close</button>
                            </div>
                        }
                        <ul className="userList__castles--list">
                            {userCastles.map((castle) =>
                                <li className="userList__castle" key={parseInt(castle.id)}>
                                    <img className="userList__castle__img"
                                         src={images[parseInt(castle.id) -1][0]}
                                     alt="castle-picture"/>
                                    <span className="userList__castle--name">{castle.name}</span>
                                    <p className="userList__castle--description">{castle.description}</p>
                                    <div className="userList__btn__container">
                                        <button onClick={() => {
                                            onRemove(castle.name);
                                            onPopup(true);
                                            onCurrentCastle(castle)
                                        }}
                                                className="userList__btn"
                                        >Remove
                                        </button>
                                        <Link to={`/castle/${castle.name}`} onClick={() => onMore(castle)} className="userList__btn">More</Link>
                                    </div>
                                </li>)
                            }
                        </ul>
                    </div>
                </section>
            </>
        );
    }
}