import React, { useEffect, useState } from 'react';

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function DigitalClock() {
  const [time, setTime] = useState(new Date());
  const [is24Hour, setIs24Hour] = useState(() => {
    return localStorage.getItem("clockFormat") === "24";
  });

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleFormat = () => {
    const newFormat = is24Hour ? "12" : "24";
    setIs24Hour(!is24Hour);
    localStorage.setItem("clockFormat", newFormat);
  };

  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    let ampm = "";

    if (!is24Hour) {
      ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
    }

    return {
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
      ampm,
    };
  };

  const { hours, minutes, seconds, ampm } = formatTime(time);
  const dayName = weekdays[time.getDay()];
  const dateString = time.toLocaleDateString();

  return (
    <div className="clock">
      <h1 className="time">{hours}:{minutes}:{seconds} {ampm}</h1>
      <p className="date">{dayName}, {dateString}</p>
      <button className="toggle-btn" onClick={toggleFormat}>Switch to {is24Hour ? "12" : "24"}-hour</button>
    </div>
  );
}

export default DigitalClock;