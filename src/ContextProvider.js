import React, {useState} from "react"
const Context = React.createContext()

function ContextProvider({children}) {

    const [contactList, setContactList] = useState([])
    const [inputName, setInputName] = useState({firstName : "", lastName : ""})

    function updateInputName(event) {
        const {name, value} = event.target
        setInputName(prevInputName => {
            return {...prevInputName, [name] : value}
        })
    }
    
    function updateContactList() {
        setContactList(prevContactList => {
            return ([...prevContactList, inputName])
        })

        setInputName({firstName : "", lastName : ""})
    }

    return(
        <Context.Provider value={{contactList, inputName, updateInputName, updateContactList}}>
            {children}
        </Context.Provider>
    )

}

export {Context, ContextProvider}