import { useNavigate, Navigate } from "react-router-dom"
import React, { useContext, useState, useEffect } from "react"
import { AuthContext } from "../auth/Auth"
import LoadingScreen from "./LoadingScreen"
import swal from 'sweetalert2'
const HomeScreen = () => {
    const { checkLogout, dataUser, statusPasswordTime } = useContext(AuthContext)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [passwordTime, setPasswordTime] = useState(new Date(dataUser?.password_time))
    const [message, setMessage] = useState("")
    const [day, setDay] = useState(0)
    const logout = () => {
        localStorage.removeItem("tokenLogin")
        window.location = "/"
        //navigate("/")
    }
    const dhm = (t) => {
        if (t < 0) {
            return "หมดเวลาแล้ว"
        }
        let cd = 24 * 60 * 60 * 1000,
            ch = 60 * 60 * 1000,
            cm = 60 * 1000,
            d = Math.floor(t / cd),
            h = Math.floor((t - d * cd) / ch),
            m = Math.ceil((t - d * cd - h * ch) / 60000),
            s = Math.ceil(60 + (t - d * cd - h * ch - m * cm) / 1000),
            pad = function (n) { return n < 10 ? '0' + n : n; };
        m-=1;
        if (s === 60) {
            m++;
            s = 0;
        }
        if (m === 60) {
            h++;
            m = 0;
        }
        if (h === 24) {
            d++;
            h = 0;
        }
        setDay(d)
        setMessage(d + "วัน" + pad(h) + "ชั่วโมง" + pad(m) + "นาที" + s + "วินาที")
        if (loading) {
            setLoading(false)
        }
        //return d+" วัน "+ pad(h)+" ชั่วโมง "+ pad(m)+" นาที" ;
    }
    useEffect(() => {
        if (statusPasswordTime) {
            return () => {
                dhm(new Date() - passwordTime)
                setInterval(() => {
                    //setRealTime(new Date())
                    dhm(new Date() - passwordTime)
                }, 1000);
            }
        }
    }, [])
    if (checkLogout) {
        // return <Navigate to="/" />
        return window.location = "/"
    }
    if (!statusPasswordTime) {
        //console.log("test");
        //alert("คุณใช้ pasaword นี้มา 90 วันแล้วกรุณาเปลี่ยน password ใหม่")
        return window.location = "/resetPass"
    }
    
    if (loading) {
        return <LoadingScreen />
    }
    return (
        <div style={{ display: "flex", flexDirection: 'column', height: "100vh", justifyContent: 'center', alignItems: "center", backgroundColor: 'red' }}>
            <h1>Home</h1>
            <h2>ยินดีต้อนรับ</h2>
            <h2>คุณ{dataUser?.firstName} {dataUser?.lastName}</h2>
            <h2> คุณใช้ password นี้มาแล้วเป็นเวลา :{message}</h2>
            <h2>{day >= 90 ? "คุณใช้passwordมา 90 วันแล้ว กรุณาเปลี่ยน password " : ""}</h2>
            <input type="submit" onClick={() => logout()} value="LOGOUT " />
        </div>
    )
}
export default HomeScreen;