import { useDispatch, useSelector } from "react-redux"
import { setSignupUser, setUserLogin, userLoggingIn } from "../actions/userAction";
import { fetchUserLogin } from "../services/auth.service";
import { Navigate, useNavigate } from "react-router";

import "../Css/Signup.css"

export const Login = () => {
    const userLoginInput = useSelector(state => state.userState.userLogin);
    const userLoginInput1 = useSelector(state => state.userState.login);
    const dispatch = useDispatch();
    const navigate = useNavigate()


    const handleUserLoginInput = (e) => {
        const { name, value } = e.target;
        dispatch(setUserLogin({ ...userLoginInput, [name]: value }))
    }

    const handleUserLoginFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await fetchUserLogin(userLoginInput)
            if (data) {
                localStorage.setItem('isLoggedIn', true);
                console.log("token data", { data })
                localStorage.setItem('token', data.token)
                dispatch(setSignupUser(data.user))
                navigate("/")
                // console.log("here is the login")
            }
        } catch (error) {
            throw new Error(`${error.message}`)
        }
    }


    return (
        <>
            <div className="container">
                <h1>Login Here </h1>
                <br />
                <form onSubmit={handleUserLoginFormSubmit} >
                    <input placeholder="Email" name="email" value={userLoginInput?.email} onChange={handleUserLoginInput} />
                    <input placeholder="password" name="password" value={userLoginInput?.password} onChange={handleUserLoginInput} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}