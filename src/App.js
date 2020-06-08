import React from 'react';
import logo from './logo.svg';
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
    <Footer />

    </>


  );
}

export default App;
