import { useNavigate,Navigate } from "react-router-dom"
import React,{ useContext } from "react"
import { AuthContext } from "../auth/Auth"
import './ErrorScreen.css'
//import emoji from 'https://cdn3.iconfinder.com/data/icons/emoji/100/Emoji_Sorry-512.png'
const ErrorScreen =()=>{

    const goHome=()=>{
        window.location="/home"
        //navigate("/")
    }
    return(
        <div style={{display: "flex",flexDirection:'column',height:"100vh",justifyContent:'center',alignItems:"center"}}>
            
            
                <img className="Errorimage" src={'https://media.baamboozle.com/uploads/images/44393/1655378134_54303.png'}></img>
                <div className='textError'>ERROR </div>
                <div className="Errorpage">404</div> 
                <div className='textpageError'>Page Not Found !!</div>
                {/* <div className='textError'>Go to Login </div>  */}
                <button type="button" class="btn btn-outline-warning">Go to Home</button>
                
                
             
                
                
        </div> 
        
        
    )
}
export default ErrorScreen;