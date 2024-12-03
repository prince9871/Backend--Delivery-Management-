import haversine from 'haversine';

export const calculateRouteDistance = (steps) => {
  let totalDistance = 0;

  // Loop through steps, skipping the first one
  steps.forEach((step, index) => {
    if (index === 0) return; // Skip first step

    const start = steps[index - 1].location; // Previous location
    const end = step.location; // Current location

    totalDistance += haversine(start, end); // Add distance
  });

  return totalDistance; // Return total distance
};

