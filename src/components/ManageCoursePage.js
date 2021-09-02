import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";
import { toast } from "react-toastify";
// import { Prompt } from "react-router-dom";

const ManageCoursePage = (props) => {
    const [error, setError] = useState({});
    const [course, setCourse] = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: "",
    });

    useEffect(() => {
        const slug = props.match.params.slug; // from the path `/courses/:slug`
        if (slug) {
            courseApi
                .getCourseBySlug(slug)
                .then((_course) => setCourse(_course));
        }
    }, [props.match.params.slug]);

    function handleChange({ target }) {
        setCourse({
            ...course,
            [target.name]: target.value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        courseApi.saveCourse(course).then(() => {
            props.history.push("/courses");
            toast.success("Course saved.");
        });
    }

    function formIsValid() {
        const { title, authorId, category } = course;
        const errors = {};
        if (!title) errors.title = "Title is required.";
        if (!authorId) errors.authorId = "Author is required.";
        if (!category) errors.category = "Category is required.";
        setError(errors);
        return Object.keys(errors).length === 0;
    }

    return (
        <>
            <h2>Manage Course</h2>
            <CourseForm
                errors={error}
                course={course}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            {/* <Prompt when={true} message="Are you sure you want to leave?" /> */}
            {/* {props.match.params.slug} */}
        </>
    );
};

export default ManageCoursePage;
