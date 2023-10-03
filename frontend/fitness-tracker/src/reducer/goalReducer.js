const initialState = {
    goals: [],
    goalInput: {
        goalName: "",
        goalDescription: "",
        targetDate: "",
        targetCaloriesValue: "",
        status: ""
    }
}

export const goalReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_GOALS":
            return {
                ...state,
                goals: action.payload
            }

        case "UPDATE_GOAL_INPUT":
            return {
                ...state,
                goalInput: action.payload
            }

        default:
            return state;
    }
}