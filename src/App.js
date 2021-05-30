import React, { Component } from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MegaMenu from "./components/layout/MegaMenu";
import HeaderMain from "./components/layout/header";
import Footer from "./components/layout/footer";
import Main from "./components/layout/Main";
import FrontPage from "./components/layout/frontPage";

import ContactUs from "./components/layout/contact-us/contactus";

function App() {
    return (
        <Router>
            <div className="App">
                <HeaderMain />
                <MegaMenu />
                <div>
                    <MessengerCustomerChat
                        pageId="100608275271581"
                        appId="814583795823534"
                    />
                </div>
                <Route path="/" component={FrontPage} exact />

                <Route path="/" component={Main} exact />

                <Route path="/contact" component={ContactUs} exact />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
