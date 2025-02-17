import { FaTimes, FaGithub } from "react-icons/fa";
import { useState } from "react";
import "../styles/popup.scss";

const Popup = () => {
    const [isOpen, setIsOpen] = useState(true);
    if (!isOpen) return null;

    return (
        <div className="donation-popup">
            <button className="close-button" onClick={() => setIsOpen(false)}>
                <FaTimes />
            </button>
            <div className="popup-content">
                <p>Support my work!</p>
                <div className="popup-buttons">
                    <a
                        href="https://ko-fi.com/gonzyui"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="donate-button"
                    >
                        Donate
                    </a>
                    <a
                        href="https://github.com/gonzyui"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="star-button"
                    >
                        <FaGithub size={20} /> Star on GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Popup;
