import React, { useState } from "react";

function App() {
  const startingTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(startingTime);
  function getTime() {
    const currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  }
  setInterval(getTime, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
    </div>
  );
}

export default App;
