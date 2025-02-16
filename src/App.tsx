import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState, useEffect } from "react";
import Home from "./pages/Home.tsx";

import "./styles/_global.scss";

function App() {
    const [darkMode, setDarkMode] = useState<boolean>(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    return (
        <div className={`github-profile ${darkMode ? "theme-dark" : ""}`}>
            <button onClick={() => setDarkMode((prev) => !prev)} className="theme-toggle-button">
                {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;