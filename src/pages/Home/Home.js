import React from 'react';
import Course from '../../components/Course/Course';
import HeroSection from '../../components/HeroSection/HeroSection';
import { Container } from '../../styles/Container.styles';
import UseCourses from '../../UseCourses/UseCourses';
import { CourseContent } from '../Courses/Courses';
const Home = () => {
    const [courses] = UseCourses();
    const slice = courses.slice(3)
    return (
        <div>
            <HeroSection />
            <Container>
                <div style={{textAlign: 'center', margin: '100px 0'}}>
                    <h1>OUR TOP COURSES</h1>
                </div>
                <CourseContent>
                       {
                           slice.map( course => <Course key = {course.key} course = {course} />)
                       }
                </CourseContent>
            </Container>
        </div>
    );
};

export default Home;