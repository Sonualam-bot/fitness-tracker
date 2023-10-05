import axios from "axios";

const BASE_URL = 'https://fitness-tracker-renon.onrender.com/api/v1';

export const fetchGoals = async (userId) => {
    try {
        const response = await axios.get(`${BASE_URL}/goals/${userId}`);
        if (response.status === 200) {
            const goals = response.data.goals
            return goals
        }
    } catch (error) {
        throw new Error(`${error.message}`)
    }
}



export const deleteGoal = async (id) => {
    try {
        console.log("here")
        const response = await axios.delete(`${BASE_URL}/goals/` + id);
        console.log(response)
        if (response.status === 200) {
            const deleteGoal = response.data.delete
            return deleteGoal
        }
    } catch (error) {
        throw new Error(`${error.message}`)
    }
}

export const createGoals = async (goal) => {
    try {
        const response = await axios.post(`${BASE_URL}/goals`, goal);
        if (response.status === 200) {
            const data = response.data.goal
            return data
        }
    } catch (error) {
        throw new Error(`${error.message}`)
    }
}