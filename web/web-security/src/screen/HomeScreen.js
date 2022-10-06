import { useNavigate,Navigate } from "react-router-dom"
import React,{ useContext } from "react"
import { AuthContext } from "../auth/Auth"
const HomeScreen =()=>{
    const {checkLogout,dataUser}= useContext(AuthContext)
    const navigate = useNavigate()
    const logout=()=>{
        localStorage.removeItem("tokenLogin")
        window.location="/"
        //navigate("/")
    }
    if(checkLogout){
        return <Navigate to ="/"/>
    }
    return(
        <div style={{display: "flex",flexDirection:'column',height:"100vh",justifyContent:'center',alignItems:"center",backgroundColor:'red'}}>
            <h1>Home</h1>
            <input type="submit" onClick={()=>logout()} value="LOGOUT "/>
        </div>
    )
}
export default HomeScreen;