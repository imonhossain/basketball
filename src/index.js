import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import Home from './components/Home/home'
const App = ()  => {
    return(
        <div>
           
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

