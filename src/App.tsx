import React, {FC} from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {ActionType, RootStateType} from "./redux/store";

type AppStateType = {
    state: RootStateType
    dispatch: (action: ActionType) => void
}
const App = (props: AppStateType) => {

    return (
        <div className={"app-wrapper"}>
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>

                <Route path={"/dialogs"} render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                                messages={props.state.dialogsPage.messages}
                                                                newMessageText={props.state.dialogsPage.newMessageBody}
                                                                dispatch={props.dispatch}
                />}/>
                <Route path={"/profile"} render={() => <Profile profilePage={props.state.profilePage}
                                                                dispatch={props.dispatch}
                />}/>
            </div>
        </div>
    );
}

export default App;
