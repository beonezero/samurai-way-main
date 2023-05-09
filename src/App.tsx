import React, {FC} from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {RootStateType} from "./redux/state";

type AppStateType = {
    state: RootStateType
}
const App = (props: AppStateType) => {

    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>

                    <Route path={"/dialogs"} render={() => <Dialogs dialogs = {props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages}/>}/>
                    <Route path={"/profile"} render={() => <Profile posts = {props.state.profilePage.posts} />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
