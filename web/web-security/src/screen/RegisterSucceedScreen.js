import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import axios from "axios";
import LoadingScreen from "./LoadingScreen";

const RegisterSucceedScreen = () => {
    const { token } = useParams();
    const [dataUser, setDataUser] = useState();
    const [loading, setLoading] = useState(true);
    const [statusRegister, setStatusRegister] = useState(false);

    const confirmRegister = () => {
        if (!statusRegister) {
            setLoading(true)
            axios.post("http://localhost:5000/addUser", {
                email:dataUser.email,
                password:dataUser.password,
                firstName:dataUser.firstName,
                lastName:dataUser.lastName,
                question:dataUser.question,
                answer:dataUser.answer
            })
                .then((res) => {
                    if (res.data.status === "error") {
                        alert(res.data.message)
                    } else {
                        setStatusRegister(true)
                        setLoading(false)
                    }
                }).catch(() => {
                    console.log("ไม่สามารถเชื่อมต่อกับ http://localhost:5000/register");
                })
        }
    }

    useEffect(() => {
        return () => {
            if (loading) {
                axios.post("http://localhost:5000/checkRegister", {
                    token: token,
                })
                    .then((res) => {
                        console.log(res.data);
                        if (res.data.status === "error") {
                            alert(res.data.message)
                        } else {
                            if (res.data.message === "found email") {
                                setStatusRegister(true)
                            }
                            setDataUser(res.data.decoded)
                            setLoading(false)
                        }
                    }).catch(() => {
                        console.log("ไม่สามารถเชื่อมต่อกับ http://localhost:5000/register");
                    })
            }
        }
    }, []);

    if (loading) {
        return <LoadingScreen />
    }
    if (!statusRegister) {
        return (
            <div style={{ display: "flex", flexDirection: 'column', height: "100vh", justifyContent: 'center', alignItems: "center", backgroundColor: 'red' }}>
                <h1>กดปุ่มเพื่อยืนยันการสมัคร</h1>
                <input type="submit" value="Submit" onClick={()=>confirmRegister()}/>
            </div>
        )
    }

    return (
        <div style={{ display: "flex", flexDirection: 'column', height: "100vh", justifyContent: 'center', alignItems: "center", backgroundColor: 'red' }}>
            <h1>Register Succeed</h1>
            <Link to="/"><input type="submit" value="go to Login" /></Link>
        </div>
    )
}
export default RegisterSucceedScreen;