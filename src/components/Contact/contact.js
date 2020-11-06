import React, {useState} from "react";
import "./contact.scss";
import axios from "axios";

export const Contact = ({formName}) => {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [message, setMessage] = useState("");

    const width = window.innerWidth;

    const handleSubmit = (e) => {
        e.preventDefault();

        axios({
            method: "POST",
            url: "/send",
            data: {
                name: name,
                mail: mail,
                message: message
            }
        }).then(response => {
            if (response.data.status === 'success'){
                alert("Message Sent.");
                resetForm();
            }else if(response.data.status === 'fail'){
                alert("Sending message failed.")
            }
        })
    }
    const resetForm = () => {
        setName("");
        setMail("");
        setMessage("");
    }
    const handleChangeName = (e) => {
        setName(e);
    }
    const handleChangeMail = (e) => {
        setMail(e);
    }
    const handleChangeMessage = (e) => {
        setMessage(e);
    }

    return (
        <>
            <section className="contact">
                <div className="contact__container">
                    {(formName === "" || width > 768) ? null :
                        <div className="contact__username__container">
                            <span className="username__name">Hi, {formName}</span>
                        </div>
                    }
                    <span className="contact__header">Contact</span>
                    <div className="contact__form__container">
                        <form onSubmit={handleSubmit} className="contact__form" method="POST">
                            <input value={name} onChange={e => handleChangeName(e.target.value)} className="contact__name" type="text" placeholder="Name" required/>
                            <input value={mail} onChange={e => handleChangeMail(e.target.value)} className="contact__email" type="email" placeholder="email@example.com" required/>
                            <textarea value={message} onChange={e => handleChangeMessage(e.target.value)} className="contact__message" placeholder="Message" required/>
                            <button className="contact__submit">Send</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}