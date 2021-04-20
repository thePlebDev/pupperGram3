import React,{useState} from 'react';
import styled from 'styled-components'

import LocationOnIcon from '@material-ui/icons/LocationOn';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


import Notification from '../../Notification'
import Form from '../../Form'
import useCommentHook from '../../../Hooks/useCommentHook'
import formValidation from '../../../Utils/Validation/formValidation'



const Container = styled.div`
    position:relative;
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
    align-items:flex-end;
`

const Input = styled.input`
    border:none;
    border:1px solid #4a47a3;
    border-radius:4px;
    outline:none;

`

const Button = styled.button`
    position:absolute;
    border:1px solid #4a47a3;
    border-left:none;
    border-radius:0 4px 4px 0;
    padding:2px 15px;
    padding-bottom:1.2px;
    font-size:12px;
    background-color:white;
    color:#4a47a3;
    right:-10px;
    top:0px;
    cursor:pointer;
    outline:none;
`




const ImageContainer = ({img})=>{
    const [show,setShow] = useState(false)
    const [status,setStatus] = useState('fail')
    const [message,setMessage] = useState("")

    const handleLike =()=>{
        setShow(true)
        setStatus('success')
        setMessage("Post Liked")
    }

    const {state,handleSubmit,handleChange} = useCommentHook({post:""},
                                                            formValidation.validateText,setShow,setStatus,setMessage)

  

    // once we click the location icon we will have it set the lat and long in local storage 
    return(
        <Container>
            <Notification status={status} text={message} show={show} setShow={setShow}/>
            <Image alt="doggy" src={img} />
            <ImageFooter>
                <LocationOnIcon style={{color:"#845ec2",fontSize:"30px"}}/>
                <Form handleSubmit={handleSubmit}>
                    <Input placeholder="Enter comment" onChange={(e)=>{handleChange(e)}} name="post" value={state.post} />
                    <Button>Post</Button>
                </Form>
                <FavoriteBorderIcon style={{color:"#845ec2",fontSize:"30px",cursor:"pointer"}} onClick={()=>{handleLike()}}/>
            </ImageFooter>  
        </Container>
    )
}


export default ImageContainer 