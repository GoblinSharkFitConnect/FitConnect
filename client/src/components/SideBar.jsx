import React from "react";
import { useNavigate } from "react-router";

const SideBar = () => {
  
  const navigate = useNavigate();

  const navigateToCreateWorkout = () => {
    navigate('/workout');
  }

  const navigateToCompletedWorkouts = () => {

  }

  const navigateToDashboard = () => {
    navigate('/dashboard');
  }
  
  return (
    <div>
      <button onClick={navigateToCreateWorkout}>Create Workout</button>
      <button>Completed Workouts</button>
      <button onClick={navigateToDashboard}>Return to Dashboard</button>
    </div>
  )
}