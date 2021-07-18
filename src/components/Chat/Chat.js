import React from 'react'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { selectRoomId } from '../../features/appSlice';
import { db } from '../../firebase';
import ChatInput from './ChatInput';
import Message from './Message';

function Chat() {

    const roomId = useSelector(selectRoomId);
    const [roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
    )
    const [roomMessages] = useCollection(
        roomId && db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp','asc')
    ) 

    // const divRef = useRef(null);

    // useEffect(() => {
    //     divRef?.current?.scrollIntoView({ behavior: 'smooth' });
    // });

    return (
        <ChatContainer>
            {
                roomId && roomMessages && (
                    <>
                        <Header>
                            <HeaderContainer>
                                <h4><strong># {roomDetails?.data().name}</strong></h4>
                            </HeaderContainer>
                        </Header>
                        <ChatMessages>
                            {
                                roomMessages?.docs.map( doc => {
                                    const { message , timestamp , user , userImage } = doc.data()
                                    return (
                                        <Message
                                            key={doc.id}
                                            message={message}
                                            timestamp={timestamp}
                                            user={user}
                                            userImage={userImage}
                                        />
                                    )
                                } )
                            }
                            <ChatBottom></ChatBottom>
                        </ChatMessages>
                        <ChatInput
                            channelName={roomDetails?.data().name}
                            channelId={roomId} 
                        />
                    </>
                )
            }
        </ChatContainer>
    )
}

export default Chat

const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    width: 100%;
    background-color: #36393f;
    ::-webkit-scrollbar {
        display: none;
    }
`;
const Header = styled.div`
    padding: 20px;
    background-color: #2f3136;
`;
const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    > h4 {
        text-transform: lowercase;
        color: white;
    }
`;

const ChatMessages = styled.div`
    background-color: #36393f;
`;

const ChatBottom = styled.div`
    padding-bottom: 150px;
`;