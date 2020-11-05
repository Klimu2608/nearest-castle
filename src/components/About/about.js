import React from "react";
import "./about.scss";

export const About = ({formName}) => {

    return (
        <>
            <section className="about">
                <div className="about__container">
                    <span className="about__name">Hi, {formName}</span>
                    <p className="about__text">This App was created as project on a JavaScript React programming course. If you like it or have questions, please contact me through contact page.</p>
                </div>
            </section>
        </>
    );
}