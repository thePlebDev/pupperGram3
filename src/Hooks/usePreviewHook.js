import {useState,useRef,useEffect} from 'react';

const usePreviewHook =(node)=>{

    const [image,setImage] = useState()
    const [preview,setPreview] = useState()
    



    const handleClick=(e)=>{
        e.preventDefault()
        node.current.click();
    }

    const handleChange=(e)=>{
        const file = e.target.files[0];
        if(file && file.type.substr(0,5) === "image"){
            setImage(file);
        }else{
            setImage(null);
        }
    }

    useEffect(()=>{
        if(image){
            const reader = new FileReader();
            reader.onloadend =()=>{
                setPreview(reader.result);
            }
            reader.readAsDataURL(image)
        }else{
            setPreview(null)
        }
    },[image])

    return{
        preview,
        handleClick,
        handleChange,
    }

}


export default usePreviewHook