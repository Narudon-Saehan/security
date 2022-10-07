import { useState } from "react";
import axios from "axios";
import emailjs from '@emailjs/browser';
import validator from 'validator'
import LoadingScreen from "./LoadingScreen";
import './LoginScreen.css';
import './RegisterScreen.css'

const RegisterScreen = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState("")
    const [statusUserName, setStatusUserName] = useState(undefined)
    const [statusPassword, setStatusPassword] = useState(undefined)
    const [loading, setLoading] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        if (statusUserName && password && firstName && lastName && question && answer) {
            axios.post("http://localhost:5000/register", {
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
                question: question,
                answer: answer
            }).then((res) => {
                console.log(res.data.token);
                let link = "http://localhost:3000/RegisterSucceedScreen/" + res.data.token
                let temp = {
                    user_name: "test",
                    user_email: email,
                    message: link
                }
                emailjs.send('service_1izkvhc', 'template_l86x5fe', temp, 'G_I1Fw-Q-S55niWyy')
                    .then((result) => {
                        console.log("OK");
                        console.log(result.text);
                        alert("ส่งข้อมูลไปที่เมลแล้ว")
                        setLoading(false)
                        window.location = '/'
                    }, (error) => {
                        alert(error.text);
                        setLoading(false)
                    });
            }).catch(() => {
                alert("ไม่สามารถเชื่อมต่อกับ http://localhost:5000/register");
                setLoading(false)
            })
        } else {
            alert("กรอกข้อมูลไม่ครบ");
            setLoading(false)
        }
    }
    const changeUserName = (value) => {
        setEmail(value)
        if (value.length >= 6) {
            axios.post("http://localhost:5000/checkUserName", {
                email: value
            }).then((res) => {
                console.log(res.data);
                if (res.data.status === "ok") {
                    if (res.data.message === "not found username") {
                        setStatusUserName(true)
                    } else if (res.data.message === "found username") {
                        setStatusUserName(false)
                    }
                } else {
                    alert(res.data.message)
                }
            }).catch(() => {
                alert("ไม่สามารถเชื่อมต่อกับ http://localhost:5000/checkUserName");
            })
        } else {
            setStatusUserName(undefined)
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
    if (loading) {
        return <LoadingScreen />
    }
    return (
        <body>
            <div className="bg-img">
                <div className="content">
                    <header>Register</header>
                    <form onSubmit={handleSubmit}>
                        <div class="pass">
                            <label>Email : </label>
                            &ensp;&ensp;
                            <label style={{ color: statusUserName ? "red" : "green" }}>{(email === "") ? "" : (statusUserName === undefined) ? "userNameต้องมีอย่างน้อย 6 ตัว" : statusUserName ? "userNameนี้ใช้ได้" : "userNameนี้ถูกใช้งานแล้ว"}</label>
                        </div>
                        <div class="fields">
                            <span class="fa fa-user"></span>
                            <input type="email" value={email} onChange={(e) => changeUserName(e.target.value)} placeholder="Email" required />
                        </div>
                        <div class="pass">
                            <label>Password : </label>
                            &ensp;&ensp;
                            <label style={{ color: statusPassword ? "red" : "green" }} >{(password === "") ? "" : statusPassword ? "Is Strong Password" : "Is Not Strong Password"}</label>
                        </div>
                        <div class="fields">
                            <span></span>
                            <input type="password" value={password} onChange={(e) => changePassword(e.target.value)} placeholder="Password" />
                        </div>
                        <div class="pass">
                            <label>Confirm Password : </label>
                            &ensp;&ensp;
                            <label style={{ color: statusPassword ? "red" : "green" }} >{(password === "") ? "" : statusPassword ? "Is Strong Password" : "Is Not Strong Password"}</label>
                        </div>
                        <div class="fields">
                            <span></span>
                            <input type="password" value={password} onChange={(e) => changePassword(e.target.value)} placeholder="Password" />
                        </div>
                        <div class="pass">
                            <label>First Name : </label>
                            &ensp;&ensp;
                        </div>
                        <div class="fields space">
                            <span></span>
                            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" /><br /><br />

                        </div>
                        <div class="pass">
                            <label>Last Name : </label>
                            &ensp;&ensp;
                        </div>
                        <div class="fields space">
                            <span></span>
                            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" /><br /><br />
                        </div>
                        <div className="space">
                            <select class="form-select form-select-lg mb-3" value={question} onChange={(e) => setQuestion(e.target.value)} >
                                <option value="">Please select a question</option>
                                <option value="what's your favorite food">what's your favorite food</option>
                                <option value="What was your first pet's name?">What was your first pet's name?</option>
                                <option value="What country would you like to travel the most?">What country would you like to travel the most?</option>
                                <option value="What's your first friend's name?">What's your first friend's name?</option>
                            </select>
                        </div>
                        <div className="fields space">
                            <span></span>
                            <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Answer" />
                            <br /><br />
                        </div>
                        <div class="field space">
                            <input type="submit" value="Register" />
                        </div>

                    </form>
                </div>
            </div>
        </body>
    )
}
export default RegisterScreen;