import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core';
import { auth, provider } from '../../firebase';

function Login() {

    const signIn = e => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    } 

    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src="/images/logo2.png" alt="BlinkeLogo" />
                <h1>Sign in to Blinke App</h1>
                <p>To chat publicly</p>

                <Button onClick={signIn} >Sign In with Google</Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
    height: 100vh;
    display: grid;
    place-items: center;
    background-color: var(--blinke-color);
`;

const LoginInnerContainer = styled.div`
    padding: 100px;
    text-align: center;
    border-radius: 10px;
    color: white;
    
    > img {
        object-fit: contain;
        height: 250px;
        margin-bottom: 40px;
    }

    > button {
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: #8c9eff !important;
        font-weight: bold;
        /* color: #ee16ff; */
    }
`;
