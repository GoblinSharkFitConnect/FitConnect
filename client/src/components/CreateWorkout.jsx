import React from 'react';
// import {Route, Routes} from 'react-router-dom';
// import ExerciseForm from './ExerciseForm';
// import ExerciseList from './ExerciseList';
import WorkoutForm from './WorkoutForm';

const CreateWorkout = () => {
  return (
    // <Routes>
    //   <Route exact path='/createworkout' element={<ExerciseList />} />
    //   <Route path='/createworkout/form' element={<ExerciseForm />} />
    // </Routes>
    <>
      <h2>Create Workout</h2>
      <WorkoutForm />
    </>
  );
};

export default CreateWorkout;
