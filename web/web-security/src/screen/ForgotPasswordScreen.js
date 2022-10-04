import { useNavigate,Navigate } from "react-router-dom"
import React,{ useContext } from "react"
import { AuthContext } from "../auth/Auth"
const ForgotPasswordScreen =()=>{
    const {checkLogout,dataUser}= useContext(AuthContext)

    return(
        <div style={{display: "flex",flexDirection:'column',height:"100vh",justifyContent:'center',alignItems:"center",backgroundColor:'red'}}>
            <h1>Forgot Password </h1>
            <form>
                <label>User Name:</label>
                <input type="text"  /><br/><br/>
                <label>Email:</label>
                <input type="text"/><br/><br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}
export default ForgotPasswordScreen;