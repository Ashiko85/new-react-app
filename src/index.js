import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Home from './routes/Home.js';
import Contact from './routes/Contact.js';
import About from './routes/About.js';
import Count from "./routes/count.js";


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/count" component={Count} />

        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);