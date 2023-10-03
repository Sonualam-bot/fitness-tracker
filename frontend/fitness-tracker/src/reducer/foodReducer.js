const initialState = {
    foods: [],
    foodInput: {
        foodName: "",
        calories: "",
        proteinGrams: "",
        carbohydratesGrams: "",
        fatGrams: ""
    }
}

export const foodReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_FOODS":
            return {
                ...state,
                foods: action.payload
            }
        case "UPDATE_FOOD_INPUT":
            return {
                ...state,
                foodInput: action.payload
            }
        default:
            return state;
    }
}