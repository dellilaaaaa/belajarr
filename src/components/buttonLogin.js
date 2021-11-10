import { useContext } from "react"
import { userContext } from "../context/userProvider"
function ButtonProfile() {
    const {isLogin, setIsLogin} = useContext(userContext)
    console.log(isLogin)

    const handleButton = () => {
        setIsLogin(!isLogin)
    }
    return(
        <div>
            <button onClick={handleButton}>{isLogin + ""}</button>
        </div>
    )
    
}
export default ButtonProfile