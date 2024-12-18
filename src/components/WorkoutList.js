import React, { useEffect, useState } from "react";
import store from "../workoutStore";

const WorkoutList = () => {
  const [workouts, setWorkouts] = useState(store.getState().workout.workouts);
  const [filter, setFilter] = useState(store.getState().filter.workoutFilter);

  useEffect(() => {
    store.subscribe(() => {
        setWorkouts(store.getState().workout.workouts);
        setFilter(store.getState().filter.workoutFilter);
      }
    );
  }, []);

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
