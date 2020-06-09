import React from "react"

function ContactListItem({item}) {

    return(
        <p>{item.firstName} {item.lastName}</p>
    )
}

export default ContactListItem