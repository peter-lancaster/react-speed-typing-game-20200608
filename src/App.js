import React from 'react';
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"
import ContactsList from "./components/ContactsList"
import SpeedTyping from "./components/SpeedTyping"
import {Route, Switch} from "react-router-dom"

function App() {

  console.log("App")


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


//Notes on where you struggled and what you learned.
//1) Getting the countdown to work properly - struggled for a while with useEffect /setTimeout /setInterval etc. This
//was because you spent ages working with this:
// useEffect(() => { code in here

// ,[time])

// When you needed this:

// useEffect(() => { code in here

//   ,[time, isGameRunning])