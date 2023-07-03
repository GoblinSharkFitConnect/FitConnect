import React from "react";
import { useNavigate } from "react-router";

const WorkoutForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      name: e.target.name.value,
      goals: e.target.goals.value,
      completed: e.target.completed.value,
      day: e.target.day.value,
    };
    fetch("/api/workout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    }).then((res) => {
      if (res.ok) {
        navigate("/myworkouts");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Workout Name"></input>
      <input name="goals" type="text" placeholder="Goals"></input>
      <input
        name="completed"
        type="boolean"
        placeholder="Completed? (True/False)"
      ></input>
      <input name="day" type="date" placeholder="Date"></input>
      <input type="submit" value="Done"></input>
    </form>
  );
};

export default WorkoutForm;