import { useEffect, useState } from "react";
import { useParams,Link,Navigate } from "react-router-dom";
import axios from "axios";
import emailjs from '@emailjs/browser';

const RegisterSucceedScreen =()=>{
    const { token } = useParams();
    const [loading,setLoading] = useState(true); 

    useEffect(() => {
        return () => {
            if(loading){
                axios.post("http://localhost:5000/addUser",{
                token:token,
                })
                .then((res)=>{
                    console.log(res.data);
                    setLoading(false)
                }).catch(()=>{
                    console.log("ไม่สามารถเชื่อมต่อกับ http://localhost:5000/register");
                })
            }
        }
    }, []);
    const gotoLogin=()=>{
        console.log("tttt");
        window.location = '/'
    }
    if(loading){
        return(
            <div style={{display: "flex",flexDirection:'column',height:"100vh",justifyContent:'center',alignItems:"center",backgroundColor:'red'}}>
                <h1>loading......</h1>
            </div>
        )
    }
    
    return(
        <div style={{display: "flex",flexDirection:'column',height:"100vh",justifyContent:'center',alignItems:"center",backgroundColor:'red'}}>
            <h1>Register Succeed</h1>
            <input type="submit" value="go to Login" onClick={()=>gotoLogin()}/>
            <Link to="/">Loing</Link>
        </div>
    )
}
export default RegisterSucceedScreen;