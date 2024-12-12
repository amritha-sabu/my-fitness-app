import React from "react";

const WorkoutList = ({ workouts }) => {
  return (
    <ul>
      {workouts.map((workout) => (
        <li key={workout.id}>
          {workout.date} - {workout.type}: {workout.duration} mins,{" "}
          {workout.calories} calories
        </li>
      ))}
    </ul>
  );
};

export default WorkoutList;
