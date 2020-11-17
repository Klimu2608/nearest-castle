import React from "react";
import "./about.scss";

export const About = ({formName}) => {
    const width = window.innerWidth;

    return (
        <>
            <section className="about">
                <div className="about__container">
                    {width > 768 ? null : <span className="about__name">Hi, {formName}</span>}
                    <span className="about__header">About</span>
                    <p className="about__text">This App was created as a project on a JavaScript React programming course. If you like it or have questions, please contact me through contact page or Github <a href="https://github.com/Klimu2608" className="about__text--link">here</a>.</p>
                </div>
            </section>
        </>
    );
}