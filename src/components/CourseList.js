import React from "react";

function CourseList(props) {
    return (
        <div className="course-list">
            <h1>Course List</h1>
            <ul>
                {props.courses.map((course) => (
                    <li key={course.id}>{course.title}</li>
                ))}
            </ul>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author ID</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {props.courses.map((course) => {
                        return (
                            <tr key={course.id}>
                                <td>{course.title}</td>
                                <td>{course.authorId}</td>
                                <td>{course.category}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default CourseList;
