import { useNavigate,Navigate } from "react-router-dom"
import React,{ useContext, useEffect } from "react"
import { AuthContext } from "../auth/Auth"
import axios from "axios"
const ResetPasswordScreen =()=>{
    const {checkLogout,dataUser}= useContext(AuthContext)

    useEffect(() => {
        axios.get("http://localhost:5000/register")
        .then(()=>{
            console.log("ok");
        }).catch(()=>{
            console.log("ไม่สามารถเชื่อมต่อกับ http://localhost:5000/register");
        })
    },[]);

    return(
        <div style={{display: "flex",flexDirection:'column',height:"100vh",justifyContent:'center',alignItems:"center",backgroundColor:'red'}}>
            <h1>Reset Password</h1>
            <form>
                <label>New Password:</label>
                <input type="text"  /><br/><br/>
                <label>Verity Password:</label>
                <input type="password"/><br/><br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}
export default ResetPasswordScreen;