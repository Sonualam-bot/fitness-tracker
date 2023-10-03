import React from 'react'
import { useSelector } from "react-redux"
import { Navigate } from "react-router";
import { Signup } from "../pages/SignUp";

function RequiredAuth({ children }) {
    const user = useSelector(state => state.userState.user);
    const isLoggedIn = localStorage.getItem('isLoggedIn')


    return (
        isLoggedIn ? children : <Navigate to="/user" />
    )
}

export default RequiredAuth