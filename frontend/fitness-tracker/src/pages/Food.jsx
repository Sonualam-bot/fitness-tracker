import { useDispatch, useSelector } from "react-redux"
import "../Css/Food.css"
import { FoodForm } from "../forms/FoodForm"
import { updateDeleteFood } from "../utils/food.utils"
import { useState } from "react"

//images
import calorie from "../assets/smallcalorie.png";
import protein from "../assets/steak.png";
import carbs from "../assets/carbohydrates.png";
import fat from "../assets/cartoon.png"


export const Food = () => {
    const data = useSelector(state => state.foodState.foods)
    const dispatch = useDispatch()

    const [isFoodMoalOpen, setIsFoodModalOpen] = useState(false);

    const openModal = () => {
        setIsFoodModalOpen(true);
    };

    const closeModal = () => {
        setIsFoodModalOpen(false);
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
        marginBottom: "5px",
        borderRadius: "5px",
        backgroundColor: "#dc2626",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        fontWeight: "600",
        width: "150px"
    };


    return (
        <div className="foodContainer-parent">
            <h1>Sorting Diet </h1>
            <div className="foodline"></div>
            <button style={buttonStyle} onClick={openModal}>Add Diet</button>
            <div>
                <div className="card-parent">
                    {
                        data?.map((exercise, index) => {
                            const { _id, foodName, imageUrl, calories, proteinGrams, carbohydratesGrams, fatGrams } = exercise;
                            return (
                                <div className="foodCard" key={index} >
                                    <img src={imageUrl} alt="food" />
                                    <div className="foodDetails">
                                        <h2>{foodName} </h2>
                                        <div className="foodSpecial" >
                                            <p className="foodInline" > <img src={calorie} alt="calorie" /> {calories} kcal</p>
                                            <p className="foodInline" > <img src={protein} alt="protein" /> {proteinGrams}g</p>
                                            <p className="foodInline" > <img src={carbs} alt="carbs" /> {carbohydratesGrams}g</p>
                                            <p className="foodInline" > <img src={fat} alt="fat" /> {fatGrams}g</p>
                                        </div>
                                        {/* <div className="foodSpecial" >                                      
                                        </div> */}
                                        <button style={deleteButtonStyle} onClick={() => updateDeleteFood(dispatch, _id)} >Delete</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <FoodForm isOpen={isFoodMoalOpen} onClose={closeModal} />
                </div>
            </div>
        </div >
    )
}