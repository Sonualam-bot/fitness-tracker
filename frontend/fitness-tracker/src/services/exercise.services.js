import axios from "axios";

const BASE_URL = 'http://localhost:4000/api/v1/exercises';

export const fetchExercise = async () => {
    try {
        const response = await axios.get(`${BASE_URL}`);
        if (response.status === 200) {
            const data = response.data.exercise;
            return data
        }
    } catch (error) {
        throw new Error(`${error.message}`)
    }
}

export const deleteExercise = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${id}`);
        if (response.status === 200) {
            const data = response.data.deletedExercise
            return data
        }
    } catch (error) {
        throw new Error(`${error.message}`)
    }
}


export const createNewExercise = async (newExercise) => {
    try {
        const response = await axios.post(`${BASE_URL}`, newExercise);
        if (response.status === 200) {
            const data = response.data.exercise
            return data
        }
    } catch (error) {
        throw new Error(`${error.message}`)
    }
}