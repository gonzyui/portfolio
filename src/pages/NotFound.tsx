import { Link } from "react-router-dom";
import "./notfound.scss";

function NotFound() {
    return (
        <div className="not-found">
            <h1>404</h1>
            <p>Oops! The page you're looking for doesn't exist.</p>
            <Link to="/">Go Home</Link>
        </div>
    );
}

export default NotFound;
