import React from "react" 
import {Link} from "react-router-dom"

function Header() {





    return(
        <header>
            <Link to="/"><h1>Speed Typing Test</h1></Link>
            <Link to="/contacts-list"><h1>Contacts List</h1></Link>
        </header>
    )


}




export default Header