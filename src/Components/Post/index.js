import React,{useRef,useState,useEffect} from 'react';
import styled from 'styled-components'

import LoginTextInput from '../Form/LoginTextInput'
import Form from '../Form'
import Notification from '../Notification'

import usePreviewHook from '../../Hooks/usePreviewHook'

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
    padding: 5px 25px;
    border-radius:4px;
    border:1px solid #4a47a3;
    background-color:white;
    color:#4a47a3;
    cursor:pointer;
    width:20%;
    min-width:150px;
    margin:0 auto;
    margin-top:10px;
`



const ImageContainer = styled.div`
    width: 90%;
    max-width:400px;
    height:300px;
    border:1px solid #4a47a3;
    margin:20px auto;
    border-radius:4px;
`

const Image = styled.img`
    broder-radius:4px;
    height:100%;
    width:100%;
`
const ButtonContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`


const Post =()=>{
    const inputRef = useRef();
    const [state,setState] = useState()
    
    const {preview,handleClick,handleChange,} = usePreviewHook(inputRef)
    
    const handleSubmit =(e)=>{
        e.preventDefault()
    }
    const handleChangeText =(e)=>{
        const {name,value} = e.target
        setState({...state,[name]:value})
    }

  

    return(
        <Container>
            <Notification />
            <Title>Post a Pup</Title> 
            <ImageContainer>
                        {
                            preview
                                ?
                                <Image alt="upload preview" src={preview} />
                                :
                                <div></div>
                        }
            </ImageContainer>
            <Form handleSubmit={handleSubmit}>
               
                    <Button onClick={(e)=>{handleClick(e)}}>Add Image</Button>
                <input type="file"  style={{display:'none'}} ref={inputRef} onChange={(e)=>{handleChange(e)}}  accept="image/*"/>
                
                <Button >add location</Button>
                <LoginTextInput placeholder={"Description"} handleChange={handleChangeText}   name="description" />
            </Form>
            
        </Container>
    )
}

export default Post