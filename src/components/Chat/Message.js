import React from 'react'
import styled from 'styled-components'

function Message({ message , timestamp , user , userImage }) {
    return (
        <MessageContainer>
            <img src={userImage} alt="ImageUser" />
            <MessageInfo>
                <h4>
                    {user} <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
                </h4>
                <p>{message}</p>
            </MessageInfo>
        </MessageContainer>
    )
}

export default Message

const MessageContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;

    > img {
        object-fit: cover;
        height: 50px !important;
        width: 50px !important;
        border-radius: 50%;
    }
`;
const MessageInfo = styled.div`
    padding-left: 10px;
    color: white;

    > h4 > span {
        font-weight: 300;
        margin-left: 4px;
        font-size: 10px;
    }
`;