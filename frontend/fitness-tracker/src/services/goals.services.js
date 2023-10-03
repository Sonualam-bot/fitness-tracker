import axios from "axios";

const BASE_URL = 'http://localhost:4000/api/v1/goals';


export const fetchGoals = async () => {
    try {
        const response = await axios.get(`${BASE_URL}`);
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
        const response = await axios.delete(`${BASE_URL}/` + id);
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
        const response = await axios.post(`${BASE_URL}`, goal);
        if (response.status === 200) {
            const data = response.data.goal
            return data
        }
    } catch (error) {
        throw new Error(`${error.message}`)
    }
}