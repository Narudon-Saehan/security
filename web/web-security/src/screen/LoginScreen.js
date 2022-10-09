import React, { useState, useContext, useEffect, useRef } from "react";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";
import { AuthContext } from "../auth/Auth";
import LoadingScreen from "./LoadingScreen";
import './LoginScreen.css'
import ReCAPTCHA from "react-google-recaptcha";
import { FaUserCircle } from 'react-icons/fa';
import { HiKey } from 'react-icons/hi';

const LoginScreen = () => {
    const { checkLogout } = useContext(AuthContext);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(true)
    const [address, setAddress] = useState(null)
    //const [test,setTest] = useState(false)
    const [Verifield, setVerifield] = useState(false)

    const handleOnChange = (value) => {
        console.log("Captcha value:", value);
        setVerifield(true)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // axios.post("http://localhost:5000/testAddLog",{
        //     data_log:JSON.stringify({
        //             log_datetime : new Date().toISOString(),ipv4 : "158.108.228.133",country : "Thailand",latitude : 13.75,longitude : 100.4667,
        //             log_email : "test@email.com",status_email : true,status_login : true,
        //         })
        //     })
        //     .then((response)=>{
        //         console.log(response.data);
        //     })
        //     .catch((err)=>{
        //         alert("ไม่สามารถเชื่อมต่อกับ https://geolocation-db.com โปรดแจ้ง admin")
        //     })

        if(!Verifield){
            alert("Please confirm that you are not using a robot.")
            return
        }
        setLoading(true)
        if (email && password) {
            axios.post("http://localhost:5000/login", {
                email: email,
                password: password,
                ipv4: address?.IPv4,
                country: `${address?.country_name}(${address?.country_code})`,
                latitude: address?.latitude,
                longitude: address?.longitude,
                log_email: email,

            }).then((response) => {
                console.log(response.data);
                if (response.data.status === "ok") {
                    localStorage.setItem("tokenLogin", response.data.token)
                    window.location = '/home'

                } else {

                    alert(response.data.message)
                }
                setLoading(false)
            })
        } else {
            alert("กรุณากรอก username และ รหัสผ่านให้ครบ")
            setLoading(false)
        }

    }
    useEffect(() => {
        return () => {
            axios.get("https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572")
                .then((res) => {
                    console.log(res.data);
                    setAddress(res.data)
                    setLoading(false)
                }).catch((err) => {
                    console.log(err);
                    alert("ไม่สามารถเชื่อมต่อกับ https://geolocation-db.com โปรดแจ้ง admin")
                    setLoading(false)
                })
        }
    }, [])
    if (!checkLogout) {
        return <Navigate to="/home" />
    }
    if (loading) {
        return (
            <LoadingScreen />
        )
    }
    return (
        <body>
            <div className="bg-img">
                <div className="content">
                    {/* <h6 style={{ color: "white" }}>IPv4 :{address?.IPv4} </h6>
                    <h6 style={{ color: "white" }}>{`country :${address?.country_name}(${address?.country_code})`} </h6>
                    <h6 style={{ color: "white" }}>{`latitude :${address?.latitude} longitude :${address?.longitude}`} </h6> */}
                    <header>LOGIN</header>
                    <form onSubmit={handleSubmit}>
                        <div class="field">
                            <span><FaUserCircle /></span>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
                        </div>
                        <div class="field space">
                            <span><HiKey /></span>
                            <input type="password" class="pass-key" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password" />
                            {/* <span class="show">SHOW</span> */}
                        </div>
                        <br/>
                        <ReCAPTCHA
                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            onChange={() => handleOnChange()}
                        />

                        <div class="pass">
                            <a href="/forgotPass">Forgot Password ?</a>
                        </div>


                        <div class="field">
                            <input type="submit" value="LOGIN" />
                            {/* disabled={!Verifield?"disabled":""} */}
                        </div>

                    </form>
                    <div class="signup space">
                        Don't have account?
                        <a href="/register">Sign up here.</a>
                    </div>
                </div>
            </div>
        </body>
    )
}
export default LoginScreen;