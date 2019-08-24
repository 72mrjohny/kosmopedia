import React from 'react';
import "../styles/Header.css"
import { Route, Switch } from 'react-router-dom';

import img1 from '../images/kosmos2.jpg';
import img2 from '../images/kosmos3.jpg';
import img3 from '../images/kosmos4.jpg';
import img4 from '../images/kosmos5.jpg';

const Header = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact render={() => (
                    <img src={img1} alt="cosmos" />
                )} />
                <Route path="/cosmos" render={() => (
                    <img src={img2} alt="cosmos" />
                )} />
                <Route path="/contact" render={() => (
                    <img src={img3} alt="cosmos" />
                )} />
                <Route path="/admin" render={() => (
                    <img src={img4} alt="cosmos" />
                )} />
                <Route render={() => (
                    <img src={img4} alt="cosmos" />
                )} />
            </Switch>
        </>
    );
}

export default Header;