import React from 'react'

const HourMinSecClock = () => {
  const getTime = () => {
    return (new Date()).toLocaleTimeString();
  }

  return (
    <div>
      <div>Current Time:</div>
      <h3>{getTime()}</h3>
    </div>
  );
}

export default HourMinSecClock;
