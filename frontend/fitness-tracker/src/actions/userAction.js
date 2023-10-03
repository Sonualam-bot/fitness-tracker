export const setSignup = (userData) => ({
    type: "USER_SIGNUP",
    payload: userData
})

export const setSignupUser = (userInfo) => ({
    type: "SET_SIGNUP",
    payload: userInfo
})

export const setUserLogin = (userInfo) => ({
    type: "USER_LOGIN",
    payload: userInfo
})

export const userLoggingIn = (userInfo) => ({
    type: "SET_USER_LOGIN",
    payload: userInfo
})