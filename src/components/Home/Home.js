import React from 'react';
import styled from 'styled-components';

function Home() {

    return (
        <HomeContainer >
            <HomeImage>
                <img src="/images/logo3.png" alt="BlinkeLogo" />
            </HomeImage>
            <HomeInfo>
                <p>
                    General Instructions
                    <ol type="1">
                        <li>This is Public Chat App where you just need to Login in with your Google Account</li>
                        <li>In this, you can create you new channel and chat with your friends</li>
                        <li>To logout, just click on the Me Icon on the top-right side</li>
                        <li>Functionalities to be added on later:
                            <ul>
                                <li>Light Theme / Dark Theme Toggle button</li>
                                <li>Allowing users to send files withing the channel</li>
                            </ul>
                        </li>
                    </ol>
                </p>
                <br />
                <p>
                    I hope you enjoy my work, and regarding any queries, checkout the Help Section
                </p>
            </HomeInfo>
        </HomeContainer>
    )
}

export default Home

const HomeContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    width: 100%;
    background-color: #36393f;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    ::-webkit-scrollbar {
        display: none;
    }
`;

const HomeImage = styled.div`
    > img {
        object-fit: contain;
        height: 250px;
        margin-top: 30px;
    }
`;

const HomeInfo = styled.div`
    color: white;
    background-color: #2f3136;
    padding: 30px;
    border-radius: 20px;
    max-width: 60%;
    /* text-align: center; */
    > h1 > img {
        object-fit: cover;
        height: 50px;
        width: 50px;
    }
    > h1 {
        margin-bottom: 10px;
    }
`;