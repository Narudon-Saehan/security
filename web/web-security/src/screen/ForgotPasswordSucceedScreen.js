import { useParams} from "react-router-dom"
import React,{ useContext, useEffect ,useState} from "react"
import { AuthContext } from "../auth/Auth"
import validator from 'validator'
import axios from "axios"
import LoadingScreen from "./LoadingScreen"
import ErrorScreen from "./ErrorScreen"
const ForgotPasswordSucceedScreen =()=>{
    const {checkLogout,dataUser}= useContext(AuthContext)
    const params = useParams()
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)
    const [dataFormToken,setDataFormToken] = useState()
    const [statusQuestion,setStatusQuestion] = useState(false)
    const [answer,setAnswer] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")
    const [statusPassword, setStatusPassword] = useState(undefined)
    const checkToken =()=>{
        axios.post("http://localhost:5000/forgotPassword/authen",{
            token:params.token
        })
        .then((res)=>{
            if(res.data.status === "ok"){
                console.log(res.data);
                setDataFormToken(res.data.decoded)
                setLoading(false)
            }else{
                alert("ลิ้งของคุณไม่ถูกต้อง หรือ หมดเวลาไปแล้ว")
                setError(true)
                setLoading(false)
            }
        }).catch(()=>{
            alert("ไม่สามารถเชื่อมต่อกับ http://localhost:5000/forgotPassword/authen โปรดแจ้ง admin");
            setLoading(false)
        })
    }

    const checkAnswer =(e)=>{
        e.preventDefault();   
        setLoading(true)
        axios.post("http://localhost:5000/forgotPassword/checkAnswer",{
            id:dataFormToken.id,
            answer:answer
        })
        .then((res)=>{
            if(res.data.status === "ok"){
                if(res.data.message === "correct"){
                    setStatusQuestion(true)
                }else{
                    alert("คำตอบผิด")
                }
                setLoading(false)
            }else{
                setLoading(false)
            }
        }).catch(()=>{
            alert("ไม่สามารถเชื่อมต่อกับ http://localhost:5000/forgotPassword/checkAnswer โปรดแจ้ง admin");
            setLoading(false)
        })
    }

    const ChangePassword =()=>{
        setLoading(true)
        axios.post("http://localhost:5000/forgotPassword/changePassword",{
            id:dataFormToken.id,
            password:password
        })
        .then((res)=>{
            if(res.data.status === "ok"){
                console.log(res.data.result.affectedRows);
                if(res.data.result.affectedRows === 1){
                    alert("แก้ไขสำเร็จ")
                    window.location = '/'
                }else{
                    alert("แก้ไขล้มเหลว")
                    setLoading(false)
                }
            }else{
                setLoading(false)
            }
        }).catch(()=>{
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
    const submitChangePassword =(e)=>{
        e.preventDefault(); 
        if(password && repeatPassword){
            if(statusPassword){
                if(password === repeatPassword){
                    ChangePassword()
                    alert("OK")
                }else{
                    alert("password และ repeatPassword ไม่ตรงกัน")
                }
            }else{
                alert("รหัสผ่านของคุณง่ายเกินไป")
            }
        }else{
            alert("กรุณากรอกข้อมูลให้ครบ")
        }
    }

    useEffect(() => {
        return ()=>{
            checkToken()
        }
    },[]);
    if(loading){
        return <LoadingScreen/>
    }
    if(error){
        return <ErrorScreen/>
    }
    ////////หน้าตอบคำถาม
    if(!statusQuestion){
        return(
            <div style={{display: "flex",flexDirection:'column',height:"100vh",justifyContent:'center',alignItems:"center",backgroundColor:'red'}}>
                <h1>คำถาม: {dataFormToken.question}</h1>
                <form onSubmit={checkAnswer}>
                    <label>คำตอบ :</label>
                    <input type="text" value={answer} onChange={(e)=>setAnswer(e.target.value)}/><br/><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
    ///////รีรหัสผ่านถ้าตอบถูก
    return(
        <div style={{display: "flex",flexDirection:'column',height:"100vh",justifyContent:'center',alignItems:"center",backgroundColor:'red'}}>
            <h1>Reset Password</h1>
            <form onSubmit={submitChangePassword}>
                <label >New Password:</label>
                <input type="password" value={password} onChange={(e) => checkPassword(e.target.value)} />
                <label>{(password === "") ? "" : statusPassword ? "Is Strong Password" : "Is Not Strong Password"}</label><br /><br />
                <label>Repeat Password:</label>
                <input type="password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
                <label>{repeatPassword===""?"":(password === repeatPassword)? "the same" : "not the same"}</label><br /><br />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}
export default ForgotPasswordSucceedScreen;