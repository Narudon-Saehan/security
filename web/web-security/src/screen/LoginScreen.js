import { useState,useContext } from "react";
import axios from "axios";
import {Navigate,Link} from "react-router-dom";
import { AuthContext } from "../auth/Auth";
import './LoginScreen.css'
const LoginScreen =()=>{
    const {checkLogout} = useContext(AuthContext);
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit =(e)=>{
        e.preventDefault();
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
            })
        }else{
            alert("กรุณากรอก username และ รหัสผ่านให้ครบ")
        }

    }
    const checkUserName =()=> {
        console.log("test");
    }
    if(!checkLogout){
        return <Navigate to="/home" />
    }
    return(
        
        <body>
            <div className="bg-img">
                <div className="content">
                    <header>LOGIN</header>
                        <form action="#">
                            <div class="field">
                                <span class="fa fa-user"></span>
                                <input type="text" required placeholder="Email"/>
                            </div>
                            <div class="field space">
                                <span></span>
                                <input type="password" class="pass-key" required placeholder="Password"/>
                                <span class="show">SHOW</span>
                            </div>
                            <div class="pass">
                                <a href="#">Forgot Password ?</a>
                            </div>
                            <div class="field">
                                <input type="submit" value="LOGIN"/>
                            </div>
                        </form>
                        <div class="signup space">
                            Don't have account?
                            <a href="#">Signup Now</a>
                        </div>
                </div>
            </div>
        </body>                
        
    )
}
export default LoginScreen;