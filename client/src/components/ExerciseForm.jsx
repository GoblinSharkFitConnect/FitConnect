import React from "react";
import { useNavigate } from "react-router";

const ExerciseForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      name: e.target.name.value,
      sets: e.target.sets.value,
      reps: e.target.reps.value,
      rest: e.target.rest.value,
      intervals: e.target.intervals.value,
    };
    fetch("/api/exercise", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    }).then((res) => {
      if (res.ok) {
        navigate("/createworkout");
      }
    });
  };

  return (
    <>
      <h2>Create Exercise</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Exercise Name"></input>
        <input name="sets" type="number" placeholder="Number of Sets"></input>
        <input
          name="reps"
          type="number"
          placeholder="Number of Reps per Set"
        ></input>
        <input name="rest" type="number" placeholder="Minutes of Rest"></input>
        <input
          name="intervals"
          type="number"
          placeholder="Number of Intervals/Time"
        ></input>
        <input type="submit" value="Done"></input>
      </form>
    </>
  );
};

export default ExerciseForm;