import React from 'react'
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';



export default function App() {

    return (
        <BrowserRouter>
            <Container maxwidth='lg'>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/auth" exact component={Auth} />
                </Switch>
                <Home />
            </Container>
        </BrowserRouter>
    )
}

