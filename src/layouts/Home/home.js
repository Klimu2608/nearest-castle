import React from "react";
import {Header} from "../../components/Header/header";
import {Footer} from "../../components/Footer/footer";
import {MainView} from "../../components/MainView/mainView"

export const Home = () => {

    return (
        <>
            <Header />
            <MainView />
            <Footer />
        </>
    );
}