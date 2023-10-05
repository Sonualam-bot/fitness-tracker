import axios from "axios";
import { setSignupUser } from "../actions/userAction";

const BASE_URL = 'https://fitness-tracker-renon.onrender.com/api/v1';


export const fetchSignup = async (userData) => {
    try {
        const response = await axios.post(`${BASE_URL}/register`, userData);
        if (response.status === 200) {
            const data = response.data.user
            return data
        }
    } catch (error) {
        throw new Error(`${error.message}`)
    }
}

export const fetchUserLogin = async (userData) => {
    try {
        const response = await axios.post(`${BASE_URL}/login`, userData);
        if (response.status === 200) {
            const data = response.data

            return data
        }
    } catch (error) {
        throw new Error(`${error.message}`)
    }
}


export const getUser = async (token, dispatch) => {
    try {
        const response = await axios.get(`${BASE_URL}/userProfile`, {
            headers: {
                Authorization: token
            }
        })

        if (response.status === 200) {
            const user = response.data.user

            dispatch(setSignupUser(user))
        }
    } catch (error) {
        throw new Error(`${error.message}`)
    }
}