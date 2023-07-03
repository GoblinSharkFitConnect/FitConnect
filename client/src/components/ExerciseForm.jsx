import React, {useState} from 'react';
import {useNavigate} from 'react-router';

const ExerciseForm = (props) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [rest, setRest] = useState(0);
  // const [intervals, setIntervals] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {workout_id: props.workout_id, name, sets, reps, rest};
    fetch('/api/exercise', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(obj),
    }).then((res) => {
      if (res.ok) {
        navigate('/dashboard');
      }
    });
  };

  return (
    <>
      <h2>Create Exercise</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>name: </label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          name='name'
          type='text'
          placeholder='Exercise Name'
        ></input>
        <label htmlFor='sets'>sets: </label>
        <input
          onChange={(e) => setSets(e.target.value)}
          value={sets}
          name='sets'
          type='text'
          placeholder='Number of Sets'
        ></input>
        <label htmlFor='reps'>reps: </label>
        <input
          onChange={(e) => setReps(e.target.value)}
          value={reps}
          name='reps'
          type='text'
          placeholder='Number of Reps per Set'
        ></input>
        <label htmlFor='rest'>rest: </label>
        <input
          onChange={(e) => setRest(e.target.value)}
          value={rest}
          name='rest'
          type='text'
          placeholder='Minutes of Rest'
        ></input>
        {/* <input
          onChange={(e) => setIntervals(e.target.value)}
          value={intervals}
          name='intervals'
          type='number'
          placeholder='Number of Intervals/Time'
        ></input> */}
        <input type='submit' value='Done'></input>
      </form>
    </>
  );
};

export default ExerciseForm;
