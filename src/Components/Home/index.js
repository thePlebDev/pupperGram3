import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';

import ImageContainer from './ImageContainer'

const Container = styled.div`
    
    width:80%;
    margin:20px auto;
    max-width:800px
`


const Home =({data})=>{

    return(
        <Container>
            {
                data.map((item,index)=>{
                    return <ImageContainer key={index} img={item.img} latLong={item.latLong} desc={item.description}/>
                })
            }
            
            
        </Container>
    )
}

const mapStateToProps =(state)=>{
    return{
        data:state.mapReducer
    }
}

const ConnectedHome = connect(mapStateToProps)(Home)

export default ConnectedHome