import { useSelector } from "react-redux"

import "../Css/UserProfile.css"

import toast from 'react-hot-toast';

export const UserProfile = () => {
    // const profile = useSelector(state => state.userState.user);
    // const {userProfileUrl} = profile;
    const userProfile = localStorage.getItem('userData')
    const profile = JSON.parse(userProfile)


    const handleUserLogout = () => {
        toast.success("Feature coming soon")
    }

    return (
        <>
            <div className="profile">
                <div className="imgeDiv">
                    <img src={profile?.profilePictureUrl} alt="profile" />
                </div>
                <div>
                    <h2>{profile?.nickname}</h2>
                    <h3>@{profile?.username}</h3>
                    <a href="https://github.com/Sonualam-bot/fitness-tracker/tree/main" >GitHub</a>
                </div>
                <div class="logout-container">
                    <button class="logout-button" onClick={handleUserLogout}>Logout</button>
                </div>

            </div>

        </>
    )
}