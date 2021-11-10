import { useContext } from "react"
import { buahContext } from "../context/buahProvider"

function Buah(props) {
    const {buah} = useContext(buahContext)
    console.log(buah)
    return(
        <div>
            <h3>Daftar Buah</h3>
        </div>
    )
    
}
export default Buah