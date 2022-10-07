import React,{ useState,useContext, useEffect,useRef } from "react";
import axios from "axios";
import {Navigate,Link} from "react-router-dom";
import { AuthContext } from "../auth/Auth";
import LoadingScreen from "./LoadingScreen";
import './LoginScreen.css'
import ReCAPTCHA from "react-google-recaptcha";
import { FaUserCircle } from 'react-icons/fa';
import { HiKey } from 'react-icons/hi';

const LoginScreen =()=>{
    const {checkLogout} = useContext(AuthContext);
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [loading,setLoading] = useState(false)
    //const [test,setTest] = useState(false)
    const [Verifield,setVerifield] = useState(false)
    const [captchaToken, setCaptchaToken] = useState(null);
    const verify = () =>{
        captchaRef.current.getResponse().then(res => {
            setCaptchaToken(res)
            console.log(res);
        })

    }
    const captchaRef = useRef(null)

    const handleOnChange =(value)=> {
        console.log("Captcha value:", value);
        setVerifield(true)
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        captchaRef.current.reset();
        setLoading(true)
        if(email && password){
            axios.post("http://localhost:5000/login",{
                email:email,
                password:password
            }).then((response)=>{
                console.log(response.data);
                if(response.data.status === "ok"){
                    localStorage.setItem("tokenLogin", response.data.token)
                    window.location = '/home'
                    return <Navigate to="/home"/>
                }else{
                    alert(response.data.message)
                }
                setLoading(false)
            })
        }else{
            alert("กรุณากรอก username และ รหัสผ่านให้ครบ")
            setLoading(false)
        }

    }
    // useEffect(()=>{
    //     return(
    //         captchaRef.current.reset()
    //     )
    // },[])
    if(!checkLogout){
        return <Navigate to="/home" />
    }
    if(loading){
        return(
            <LoadingScreen/>
        )
    }
    return(
        <div>
        <head>
            <script src="https://www.google.com/recaptcha/api.js" async defer></script>
        </head>
        <body>
            <div className="bg-img">
                <div className="content">
                    <header>LOGIN</header>
                        <form onSubmit={handleSubmit}>
                            <div class="field">
                                <span><FaUserCircle/></span>
                                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder="Email"/>
                            </div>
                            <div class="field space">
                                <span><HiKey/></span>
                                <input type="password" class="pass-key" value={password} onChange={(e)=>setPassword(e.target.value)} required placeholder="Password"/>
                                {/* <span class="show">SHOW</span> */}
                            </div>
                            <div class="pass">
                                <a href="/forgotPass">Forgot Password ?</a>
                            </div>
                            
                            <div class="field">
                                <input type="submit" value="LOGIN" />
                                {/* disabled={!Verifield?"disabled":""} */}
                            </div>
                            <ReCAPTCHA
                                ref={captchaRef}
                                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"                           
                                onChange={()=>handleOnChange()}
                                onVerify={verify} 
                            />
                            
                        </form>
                        <div class="signup space">
                            Don't have account?
                            <a href="/register">Signup Now</a>
                        </div>
                </div>
            </div>
        </body>                
        </div>
    )
}
export default LoginScreen;