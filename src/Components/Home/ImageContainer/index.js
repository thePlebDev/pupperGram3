import React from 'react';
import styled from 'styled-components'

import LocationOnIcon from '@material-ui/icons/LocationOn';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    border:${({theme})=>`1px solid ${theme.colors.main}`};
    border-radius:4px;
    margin:20px auto;
    padding:5px;
    width:100%;
    max-width:520px;
`
const Image = styled.img`
    width:100%;
    max-width:520px;
    border-radius:4px;
`
const ImageFooter = styled.div`
    display:flex;
    width:100%;
    max-width:520px;
    justify-content:space-around;
    align-items:center;
`


const ImageContainer = ()=>{

    return(
        <Container>
            <Image alt="doggy" src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80" />
            <ImageFooter>
                <LocationOnIcon style={{color:"#845ec2",fontSize:"30px"}}/>
                <div>Input</div>
                <FavoriteBorderIcon style={{color:"#845ec2",fontSize:"30px"}}/>
            </ImageFooter>  
        </Container>
    )
}


export default ImageContainer 