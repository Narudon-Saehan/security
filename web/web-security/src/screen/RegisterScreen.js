import { useState } from "react";
import axios from "axios";
import emailjs from '@emailjs/browser';
import validator from 'validator'
import LoadingScreen from "./LoadingScreen";

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
        if (statusUserName && password && firstName && lastName) {
            axios.post("http://localhost:5000/register", {
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
                question:question,
                answer:answer
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
        <div style={{ display: "flex", flexDirection: 'column', height: "100vh", justifyContent: 'center', alignItems: "center", backgroundColor: 'red' }}>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label >UserName:</label>
                <input type="email" value={email} onChange={(e) => changeUserName(e.target.value)} />
                <label>{(email === "") ? "" : (statusUserName === undefined) ? "userNameต้องมีอย่างน้อย 6 ตัว" : statusUserName ? "userNameนี้ใช้ได้" : "userNameนี้ถูกใช้งานแล้ว"}</label><br /><br />

                <label >Password:</label>
                <input type="password" value={password} onChange={(e) => changePassword(e.target.value)} />
                <label>{(password === "") ? "" : statusPassword ? "Is Strong Password" : "Is Not Strong Password"}</label><br /><br />

                <label >First name:</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} /><br /><br />
                <label >Last name:</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} /><br /><br />

                <label >เลือกคำถาม</label>
                <select value={question} onChange={(e)=>setQuestion(e.target.value)} >
                    <option value="คุณชอบสีอะไร">คุณชอบสีอะไร</option>
                    <option value="คุณชอบอาหารอะไร">คุณชอบอาหารอะไร</option>
                </select><br />
                <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} />
                <br /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
export default RegisterScreen;