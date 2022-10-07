import { useParams } from "react-router-dom"
import React, { useContext, useEffect } from "react"
import { AuthContext } from "../auth/Auth"
import axios from "axios"
import './LoginScreen.css'
import './RegisterScreen.css'
const ResetPasswordScreen = () => {
    const { checkLogout, dataUser } = useContext(AuthContext)
    const params = useParams()


    useEffect(() => {
        return () => {
            console.log(params);
        }
    }, []);

    return (
        <div className="bg-img">
            <div className="content">
                <header>Reset Password</header>
                <form>
                    <div class="pass">
                        <label>New Password:</label>
                    </div>
                    <div class="field">
                        <span class="fa fa-user"></span>
                        <input type="text" placeholder="New Password" /><br /><br />
                    </div>
                    <div class="pass">
                        <label>Verity Password:</label>
                    </div>
                    <div class="field">
                        <span></span>
                        <input type="password" placeholder="Verity Password" /><br /><br />
                    </div>
                    {/* <div class="btn_submit">
                        <button class="btn btn-primary btn-lg" type="submit" value="Submit" />
                    </div> */}
                    <div className="space">
                        <button type="button" class="btn btn-primary btn-lg" value="Submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>

    )
}
export default ResetPasswordScreen;