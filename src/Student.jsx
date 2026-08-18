import React from "react";

function Student(props) {
  return (
    <article className="student">
      <h2>Student Information</h2>
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Roll No:</strong> {props.rollNo}</p>
      <p><strong>Course:</strong> {props.course}</p>
      <p><strong>Marks:</strong> {props.marks}</p>
    </article>
  );
}

export default Student;
