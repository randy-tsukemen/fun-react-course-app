import React from "react";
import PropTypes from "prop-types";

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

CourseList.propTypes = {
    courses: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            authorId: PropTypes.number.isRequired,
            category: PropTypes.string.isRequired,
        })
    ).isRequired,
};

// CourseList.defaultProps = {
//     courses: [],
// };

export default CourseList;
