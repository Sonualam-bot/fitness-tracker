import { useDispatch, useSelector } from "react-redux"
import { GoalForm } from "../forms/GoalForm";
import { updateDeleteGoal } from "../utils/goals.utils";
import { useState } from "react";

import "../Css/Goal.css"

export const Goal = () => {
    const data = useSelector(state => state.goalState.goals)
    const dispatch = useDispatch()

    const [isGoalMoalOpen, setIsGoalModalOpen] = useState(false);

    const openModal = () => {
        setIsGoalModalOpen(true);
    };

    const closeModal = () => {
        setIsGoalModalOpen(false);
    };

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "2-digit" };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const buttonStyle = {
        margin: "10px 0",
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        fontWeight: "600",
        width: "200px",
    };

    const deleteButtonStyle = {
        margin: "10px 0",
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "#dc2626",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        fontWeight: "600"
    };


    return (
        <div className="goalContainer-parent">
            <div>
                <h1>Goal</h1>
                <div className="goalline"></div>
            </div>
            <button style={buttonStyle} onClick={openModal}>Add Goal</button>
            <div>
                <div className="card-parent">
                    {
                        data?.map((goal, index) => {
                            const { _id, goalName, goalDescription, targetDate, targetCaloriesValue, status } = goal;
                            return (
                                <div className="goalCard" key={index} >
                                    <u><h1>{goalName} </h1></u>
                                    <p>{goalDescription}</p>
                                    <p>Target Date: {formatDate(targetDate)}</p>
                                    <p>Target Calories Value: {targetCaloriesValue}</p>
                                    <p>Status: {status}</p>
                                    <button style={deleteButtonStyle} onClick={() => updateDeleteGoal(dispatch, _id)} >Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <GoalForm isOpen={isGoalMoalOpen} onClose={closeModal} />
                </div>
            </div>
        </div>
    )
}