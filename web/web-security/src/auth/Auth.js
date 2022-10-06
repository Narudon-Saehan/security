import React,{useState,useEffect } from "react";
import axios from 'axios';
import LoadingScreen from "../screen/LoadingScreen";
export const AuthContext= React.createContext();
export const AuthProvider = ({children})=>{
    const [loading,setLoading] = useState(true);
    const [checkLogout,setcheckLogout] = useState(false)
    const [dataUser,setDataUser] = useState()
    const checkAuthentication = ()=>{
        const token = localStorage.getItem("tokenLogin")
        console.log('tokenLogin',token);
        axios.post("http://localhost:5000/authen",{
            token:token
        })
        .then((res)=>{
            if(res.data.status==="ok"){
                console.log(res.data);
                const {email,firstName,lastName,role } = res.data.decoded
                setDataUser({email,firstName,lastName,role })
                setLoading(false);
            }else{
                localStorage.removeItem('tokenLogin');
                setcheckLogout(true)
                setLoading(false);
            }
        },(err)=>{
            localStorage.removeItem('tokenLoging');
            setcheckLogout(true)
            setLoading(false);
        })
    }
    useEffect(()=>{
        return ()=>{
            checkAuthentication();
        }
    },[])
    if (loading) {
        return <LoadingScreen/>;
    }
    return (
        <AuthContext.Provider value={{checkLogout,dataUser}}>
            {children}
        </AuthContext.Provider>
    )
}
