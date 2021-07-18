import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core';
import "../Header/HeaderOptions.css";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

function HeaderOptions({ Icon , title , avatar }) {

    const [user] = useAuthState(auth)

    return (
        <HeaderOptionsContainer>
            { Icon && <Icon /> }
            { avatar && <Avatar onClick={() => auth.signOut() } className="headerOptionsAvatar" src={user?.photoURL} >{user?.email[0]}</Avatar> }
            <h3>{title}</h3>
        </HeaderOptionsContainer>
    )
}

export default HeaderOptions

const HeaderOptionsContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    padding: 0 10px;
    cursor: pointer;

    > .MuiSvgIcon-root {
        color: white;
        font-size: 30px;
    }
    > h3 {
        color: white;
        font-weight: 400;
        font-size: 14px;
    }
`;