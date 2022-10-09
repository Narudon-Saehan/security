import { useNavigate, Navigate } from "react-router-dom"
import React, { useContext, useState, useEffect } from "react"
import { AuthContext } from "../auth/Auth"
import LoadingScreen from "./LoadingScreen"
import './HomeScreen.css'
const DontClick = () => {
    const { checkLogout, dataUser, statusPasswordTime } = useContext(AuthContext)

    if (checkLogout) {
        return window.location = "/"
    }
    if (!statusPasswordTime) {
        return window.location = "/resetPass"
    }
    return (
        <h1>DontClick</h1>
    )
}
export default DontClick;