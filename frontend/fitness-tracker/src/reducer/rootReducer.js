import { combineReducers } from "redux";
import { goalReducer } from "./goalReducer";
import { foodReducer } from "./foodReducer";
import { exerciseReducer } from "./exerciseReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
    goalState: goalReducer,
    foodState: foodReducer,
    exerciseState: exerciseReducer,
    userState: userReducer
})

export default rootReducer