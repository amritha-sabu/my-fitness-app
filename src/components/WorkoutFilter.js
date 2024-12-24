import React, { useState } from "react";
import store from "../workoutStore";
import { SET_NEW_FILTER } from "../actions";

const WorkoutFilter = () => {
  const [selectedType, setSelectedType] = useState(store.getState().filter.WorkoutFilter);
  const filterTypes = ["All", "Running", "Cycling", "Swimming", "Yoga"]; // Single source of truth for filter types

  const handleFilterChange = (type) => {
    store.dispatch(SET_NEW_FILTER(type));
    setSelectedType(type);
    console.log(store.getState().filter.WorkoutFilter);
  };

  return (
    <div>
      <h3>Filter Workouts</h3>
      <div className="filter-list">
        {filterTypes.map((type) => (
          <button
            key={type}
            className={selectedType === type ? "selected" : ""}
            onClick={() => handleFilterChange(type)}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WorkoutFilter;
