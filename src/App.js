import { useState, useEffect } from "react";
import "./App.css";

function Timer() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 59) {
          setMinutes((prevMinutes) => prevMinutes + 1);
          setSeconds(0);
        } else {
          setSeconds((prevSeconds) => prevSeconds + 1);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div className="timer">
      <div className="timer_container">
        <h1>Timer</h1>
        <h2>{`${minutes < 10 ? "0" + minutes : minutes}:${
          seconds < 10 ? "0" + seconds : seconds
        }`}</h2>
        <div className="buttons">
          {!isActive ? (
            <button className="start" onClick={startTimer}>
              Start
            </button>
          ) : (
            <button className="stop" onClick={stopTimer}>
              Stop
            </button>
          )}
          <button className="reset" onClick={resetTimer}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
