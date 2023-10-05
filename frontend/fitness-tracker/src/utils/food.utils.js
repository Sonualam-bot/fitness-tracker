import toast from "react-hot-toast";
import { setFoods } from "../actions/foodAction"
import { deleteFoodItem, fetchFood } from "../services/food.services";

export const getFoods = async (dispatch, id) => {
    try {
        const data = await fetchFood(id);
        dispatch(setFoods(data))
    } catch (error) {
        console.log(error)
    }
}

export const updateDeleteFood = async (dispatch, id) => {
    try {
        const data = await deleteFoodItem(id)
        if (data) {
            getFoods(dispatch)
            toast.success('Food Deletion Successfull')
        }
    } catch (error) {
        throw new Error(`${error.message}`)
    }
}