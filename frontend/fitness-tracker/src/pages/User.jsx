import React, { useEffect, useState } from 'react'
import { Signup } from "./SignUp"
import { Login } from "./Login"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function User() {
    const navigate = useNavigate()
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(localStorage.getItem("isAccount"));
    const user = useSelector((state) => state.userState.user)



    useEffect(() => {
        if (user) {
            navigate("/")
        }
    }, [user])

    return (
        <div>
            {
                isUserAuthenticated ? <Login /> : <Signup setIsUserAuthenticated={setIsUserAuthenticated} />
            }


        </div>
    )
}

export default User