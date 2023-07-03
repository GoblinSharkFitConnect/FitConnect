import React, { useState } from "react";
import { useNavigate } from "react-router";

const WorkoutForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');
  const [complete, setComplete] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      name,
      goal,
      complete,
      day: e.target.day.value,
    };
    fetch("/api/workout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    }).then((res) => {
      if (res.ok) {
        navigate("/dashboard");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={e => setName(e.target.value)} name="name" type="text" placeholder="Workout Name"></input>
      <input onChange={e => setGoal(e.target.value)} name="goals" type="text" placeholder="Goals"></input>
      <label htmlFor="completed">completed: </label>
      <input onChange={e => setComplete((prevComplete) => !prevComplete)} name="completed" type="checkbox"></input>
      <input name="day" type="date" placeholder="Date"></input>
      <input type="submit" value="Done"></input>
    </form>
  );
};

export default WorkoutForm;