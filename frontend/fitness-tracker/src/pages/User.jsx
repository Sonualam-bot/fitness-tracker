import React, { useEffect, useState } from 'react'
import { Signup } from "./SignUp"
import { Login } from "./Login"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function User() {
    const navigate = useNavigate()
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
    const user = useSelector((state) => state.userState.user)




    return (
        <div>
            {
                !isUserAuthenticated ?
                    <>
                        <Login setIsUserAuthenticated={setIsUserAuthenticated} />

                    </> : <>
                        <Signup setIsUserAuthenticated={setIsUserAuthenticated} />

                    </>
            }


        </div>
    )
}

export default User