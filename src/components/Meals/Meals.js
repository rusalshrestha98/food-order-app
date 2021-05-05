// responsible for rendering the AvailableMeals.js and MealsSummary.js files
import { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
    return <Fragment>
        <MealsSummary />
        <AvailableMeals />
    </Fragment>
};

export default Meals;