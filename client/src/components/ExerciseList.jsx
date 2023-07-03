import React from 'react';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router';
import Exercise from './Exercise.jsx';
import WorkoutForm from './WorkoutForm.jsx';

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);

  // useEffect hook: fetch the array of exercises for this workout
  useEffect(() => {
    // There should be a string literal specifying exercise ID.
    // Not sure where I should be getting the ID from, though.
    fetch('/api/exercise', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
      .then((res) => res.json())
      .then((data) => {
        setExercises(data);
      })
      .catch((err) =>
        console.log('ExerciseList.jsx ERROR: fetch for exercise failed ', err)
      );
  }, [exercises]);

  // making a wild guess right now about how the data will come back about the exercises lol :)
  // const numberOfExercises = Object.keys(exercises).length;
  // dummy data
  const numberOfExercises = 3;
  const exerciseArr = new Array(numberOfExercises);
  // populate an array of Exercise objects, each containing an Exercise
  for (let i = 0; i < numberOfExercises; i++) {
    // um, I'm feeling like data={data[i]} is the wrong way to access the data for one exercise
    // exerciseArr[i] = <Exercise data={data[i]} />;
    // here is some dummy data
    const data = {
      name: 'Squats',
      sets: 3,
      reps: 10,
      rest: 5,
      intervals: 5,
    };
    exerciseArr[i] = <Exercise data={data} />;
  }

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/createworkout/form');
  };
  return (
    <>
      <h2>Create Workout</h2>
      {exerciseArr}
      <button onClick={handleClick}>Add Exercise</button>
      <WorkoutForm />
    </>
  );
};

export default ExerciseList;
