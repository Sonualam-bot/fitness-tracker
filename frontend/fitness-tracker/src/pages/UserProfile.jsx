import { useSelector } from "react-redux"

import "../Css/UserProfile.css"

import toast from 'react-hot-toast';
import { useNavigate } from "react-router";

export const UserProfile = () => {

    const navigate = useNavigate()

    const userProfile = localStorage.getItem('userData')
    const profile = JSON.parse(userProfile)


    const handleUserLogout = () => {
        toast.success("Feature coming soon")
    }

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('isLoggedIn')
        localStorage.removeItem('userData')
        navigate("/login")
    }


    const image = "https://walnuteducation.com/static/core/images/icon-profile.png"

    return (
        <>
            <div className="profile">
                <div className="imgeDiv">
                    <img src={profile?.profilePictureUrl !== "" ? profile?.profilePictureUrl : image} alt="profile" />
                </div>
                <div>
                    <h2>{profile?.nickname}</h2>
                    <h3>@{profile?.username}</h3>
                    <a href="https://github.com/Sonualam-bot/fitness-tracker/tree/main" target="_blank" >GitHub</a>
                </div>
                <div className="logout-container">
                    <button className="logout-button" onClick={logout}>Logout</button>
                </div>

            </div>

        </>
    )
}