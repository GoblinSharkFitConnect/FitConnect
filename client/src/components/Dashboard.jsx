import React from 'react';
import {useState, useEffect} from 'react';
import Workout from './Workout.jsx';
import WorkoutForm from './WorkoutForm.jsx';

const Dashboard = () => {
  const [workoutList, setWorkoutList] = useState([]);

  const [memberId, setMemberId] = useState(8);
  //setWorkoutList(workoutList.concat())

  // useEffect to grab the workOut list for a user from the backend
  useEffect(() => {
    async function fetchWorkoutList() {
      const response = await fetch(`/api/workout?member_id=${memberId}`);
      const data = await response.json();
      const newWorkoutList = data.map((info) => (
        <Workout key={info.id} data={info} />
      ));
      setWorkoutList(newWorkoutList);
    }

    fetchWorkoutList();
  }, []);

  //   // to be used later to fetch the memberID with the correct session
  //   async function fetchMemberId() {
  //     try {
  //       const response = await fetch('/api/whatevertheroutetogetuser');
  //       const data = await response.json();
  //       return data.memberId;
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  return (
    <div>
      <p>This is the dashboard.</p>
      {workoutList}
    </div>
  );
};

export default Dashboard;
