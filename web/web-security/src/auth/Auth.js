import React,{useState,useEffect } from "react";
import axios from 'axios';
import LoadingScreen from "../screen/LoadingScreen";
export const AuthContext= React.createContext();
export const AuthProvider = ({children})=>{
    const [loading,setLoading] = useState(true);
    const [checkLogout,setcheckLogout] = useState(false)
    const [dataUser,setDataUser] = useState()
    const checkAuthentication = ()=>{
        const token = localStorage.getItem("tokenLoing")
        console.log('tokenLoing',token);
        axios.post("http://localhost:5000/authen",{
            token:token
        })
        .then((res)=>{
            if(res.data.status==="ok"){
                console.log(res.data);
                const {userName,firstName,lastName } = res.data.decoded
                setDataUser({userName:userName,firstName:firstName,lastName:lastName})
                setLoading(false);
            }else{
                localStorage.removeItem('tokenLoing');
                setcheckLogout(true)
                setLoading(false);
            }
        },(err)=>{
            localStorage.removeItem('tokenLoing');
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
