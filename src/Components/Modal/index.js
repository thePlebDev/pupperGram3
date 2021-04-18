import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'

import CloseIcon from '@material-ui/icons/Close';

import modalAC from '../../Redux/ActionCreators/ShowModalAC'


const Container = styled.div`
    position:fixed;
    width:100vw;
    height:100vh;
    background-color:rgba(0,0,0,0.6);
    top:0;
    left:0;
    display:${({state})=>state ?'block':'none'};
    z-index:9999999999999999999999999;

`

const SubContainer = styled(Container)`
    background-color:white;
    display:block;
    height:95vh;
    width:90%;
    max-width:600px;
    margin:0 auto;
    margin-top:25px;
    border-radius:4px;
    position:relative;
    overflow-y:auto;
`

const IconContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-end;
    color:#4a47a3;
    postion:absolute;
    `

const Modal = ({showModal,hideModal})=>{

    return(
        <Container state={showModal}>
            <SubContainer>
                <IconContainer onClick={()=>{hideModal()}}>
                    <CloseIcon style={{fontSize:'40px',cursor:'pointer'}}/>
                </IconContainer>
            </SubContainer>   
        </Container>
    )
}

const mapStateToProps = (state) =>{
    
    return{
        showModal:state.showModal.showModal
    }
}

const mapDispatchToProps ={
    hideModal:modalAC.hideModal
}

const ConnectedModal = connect(mapStateToProps,mapDispatchToProps)(Modal)

export default ConnectedModal