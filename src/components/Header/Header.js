import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import HeaderOptions from './HeaderOptions';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <HeaderContainer>
            <HeaderLeft>
                <img src="/images/logo-blinke.png" alt="Logo" />
                <HeaderSearch>
                    <SearchIcon />
                    <input type="text" placeholder="Search Blinke" />
                </HeaderSearch>
            </HeaderLeft>
            <HeaderRight>
                <Link to="/home" style={{ textDecoration: 'none' }} ><HeaderOptions Icon={HomeIcon} title="Home" avatar={false} /></Link>
                <Link to="/" style={{ textDecoration: 'none' }} ><HeaderOptions Icon={ChatIcon} title="Chat" avatar={false} /></Link>
                <Link to="/network" style={{ textDecoration: 'none' }} ><HeaderOptions Icon={SupervisorAccountIcon} title="Network" avatar={false} /></Link>
                <Link to="/help" style={{ textDecoration: 'none' }} ><HeaderOptions Icon={HelpOutlineIcon} title="Help" avatar={false} /></Link>
                <HeaderOptions Icon={false} title="Me" avatar={true} />
            </HeaderRight>
        </HeaderContainer>  
    )
}

export default Header

const HeaderContainer = styled.div`
    display: flex;
    background-color: var(--blinke-color);
    position: sticky;
    top: 0;
    z-index: 999;
    width: 100%;
    justify-content: space-between;
    padding: 10px 0;
`;

const HeaderLeft = styled.div`

    flex: 0.6;
    display: flex;
    margin-left: 30px;

    > img {
        object-fit: contain; /* This preserves the aspect ratio of image */
        height: 70px;
        margin-left: 30px;
    }
`;

const HeaderSearch = styled.div`

    display: flex;
    align-items: center;
    background-color: #36393f;
    margin-left: 20px;
    border-radius: 20px;
    width: 50%;
    height: 50px;
    margin-top: 10px;

    > .MuiSvgIcon-root {
        margin: 10px;
        color: white;
        font-size: 30px
    }

    > input {
        align-items: center;
        background-color: #36393f;
        border: none;
        outline: none;
        color: white;
        width: 100%;
    }
`;

const HeaderRight = styled.div`
    display: flex;
    flex: 0.4;
    align-items: center;
    margin-top: 5px;
    margin-left: 50px;
`;