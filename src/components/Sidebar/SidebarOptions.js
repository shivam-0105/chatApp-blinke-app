import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { enterRoom } from '../../features/appSlice';
import { db } from '../../firebase';

function SidebarOptions({ Icon , title , addChannelOption , id }) {

    const dispatch = useDispatch();

    const addChannel = () => {
        const channelName = prompt("Please enter the channel name");

        if ( channelName ) {
            db.collection("rooms").add({
                name: channelName,
            });
        }
    }

    const selectChannel = () => {
        if ( id ) {
            dispatch(
                enterRoom({
                    roomId: id,
                })
            )
        }
    }

    return (
        <SidebarOptionsContainer
            onClick={ addChannelOption ? addChannel : selectChannel }
        >
            { Icon && <Icon fontSize="small" style={{ padding: 10 }} /> }
            { Icon ? (
                <h3>{title}</h3>
            ) : (
                <SidebarOptionsChannel>
                    <span>#</span> {title}
                </SidebarOptionsChannel>
            ) }
        </SidebarOptionsContainer>
    )
}

export default SidebarOptions

const SidebarOptionsContainer = styled.div`
    display: flex;
    font-size: 15px;
    align-items: center;    
    padding-left: 2px;
    cursor: pointer;
    color: white;

    > .MuiSvgIcon-root {
        color: white;
    }

    > h3 {
        font-weight: 500;
    }

    > h3 > span {
        padding: 15px;
    }
`;
const SidebarOptionsChannel = styled.h3`
    color: white;
    padding: 10px 0;
    font-weight: 500;
`;