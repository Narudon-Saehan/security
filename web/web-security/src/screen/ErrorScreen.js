import { useNavigate,Navigate } from "react-router-dom"
import React,{ useContext } from "react"
import { AuthContext } from "../auth/Auth"
import './ErrorScreen.css'
const ErrorScreen =()=>{

    const goHome=()=>{
        window.location="/home"
        //navigate("/")
    }
    return(
        <div style={{display: "flex",flexDirection:'column',height:"100vh",justifyContent:'center',alignItems:"center"}}>
            <div style={{display:"flex",alignItems:"center",width:400,height:300,backgroundColor: 'rgba(255, 255, 255, 0.5)',borderRadius:15}}>
                <div>
                    <h1 style={{color:"black",fontSize:15}}>Error Go to Login </h1>
                </div>

                <button type="button" onClick={()=>goHome()} class="btn btn-primary">Home</button>
                
            </div>
        </div>
        
    )
}
export default ErrorScreen;