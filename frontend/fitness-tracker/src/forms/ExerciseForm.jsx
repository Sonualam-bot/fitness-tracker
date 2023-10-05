import { useDispatch, useSelector } from "react-redux";
import { updateUserInput } from "../actions/exerciseAction";
import { createNewExercise } from "../services/exercise.services";
import { getExercises } from "../utils/exercise.utils";

//css
import "../Css/Exercise.css"
import toast from "react-hot-toast";

export const ExerciseForm = ({ isOpen, onClose }) => {
    const input = useSelector((state) => state.exerciseState.exerciseInput);
    const user = useSelector((state) => state.userState.user)
    const dispatch = useDispatch();

    const handleUserInput = (e) => {
        const { name, value } = e.target;
        dispatch(updateUserInput({ ...input, [name]: value }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const submit = await createNewExercise({ ...input, user: user._id });
            if (submit) {
                getExercises(dispatch, user._id);
                dispatch(updateUserInput({ exerciseName: "", durationMinutes: "" }));
                onClose();
                toast.success("New Exercise added")
            }
        } catch (error) {
            throw new Error(`${error.message}`);
        }
    };

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


    const variousExercises = ['Running', 'Cycling', 'Swimming', 'Jumping Rope', 'Yoga', 'Hiking', 'Weightlifting', 'Rowing', 'Boxing', 'Dancing', 'Climbing']



    return (
        <div style={modalStyle}>
            <div style={modalContentStyle}>
                <h2>Add Exercise</h2>
                <form style={formStyle} onSubmit={handleFormSubmit}>

                    <select style={inputStyle} value={input?.exerciseName} name="exerciseName" onChange={handleUserInput} >
                        <option>Select Exercise Name</option>
                        {variousExercises?.map((exercises, index) => {
                            return (

                                <option className="exerciseList" key={index} value={exercises} >{exercises} </option>


                            )
                        })}
                    </select>

                    <input
                        style={inputStyle}
                        placeholder="Duration (Minutes)"
                        value={input?.durationMinutes}
                        name="durationMinutes"
                        onChange={handleUserInput}
                    />
                    <button style={buttonStyle} type="submit">
                        Submit
                    </button>
                    <button style={deleteButtonStyle} onClick={onClose}>
                        Close
                    </button>
                </form>
            </div>
        </div>
    );
};
