const initialState = {
    user: {},
    userInput: {
        email: "",
        username: "",
        password: "",
        profilePictureUrl: "",
        nickname: "",
        phoneNumber: "",
        address: "",
    },
    userLogin: {
        email: "",
        password: ""
    },
    login: {},
    isLoggedIn: false
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER_SIGNUP":
            return {
                ...state,
                userInput: action.payload
            }
        case "SET_SIGNUP":
            return {
                ...state,
                user: action.payload
            }
        case "USER_LOGIN":
            return {
                ...state,
                userLogin: { ...state.user, ...action.payload }
            }
        case "SET_USER_LOGIN":
            return {
                ...state,
                login: { ...state.login, ...action.payload }
            }
        default:
            return state
    }
}