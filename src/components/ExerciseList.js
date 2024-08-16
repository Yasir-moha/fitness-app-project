import React from 'react';
import './ExerciseList.css';

const ExerciseList = ({ exercises, onEdit, onDelete }) => {
  return (
    <div className="exercise-list">
      <h3>Your Exercises</h3>
      <ul>
        {exercises.map(exercise => (
          <li key={exercise.id}>
            <strong>{exercise.name}</strong><br />
            Sets: {exercise.sets} | Reps: {exercise.reps} | Weight: {exercise.weight} kg
            <div className="exercise-actions">
             
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseList;
