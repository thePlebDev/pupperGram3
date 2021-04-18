import React from 'react';
import styled from 'styled-components'

import ImageContainer from './ImageContainer'

const Container = styled.div`
    
    width:80%;
    margin:20px auto;
    max-width:800px
`


const Home =()=>{

    return(
        <Container>
            <ImageContainer/>
            <ImageContainer/>
            <ImageContainer/>
        </Container>
    )
}

export default Home