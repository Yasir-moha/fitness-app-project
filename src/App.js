import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import SignupForm from './components/SignupForm';
import ExerciseForm from './components/ExerciseForm';
import ExerciseList from './components/ExerciseList';
import LandingPage from './components/LandingPage';

// Import CSS
import './App.css';

const App = () => {
  const [exercises, setExercises] = useState([]);
  const [editingExercise, setEditingExercise] = useState(null);

  const addExercise = (exercise) => {
    if (editingExercise) {
      setExercises(exercises.map(ex => ex.id === editingExercise.id ? exercise : ex));
      setEditingExercise(null);
    } else {
      setExercises([...exercises, exercise]);
    }
  };




  return (
    <Router>
      <div className="app-container">
        <div className="content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route
              path="/exercise-form"
              element={<ExerciseForm addExercise={addExercise}  />}
            />
            <Route
              path="/exercises"
              element={
                <div>
                  <h1 className="app-title">Welcome to Your Fitness Tracker</h1>
                  <ExerciseForm
                    addExercise={addExercise}
                  />
                  <ExerciseList
                    exercises={exercises}
                   
                  />
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;