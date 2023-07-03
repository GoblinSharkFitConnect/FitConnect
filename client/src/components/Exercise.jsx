import React from 'react';

const Exercise = ({data}) => {
  const {name, sets, reps, rest} = data;
  return (
    <div class='Exercise'>
      <h3>{name}</h3>
      <p>Sets: {sets}</p>
      <p>Reps: {reps}</p>
      <p>Rest: {rest}</p>
    </div>
  );
};

export default Exercise;
