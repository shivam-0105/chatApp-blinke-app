import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core';
import SidebarOptions from './SidebarOptions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import { useCollection } from 'react-firebase-hooks/firestore';
import { auth, db } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function Sidebar() {

    const [channels] = useCollection(db.collection('rooms'));
    const [ user ] = useAuthState(auth);

    return (
        <SidebarContainer>
            <SidebarTop>
                <SidebarInfo>
                    <Avatar src={user?.photoURL} >{user?.email[0]}</Avatar>
                    <h2>{user?.displayName}</h2>
                    <p>{user?.email}</p>
                </SidebarInfo>
            </SidebarTop>
            <hr />
            <SidebarMiddle>
                <SidebarOptions Icon={ExpandMoreIcon} title="Channels" />
                <SidebarOptions Icon={AddIcon} title="Add Channel" addChannelOption />
                {channels?.docs.map((doc) => (
                    <SidebarOptions key={doc.id} id={doc.id} title={doc.data().name} />
                ))}
            </SidebarMiddle>
            <SidebarLast>
            </SidebarLast>
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
    flex: 0.3;
    max-width: 270px;
    background-color: var(--blinke-color);
    padding: 2px;
    height: 100vh;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }

    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #36393f;
    }
`;

const SidebarTop = styled.div`
    background-color: #36393f;
    margin: 10px;
    border-radius: 20px;
`;

const SidebarInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 7px;
    > .MuiSvgIcon-root {
        object-fit: contain;
        height: 30px !important;
        width: 30px !important;
    }
    > h2 {
        color: white;
    }
    > p {
        color: lightgray;
        font-size: 12px;
    }
`;

const SidebarMiddle = styled.div``;

const SidebarLast = styled.div`
    margin-bottom: 200px;
`;