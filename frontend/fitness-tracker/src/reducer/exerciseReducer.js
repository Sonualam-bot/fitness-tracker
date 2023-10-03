const initialState = {
    exercises: [],
    exerciseInput: {
        exerciseName: "",
        durationMinutes: ""
    }
}

export const exerciseReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_EXERCISES":
            return {
                ...state,
                exercises: action.payload
            }
        case "UPDATE_USER_INPUT":
            return {
                ...state,
                exerciseInput: action.payload
            }
        default:
            return state
    }
}