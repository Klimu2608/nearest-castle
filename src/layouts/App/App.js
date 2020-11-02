import './App.scss';
import React, {useState} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Header} from "../../components/Header/header";
import {Form} from "../../components/Form/form";
import {Footer} from "../../components/Footer/footer";
import {MainView} from "../../components/MainView/mainView";
import {UserList} from "../../components/UserList/userList";
import {SingleRecord} from "../../components/SingleRecord/singleRecord";
import {AllList} from "../../components/AllList/allList";
import {Contact} from "../../components/Contact/contact";
import {About} from "../../components/About/about";

function App() {
    const [userName, setUserName] = useState("");
    const [formChecked, setFormChecked] = useState(false);
    const [userPosition, setUserPosition] = useState({});

    if (formChecked === true) {
        navigator.geolocation.getCurrentPosition(function (position) {
            setUserPosition(position);
            console.log(userPosition);
        })
    }

    const handleName = (name) => {
        setUserName(name);
    }
    const handleCheck = (checked) => {
        setFormChecked(checked);
    }

    console.log(formChecked);

    return (
        <>
            <Router>
                <Header  formName={userName}/>
                <Switch className="router__container">
                    <Route exact path="/"
                           render={(props) =>
                               <Form {...props}
                                     onCheck={handleCheck}
                                     onDone={handleName}
                               />
                           }
                    />
                    <Route path="/main" component={MainView}/>
                    <Route path="/all" component={AllList}/>
                    <Route path="/my" component={UserList}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/castle/:id" component={SingleRecord}/>
                </Switch>
                <Footer/>
            </Router>
        </>
    );
}

export default App;
