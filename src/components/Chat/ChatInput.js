import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { auth, db } from '../../firebase';
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth'

function ChatInput({ channelName , channelId }) {

    const [ input , setInput ] = useState('');
    const [ user ] = useAuthState(auth);

    const sendMessage = e => {
        e.preventDefault();

        if ( !channelId ) {
            return false;
        }

        db.collection('rooms').doc(channelId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user?.displayName,
            userImage: user?.photoURL,
        })

        setInput('');
    }

    return (
        <ChatInputContainer>
            <form>
                <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder={`Message #${channelName}`} />
                <Button hidden type="submit" onClick={sendMessage} >
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput

const ChatInputContainer = styled.div`
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > input {
        position: fixed;
        bottom: 10px;
        width: 75%;
        border: none;
        border-radius: 10px;
        padding: 14px;
        outline: none;
        background-color: #2f3136;
    }

    > form > button {
        display: none !important;
    }
`;