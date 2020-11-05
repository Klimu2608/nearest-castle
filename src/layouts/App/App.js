import './App.scss';
import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory as createHistory} from "history";
import {Header} from "../../components/Header/header";
import {Form} from "../../components/Form/form";
import {Footer} from "../../components/Footer/footer";
import {UserList} from "../../components/UserList/userList";
import {SingleRecord} from "../../components/SingleRecord/singleRecord";
import {AllList} from "../../components/AllList/allList";
import {Contact} from "../../components/Contact/contact";
import {About} from "../../components/About/about";

function App() {
    const [userName, setUserName] = useState("");

    const history = createHistory();

    const handleName = (name) => {
        setUserName(name);
    }

    return (
        <>
            <Router history={history}>
                <Header formName={userName}/>
                <Switch className="router__container">
                    <Route exact path="/"
                           render={(props) =>
                               <Form {...props}
                                     onDone={handleName}
                               />
                           }
                    />
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
