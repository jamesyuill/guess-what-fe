import React, { useEffect, useState } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  let timer;

  useEffect(() => {
    if (isPlaying) {
      timer = setInterval(() => {
        setSeconds(seconds + 1);

        if (seconds === 59) {
          setMinutes(minutes + 1);
          setSeconds(0);
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  });
  function handletimer() {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  }

  const restart = () => {
    setSeconds(0);
    setMinutes(0);
  };

  return (
    <div>
      <h1>Timer</h1>
      <h1>
        {String(minutes).length < 2 && 0}
        {minutes}:{String(seconds).length < 2 && 0}
        {seconds}
      </h1>
      <button className="stopstart" onClick={handletimer}>
        {" "}
        Stop{" "}
      </button>

      <button className="stopstart" onClick={restart}>
        Restart
      </button>
    </div>
  );
}
