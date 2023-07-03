import React from "react";
import { useState, useEffect} from 'react';
import Workout from "./Workout.jsx";
import WorkoutForm from "./WorkoutForm.jsx"

const Dashboard = () => {

    const [workoutList, setWorkoutList] = useState([]);



    return (
        <div>
            <WorkoutForm />
            <p>This is the dashboard.</p>
            {workoutList}
        </div>
    )
};

export default Dashboard;