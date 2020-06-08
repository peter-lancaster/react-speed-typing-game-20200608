import React from 'react';
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import ContactsList from "./components/ContactsList"
import SpeedTyping from "./components/SpeedTyping"
import {Route, Switch} from "react-router-dom"

function App() {


  return (
    <>
    <Header />
    <Switch >
      <Route exact path ="/" ><SpeedTyping /></Route>
      <Route path ="/contacts-list"><ContactsList /></Route>
    </Switch>
    <p>fill up some space</p>
    <br />
    <p>fill up some space</p>
    <br />
    <p>fill up some space</p>
    <br />
    <p>fill up some space</p>
    <p>fill up some space</p>
    <br />
    <p>fill up some space</p>
    <br />
    <p>fill up some space</p>
    <br />
    <p>fill up some space</p>
    <Footer />

    </>


  );
}

export default App;
