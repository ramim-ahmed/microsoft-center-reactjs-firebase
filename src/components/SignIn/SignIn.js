import {
    createUserWithEmailAndPassword, getAuth,
    GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup
} from "firebase/auth";
import React, { useState } from 'react';
import styled from 'styled-components';
import MicrosoftBrand from '../../assets/microsoft_logo_ee5c8d9fb6248c938fd0dc19370e90bd.svg';
import initializeFirebase from '../../Firebase/firebase.config';
import { Container } from '../../styles/Container.styles';

initializeFirebase();
const SignIn = () => {

    const googleProvider = new GoogleAuthProvider()
    const auth = getAuth();
    const [newUser, setNewUser] = useState(false);
    const [newLogInUser, setNewLogInUser] = useState({ name: '', email: "", password: "" })

    const handleInput = e => {
        const { name, value } = e.target;
        setNewLogInUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const toggleAuthButton = () => {
        setNewUser(!newUser)
    }

    const handleGoogleAuth = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
            
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    const createUserWithEmailPassword = e => {

        e.preventDefault();
        
        const {email, password} = newLogInUser;

       if(newUser) {
            newSignUpUser(email, password)
       }else {
        signInUser(email, password)
       }
       
    }

    const signInUser = (email, password) => {

                signInWithEmailAndPassword(auth, email, password)
                    .then(result => {
                        const user = result.user;
                        console.log(user);
                        alert('Successfully Login')
                    })
                    .catch(error => {
                        const errorMessage = error.message;
                        console.log(errorMessage);
                    });
    }

    const newSignUpUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                alert('account successfully created!')
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                alert('account failed!')
            });
    }

    return (
        <SignInWrapper>
            <Container>
                <SignInContainer>
                    <ContentWrapper>
                        <div>
                            <img src={MicrosoftBrand} alt="" />
                        </div>
                        <div>
                            <form onSubmit={createUserWithEmailPassword}>
                               {
                                   newUser && <div>
                                   <label htmlFor="name">Name</label>
                                   <br />
                                   <InputField 
                                   onChange={handleInput} 
                                   name='name' 
                                   type="text" 
                                   id='name' />
                               </div>
                               }
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <br />
                                    <InputField 
                                    name='email' 
                                    onChange={handleInput}
                                    type="email" 
                                    id='email' />
                                </div>
                                <div>
                                    <label htmlFor="password">Password</label>
                                    <br />
                                    <InputField 
                                    name='password' 
                                    type="password" 
                                    onChange={handleInput}
                                    id='password' />
                                </div>
                                <FormSubmitButton type="submit" value={newUser ? 'Sign Up' : 'Log In'} />
                            </form>
                            <div style={{textAlign:'center'}}>
                                <p> {newUser ? 'Already have an account ?' : 'No Account ?'} <ToggleAuthButton onClick={toggleAuthButton} type='button'> {newUser ? 'Sign In' : 'Create One'} </ToggleAuthButton></p>
                                <h5>&</h5>
                                <h5>Create with</h5>
                            </div>
                        </div>
                        <div>
                            <AuthButton onClick={handleGoogleAuth} type='button'>Google</AuthButton>
                        </div>
                    </ContentWrapper>
                </SignInContainer>
            </Container>
        </SignInWrapper>
    );
};

export default SignIn;

const SignInWrapper = styled.div`
    height: calc( 78vh - 57px);
    width: 100%;
    display: flex;
    align-items: center;
`

const SignInContainer = styled.div`
  display: flex;
  justify-content: center;
`

const ContentWrapper = styled.div`
    background-color: #ffffff;
    padding: 25px;
    width: 40%;
`
const InputField = styled.input`
   width: 100%;
   border: 1px solid gray;
   padding: 8px 5px;
   outline: 0px;
   font-size: 18px;
   color: black;
  &:focus {
    border: 1px solid blue;
  }
`

const FormSubmitButton = styled.input`
   border: none;
   outline: none;
   background-color: gray;
   margin: 12px 0;
   padding: 9px  28px;
   color: #ffffff;
   font-size: 18px;
   cursor: pointer;
`

const AuthButton = styled.button`
   border: none;
   outline: none;
   margin: 12px 0;
   padding: 9px  28px;
   width: 100%;
   color: #000000;
   font-size: 22px;
   cursor: pointer;
   background: transparent;
   border: 1px solid gray;
   border-radius: 12px;
   &:hover {
    border: 1px solid blue;
  }
`

const ToggleAuthButton = styled.button`
      border: none;
      background: transparent;
      cursor: pointer;
      color: blue;
      border-bottom: 1px solid gray;
`