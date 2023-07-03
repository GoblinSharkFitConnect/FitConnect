import React from 'react';
import Login from './components/Login.jsx';
import Homepage from './components/Homepage.jsx';
import Signup from './components/Signup.jsx';
import Dashboard from './components/Dashboard.jsx';
import {Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import CreateWorkout from './components/CreateWorkout.jsx';
import ExerciseForm from './components/ExerciseForm.jsx';

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/createworkout' element={<CreateWorkout />} />
        <Route path='/exerciseform' element={<ExerciseForm />} />
      </Routes>
    </div>
  );
};

export default App;
