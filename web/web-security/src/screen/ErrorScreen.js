import { useNavigate,Navigate } from "react-router-dom"
import React,{ useContext } from "react"
import { AuthContext } from "../auth/Auth"
const ErrorScreen =()=>{

    const goHome=()=>{
        window.location="/home"
        //navigate("/")
    }
    return(
        <div style={{display: "flex",flexDirection:'column',height:"100vh",justifyContent:'center',alignItems:"center",backgroundColor:'red'}}>
            <h1>Error Go to Login</h1>
            <input type="submit" onClick={()=>goHome()} value="Home"/>
            <button type="button" onClick={()=>goHome()} class="btn btn-primary">Primary</button>
        </div>
    )
}
export default ErrorScreen;