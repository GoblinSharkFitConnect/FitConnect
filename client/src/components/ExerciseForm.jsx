import React from "react";
import { useNavigate } from "react-router";

const ExerciseForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('')
  const [sets, setSets] = useState(0)
  const [reps, setReps] = useState(0)
  const [rest, setRest] = useState(0)
  const [intervals, setIntervals] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = { name, sets, reps, rest, intervals };
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
        <input onChange={e => setName(e.target.value)} name="name" type="text" placeholder="Exercise Name"></input>
        <input onChange={e => setSets(e.target.value)} name="sets" type="number" placeholder="Number of Sets"></input>
        <input onChange={e => setReps(e.target.value)} name="reps" type="number" placeholder="Number of Reps per Set"></input>
        <input onChange={e => setRest(e.target.value)} name="rest" type="number" placeholder="Minutes of Rest"></input>
        <input onChange={e => setIntervals(e.target.value)} name="intervals" type="number" placeholder="Number of Intervals/Time"></input>
        <input type="submit" value="Done"></input>
      </form>
    </>
  );
};

export default ExerciseForm;