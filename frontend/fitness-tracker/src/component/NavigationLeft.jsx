import { NavLink } from "react-router-dom"
import "../Css/NavigationLeft.css"

import { FaHome } from "react-icons/fa"
import { GiWeightLiftingUp } from "react-icons/gi"
import { GoGoal } from "react-icons/go"
import { GiFruitBowl } from "react-icons/gi"

export const NavigationLeft = () => {
    return (
        <>

            <div className="navigationPanel">
                <NavLink className="navlink" to="/" > <FaHome /> </NavLink>
                <NavLink className="navlink" to="/exercise"> <GiWeightLiftingUp /> </NavLink>
                <NavLink className="navlink" to="/food" ><GiFruitBowl /> </NavLink>
                <NavLink className="navlink" to="/goal" > <GoGoal />  </NavLink>
            </div>

        </>
    )
}