import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="jumbotron">
            <h1>React App</h1>
            <p>React, React Router, Redux, React Bootstrap, etc...</p>
            {/* <a href="/about">About</a> */}
            <Link to="/about" className="btn btn-primary btn-lg">
                About
            </Link>
        </div>
    );
}

export default HomePage;
