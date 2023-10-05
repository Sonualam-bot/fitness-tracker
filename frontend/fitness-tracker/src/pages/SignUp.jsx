import { useDispatch, useSelector } from "react-redux";
import { setSignup, setSignupUser, userLoggingIn } from "../actions/userAction";
import { fetchSignup } from "../services/auth.service";
import { Navigate, useNavigate } from "react-router";

import "../Css/Signup.css"
import { NavLink } from "react-router-dom";


export const Signup = ({ setIsUserAuthenticated }) => {

    const userInput = useSelector(state => state.userState.userInput);
    const text = useSelector(state => state.userState.user)

    const dispatch = useDispatch()

    const handleUserInput = (e) => {
        const { name, value } = e.target;
        // console.log({ ...userInput, [name]: value })
        dispatch(setSignup({ ...userInput, [name]: value }))
    }

    const handleUserSignUp = async (e) => {
        e.preventDefault();
        try {
            const data = await fetchSignup(userInput)
            if (data) {
                localStorage.setItem('userData', JSON.stringify(data));

                dispatch(setSignup({
                    email: "",
                    username: "",
                    password: "",
                    profilePictureUrl: "",
                    nickname: "",
                    phoneNumber: "",
                    address: "",
                }))
                setIsUserAuthenticated(true)
            }
        } catch (error) {
            throw new Error(`${error.message}`)
        }
    }

    return (
        <>
            <div className="container">
                <h1>Register Here </h1>
                <br />
                <form onSubmit={handleUserSignUp}>
                    <input placeholder="Email" value={userInput?.email} name="email" onChange={handleUserInput} />
                    <input placeholder="Username" value={userInput?.username} name="username" onChange={handleUserInput} />
                    <input placeholder="Password" value={userInput?.password} name="password" onChange={handleUserInput} />
                    <input placeholder="profile Picture url" value={userInput?.profilePictureUrl} name="profilePictureUrl" onChange={handleUserInput} />
                    <input placeholder="nickname" value={userInput?.nickname} name="nickname" onChange={handleUserInput} />
                    <input placeholder="phone Number" value={userInput?.phoneNumber} name="phoneNumber" onChange={handleUserInput} />
                    <input placeholder="address" value={userInput?.address} name="address" onChange={handleUserInput} />
                    <button type="submit">Submit</button>
                    <p onClick={() => setIsUserAuthenticated(false)}>Click me To Login In!!</p>
                </form>
            </div>
        </>
    )
}