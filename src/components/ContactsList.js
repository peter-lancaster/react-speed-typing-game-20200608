import React, {useContext} from "react"
import {Context} from "../ContextProvider"
import ContactListItem from "./ContactListItem"

function ContactsList() {

    console.log("in ContactsList")

    const {contactList, 
            inputName, 
            updateInputName, 
            updateContactList,
            isButtonDisabled,
            firstNameWarning,
            lastNameWarning} = useContext(Context)

    const contactListDisplay = contactList.map(element => {
        return <ContactListItem key={element.firstName.concat(element.lastName)} item={element} />
    })


    return(
        <main className="contacts-list-main">
            <div className ="contacts-add-area">
                <form onSubmit={updateContactList}>
                <p>Name to be added to contacts list : </p>
                <input 
                    autoComplete="off" 
                    onChange={updateInputName} 
                    placeholder="First name" 
                    type="text" 
                    name="firstName"
                    value={inputName.firstName}>
                </input>
                <span>{firstNameWarning}</span>
                <input 
                    autoComplete="off" 
                    onChange={updateInputName} 
                    placeholder="Last name" 
                    type="text" 
                    name="lastName"
                    value={inputName.lastName}>
                </input>
                <span>{lastNameWarning}</span>
                <button disabled={isButtonDisabled} >Add to contact list</button>
                </form>
            </div>
            <div className="contacts-list-notepad">
                <h1>List of contacts</h1>
                {contactListDisplay}
            </div>

        </main>
    )
    
    // return(
        // <main className="contacts-list-main">
        //     <div className ="contacts-add-area">
        //         <p>Name to be added to contacts list : </p>
        //         <input 
        //             onChange={updateInputName} 
        //             placeholder="First name" 
        //             type="text" 
        //             name="firstName"
        //             value={inputName.firstName}>
        //         </input>
        //         <input 
        //             onChange={updateInputName} 
        //             placeholder="Last name" 
        //             type="text" 
        //             name="lastName"
        //             value={inputName.lastName}>
        //         </input>
        //         <button onClick={updateContactList}>Add to contact list</button>
        //     </div>
        //     <div className="contacts-list-notepad">
        //         <h1>List of contacts</h1>
        //         {contactListDisplay}
        //     </div>

        // </main>
    // )
}


export default ContactsList