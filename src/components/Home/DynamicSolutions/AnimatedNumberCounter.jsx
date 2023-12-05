import React, { useEffect, useState } from "react";

const AnimatedNumberCounter = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const stepDuration = 20; // Duration between steps in milliseconds
    const totalSteps = Math.ceil(1000 / stepDuration); // Number of steps to reach the target value
    const remainingDifference = value - count;

    const calculateStep = (difference, stepsLeft) => {
      return Math.ceil(difference / stepsLeft);
    };

    const interval = setInterval(() => {
      setCount((prevCount) => {
        const stepsLeft = Math.ceil((value - prevCount) / calculateStep(remainingDifference, totalSteps));
        const step = calculateStep(remainingDifference, stepsLeft);
        const newCount = prevCount + step <= value ? prevCount + step : value;
        return newCount;
      });
    }, stepDuration);

    return () => clearInterval(interval);
  }, [value]);

  return <span className="text-brandPrimary text-3xl font-bold">{count}</span>;
};

export default AnimatedNumberCounter;
