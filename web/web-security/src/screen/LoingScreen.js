import { useState,useContext } from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";
import { AuthContext } from "../auth/Auth";
const LoingScreen =()=>{
    const {checkLogout} = useContext(AuthContext);
    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(userName && password){
            axios.post("http://localhost:5000/loing",{
                userName:userName,
                password:password
            }).then((response)=>{
                console.log(response.data);
                if(response.data.status === "ok"){
                    localStorage.setItem("tokenLoing", response.data.token)
                    window.location = '/home'
                    return <Navigate to="/home"/>
                    //navigate("/home");
                }else{
                    alert(response.data.message)
                }
            })
        }else{
            alert("กรุณากรอก username และ รหัสผ่านให้ครบ")
        }

    }
    const checkUserName =()=> {
        console.log("test");
    }
    if(!checkLogout){
        return <Navigate to="/home" />
    }
    return(
        <div style={{display: "flex",flexDirection:'column',height:"100vh",justifyContent:'center',alignItems:"center",backgroundColor:'red'}}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} >
                <label>User name:</label>
                <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}  onBlur={()=>checkUserName()} /><br/><br/>
                <label>Password:</label>
                <input type="password"value={password} onChange={(e)=>setPassword(e.target.value)}/><br/><br/>
                <input type="submit" value="Submit"/>

            </form>
        </div>
    )
}
export default LoingScreen;