import { useEffect, useState, useRef } from "react";

const Timer = () => {
  const [sec, setSec] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const time = useRef<number>(0);

  useEffect(() => {
    if (isRunning) {
      time.current = setInterval(() => {
        setSec((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(time.current);
    }

    return () => {
      clearInterval(time.current);
    };
  });

  function handleStart() {
    // setIsRunning(true);
    setIsRunning(!isRunning);
  }

  function handleStop() {
    setIsRunning(!isRunning);
    clearInterval(time.current);
  }

  function handleReset() {
    clearInterval(time.current);
    setIsRunning(false);
    setSec(0);
  }

  return (
    <div>
      <h2>{sec}</h2>
      <button onClick={handleStart} disabled={sec > 0}>
        Start
      </button>
      <button onClick={handleStop} disabled={sec == 0}>
        {isRunning ? "Pause" : "Resume"}
      </button>
      <button onClick={handleReset} disabled={sec == 0}>
        Reset
      </button>
    </div>
  );
};

export default Timer;
