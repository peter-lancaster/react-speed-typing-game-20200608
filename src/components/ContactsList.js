import React, {useContext} from "react"
import {Context} from "../ContextProvider"
import ContactListItem from "./ContactListItem"

function ContactsList() {

    const {contactList, 
            inputName, 
            updateInputName, 
            updateContactList} = useContext(Context)

    const contactListDisplay = contactList.map(element => {
        return <ContactListItem key={element} item={element} />
    })
    
    return(
        <main className="contacts-list-main">
            <div className ="contacts-add-area">
                <p>Name to be added to contacts list : </p>
                <input 
                    onChange={updateInputName} 
                    placeholder="First name" 
                    type="text" 
                    name="firstName"
                    value={inputName.firstName}>
                </input>
                <input 
                    onChange={updateInputName} 
                    placeholder="Last name" 
                    type="text" 
                    name="lastName"
                    value={inputName.lastName}>
                </input>
                <button onClick={updateContactList}>Add to contact list</button>
            </div>
            <div className="contacts-list-notepad">
                <h1>List of contacts</h1>
                {contactListDisplay}
            </div>

        </main>
    )
}


export default ContactsList