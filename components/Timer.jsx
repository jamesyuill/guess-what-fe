import React, { useEffect, useState } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  let timer;

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);

      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <div>
      <h1>Timer</h1>
      <h1>
        {String(minutes).length < 2 && 0}
        {minutes}:{String(seconds).length < 2 && 0}
        {seconds}
      </h1>
    </div>
  );
}
