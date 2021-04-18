import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import PetsIcon from '@material-ui/icons/Pets';
import CameraAltIcon from '@material-ui/icons/CameraAlt';


const Container = styled.nav`
    color:${({theme})=>theme.colors.main};
    border-bottom:${({theme})=>`1px solid ${theme.colors.main}`};
    height:90px;
    display:flex;
    align-items:center;
    justify-content:space-around;

`

const Title = styled.div`
    font-weight:600;
    font-size:25px;
    letter-spacing:1px;
    cursor:pointer;
    margin-left:20px;
`

const NavContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`
const LargeNavigation = styled.ul`
    align-items:center;
    justify-content:center;
    display:none;
    padding:0;
    list-style-type: none;
    @media only screen and (min-width: 600px) {
        display:flex;
      }
      
`
const Links = styled.li`
    text-decoration: none;
    margin:0 10px;
    font-size:20px;
    font-weight:600;
    cursor:pointer;

`


const IconContainer = styled.div`
@media only screen and (min-width: 600px) {
    display:none;
  }
`

const TitleContainer = styled.div`
    display:flex;
`



const Navigation =({setShow})=>{

    return(
        <Container>
            <TitleContainer>
                <CameraAltIcon style={{fontSize:'30px',cursor:"pointer"}}/>
                <Title>PupperGram</Title>
            </TitleContainer>
            
            <NavContainer>
                <IconContainer>
                    <PetsIcon onClick={()=>{setShow(true)}} style={{fontSize:'30px',cursor:"pointer"}}/>    
                </IconContainer>
                <LargeNavigation>
                    <Link to="/"><Links>Home</Links></Link>
                    <Link to='/login'><Links>Login</Links></Link>
                    <Link to="/map"><Links>Map</Links></Link>
                    <Link to="/profile"><Links>Profile</Links></Link>
                </LargeNavigation>
            </NavContainer>
            
        </Container>
    )
}


export default Navigation