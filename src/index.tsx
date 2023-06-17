import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {addMessage, addPost, RootStateType, state, subscribe, updateNewPostText,} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

const rerenderEntireThree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addMessage={addMessage} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireThree(state)

subscribe(rerenderEntireThree)
