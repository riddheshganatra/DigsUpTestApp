import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, NavLink } from "react-router-dom";

// Css
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Components
import App from './components/app/App';
import EmailSubscription from './components/email-subscription/Email-Subscription';

// Service Worker
import * as serviceWorker from './serviceWorker';


const routing = (
    <Router>
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Email App</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/" activeClassName="active" >Home</NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/signup">Signup</NavLink>
                        </li> */}
                    </ul>
                </div>
            </nav>
            <Route path='/' component={EmailSubscription} />
        </div>
    </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
