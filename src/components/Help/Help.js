import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import HelpOptions from './HelpOptions';

function Help() {

    return (
        <HelpContainer>
            <HelpInfo>
                <h1>Hi all, I'm Shivam <img src="https://twemoji.maxcdn.com/2/72x72/1f44b.png" alt="handShake" /></h1>
                <p>
                    A passionate Competitive Programmer and React Developer having an experience of building Web Applications with JavaScript / 
                    ReactJS / React Redux and some other frameworks and libraries.
                </p>
                <br />
                <p>
                    If you found any bugs or want some improvements <br /> or discuss a project or want to say Hi ? My inbox is open for all.
                    <br />
                    Mail me at : <a href="mailto:shivampanchal0105@gmail.com">shivampanchal0105@gmail.com</a>
                </p>
                <br />
                <p style={{ fontWeight: 800 }}>
                    Open for Opportunities : Yes
                </p>
                <h3>
                    Connect with me 
                </h3>
                <HelpIcons>
                    <HelpIconsContainer>
                        <HelpOptions Icon={GitHubIcon} title="GitHub" link="https://github.com/shivam-0105" />
                        <HelpOptions Icon={LinkedInIcon} title="LinkedIn" link="https://www.linkedin.com/in/shivam-panchal-3947391b0" />
                        <HelpOptions Icon={InstagramIcon} title="Instagram" link="https://www.instagram.com/shivam_0105_/" />
                    </HelpIconsContainer>
                </HelpIcons>
            </HelpInfo>
        </HelpContainer>
    )
}

export default Help

const HelpContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    width: 100%;
    background-color: #36393f;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -100px;
    ::-webkit-scrollbar {
        display: none;
    }
`;

const HelpInfo = styled.div`
    color: white;
    background-color: #2f3136;
    padding: 30px;
    border-radius: 20px;
    max-width: 60%;
    text-align: center;
    height: fit-content;
    display: flex;
    flex-direction: column;
    > h1 > img {
        object-fit: cover;
        height: 50px;
        width: 50px;
    }
    > h1 {
        margin-bottom: 10px;
    }
    > h3 {
        margin-top: 30px;
    }
    > p > a {
        color: white;
    }
`;

const HelpIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HelpIconsContainer = styled.div`
    display: flex;
    margin: 10px 0;
`;