import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
const Course = (props) => {
    const {id, title, price, img, description} = props.course;

    const history = useHistory()
    const handleDetails = id => {
       history.push(`/details/${id}`)
    }
    
    return (
        <SingleCourse>
            <div>
                <img style={{width: '100%'}} src={img} alt="" />
            </div>
            <div>
                <div style={{display: 'flex', justifyContent: "space-between"}}>
                    <h3 style={{color: '#3BB2BF'}}>{title}</h3>
                    <h3 style={{color: '#176C8D'}}>${price}</h3>
                </div>
                <p>{description}</p>
                <br />
                <div>
                 <Button onClick = { () => handleDetails(id)} type='button'> SEE DETAILS</Button>
                </div>
            </div>
        </SingleCourse>
    );
};

export default Course;


const SingleCourse = styled.div`
    background-color: white;
    padding: 25px;
`

const Button = styled.button`
       width: 100%;
       border: none;
       outline: none;
       border: 1px solid #176C8D;
       border-radius: 3px;
       color: black;
       background: transparent;
       padding: 6px 30px;
       font-size: 18px;
       transition: all 0.5s ease-in-out;
       :hover {
           background-color: #176C8D;
           color: white;
       }
`