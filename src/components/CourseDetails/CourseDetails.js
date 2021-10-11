import { useContext } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { coursesContext } from '../../App';
import { Container } from '../../styles/Container.styles';

const CourseDetails = () => {
    const {id} = useParams();
    const courseContext = useContext(coursesContext);
    const course = courseContext.find( course => course.id === Number(id));

    const {title, img, duration, moneyBack, description, price} = course
    return (
        <div>
           <Container>
                  <DetailsContent>
                        <div>
                            <img src={img} alt="" />
                        </div>
                        <div>
                            <h2>{title}</h2>
                            <h2>${price}</h2>
                        </div>
                        <div>
                            <p>{description}</p>
                            <p><strong>Duration: {duration}</strong></p>
                            <p><strong>30 Days Money Back {moneyBack}</strong></p>
                        </div>
                  </DetailsContent>
           </Container>
        </div>
    );
};

export default CourseDetails;


const DetailsContent = styled.div`
     padding: 75px 0;
    text-align:center

`