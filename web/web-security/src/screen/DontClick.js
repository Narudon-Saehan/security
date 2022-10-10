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
        <body class="loads">

        </body>
        )
}
export default DontClick;