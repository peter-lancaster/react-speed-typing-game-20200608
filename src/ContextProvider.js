import React, {useState} from "react"
const Context = React.createContext()

function ContextProvider({children}) {

    const [contactList, setContactList] = useState([])
    const [inputName, setInputName] = useState({firstName : "", lastName : ""})
    const [firstNameWarning, setFirstNameWarning] = useState("First name cannot be blank")
    const [lastNameWarning, setLastNameWarning] = useState("Last name cannot be blank")
    const [isButtonDisabled, setIsButtonDisabled] = useState(true)

    function updateInputName(event) {

        console.log("in updateInputName")
        const {name, value} = event.target

        setInputName(prevInputName => {
            return {...prevInputName, [name] : value}
        })

        validateNamesNotBlank()
    }
    
    function updateContactList(event) {
        event.preventDefault()
        setContactList(prevContactList => {
            return ([...prevContactList, inputName])
        })

        setInputName({firstName : "", lastName : ""})
    }

    function validateNamesNotBlank() {

        console.log("in validateNamesNotBlank")
        console.log(inputName.firstName)

        if(inputName.firstName !== "") {
            setFirstNameWarning("")
            console.log(firstNameWarning)
        }

        if(inputName.lastName !== "") {
            setLastNameWarning("")
        }

        if(inputName.firstName !== "" && inputName.lastName !== "" ) {
            setIsButtonDisabled(false)  
        }

    }

    return(
        <Context.Provider value={{contactList, 
                                inputName, 
                                updateInputName, 
                                updateContactList,
                                isButtonDisabled,
                                firstNameWarning,
                                lastNameWarning}}>
            {children}
        </Context.Provider>
    )

}

export {Context, ContextProvider}