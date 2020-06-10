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
        // console.log(name)
        // console.log(value)

        setInputName(prevInputName => {
            console.log("in setInputName")
            console.log({[name] : value})
            console.log({...prevInputName, [name] : value})
            return {...prevInputName, [name] : value}
        })

        //console.log("in updateInputName" + JSON.stringify(inputName))

        //PETE - NOTE THAT VALIDATION OF inputName WILL FAIL IF YOU DO IT HERE!
        //inputName is "one input behind" 
        //THE FIRST POINT AT WHICH inputName HAS BEEN SET IS WHEN WE GET BACK TO
        //ContactsList COMPONENT 
        //validateNamesNotBlank()
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
                                lastNameWarning,
                                validateNamesNotBlank}}>
            {children}
        </Context.Provider>
    )

}

export {Context, ContextProvider}

// 4) Moving on to the handleSubmit method:

//     function handleSubmit(event) {
//         event.preventDefault()
//         setContactsData(prevContacts => [...prevContacts, inputData])
//     }

//  4) i) You need event.preventDefault in the handleSubmit method. You haven't used event.preventDefault() 
// for a while, but event.preventDefault() was required here because in this case the button click submits a form,
// and a form submit has a default action associated with it (baked into the browser) that we wanted to supress. 
// In the case of form submissions the default browser behaviour is a re-render of the entire page.

// Here is a list of default actions associated with specific events 
// https://javascript.info/default-browser-action. You will see that there is no default action associated
// with a button click, this is why you're unfamiliar with preventDefault(), but there is a default action 
// associated with form submits (note : if your button is in within a form, then it will be automatically 
// treated as a form submit by the browser, so even if you moved the "handleSubmit()" function to be triggered
// onClick of the button in this case, you would STILL need the "event.preventDefault()").

// If you neglect to include the "event.preventDefault()" then you don't get an error message. Instead
// what you see when you click the "Add contact" button is the expected result for a fraction of a second, 
// which then disappears and the entire form is reset (submission and page reset)  