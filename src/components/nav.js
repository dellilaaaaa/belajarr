import { useContext } from "react"
import { userContext } from "../context/userProvider"


function Nav(props) {
    const {isLogin} = useContext(userContext)
    console.log(isLogin)
    return(
        <div>
            <h2>Nav</h2>
        </div>
    )
    
}
export default Nav