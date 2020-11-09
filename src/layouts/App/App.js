import './App.scss';
import React, {useEffect, useState}             from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory as createHistory}  from "history";
import ls                                       from "local-storage";
import {Header}                                 from "../../components/Header/header";
import {Form}                                   from "../../components/Form/form";
import {Footer}                                 from "../../components/Footer/footer";
import {UserList}                               from "../../components/UserList/userList";
import {AllList}                                from "../../components/AllList/allList";
import {Contact}                                from "../../components/Contact/contact";
import {About}                                  from "../../components/About/about";
import {Castle}                                 from "../../components/Castle/castle";
import firebase                                 from "../../firebase";
import bedzin                                   from "../../images/bedzin.jpeg";
import bolkow                                   from "../../images/bolkow.jpg";
import checiny                                  from "../../images/checiny.jpg";
import czersk                                   from "../../images/czersk.jpg";
import czocha                                   from "../../images/czocha.jpg";
import kwidzyn                                  from "../../images/kwidzyn.jpg";
import lidzbark                                 from "../../images/lidzbark.jpeg";
import malbork                                  from "../../images/malbork.jpg";
import niedzica                                 from "../../images/niedzica.jpg";
import wawel                                    from "../../images/wawel.jpg";

function App() {
    const [userName, setUserName] = useState("");
    const [castles, setCastles] = useState([]);
    const [userCastles, setUserCastles] = useState([]);
    const [singleCastle, setSingleCastle] = useState({});
    const [doubledCastle, setDoubledCastle] = useState(false);

    const history = createHistory();

    const images = [
        malbork,
        wawel,
        kwidzyn,
        niedzica,
        bolkow,
        bedzin,
        checiny,
        czersk,
        czocha,
        lidzbark,
    ];

    const handleName = (name) => {
        setUserName(name);
    }

    const handleAdd = (castleName) => {
        const stateCopy = [...castles];
        stateCopy.forEach( elem => {
            const checkDouble = userCastles.includes(elem);
            if (elem.name === castleName && checkDouble === false) {
                setDoubledCastle(false);
                setUserCastles(prev => [...prev, elem]);
            }
            if (checkDouble === true) {
                setDoubledCastle(true);
            }
        })
    }

    const handleRemove = (castleName) => {
        const stateCopy = [...userCastles];
        stateCopy.forEach( elem => {
            if (elem.name === castleName) {
                setUserCastles(stateCopy.filter(prev => prev !== elem));
            }
        })
    }

    const handleMore = ({castle}) => {
        setSingleCastle(castle);
    }

    useEffect(() => {

        const db = firebase.database();
        const rootRef = db.ref("castles");
        rootRef.on("value", snap => {
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
        setUserName(ls.get("userName"));
        setUserCastles(ls.get("userCastles"));
        setSingleCastle(ls.get("singleCastle"));
    }, [])

    useEffect(() => {
        ls.set("userName", userName);
        ls.set("userCastles", userCastles);
        ls.set("singleCastle", singleCastle);
    }, [userName, userCastles, singleCastle])

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
                    <Route path="/all"
                           render={(props) =>
                               <AllList {...props}
                                        formName={userName}
                                        images={images}
                                        allCastles={castles}
                                        userCastles={userCastles}
                                        double={doubledCastle}
                                        onAdd={handleAdd}
                                        onMore={handleMore}
                               />
                           }
                    />
                    <Route path="/my"
                           render={(props) =>
                               <UserList {...props}
                                         formName={userName}
                                         userCastles={userCastles}
                                         images={images}
                                         onRemove={handleRemove}
                                         onMore={handleMore}
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
                    <Route path={`/castle/${singleCastle.name}`}
                           children={(props) =>
                               <Castle {...props}
                                       castle={singleCastle}
                                       images={images}
                                       formName={userName}
                               />
                           }
                    />
                </Switch>
                <Footer/>
            </Router>
        </>
    );
}

export default App;
