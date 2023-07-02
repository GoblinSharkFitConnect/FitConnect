import React from "react";
import { useState, useEffect} from 'react';
import Workout from "./Workout";


const Dashboard = () => {

    const [workoutList, setWorkoutList] = useState([]);



    return (
        <div>
            <p>This is the dashboard.</p>
            {workoutList}
        </div>
    )
};

export default Dashboard;