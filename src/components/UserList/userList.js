import React from "react";
import "./userList.scss";

export const UserList = ({formName, onRemove, userCastles, images}) => {


    if (userCastles.length === 0) {
        return (
          <>
              <section className="userList">
                  <div className="userList__container">
                      {formName === "" ? null :
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
                        {formName === "" ? null :
                            <div className="userList__username__container">
                                <span className="username__name">Hi, {formName}</span>
                                <span className="username__question">Your castles to visit:</span>
                            </div>
                        }
                        <ul className="userList__castles--list">
                            {userCastles.map((castle, i) =>
                                <li className="userList__castle" key={parseInt(castle.id)}>
                                    <img className="userList__castle__img"
                                         src={images[parseInt(castle.id) -1]}
                                    />
                                    <span className="userList__castle--name">{castle.name}</span>
                                    <p className="userList__castle--description">{castle.description}</p>
                                    <div className="userList__btn__container">
                                        <button onClick={() => onRemove(castle.name)} className="userList__btn">Remove
                                        </button>
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