import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {createBrowserHistory as createHistory} from "history";
import {Header} from "../../components/Header/header";
import {Form} from "../../components/Form/form";
import {Footer} from "../../components/Footer/footer";
import {UserList} from "../../components/UserList/userList";
import {AllList} from "../../components/AllList/allList";
import {Contact} from "../../components/Contact/contact";
import {About} from "../../components/About/about";
import {Castle} from "../../components/Castle/castle";
import firebase from "../../firebase";
import {images} from "../../images";
import "./App.scss";

function App() {
    const [userName, setUserName] = useState("");
    const [castles, setCastles] = useState([]);
    const [userCastles, setUserCastles] = useState([]);
    const [singleCastle, setSingleCastle] = useState({});
    const [doubledCastle, setDoubledCastle] = useState(false);
    const [popup, setPopup] = useState(false);
    const [currentCastle, setCurrentCastle] = useState({});

    const history = createHistory();

    useEffect(() => {

        const db = firebase.database();
        const rootRef = db.ref("castles");
        rootRef.once("value").then(snap => {
            let newState = [];
            snap.forEach(data => {
                const dataVal = data.val();
                newState.push({
                    id: dataVal.id,
                    name: dataVal.name,
                    description: dataVal.description,
                    long: dataVal.long
                });
            });
            setCastles(newState);
        });
        setUserCastles(JSON.parse(localStorage.getItem("userCastles")));
        setUserName(localStorage.getItem("userName"));
    }, []);

    useEffect(() => {
        localStorage.setItem("userName", userName);
        localStorage.setItem("userCastles", JSON.stringify(userCastles));
    }, [userName, userCastles]);

    const handleAdd = (castleID) => {
        const stateCopy = [...castles];
        stateCopy.forEach(elem => {
            const checkDouble = userCastles.includes(elem);
            if (elem.id === castleID && checkDouble === false) {
                setDoubledCastle(false);
                setUserCastles(prev => [...prev, elem]);
            }
            if (checkDouble === true) {
                setDoubledCastle(true);
            }
        });
    }

    const handleRemove = (castleID) => {
        const stateCopy = [...userCastles];
        stateCopy.forEach(elem => {
            if (elem.id === castleID) {
                setUserCastles(stateCopy.filter(prev => prev !== elem));
            }
        });
    }

    return (
        <>
            <Router history={history}>
                <Header formName={userName}/>
                <Switch className="router__container">
                    <Route exact path="/">
                        {
                            userName !== "" ?
                                <Redirect to="/all"/>
                                :
                                <Form onDone={setUserName}/>
                        }
                    </Route>
                    <Route path="/all"
                           render={(props) =>
                               <AllList {...props}
                                        formName={userName}
                                        images={images}
                                        allCastles={castles}
                                        double={doubledCastle}
                                        popup={popup}
                                        onPopup={setPopup}
                                        onAdd={handleAdd}
                                        onMore={setSingleCastle}
                                        currentCastle={currentCastle}
                                        onCurrentCastle={setCurrentCastle}
                               />
                           }
                    />
                    <Route path="/my"
                           render={(props) =>
                               <UserList {...props}
                                         formName={userName}
                                         userCastles={userCastles}
                                         images={images}
                                         popup={popup}
                                         onPopup={setPopup}
                                         onRemove={handleRemove}
                                         onMore={setSingleCastle}
                                         currentCastle={currentCastle}
                                         onCurrentCastle={setCurrentCastle}
                               />
                           }
                    />
                    <Route path="/about"
                           render={(props) =>
                               <About {...props}
                                      formName={userName}
                               />
                           }
                    />
                    <Route path="/contact"
                           render={(props) =>
                               <Contact {...props}
                                        formName={userName}
                               />
                           }
                    />
                    <Route path={`/castle/:param`}
                           children={(props) =>
                               <Castle {...props}
                                       castle={singleCastle}
                                       images={images}
                                       formName={userName}
                               />
                           }
                    />
                </Switch>
                <Footer onUserName={setUserName}/>
            </Router>
        </>
    );
}

export default App;
