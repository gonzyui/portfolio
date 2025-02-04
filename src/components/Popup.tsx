import {FaTimes} from "react-icons/fa";
import { useState } from "react";
import "./popup.scss";

function DonationPopup() {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <div className="popup">
            <p>Support my work with a donation! ❤️</p>
            <p>Cannot donate ? Leave a star on <a href="https://github.com/gonzyui" target="_blank" rel="noopener noreferrer">GitHub</a> !</p>
            <a href="https://buymeacoffee.com/gonzyui" target="_blank" rel="noopener noreferrer">
                Donate
            </a>
            <button onClick={() => setVisible(false)}><FaTimes/></button>
        </div>
    );
}

export default DonationPopup;
