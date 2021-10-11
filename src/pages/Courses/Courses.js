import React from 'react';
import styled from 'styled-components';
import Course from '../../components/Course/Course';
import { Container } from '../../styles/Container.styles';
import UseCourses from '../../UseCourses/UseCourses';

const Courses = () => {
    const [courses]  = UseCourses();
    return (
        <div>
           <Container>
                <div style={{textAlign: 'center', margin: '100px 0'}}>
                    <h1>OUR ALL COURSES</h1>
                </div>
                 <CourseContent>
                    {
                        courses.map( course => <Course key = {course.id} course = {course} />)
                    }
                 </CourseContent>
           </Container>
        </div>
    );
};

export default Courses;



export const CourseContent = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    margin: 100px 0px;
`