import axios from "axios";

const BASE_URL = 'https://fitness-tracker-renon.onrender.com/api/v1';


export const fetchFood = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/food`);
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
        const response = await axios.delete(`${BASE_URL}/food` + id)
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
        const response = await axios.post(`${BASE_URL}/food`, newFood);
        if (response.status === 200) {
            const data = response.data.newFood;
            return data
        }
    } catch (error) {
        throw new Error(`${error.message}`)
    }
}