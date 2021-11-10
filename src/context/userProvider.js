import {createContext, useState} from "react"

export const userContext = createContext()

function UserProvider(props) {
    const [isLogin, setIsLogin] = useState(true)
    return(
        <userContext.Provider value = {{isLogin, setIsLogin}}>
            {props.children}
        </userContext.Provider>
    )
    
}
export default UserProvider