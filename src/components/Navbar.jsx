import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
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

  function toggleMenu() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <nav className="flex justify-between p-10 fixed w-full top-0 z-10 navbar">
      <div className="flex items-center gap-4">
        <a href="#hero">
          <div className="border-2 border-white dark:border-800">
            <img
              src="logo-cropped.png"
              alt="logo"
              className="w-10 h-10 object-cover"
            />
          </div>
        </a>
        <a href="#hero">
          <div className="text-4xl font-bold underline-animation">
            Ryan Chan
          </div>
        </a>
      </div>

      {/* Desktop menu */}
      <div className="items-center gap-4 hidden md:flex">
        <ul className="flex gap-6 text-4xl">
          <a href="#skills">
            <li className="underline-animation">Skills</li>
          </a>
          <a href="#projects">
            <li className="underline-animation">Projects</li>
          </a>
          <a href="#contact">
            <li className="underline-animation">Contact</li>
          </a>
        </ul>
        <button onClick={toggleTheme} className="px-4 w-10">
          <i
            className={`text-4xl ${
              theme === "dark" ? "fa-regular fa-moon" : "fa-regular fa-sun"
            }`}
          ></i>
        </button>
      </div>

      <button onClick={toggleMenu} className="text-4xl md:hidden">
        ☰
      </button>

      {/* Background overlay */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black/50 z-40"
        ></div>
      )}

      {/* Mobile menu */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "translate-x-[150%]"
        } fixed top-0 right-0 h-screen bg-white dark:bg-gray-900 justify-center items-center w-full sm:w-2/3 z-50 ease-in-out duration-300`}
      >
        <div onClick={toggleMenu} className="bg-white w-16 m-4">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
          >
            <title>close</title>
            <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path>
          </svg>
        </div>
        <div className="flex flex-col gap-4 p-10">
          <ul className="flex flex-col gap-6 text-4xl">
            <a href="#skills">
              <li className="underline-animation">Skills</li>
            </a>
            <a href="#projects">
              <li className="underline-animation">Projects</li>
            </a>
            <a href="#contact">
              <li className="underline-animation">Contact</li>
            </a>
          </ul>
          <button
            onClick={toggleTheme}
            className="px-4 w-10 absolute bottom-[3rem]"
          >
            <i
              className={`text-4xl ${
                theme === "dark" ? "fa-regular fa-moon" : "fa-regular fa-sun"
              }`}
            ></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
