import React, { useEffect, useState } from 'react';

function ThemeToggle() {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.body.className = dark ? "dark" : "light";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button className="toggle-btn" onClick={() => setDark(!dark)}>
      {dark ? "☀ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}

export default ThemeToggle;