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
    const Swal = require('sweetalert2')
    const showAlerts = () => {
        Swal.fire({
            title: "Success",
            text: "SENT SUCCESS",
            icon: "success",
            confirmButtonText: "OK",
            background: '#FFF',
            backdrop: `
              url("https://scontent.fbkk21-1.fna.fbcdn.net/v/t1.15752-9/305760303_791134962198434_1681207144088323104_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=03IFl9D5pqoAX_C1Mdf&_nc_ht=scontent.fbkk21-1.fna&oh=03_AVJOoUkHz8h4VP_JubDETAG4Hy8YT8bc2HE607QI7EtvNg&oe=63657131")
              left top
              
            `
          })
    }
    const showAlertf = () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            confirmButtonText: "OK",
            background: '#FFF',
            backdrop: `
              rgba(0,0,123,0.4)
              url("https://scontent.fbkk21-1.fna.fbcdn.net/v/t1.15752-9/305760303_791134962198434_1681207144088323104_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=03IFl9D5pqoAX_C1Mdf&_nc_ht=scontent.fbkk21-1.fna&oh=03_AVJOoUkHz8h4VP_JubDETAG4Hy8YT8bc2HE607QI7EtvNg&oe=63657131")
              left top
              
            `
          })
    }
    const succeed=()=>{
        //alert("ระบบส่ง Email ไปให้คุณแล้ว")
        //setEmail("")
        //setLoading(false)
        showAlerts();
        setEmail("")
        setLoading(false)
    }
    const failed=(errorMessage)=>{
        alert(errorMessage)
        setEmail("")
        setLoading(false)
    }
    const handleSubmit =(email)=>{
        //e.preventDefault();
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
            //alert("กรุณากรอก email")
            setLoading(false)
        }

    }
    const handleSubmit1 =async()=>{
        const { value: demail } = await Swal.fire({
            title: 'Input email address',
            input: 'email',
            inputLabel: 'Your email address',
            inputPlaceholder: 'Enter your email address'
        })

  
        handleSubmit(demail)
    
    }

    if(loading){
        return(
            <LoadingScreen/>
        )
    }
    return(
        <div style={{display: "flex",flexDirection:'column',height:"100vh",justifyContent:'center',alignItems:"center"}}>
            
            
                <div className="bg-img">
                <div className="content">
                    <header>RECOVER PASSWORD</header>
                        <text class="forgettext" style={{fontSize: "18px" , color:"white"}}>If you've lost your password or wish to reset it,use the link below to get started.</text>
                        
                        <div class="space">
                                <button type="button" class="btn btn-primary btn-lg" value="Reset Your Password" onClick={()=>handleSubmit1()} >
                                Reset Your Password
                                </button>

                        </div>
                        <div class="space">
                        <text class="forgettext" style={{fontSize:"12px" ,color:"#FFE5D9"}}>If you did not request a password reset,you can safely ignore this email. Only a person with access to your email can reset your account password.</text>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default ForgotPasswordScreen;