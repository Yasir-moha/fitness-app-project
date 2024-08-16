import React, { useState } from 'react';
import './ExerciseForm.css';

const ExerciseForm = ({ addExercise }) => {
  const [name, setName] = useState('');
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);
  const [exercises, setExercises] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExercise = {
      id: Math.random(), 
      name,
      sets,
      reps,
      weight,
    };
    addExercise(newExercise);
    setExercises([...exercises, newExercise]);
    setName('');
    setSets(0);
    setReps(0);
    setWeight(0);
  };

  return (
    <div className="exercise-form-page">
      <form className="exercise-form" onSubmit={handleSubmit}>
        <h2>Add New Exercise</h2>
        <label>Exercise Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Sets:</label>
        <input
          type="number"
          value={sets}
          onChange={(e) => setSets(parseInt(e.target.value))}
          required
        />
        <label>Reps:</label>
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(parseInt(e.target.value))}
          required
        />
        <label>Weight (optional):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(parseFloat(e.target.value))}
        />
        <button type="submit">Add Exercise</button>
      </form>
      <div className="exercise-list">
        <h3>Added Exercises</h3>
        <ul>
          {exercises.map((exercise) => (
            <li key={exercise.id}>
              <strong>{exercise.name}</strong>: {exercise.sets} sets x {exercise.reps} reps {exercise.weight && `- ${exercise.weight} kg`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExerciseForm;