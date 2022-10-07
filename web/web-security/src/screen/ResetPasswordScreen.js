import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../auth/Auth"
import axios from "axios"
import validator from 'validator'
import './LoginScreen.css'
import './RegisterScreen.css'
const ResetPasswordScreen = () => {
    const { checkLogout, dataUser, statusPasswordTime } = useContext(AuthContext)
    //const params = useParams()
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")
    const [statusPassword, setStatusPassword] = useState(undefined)

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
    const showPassword=(idName)=> {
        var x = document.getElementById(idName);
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

    const rePassword = ()=>{
        axios.post("http://localhost:5000/resetPassword",{
                id:dataUser.id,
                password:password
            }).then((response)=>{
                if(response.data.status === "duplicate"){
                    alert(response.data.message)
                }else if(response.data.status === "ok"){
                    localStorage.setItem("tokenLogin", response.data.token)
                    alert("succuss")
                    window.location = '/home'
                }
                console.log(response.data.status);
            }).catch(()=>{
                alert("ไม่สามารถเชื่อมต่อกับ http://localhost:5000/resetPassword")
            })
    }
    
    useEffect(() => {
        return () => {
            console.log("test");
        }
    }, []);
    if (checkLogout) {
        return window.location = '/'
    }
    return (
        <div className="bg-img">
            <div className="content">
                <header>Reset Password</header>
                <h3 style={{ color: "#fff" }}>{!statusPasswordTime ? "เนื่องจากคุณใช้ password นี้มามากกว่า 90 วันแล้วกรุณาเปลี่ยน" : ""}</h3>
                <form>
                    <div class="pass">
                        <label>New Password:</label>
                        <label style={{ color: statusPassword ? "green" : "red" }} >{(password === "") ? "" : statusPassword ? "Is Strong Password" : "Is Not Strong Password"}</label>
                    </div>
                    <div class="field">
                        <span class="fa fa-user"></span>
                        <input type="password" id="newpassword" placeholder="New Password" value={password} onChange={(e) => checkPassword(e.target.value)} />
                        <button type="button" onClick={() => showPassword("newpassword")}>show</button>
                        <br /><br />
                    </div>
                    <div class="pass">
                        <label>Verity Password:</label>
                        <label style={{ color: (password === repeatPassword) ? "green" : "red" }} >{repeatPassword===""?"":(password === repeatPassword)? "the same" : "not the same"}</label>
                    </div>
                    <div class="field">
                        <span></span>
                        <input type="password" id="veritypassword" placeholder="Verity Password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
                        <button type="button" class="showbutton" onClick={() => showPassword("veritypassword")}>show</button>
                        <br /><br />
                    </div>
                    {/* <div class="btn_submit">
                        <button class="btn btn-primary btn-lg" type="submit" value="Submit" />
                    </div> */}
                    <div className="space">
                        <button type="button" class="btn btn-primary btn-lg" onClick={()=>rePassword()} value="Submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>

    )
}
export default ResetPasswordScreen;