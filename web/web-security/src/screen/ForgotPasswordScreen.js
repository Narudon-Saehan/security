import React,{ useContext,useState } from "react"
import axios from "axios";
import { AuthContext } from "../auth/Auth"
import { sendEmail } from "../sendEmail/sendEmail";
import LoadingScreen from "./LoadingScreen";
import './ForgotPasswordScreen.css'
const ForgotPasswordScreen =()=>{
    const {checkLogout,dataUser}= useContext(AuthContext)
    const [email,setEmail] = useState("")
    const [loading,setLoading] = useState(false)
    const succeed=()=>{
        alert("ระบบส่ง Email ไปให้คุณแล้ว")
        setEmail("")
        setLoading(false)
    }
    const failed=(errorMessage)=>{
        alert(errorMessage)
        setEmail("")
        setLoading(false)
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        setLoading(true)
        if(email){
            axios.post("http://localhost:5000/forgotPassword/checkEmail",{
                email:email
            }).then((response)=>{
                if(response.data.status==="ok"){
                    if(response.data.message === "found email"){
                        let link = "http://localhost:3000/ForgotPassScreen/" + response.data.token
                        sendEmail(email,link,succeed,failed)
                    }else{
                        sendEmail(email,"Email ของคุณยังไม่ได้ลงทะเบียนในเว็ปไซต์ของเรา",succeed,failed)
                    }
                }else{
                    alert(response.data.message)
                    setLoading(false)
                }
                console.log(response.data);
            }).catch(()=>{
                alert("ไม่สามารถเชื่อมต่อกับ http://localhost:5000/forgotPassword/checkEmail")
                setLoading(false)
            })
        }else{
            alert("กรุณากรอก email")
            setLoading(false)
        }

    }
    if(loading){
        return(
            <LoadingScreen/>
        )
    }
    return(
        <div style={{display: "flex",flexDirection:'column',height:"100vh",justifyContent:'center',alignItems:"center",backgroundColor:'red'}}>
            <h1>Forgot Password </h1>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}
export default ForgotPasswordScreen;