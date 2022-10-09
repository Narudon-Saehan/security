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
    const Swal = require('sweetalert2')

    const handleOnChange = (value) => {
        setVerifield(true)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!Verifield){
            Swal.fire("Please confirm that you are not using a robot.")
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
                    Swal.fire({
                        icon: 'error',
                        title: 'Login failed',
                        text: response.data.message,
                    })
                    setLoading(false)
                    // alert(response.data.message)
                }
            })
        } else {
            Swal.fire("Please complete the information.");
            setLoading(false)
        }

    }
    useEffect(() => {
        return () => {
            axios.get("https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572")
                .then((res) => {
                    //console.log(res.data);
                    setAddress(res.data)
                    setLoading(false)
                }).catch((err) => {
                    //console.log(err);
                    Swal.fire("unable to connect to https://geolocation-db.com please inform admin")
                    setLoading(false)
                })
        }
    }, [])
    if (!checkLogout) {
        return window.location = "/home"
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