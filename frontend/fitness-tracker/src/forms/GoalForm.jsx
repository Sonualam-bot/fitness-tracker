import { useDispatch, useSelector } from "react-redux"
import { getGoals } from "../utils/goals.utils"
import { updateGoalInput } from "../actions/goalAction"
import { createGoals } from "../services/goals.services"

//css
import "../Css/Exercise.css"
import toast from "react-hot-toast"

export const GoalForm = ({ isOpen, onClose }) => {
    const goalInput = useSelector(state => state.goalState.goalInput)
    const user = useSelector((state) => state.userState.user)
    const dispatch = useDispatch()

    const handleGoalInput = (e) => {
        const { name, value } = e.target;
        dispatch(updateGoalInput({ ...goalInput, [name]: value }))
    }

    const handleGoalFormSubmit = async (e) => {
        e.preventDefault()
        try {
            const submit = await createGoals({ ...goalInput, user: user._id })
            if (submit) {
                getGoals(dispatch, user._id)
                dispatch(updateGoalInput({
                    goalName: "",
                    goalDescription: "",
                    targetDate: "",
                    targetCaloriesValue: "",
                    status: ""
                }))
                toast.success("New Goal Updated")
            }
        } catch (error) {
            throw new Error(`${error.message}`)
        }
    }

    const modalStyle = {
        display: isOpen ? "block" : "none",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1000,
    };

    const modalContentStyle = {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#21222D",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
        width: "300px",
    };

    const formStyle = {
        display: "flex",
        flexDirection: "column",

    };

    const inputStyle = {
        margin: "5px 0",
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        backgroundColor: "#21222D",
        width: "100%",
    };



    const buttonStyle = {
        margin: "10px 0",
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        width: "100%",
    };

    const deleteButtonStyle = {
        margin: "10px 0",
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "#dc2626",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        fontWeight: "600",
        width: "100%",
    };


    const statusOfExercise = ["In Progress", "Achieved", "Abandoned"]


    return (
        <>
            <div style={modalStyle}>
                <div style={modalContentStyle}>
                    <h2>Add Goal</h2>

                    <form style={formStyle} onSubmit={handleGoalFormSubmit} >
                        <input style={inputStyle}
                            placeholder="Enter goal name"
                            value={goalInput?.goalName}
                            name="goalName" onChange={handleGoalInput}
                        />


                        <input style={inputStyle}
                            placeholder="Enter goal description"
                            value={goalInput?.goalDescription} name="goalDescription"
                            onChange={handleGoalInput}
                        />


                        <input style={inputStyle} placeholder="Enter goal targetDate" type="date"
                            value={goalInput?.targetDate} name="targetDate"
                            onChange={handleGoalInput}

                        />


                        <input style={inputStyle} placeholder="Enter goal calories value"
                            value={goalInput?.targetCaloriesValue} name="targetCaloriesValue"
                            onChange={handleGoalInput}

                        />


                        {/* <input style={inputStyle} placeholder="Enter goal status" value={goalInput?.status} name="status"
                            onChange={handleGoalInput}

                        /> */}
                        <select style={inputStyle} value={goalInput?.status} name="status" onChange={handleGoalInput}>
                            <option>Select</option>
                            {statusOfExercise?.map((type) => {
                                return (
                                    <>
                                        <option className="exerciseList" key={type} value={type} >{type}</option>
                                        <hr />
                                    </>
                                )
                            })}
                        </select>

                        <button style={buttonStyle} type="submit">
                            Submit
                        </button>
                        <button style={deleteButtonStyle}
                            onClick={onClose}>
                            Close
                        </button>
                    </form>

                </div>

            </div>

        </>
    )
}

