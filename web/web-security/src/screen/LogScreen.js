import React, { useState, useContext, useEffect} from "react";
import axios from "axios";
import { AuthContext } from "../auth/Auth";
import LoadingScreen from "./LoadingScreen";
import { FaSearch } from 'react-icons/fa';

import './LogScreen.css';
import { data } from "jquery";
const LogScreen = () => {
    const { checkLogout } = useContext(AuthContext);
    const [loading, setLoading] = useState(false)
    const [dataLog, setDataLog] = useState({data:[]})
    const dataTemp = [
        {
            log_datetime : new Date().toISOString(),ipv4 : "158.108.228.133",country : "Thailand",latitude : 13.75,longitude : 100.4667,
            log_email : "test@email.com",status_email : true,status_login : true,
        },
        {
            log_datetime : new Date().toISOString(),ipv4 : "158.108.228.133",country : "Thailand",latitude : 13.75,longitude : 100.4667,
            log_email : "test@email.com",status_email : false,status_login : true,
        },
        {
            log_datetime : new Date().toISOString(),ipv4 : "158.108.228.133",country : "Thailand",latitude : 13.75,longitude : 100.4667,
            log_email : "test@email.com",status_email : true,status_login : false,
        },{
            log_datetime : new Date().toISOString(),ipv4 : "158.108.228.133",country : "Thailand",latitude : 13.75,longitude : 100.4667,
            log_email : "test@email.com",status_email : false,status_login : false,
        },{
            log_datetime : new Date().toISOString(),ipv4 : "158.108.228.133",country : "Thailand",latitude : 13.75,longitude : 100.4667,
            log_email : "test@email.com",status_email : true,status_login : true,
        }
    ]
    // console.log(dataTemp);
    useEffect(()=>{
        return()=>{
            axios.post("http://localhost:5000/getLog",{
                log_date:new Date().toISOString()
            }).then((response)=>{
                console.log(response.data);
                setDataLog({data:response.data.result})
                setLoading(false)
            }).catch(()=>{
                alert("ไม่สามารถเชื่อมต่อกับ http://localhost:5000/getLog")
                setLoading(false)
            })
        }
    },[])
    if (checkLogout) {
        return window.location = "/home"
    }
    if (loading) {
        return (
            <LoadingScreen />
        )
    }
    return (
        
        <div style={{display:"block"}}>
            <div class="input-group  mb-1">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Search"/>
                    <button class="btn btn-success" type="submit">Go</button>
                </div>
            
                <div class="input-group-text">
                    <input type="checkbox"/>
                </div>
                <input type="text" class="form-control" placeholder="Some text"/>
            
                <div class="input-group-text">
                    <input type="checkbox"/>
                </div>
                <input type="text" class="form-control" placeholder="Some text"/>
            </div>
        
            <div className="Logbox">
            <h1 className="Logtext">Log Page</h1>
            <table className="table table-dark table-striped" >
                <thead >
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">date</th>
                        <th scope="col">time</th>
                        <th scope="col">ipv4</th>
                        <th scope="col">country</th>
                        <th scope="col">latitude</th>
                        <th scope="col">longitude</th>
                        <th scope="col">email</th>
                        <th scope="col">status_email</th>
                        <th scope="col">status_login</th>
                    </tr>
                </thead>
                <tbody >
                    {dataLog.data.map((data,index)=>{
                        return(
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>{data.log_date.split("T")[0]}</td>
                                <td>{data.log_time}</td>
                                <td>{data.ipv4}</td>
                                <td>{data.country}</td>
                                <td>{data.latitude}</td>
                                <td>{data.longitude}</td>
                                <td>{data.log_email}</td>
                                <td style={{color:data.status_email?"green":"red"}}>{data.status_email?"found email":"not found email"}</td>
                                <td style={{color:data.status_login?"green":"red"}}>{data.status_login?"login succeed":"login failed"}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
        </div>
    )
}
export default LogScreen;