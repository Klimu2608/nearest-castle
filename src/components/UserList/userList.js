import React, {useState} from "react";
import "./userList.scss";

export const UserList = ({formName, onRemove, userCastles, images}) => {


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
                                <img className="userList__castle__img" src={images[i]}/>
                                <span className="userList__castle--name">{castle.name}</span>
                                <p className="userList__castle--description">{castle.description}</p>
                                <div className="userList__btn__container">
                                    <button onClick={() => onRemove()} className="userList__btn">Remove</button>
                                </div>
                            </li>)
                        }
                    </ul>
                </div>
            </section>
        </>
    );
}