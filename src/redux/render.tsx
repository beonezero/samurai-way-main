import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import {addMessage, addPost, RootStateType, updateNewPostText,} from "./state";
import {BrowserRouter} from "react-router-dom";

export const rerenderEntireThree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addMessage={addMessage} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}