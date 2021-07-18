import React, { useEffect, useState } from 'react'
// import { useCollection } from 'react-firebase-hooks/firestore';
import styled from 'styled-components'
import { db } from '../../firebase';

function Network() {

    // const list = db.collection('rooms');

    const [ rooms , setRooms ] = useState([]);
    const [ selectedRoom , setSelectedRoom ] = useState()
    const [ messages , setMessages ] = useState([]);
    const [ error , setError ] = useState();

    const selectRoom = (room) => {
        setSelectedRoom(room);
        db.collection('rooms').doc(room.id).collection('messages').get()
        .then( response => {
            const fetchedMessages = [];
            response.forEach( doc => {
                const fetchedMessage = {
                    id: doc.id,
                    ...doc.data()
                    // name: doc.user
                };
                fetchedMessages.push(fetchedMessage);
            } );
            // const uniqueElements = [...new Set(fetchedMessages)]
            setMessages(fetchedMessages)
        } )
        .catch( error => {
            setError(error);
        } )
    }

    useEffect(() => {
        db.collection('rooms').get()
        .then( response => {
            const fetchedRooms = [];
            response.docs.forEach(doc => {
                const fetchedRoom = {
                    id: doc.id,
                    ...doc.data()
                };
                fetchedRooms.push(fetchedRoom);
            });
            setRooms(fetchedRooms)
        } )
        .catch( error => {
            setError(error);
        } )
    } , []);

    return (
        <NetworkOuterContainer>
            <NetworkContainer>
                {/* {
                    error ? (
                        <p>There is something error</p>
                    ) : (
                        null
                    )
                } */}

                {/* <ul>
                    {
                        rooms.map( room => (
                            <li key={room.id} onClick={() => selectRoom(room)} >
                                <b>{ room.name }</b>
                            </li>
                        ) )
                    }
                </ul>
                {
                    selectedRoom ? (
                        <ul>
                            {
                                messages.map( message => (
                                    <li key={message.id} >
                                        <b>{message.message}</b> | {message.user}
                                    </li>
                                ) )
                            }
                        </ul>
                    ) : null
                } */}
                <NetworkLeft>
                <NetworkLeftHeader>Channel Name</NetworkLeftHeader>
                <hr />
                <ul style={{ listStyle:"none" }} >
                    {
                        rooms.map( room => (
                            <li key={room.id} onClick={() => selectRoom(room)} >
                                <span>{ room.name }</span>
                            </li>
                        ) )
                    }
                </ul>
                </NetworkLeft>
                <NetworkRight>
                <NetworkLeftHeader>Users Name</NetworkLeftHeader>   
                <hr /> 
                {   
                    selectedRoom ? (
                        <ul style={{ listStyle:"none" }}>
                            {
                                messages.map( message => (
                                    <li key={message.id}     >{message?.user}</li>
                                ) )
                            }
                        </ul>
                    ) : null
                }
                </NetworkRight>
            </NetworkContainer>
            <NetworkBottom></NetworkBottom>
        </NetworkOuterContainer>
    )
}

export default Network

const NetworkOuterContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    height: 100vh;
    width: 100%;
    background-color: #36393f;
    display: flex;
    flex-direction: column;
    padding: 10px;
    ::-webkit-scrollbar {
        display: none;
    }
`;

const NetworkContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const NetworkLeft = styled.div`
    flex: 0.35;
    flex-grow: 1;
    overflow-y: scroll;
    height: 100vh;
    /* width: 100%; */
    background-color: #2f3136;
    margin: 10px;
    border-radius: 20px;
    padding: 15px;
    cursor: pointer;
    color: white;
    font-size: 30px;
    /* text-align: center; */

    ::-webkit-scrollbar {
        display: none;
    }
    
    > ul > li {
        margin: 10px 0;
    }

    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #36393f;
    }
`;

const NetworkRight = styled.div`
    flex: 0.65;
    overflow-y: scroll;
    flex-grow: 1;
    height: 100vh;
    /* width: 100%; */
    background-color: #2f3136;
    margin: 10px;
    border-radius: 20px;
    padding: 15px;
    cursor: pointer;
    color: white;
    font-size: 30px;

    ::-webkit-scrollbar {
        display: none;
    }

    > ul > li {
        margin: 10px 0;
    }

    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #36393f;
    }
`;

const NetworkBottom = styled.div`
    margin-bottom: 150px;
`;

const NetworkLeftHeader = styled.div`
    text-align: center;
`;