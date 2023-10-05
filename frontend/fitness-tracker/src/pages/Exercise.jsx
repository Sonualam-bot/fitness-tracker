import { useDispatch, useSelector } from "react-redux"
import "../Css/Exercise.css"
import { ExerciseForm } from "../forms/ExerciseForm"
import { getUpdatedData } from "../utils/exercise.utils"
import { useState } from "react"

import stopwatch from "../assets/stopwatch.png"
import smallcalorie from "../assets/smallcalorie.png"

export const Exercise = () => {
    const data = useSelector(state => state.exerciseState.exercises)
    const dispatch = useDispatch()


    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
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

        <div className="exerciseContainer-parent">

            <div>
                <h1>Exercise</h1>
                <div className="yellow-line"></div>
            </div>

            <button style={buttonStyle} onClick={openModal}>Add Exercise</button>

            <div>
                <div className="card-parent">
                    {
                        data?.map((exercise, index) => {
                            const { _id, exerciseName, durationMinutes, caloriesBurned, imageUrl } = exercise;
                            return (
                                <div className="exerciseCard" key={index} >
                                    <img src={imageUrl} alt="exercise" />
                                    <div className="cardMid" >
                                        <h2>{exerciseName} </h2>
                                        <div className="exerciseDetails" >
                                            <p className="exerciseSpecial"> <img src={stopwatch} alt="watch" />{durationMinutes}</p>
                                            <p className="exerciseSpecial"> <img src={smallcalorie} alt="calorie" /> {caloriesBurned}</p>
                                        </div>
                                        <button style={deleteButtonStyle} onClick={() => getUpdatedData(dispatch, _id)} >Delete</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div>

                    <ExerciseForm isOpen={isModalOpen} onClose={closeModal} />
                </div>

            </div>
        </div>
    )
}