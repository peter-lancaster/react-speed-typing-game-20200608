import React, {useContext} from "react"
import {Context} from "../ContextProvider"
import ContactListItem from "./ContactListItem"

function ContactsList() {

    console.log("in ContactsList")

    const {contactList, 
            inputName, 
            updateInputName, 
            checkContactListForDuplicates,
            isButtonDisabled,
            firstNameWarning,
            lastNameWarning,
            isContactDuplicate} = useContext(Context)

    //PETE - WHY DOES THIS VALIDATION NEED TO BE HERE IN ContactsList?
    //WHY DOESN'T IT WORK WHEN PLACED IN "ContextProvider" ?
    //validateNamesNotBlank()

    const contactListDisplay = contactList.map(element => {
        return <ContactListItem 
        key={element.firstName.concat(element.lastName)} 
        item={element} />
    })

    const duplicateMessage = isContactDuplicate && "This contact is already in your list"

    return(
        <main className="contacts-list-main">
            <div className ="contacts-add-area">
            <p>Name to be added to contacts list : </p>
                <form onSubmit={checkContactListForDuplicates}>
                <div className = "contacts-input-block">
                <label htmlFor="firstName">First name : </label>
                <input 
                    autoComplete="off" 
                    onChange={updateInputName} 
                    placeholder="First name" 
                    type="text" 
                    id="firstName"
                    name="firstName"
                    value={inputName.firstName}>
                </input>
                <span className="contacts-input-warning">{firstNameWarning}</span>
                </div>
                <div className = "contacts-input-block">
                <label htmlFor="lastName">Last name : </label>
                <input 
                    autoComplete="off" 
                    onChange={updateInputName} 
                    placeholder="Last name" 
                    type="text" 
                    id="lastName"
                    name="lastName"
                    value={inputName.lastName}>
                </input>
                <span className="contacts-input-warning">{lastNameWarning}</span>
                </div>
                <button disabled={isButtonDisabled} >Add to contact list</button>
                <p>{duplicateMessage}</p>
                </form>
            </div>
            <div className="contacts-list-notepad">
                <h1>List of contacts</h1>
                {contactListDisplay}
            </div>

        </main>
    )

}


export default ContactsList