import toast from "react-hot-toast"
import { setExercises } from "../actions/exerciseAction"
import { deleteExercise, fetchExercise } from "../services/exercise.services"

export const getExercises = async (dispatch, id) => {
    try {
        const data = await fetchExercise(id)
        dispatch(setExercises(data))
    } catch (error) {
        console.log(error)
    }
}

export const getUpdatedData = async (dispatch, id) => {
    try {
        const data = await deleteExercise(id)
        if (data) {
            getExercises(dispatch)
            toast.success("Deletion Successfull")
        }

    } catch (error) {
        console.log(error)
    }
}