import { useState,useContext } from "react";
import axios from "axios";
import validator from 'validator'
import LoadingScreen from "./LoadingScreen";
import { AuthContext } from "../auth/Auth"
import { sendEmail } from "../sendEmail/sendEmail";
import {FaRegEye,FaRegEyeSlash} from 'react-icons/fa'
import Swal from 'sweetalert2'
import './LoginScreen.css';
import './RegisterScreen.css'

const RegisterScreen = () => {
    const { checkLogout } = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState("")
    const [statusEmail, setStatusEmail] = useState(undefined)
    const [statusPassword, setStatusPassword] = useState(undefined)
    const [register, setRegister] = useState(false)
    const [token, setToken] = useState()
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)

    const sendEmailSucceed = ()=>{
        Swal.fire({
            icon: 'success',
            title: 'Check your email index',
            text: `We sent an email link to complete your registrationt \n(${email})`
        })
        setRegister(true)
        setLoading(false)
    }
    const sendEmailFailed = (Errortext)=>{
        Swal.fire({
            icon: 'error',
            title: 'Send email fail',
            text: Errortext,
        })
        setLoading(false)
    }
    const setSendEmail = (dataToken)=>{
        let message = "http://localhost:3000/RegisterSucceedScreen/" + dataToken
        setLoading(true)
        sendEmail(email,message,sendEmailSucceed,sendEmailFailed)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!statusEmail){
            Swal.fire({
                icon: 'error',
                title: 'Register fail',
                text: "This email is already in use.",
            })
            return
        }
        if(!statusPassword){
            Swal.fire({
                icon: 'error',
                title: 'Register fail',
                text: "Password is not strong",
            })
            return
        }
        if(!(password === repeatPassword)){
            Swal.fire({
                icon: 'error',
                title: 'Register fail',
                text: "Password not match confirm password",
            })
            return
        }
        
        setLoading(true)
        if (email && password && firstName && lastName && question && answer) {
            axios.post("http://localhost:5000/register", {
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
                question: question,
                answer: answer
            }).then((res) => {
                setToken(res.data.token)
                setSendEmail(res.data.token)
                // let link = "http://localhost:3000/RegisterSucceedScreen/" + res.data.token
                // let temp = {
                //     user_name: "test",
                //     user_email: email,
                //     message: link
                // }
                // emailjs.send('service_1izkvhc', 'template_l86x5fe', temp, 'G_I1Fw-Q-S55niWyy')
                //     .then((result) => {
                //         Swal.fire({
                //             icon: 'success',
                //             title: 'Check your email index',
                //             text: "We sent an email link to complete your registrationt ",
                //         })
                //         setRegister(true)
                //         setLoading(false)
                //         // window.location = '/'
                //     }, (error) => {
                //         Swal.fire({
                //             icon: 'error',
                //             title: 'Send email fail',
                //             text: error.text,
                //         })
                //         setLoading(false)
                //     });
            }).catch(() => {
                Swal.fire("ไม่สามารถเชื่อมต่อกับ http://localhost:5000/register");
                setLoading(false)
            })
        } else {
            Swal.fire("Please complete the information.");
            setLoading(false)
        }
    }
    const changeUserName = (value) => {
        setEmail(value)
        if (value.length >= 6) {
            axios.post("http://localhost:5000/checkUserName", {
                email: value
            }).then((res) => {
                if (res.data.status === "ok") {
                    if (res.data.message === "not found username") {
                        setStatusEmail(true)
                    } else if (res.data.message === "found username") {
                        setStatusEmail(false)
                    }
                } else {
                    Swal.fire(res.data.message)
                }
            }).catch(() => {
                Swal.fire("ไม่สามารถเชื่อมต่อกับ http://localhost:5000/checkUserName");
            })
        } else {
            setStatusEmail(undefined)
        }
    }
    const changePassword = (value) => {
        setPassword(value)
        if (validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setStatusPassword(true)
        } else {
            setStatusPassword(false)
        }
    }
    if(!checkLogout){
        return window.location = '/home'
    }
    if (loading) {
        return <LoadingScreen />
    }
    if(register){
        return(
            <div style={{ display: "flex", flexDirection: 'column', height: "100vh", justifyContent: 'center', alignItems: "center" }}>
            <div className="bg-img">
                <div className="content">
                    <header>Check your email index</header>
                    <p class="forgettext" style={{ fontSize: "16px", color: "white" }}>We sent an email link to complete your registrationt.</p>


                    <div class="space">
                        <button type="button" class="btn btnRegister btn-primary btn-lg" value="Resend Email" onClick={()=>setSendEmail(token)} >
                            Resend Email
                        </button>
                    </div>

                    <div class="space">
                        <p class="forgettext" style={{ fontSize: "12px", color: "#FFE5D9" }}>Tip: Check your spam folder in case the email was incorrectly identified</p>
                    </div>

                    <div class="space">
                        <button type="button" class="btn btnRegister btn-danger btn-lg" value="Reset Your Password" onClick={() => window.location = '/'} >
                            Go to login
                        </button>
                    </div>

                </div>
            </div>
        </div>
        )
    }
    return (
        <body>
            <div className="bg-img">
                {!statusPassword && (password !== "")?
                    <div class="alert alert-danger" style={{width:"30%",left:"70%"}}>
                        <strong>Warning!</strong>
                        <label>Passwords must be at least 8 characters in length</label>
                        <label>a minimum of 1 lower case letter [a-z]</label>
                        <label>a minimum of 1 upper case letter [A-Z]</label>
                        <label>a minimum of 1 numeric character [0-9]</label>
                        <label>{'a minimum of 1 special character: ~`!@#$%^&*()-_+={}[]|;:"<>,./?'}</label>
                    </div>
                :<></>}
                <div className="content">
                    <header>Register</header>
                    <form onSubmit={handleSubmit}>
                        <div class="pass de">
                            <label for="email" class="form-label">Email:</label>
                            &ensp;&ensp;
                            <label style={{ color: statusEmail ? "#00FFAB" : "#FF1100" }}>{(email === "") ? "" : statusEmail ? "userNameนี้ใช้ได้" : "userNameนี้ถูกใช้งานแล้ว"}</label>
                        </div>
                        <div class="fields ">
                            <span class="fa fa-user"></span>
                            <input type="email" value={email} onChange={(e) => changeUserName(e.target.value)} placeholder="Email" required />
                        </div>
                        <div className="space">
                            <div class="pass de ">
                                <label>Password : </label>
                                &ensp;&ensp;
                                <label style={{ color: statusPassword ? "#00FFAB" : "#FF1100" }} >{(password === "") ? "" : statusPassword ? "Is Strong Password" : "Is Not Strong Password"}</label>
                                
                            </div>
                            <div class="fields">
                                <span></span>
                                <input type={showPassword?"text":"password"} value={password} onChange={(e) => changePassword(e.target.value)} placeholder="Password" required/>
                                <button type="button" style={{border:'transparent',backgroundColor:'transparent',fontSize:'12px',marginRight:'10px',color:'grey'}} class="showbutton" onClick={() => setShowPassword(!showPassword)}>{showPassword?<FaRegEye size={20}/>:<FaRegEyeSlash size={20}/>}</button>
                            </div>
                        </div>
                        <div className="space">
                            <div class="pass de">
                                <label>Confirm Password : </label>
                                &ensp;&ensp;
                                <label style={{ color: (password === repeatPassword) ? "#00FFAB" : "#FF1100" }} >{(repeatPassword === "") ? "" : (password === repeatPassword) ? "Match" : "Not match"}</label>
                            </div>
                            <div class="fields">
                                <span></span>
                                <input type="password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} placeholder="Password" required />
                            </div>
                        </div>
                        <div className="space">
                            <div class="pass de">
                                <label>First Name : </label>
                                &ensp;&ensp;
                            </div>
                            <div class="fields ">
                                <span></span>
                                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" required/><br /><br />

                            </div>
                        </div>
                        <div className="space">
                            <div class="pass de">
                                <label>Last Name : </label>
                                &ensp;&ensp;
                            </div>
                            <div class="fields">
                                <span></span>
                                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" required/><br /><br />
                            </div>
                        </div>
                        <div className="space">
                            <div class="pass de">
                                <label>Question : </label>
                                &ensp;&ensp;
                            </div>
                            <div style={{}}>
                                <select class="form-select form-select-lg mb-3" value={question} onChange={(e) => setQuestion(e.target.value)} style={{ height: "2.9em" }} required>
                                    <option value="">Please select a question</option>
                                    <option value="what's your favorite food">what's your favorite food</option>
                                    <option value="What was your first pet's name?">What was your first pet's name?</option>
                                    <option value="What country would you like to travel the most?">What country would you like to travel the most?</option>
                                    <option value="What's your first friend's name?">What's your first friend's name?</option>
                                </select>
                            </div>
                        </div>
                        <div class="pass de">
                            <label>Answer : </label>
                            &ensp;&ensp;
                        </div>
                        <div className="fields">
                            <span></span>
                            <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Answer" required/>
                            <br /><br />
                        </div>
                        <div class="space">
                            <button type="submit" class="btn btnRegister btn-primary btn-lg" value="Submit">Submit</button>
                        </div>
                    </form>
                    <div class="space">
                        <button type="button" onClick={() => window.location = '/'} class="btn btnRegister btn-danger btn-lg" value="go to Login">Cancle</button>
                    </div>
                </div>
            </div>
        </body>
    )
}
export default RegisterScreen;