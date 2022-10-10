import React, { useContext} from "react"
import { AuthContext } from "../auth/Auth"
const DontClick = () => {
    const { checkLogout, statusPasswordTime } = useContext(AuthContext)
    if (checkLogout) {
        return window.location = "/"
    }
    if (!statusPasswordTime) {
        return window.location = "/resetPass"
    }
    return(
        <body className="loads" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            
            <div style={{backgroundColor:"red"}}>
                <img src="https://cdn.discordapp.com/attachments/899954875851501579/1028696554539864064/nut.gif" style={{height:"100%",width:"100%"}}/>
            </div>

        </body>
        )
}
export default DontClick;