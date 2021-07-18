import React from 'react'
import styled from 'styled-components';

function HelpOptions({ Icon , title , link }) {
    return (
        <HelpOptionsContainer>
            { Icon && <Icon onClick={ e => window.location.href=`${link}`} /> }
            <h3>{title}</h3>
        </HelpOptionsContainer>
    )
}

export default HelpOptions;

const HelpOptionsContainer = styled.div`
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