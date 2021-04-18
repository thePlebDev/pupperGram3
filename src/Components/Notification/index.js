import React from 'react';
import styled from 'styled-components'

import Fail from './fail';
import Success from './success'


const Container = styled.div`
    opacity:${({state})=>state ? '1':'0'};

    transition:all 0.35s;
`

const getNotification = text =>({
    success: <Success text={text}/>,
    fail:<Fail text={text}/>
})


const Notification =({text,status,show,setShow})=>{
    return(
        <Container state={show} onClick={()=>{setShow(false)}}>
            {getNotification(text)[status]}
        </Container>
    )
}


export default Notification