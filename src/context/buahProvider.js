import { createContext, useState } from "react"

export const buahContext = createContext()

function BuahProvider (props) {
    const [buah, setBuah] = useState(["mangga", "apel"])
    return(
        <buahContext.Provider value = {{buah}}>
            {props.children}
        </buahContext.Provider>
    )
    
}
export default BuahProvider