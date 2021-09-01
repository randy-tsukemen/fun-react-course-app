import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <div>
            <h1>Page Not Found.</h1>
            <p>
                Page not found. <Link to="/">Go back to the homepage.</Link>
            </p>
        </div>
    );
}

export default NotFoundPage;
