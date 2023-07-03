import React from "react";
import { Route, Routes } from "react-router-dom";
import ExerciseForm from "./ExerciseForm";
import ExerciseList from "./ExerciseList";

const CreateWorkout = () => {
    return (
        <Routes>
            <Route exact path="/createworkout" element={<ExerciseList />} />
            <Route path="/createworkout/form" element={<ExerciseForm />} />
        </Routes>
    );
};

export default CreateWorkout;