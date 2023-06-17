import React, {FC} from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {addMessage, addPost, RootStateType} from "./redux/state";

type AppStateType = {
    state: RootStateType
    addMessage: (postMessage: string) => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
}
const App = (props: AppStateType) => {

    return (
        <div className={"app-wrapper"}>
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>

                <Route path={"/dialogs"} render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                                messages={props.state.dialogsPage.messages}
                                                                addMessage={props.addMessage}
                />}/>
                <Route path={"/profile"} render={() => <Profile profilePage={props.state.profilePage}
                                                                addPost={props.addPost}
                                                                updateNewPostText={props.updateNewPostText}
                />}/>
            </div>
        </div>
    );
}

export default App;
