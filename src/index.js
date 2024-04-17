import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, createBrowserRouter , RouterProvider } from "react-router-dom";
import {Provider} from 'react-redux'
import './css/Main.css'
import './css/Fonts.css'
import First from './pages/First/First';
import AdCreating from './pages/AdCreating/AdCreating';
import FirstDetails from './components/First/FirstDetails/FirstDetails';
import store from './store';
<script src="https://telegram.org/js/telegram-web-app.js"></script>
window.Telegram.WebApp.expand()
ReactDOM.render(

    <BrowserRouter >
        <Provider store = {store}>
            <App />
        </Provider>
    </BrowserRouter>
              ,
    document.getElementById('root')
);


