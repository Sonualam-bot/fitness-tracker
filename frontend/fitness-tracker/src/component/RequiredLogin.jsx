import React from 'react'
import { useSelector } from "react-redux"
import { Navigate } from "react-router";
import { Signup } from "../pages/SignUp";

function RequiredLogin({ children }) {
    const user = useSelector(state => state.userState.login);
    console.log("consoling object.key for login", Object.keys(user).length)
    return (
        Object.keys(user).length > 0 ? children : <Navigate to="/login" />
    )
}

export default RequiredLogin