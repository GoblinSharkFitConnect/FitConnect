import React from 'react';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router';
import ExerciseList from './ExerciseList.jsx';
import WorkoutForm from './WorkoutForm.jsx';
import ExerciseForm from './ExerciseForm.jsx';

const Workout = (props) => {
  const [formOpen, setFormOpen] = useState(false);
  const completeDate = new Date(props.data.day).toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/exerciseform');
  };

  const [exerciseList, setExerciseList] = useState([]);

  // useEffect to grab the exercise list for a user from the backend
  useEffect(() => {
    async function fetchExerciseList() {
      const response = await fetch(`/api/exercise?workout_id=${props.data.id}`);
      const data = await response.json();
      console.log(data);
      const newExerciseList = data.map((info) => (
        <Exercise key={info.id} data={info} />
      ));
      setExerciseList(newExerciseList);
    }

    fetchExerciseList();
  }, []);

  return (
    <div>
      <h3>{props.data.name}</h3>
      <p>goals: {props.data.goal}</p>
      <p>day: {completeDate}</p>
      <p>completed: {props.data.complete ? 'true' : 'false'}</p>
      {exerciseList}
      <button onClick={() => setFormOpen(!formOpen)}>Add Exercise</button>
      {formOpen && <ExerciseForm workout_id={props.data.id} />}
    </div>
  );
};

export default Workout;
