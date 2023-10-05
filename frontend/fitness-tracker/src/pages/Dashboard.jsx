import { useSelector } from "react-redux"
import { Card, Container } from "../styled component/DashCard.styled";

import "../Css/Header.css"


//assets
import totalCalorie from "../assets/totalcalorie.png"
import food from "../assets/dinner.png"
import remainingTime from "../assets/hourglass.png"
import goal from "../assets/target.png"
import BarChart from "../chart/EChart";
import EChartPieComponent from "../chart/EChart";

export const Dashboard = () => {
    const caloriesBurned = useSelector(state => state.exerciseState.exercises);
    const caloriesConsumed = useSelector(state => state.foodState.foods);
    const caloriesGoal = useSelector(state => state.goalState.goals)


    const totalCaloriesBurned = caloriesBurned?.reduce((acc, curr) => acc + curr?.caloriesBurned, 0);

    const totalCaloriesConsumed = caloriesConsumed?.reduce((acc, curr) => acc + curr?.calories, 0);
    console.log(totalCaloriesConsumed)
    const totalCaloriesGoal = caloriesGoal?.reduce((acc, curr) => acc + curr?.targetCaloriesValue, 0);
    console.log(totalCaloriesGoal)

    const totalCaloriesRemaining = totalCaloriesGoal - (totalCaloriesConsumed - totalCaloriesBurned);


    const calorieData = [
        { value: totalCaloriesBurned, name: "Calories Burned", textColor: "red" },
        { value: totalCaloriesGoal, name: "Calories Goal", textColor: "green" },
        { value: totalCaloriesConsumed, name: "Calories Consumed", textColor: "blue" },
        { value: totalCaloriesRemaining, name: "Remaining Calories to Goal", textColor: "purple" },
    ];


    return (
        <div className="dashContainer-parent">
            <h1 className="h1">Welcome to the fitness Tracker Dashboard</h1>
            <div className="dashline"></div>
            <div>
                <Container>
                    <Card>
                        <img src={totalCalorie} alt="totalCalorie" />
                        <h3>{totalCaloriesBurned ? totalCaloriesBurned : 0}</h3>
                        <p> Burned</p>
                    </Card>
                    <Card>
                        <img src={food} alt="totalCalorie" />
                        <h3>{totalCaloriesConsumed ? totalCaloriesConsumed : 0}</h3>
                        <p> Consumed</p>
                    </Card>
                    <Card>
                        <img src={goal} alt="totalCalorie" />
                        <h3>{totalCaloriesGoal ? totalCaloriesGoal : 0}</h3>
                        <p> Goal</p>
                    </Card>
                    <Card>
                        <img src={remainingTime} alt="totalCalorie" />
                        <h3>{totalCaloriesRemaining ? totalCaloriesRemaining : 0}</h3>
                        <p> Remaining</p>
                    </Card>
                </Container>
            </div>
            <div className="chartDiv">
                <EChartPieComponent calorieData={calorieData} />
            </div>
        </div>
    )
}