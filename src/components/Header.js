import React from "react" 
import {Link} from "react-router-dom"

function Header() {

    return(
        <header>
            <h1>Pete's Very Mediocre React Portfolio</h1>
            <Link to="/"><p className="header-link">Speed Typing Test</p></Link>
            <Link to="/contacts-list"><p className="header-link" >Contacts List</p></Link>
        </header>
    )

}




export default Header