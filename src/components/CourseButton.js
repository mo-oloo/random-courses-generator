import React, { useState } from 'react';
import Data from './Data';

const CourseButton = () => {
    const [courses, setCourses] = useState([]);
    
    const generateCourse = () => {
        // Generate 5 random courses from the Data.js file
        const randomCourses = [];
        for (let i = 0; i < 5; i++) {
            const randomIndex = Math.floor(Math.random() * Data.length);
            randomCourses.push(Data[randomIndex]);
        }
        console.log(randomCourses);
        setCourses(randomCourses);
    };
    
    return (
        <div>
            <button onClick={generateCourse}>Generate 5 Random Courses</button>
            <table>
                <tr>
                    <th>Department</th>
                    <th>Course Number</th>
                    <th>Course Name</th>
                </tr>
                {courses.map(course => (
                    <tr>
                        <td>{course.department}</td>
                        <td>{course.course_number}</td>
                        <td>{course.course_title}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
    }

export default CourseButton;