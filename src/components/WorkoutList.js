import React, { useEffect, useState } from "react";
import store from "../workoutStore";

const WorkoutList = () => {
  const [workouts, setWorkouts] = useState(store.getState().workouts);
  const [filter, setFilter] = useState(store.getState().workoutFilter);

  useEffect(() => {
    store.subscribe(() => {
        setWorkouts(store.getState().workouts);
        setFilter(store.getState().workoutFilter);
      }
    );
  }, [workouts]);

  const filteredWorkouts = filter === 'All' ?
  workouts :
  workouts.filter(workout => workout.type === filter);

  return (
    <ul>
      {filteredWorkouts.map((workout) => (
        <li key={workout.id}>
          {workout.date} - {workout.type}: {workout.duration} mins,{" "}
          {workout.calories} calories
        </li>
      ))}
    </ul>
  );
};

export default WorkoutList;
