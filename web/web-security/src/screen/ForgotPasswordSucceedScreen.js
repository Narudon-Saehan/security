import { useParams } from "react-router-dom"
import React, { useEffect, useState } from "react"
import validator from 'validator'
import axios from "axios"
import LoadingScreen from "./LoadingScreen"
import ErrorScreen from "./ErrorScreen"
import './RegisterScreen.css'
const ForgotPasswordSucceedScreen = () => {
    const params = useParams()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [dataFormToken, setDataFormToken] = useState()
    const [statusQuestion, setStatusQuestion] = useState(false)
    const [answer, setAnswer] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")
    const [statusPassword, setStatusPassword] = useState(undefined)
    const Swal = require('sweetalert2')
    
    const checkToken = () => {
        axios.post("http://localhost:5000/forgotPassword/authen", {
            token: params.token
        })
            .then((res) => {
                if (res.data.status === "ok") {
                    setDataFormToken(res.data.decoded)
                    setLoading(false)
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Fail',
                        text: "Your link is invalid or timed out.",
                    })
                    setError(true)
                    setLoading(false)
                }
            }).catch(() => {
                Swal.fire("ไม่สามารถเชื่อมต่อกับ http://localhost:5000/forgotPassword/authen โปรดแจ้ง admin");
                setLoading(false)
            })
    }

    const checkAnswer = (e) => {
        e.preventDefault();
        setLoading(true)
        axios.post("http://localhost:5000/forgotPassword/checkAnswer", {
            id: dataFormToken.id,
            answer: answer
        })
            .then((res) => {
                if (res.data.status === "ok") {
                    if (res.data.message === "correct") {
                        Swal.fire({
                            icon: 'success',
                            title: 'Success',
                            text: "Correct answer",
                        })
                        setStatusQuestion(true)
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Fail',
                            text: "Wrong answer",
                        })
                    }
                    setLoading(false)
                } else {
                    setLoading(false)
                }
            }).catch(() => {
                alert("ไม่สามารถเชื่อมต่อกับ http://localhost:5000/forgotPassword/checkAnswer โปรดแจ้ง admin");
                setLoading(false)
            })
    }

    const ChangePassword = () => {
        setLoading(true)
        axios.post("http://localhost:5000/forgotPassword/changePassword", {
            id: dataFormToken.id,
            password: password
        })
            .then((res) => {
                if (res.data.status === "ok") {
                    console.log(res.data.result.affectedRows);
                    if (res.data.result.affectedRows === 1) {
                        alert("แก้ไขสำเร็จ")
                        window.location = '/'
                    } else {
                        alert("แก้ไขล้มเหลว")
                        setLoading(false)
                    }
                } else {
                    setLoading(false)
                }
            }).catch(() => {
                alert("ไม่สามารถเชื่อมต่อกับ http://localhost:5000/forgotPassword/changePassword โปรดแจ้ง admin");
                setLoading(false)
            })
    }

    const checkPassword = (value) => {
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
    const submitChangePassword = (e) => {
        e.preventDefault();
        if (password && repeatPassword) {
            if (statusPassword) {
                if (password === repeatPassword) {
                    ChangePassword()
                    alert("OK")
                } else {
                    alert("password และ repeatPassword ไม่ตรงกัน")
                }
            } else {
                alert("รหัสผ่านของคุณง่ายเกินไป")
            }
        } else {
            alert("กรุณากรอกข้อมูลให้ครบ")
        }
    }

    useEffect(() => {
        return ()=>{
            checkToken()
        }
    },[]);
    if (loading) {
        return <LoadingScreen />
    }
    if (error) {
        return <ErrorScreen />
    }
    ////////หน้าตอบคำถาม
    if (!statusQuestion) {
        return (
            <body>
                <div className="bg-img">
                    <div className="content">
                        <header>Question : </header>
                        <div class="pass">
                            <label>{dataFormToken.question}</label>
                        </div>
                        <form onSubmit={checkAnswer}>
                            <div class="field">
                                <span class="fa fa-user"></span>
                                <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Answer" required/><br /><br />
                            </div>
                            <div className="space">
                                <button type="submit" class="btn btn-primary btn-lg" value="Submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </body>
        )
    }
    ///////รีรหัสผ่านถ้าตอบถูก
    return (
        <body>
            <div className="bg-img">
                <div className="content">
                    <header>Reset Password</header>
                    <form onSubmit={submitChangePassword}>
                        <div class="pass">
                            <label >New Password:</label>
                            &ensp;&ensp;
                            <label style={{ color: statusPassword ? "red" : "green" }}>{(password === "") ? "" : statusPassword ? "Is Strong Password" : "Is Not Strong Password"}</label>
                        </div>
                        <div class="field">
                            <span class="fa fa-user"></span>
                            <input type="password" value={password} onChange={(e) => checkPassword(e.target.value)} />
                        </div>
                        <div class="pass">
                            <label>Repeat Password:</label>
                            <label style={{ color: statusPassword ? "red" : "green" }}>{repeatPassword === "" ? "" : (password === repeatPassword) ? "the same" : "not the same"}</label>
                        </div>
                        <div class="field">
                            <input type="password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
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
export default ForgotPasswordSucceedScreen;