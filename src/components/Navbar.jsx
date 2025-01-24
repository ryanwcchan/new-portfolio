import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    if (savedTheme) {
      setTheme(savedTheme);

      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  function toggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
  return (
    <nav className="flex justify-between p-10 sticky top-0 z-10 navbar">
      <div className="flex items-center gap-4">
        <Link to={"/"}>
          <div className="border-2 border-white dark:border-800">
            <img
              src="logo-cropped.png"
              alt="logo"
              className="w-10 h-10 object-cover"
            />
          </div>
        </Link>
        <Link to={"/"}>
          <div className="text-2xl underline-animation">Ryan Chan</div>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <ul className="flex gap-6 text-2xl ">
          <Link to="/">
            <li className="underline-animation">Home</li>
          </Link>
          <Link to="/projects">
            <li className="underline-animation">Projects</li>
          </Link>
          <Link to="/contact">
            <li className="underline-animation">Contact</li>
          </Link>
        </ul>
        <button onClick={toggleTheme} className="px-4 w-10">
          <i
            className={`text-4xl ${
              theme === "dark" ? "fa-regular fa-moon" : "fa-regular fa-sun"
            }`}
          ></i>
        </button>
      </div>
    </nav>
  );
}
