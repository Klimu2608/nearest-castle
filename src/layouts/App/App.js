import './App.scss';
import React, {useState, useEffect} from "react";
import {Header} from "../../components/Header/header";
import {Form} from "../../components/Form/form";
import {Footer} from "../../components/Footer/footer";

function App() {
    const [userName, setUserName] = useState("");
    const [formChecked, setFormChecked] = useState(false);
    const [userPosition, setUserPosition] = useState({});

    useEffect(() => {

        navigator.geolocation.getCurrentPosition(function (position) {
            setUserPosition(position);
            console.log(userPosition);
        })

    }, []);

    const handleName = (name) => {
        setUserName(name);
    }
    const handleCheck = (checked) => {
        setFormChecked(checked);
        console.log(formChecked);
    }

    return (
        <>
            <Header formName={userName}/>
            <Form onCheck={handleCheck} onDone={handleName}/>
            <Footer/>
        </>
    );
}

export default App;
