import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ durationInMinutes,stopTimerCondition }) => {
  const initialDuration = durationInMinutes * 60;
  const [timer, setTimer] = useState(localStorage.getItem('currentTime')? JSON.parse(localStorage.getItem('currentTime')) : initialDuration);
  const [timerRunning, setTimerRunning] = useState(true);

  useEffect(() => {
    if (timerRunning && timer > 0 && !stopTimerCondition) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => Math.max(prevTimer - 1, 0));
      }, 1000);
      localStorage.setItem('currentTime',JSON.stringify(timer));
      return () => {
        clearInterval(interval);
        if (timer === 0) {
          setTimerRunning(false);
 // Callback function when the timer ends
        }
      };
    }
    else if(stopTimerCondition){
        setTimerRunning(false);
        localStorage.removeItem('currentTime')
    }
  }, [timerRunning, timer,stopTimerCondition]);

  return (
    <div>
      {timerRunning && <h4>{formatTime(timer)}</h4>}
    </div>
  );
};

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

export default CountdownTimer;
