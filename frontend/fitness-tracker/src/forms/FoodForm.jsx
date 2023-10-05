import { useDispatch, useSelector } from "react-redux";
import { updateUserFoodInput } from "../actions/foodAction";
import { createFoodItem } from "../services/food.services";
import { getFoods } from "../utils/food.utils";
import toast from "react-hot-toast";

export const FoodForm = ({ isOpen, onClose }) => {
    const userInput = useSelector((state) => state.foodState.foodInput);
    const user = useSelector((state) => state.userState.user)
    const dispatch = useDispatch();

    const handleUserFoodInput = (e) => {
        const { name, value } = e.target;
        console.log({ ...userInput, [name]: value })
        dispatch(updateUserFoodInput({ ...userInput, [name]: value }));
    };

    const handleFoodFromSubmit = async (e) => {
        e.preventDefault();
        try {
            const submit = await createFoodItem({ ...userInput, user: user._id });
            if (submit) {
                getFoods(dispatch, user._id);
                dispatch(
                    updateUserFoodInput({
                        foodName: "",
                        calories: "",
                        proteinGrams: "",
                        carbohydratesGrams: "",
                        fatGrams: "",
                    })
                );
                onClose();
                toast.success("New Diet Updated")
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

    const foods = ["Oat Meal", "Nuts & Seeds", "Salmon", "Avacado", "Beans & Legumes", "Leafy Greens", "Muesli", "Eggs"]


    return (
        <div style={modalStyle}>
            <div style={modalContentStyle}>
                <h2>Add Food</h2>
                <form style={formStyle} onSubmit={handleFoodFromSubmit}>
                    {/* <input
                        style={inputStyle}
                        placeholder="Food Name"
                        value={userInput?.foodName}
                        name="foodName"
                        onChange={handleUserFoodInput}
                    /> */}
                    <select value={userInput?.foodName} name="foodName" onChange={handleUserFoodInput} style={inputStyle} >
                        <option>Select Item</option>
                        {foods?.map((food) => {
                            return (
                                <option value={food} key={food} >{food}</option>
                            )
                        })}
                    </select>
                    <input
                        style={inputStyle}
                        placeholder="Calories"
                        value={userInput?.calories}
                        name="calories"
                        onChange={handleUserFoodInput}
                    />
                    <input
                        style={inputStyle}
                        placeholder="Protein (grams)"
                        value={userInput?.proteinGrams}
                        name="proteinGrams"
                        onChange={handleUserFoodInput}
                    />
                    <input
                        style={inputStyle}
                        placeholder="carbohydrates (Grams)"
                        value={userInput?.carbohydratesGrams}
                        name="carbohydratesGrams"
                        onChange={handleUserFoodInput}
                    />
                    <input
                        style={inputStyle}
                        placeholder="Fat (grams)"
                        value={userInput?.fatGrams}
                        name="fatGrams"
                        onChange={handleUserFoodInput}
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
