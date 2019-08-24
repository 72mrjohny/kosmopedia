import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import CosmosPage from '../pages/CosmosPage';
import ObjectPage from '../pages/ObjectPage';
import ContactPage from '../pages/ContactPage';
import ChatPage from '../pages/ChatPage';
import AdminPage from '../pages/AdminPage';
import ErrorPage from '../pages/ErrorPage';




const Page = () => {

    return (
        <>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/cosmos" component={CosmosPage} />
                <Route path="/cosmobject/:id" component={ObjectPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/chat" component={ChatPage} />
                <Route path="/admin" component={AdminPage} />
                <Route component={ErrorPage} />
            </Switch>
        </>
    );
}

export default Page;