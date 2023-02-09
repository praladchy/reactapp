import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Login from "../Login/Login"
import SignUp from '../SignUp/SignUp'

const LoginSignUp = () => {
    let [authMode, setAuthMode] = useState("signin")

    const changeAuthMode = () => {
        setAuthMode(authMode === "Login" ? "signup" : "login")
    }
    if (authMode === Login) {
    return (
        <div>
                <div className="text-center">
                    Not registered yet?{" "}
                    <span className="link-primary" onClick={changeAuthMode}>
                        Sign Up
                    </span>
                </div>
                <Login />
            </div>
        )
    }
    return (
        <div>
            <SignUp />
        </div>
    )
}

export default LoginSignUp