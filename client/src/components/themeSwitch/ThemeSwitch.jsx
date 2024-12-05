import { FaSun, FaMoon } from "react-icons/fa";
import "./ThemeSwitch.css";
import { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState(() => {
    // Check user device theme and localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    } else {
      return window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <label className="theme-switch" htmlFor="theme-toggle">
      <input
        type="checkbox"
        id="theme-toggle"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      <span className="slider">
        <FaMoon className="icon" />
        <FaSun className="icon" />
      </span>
    </label>
  );
};

export default ThemeSwitch;
