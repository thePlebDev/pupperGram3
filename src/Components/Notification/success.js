import React from 'react';
import styled from 'styled-components'

import CloseIcon from '@material-ui/icons/Close';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const Container = styled.div`
    position:absolute;
    background-color:#4caf50;;
    padding:4px 10px;
    color:white;
    border-radius:4px;
    top:10px;
    right:10px;
    font-size:15px;
    display:flex;
    align-items:center;
    justify-content:space-around;
    cursor:pointer;
`
const Title = styled.div`
    font-size:20xp;
    margin:0 10px;
`



const Success =({text})=>{
    return(
        <Container>
            <CheckCircleOutlineIcon style={{fontSize:'20px'}}/>
            <Title>{text}</Title>
            <CloseIcon style={{fontSize:'20px'}}/>
        </Container>
    )
}

export default Success