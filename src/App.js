import React from 'react';
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"
import ContactsList from "./components/ContactsList"
import SpeedTyping from "./components/SpeedTyping"
import {Route, Switch} from "react-router-dom"

function App() {


  return (
    <>
    <Header />
    <Sidebar />
    <Switch >
      <Route exact path ="/" ><SpeedTyping /></Route>
      <Route path ="/contacts-list"><ContactsList /></Route>
    </Switch>
    <Footer />

    </>


  );
}

export default App;
