import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {RootStateType, store} from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "./StoreContext";

const rerenderEntireThree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireThree(store.getState())

store.subscribe(() => {
    const state = store.getState()
    rerenderEntireThree(state)
})


