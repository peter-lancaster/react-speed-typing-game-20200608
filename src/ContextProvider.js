import React from "react"
const Context = React.createContext()

function ContextProvider({children}) {

    
    return(
        <Context.Provider>
            {children}
        </Context.Provider>
    )

}

export {Context, ContextProvider}