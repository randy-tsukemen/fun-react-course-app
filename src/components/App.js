import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import CoursesPage from "./CoursesPage";
import Header from "./common/Header";

function App() {
    function getPage() {
        switch (window.location.pathname) {
            case "/":
                return <HomePage />;
            case "/about":
                return <AboutPage />;
            case "/courses":
                return <CoursesPage />;
            default:
                return null;
        }
    }
    return (
        <div className="container-fluid">
            <Header />
            {getPage()}
        </div>
    );
}

export default App;
