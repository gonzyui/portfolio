import { SiBluesky, SiGithub } from "react-icons/si";
import { useEffect, useState } from "react";
import './footer.scss';

function Footer() {
    const [theme, setTheme] = useState<string>(localStorage.getItem("theme") || "light");

    const toggleTheme = (newTheme: string) => {
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <footer className="footer">
            <p>© 2025 gonzyui. All rights reserved.</p>
            <div className="footer-socials">
                <a href="https://github.com/gonzyui" target="_blank"><SiGithub /></a>
                <a href="https://bsky.app/profile/gonzyui.bsky.social" target="_blank"><SiBluesky /></a>
                <a href="https://github.com/gonzyui/portfolio">Source Code</a>
            </div>
            <div className="theme-lang-selector">
                <select onChange={(e) => toggleTheme(e.target.value)} value={theme}>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>
            </div>
        </footer>
    )
}

export default Footer;