import axios from "axios";

const BASE_URL = 'http://localhost:4000/api/v1/food';


export const fetchFood = async () => {
    try {
        const response = await axios.get(`${BASE_URL}`);
        if (response.status === 200) {
            const food = response.data.foods;
            return food
        }

    } catch (error) {
        throw new Error(`${error.message}`)
    }
}

export const deleteFoodItem = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/` + id)
        if (response.status === 200) {
            const data = response.data.deletedFoodItem
            return data
        }
    } catch (error) {
        throw new Error(`${error.message}`)
    }
}


export const createFoodItem = async (newFood) => {
    try {
        const response = await axios.post(`${BASE_URL}`, newFood);
        if (response.status === 200) {
            const data = response.data.newFood;
            return data
        }
    } catch (error) {
        throw new Error(`${error.message}`)
    }
}