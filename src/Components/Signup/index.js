import React from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux'

import Form from '../Form'
import LoginTextInput from '../Form/LoginTextInput'
import PasswordInput from '../Form/PasswordInput'

import useFormHook from '../../Hooks/useFormHook'
import formValidation from '../../Utils/Validation/formValidation'
import showModalAC from '../../Redux/ActionCreators/ShowModalAC'



const Container = styled.div`

`

const Title = styled.h2`
    color:#4a47a3;
    text-align:center;
    text-transform:uppercase;
    font-weight:bold;
    letter-spacing:1px;
    border-bottom:1px solid #4a47a3;
    padding-bottom:40px;
    
`
const Button = styled.button`
    margin:0 auto;
    padding: 5px 25px;
    border-radius:4px;
    border:1px solid #4a47a3;
    background-color:white;
    color:#4a47a3;
`

const Login = styled.h6`
    color:#4a47a3;
    letter-spacing:1px;
    text-align:center;
`
const LoginLink = styled.span`
    color:black;
    border-bottom:1px solid #4a47a3;
    font-size:13px;
    letter-spacing:1px;
    cursor: pointer;
`




const Signup =({showLogin})=>{
    const {state,errors,handleChange,handleSubmit} = useFormHook({username:"",password:""},formValidation.validateText)

    return(
        <Container>
            <Title>Signup</Title>
            <Form handleSubmit={handleSubmit}>
                <LoginTextInput placeholder="Username"  handleChange={handleChange} error={errors.username} name="username" value={state.username}/>
                <PasswordInput name="password" handleChange={handleChange} error={errors.password} value={state.password} />
                <Button type="submit"  >Submit</Button>
            </Form>
            <Login>
                Already have an account? <LoginLink onClick={()=>{showLogin()}}>Login</LoginLink>
            </Login>
        </Container>
    )
}


const mapDispatchToProps ={
    showLogin:showModalAC.showModalLogin
}


const ConnectedSignup = connect(null,mapDispatchToProps)(Signup)

export default ConnectedSignup