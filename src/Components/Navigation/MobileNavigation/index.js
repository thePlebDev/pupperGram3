import React,{useRef} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import CloseIcon from '@material-ui/icons/Close';

import useClickDetection from '../../../Hooks/useClickDetectionHook'

const Container = styled.div`
    background-color:${({theme})=>theme.colors.main};
    height:100vh;
    width:50vw;
    position: fixed;
    transition:all 0.35s;
    
    top:0;
    right:${({state})=>state? '0' : '-50vw'};
    opacity:0.9;

`
const SubContainer = styled.div`
    height:100%;
    width:100%;
`


const IconContainer = styled.div`
    position:absolute;
    display:flex;
    align-items:center;
    justify-content:center;
    top:0;
`

const NavLinks = styled.ul`
    display:flex;
    flex-direction:column;
    margin-top:50px;
    color:white;
    font-size:30px;
    list-style-type: none;
    text-transform:uppercase;
    padding:0;
    
   
`

const Links = styled.li`
    text-decoration: none;
    margin:20px auto;
    font-weight:600;
    color:white;
    margin-left:10px;
    text-align:center;

`


const MobileNavigation =({show,setShow})=>{
    const node = useRef();

    useClickDetection(node,setShow)


    return(
        <Container state={show} ref={node}>
            <SubContainer>
                <IconContainer onClick={()=>{setShow(false)}}>
                    <CloseIcon style={{color:'white',fontSize:'40px',cursor:'pointer'}}/>
                </IconContainer>
                <NavLinks>
                        <Link to='/'><Links>Home</Links></Link>
                        <Link to='/login'><Links>Login</Links></Link>
                        <Link to='/map'><Links>Map</Links></Link>
                        <Link to='/profile'><Links>Profile</Links></Link>
                    </NavLinks> 
            </SubContainer>
        </Container>
    )
}

export default MobileNavigation