import toast from "react-hot-toast";
import { setGoals } from "../actions/goalAction";
import { deleteGoal, fetchGoals } from "../services/goals.services";

export const getGoals = async (dispatch, id) => {
    try {
        const data = await fetchGoals(id);
        dispatch(setGoals(data))
    } catch (error) {
        console.log(error)
    }
}

export const updateDeleteGoal = async (dispatch, id) => {
    try {
        const update = await deleteGoal(id)
        if (update) {
            getGoals(dispatch)
            toast.success("Goal Deleted Successfully")
        }

    } catch (error) {
        throw new Error(`${error.message}`)
    }
}