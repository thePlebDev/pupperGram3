import {useEffect} from 'react'

const useClickDetection =(node,setShow)=>{
    

    useEffect(()=>{
        const handleClick =(e)=>{
            if(node.current.contains(e.target)){
                return
            }else{
                setShow(false)
            }
        }
        document.addEventListener("mousedown",handleClick);

        return()=>{
            document.removeEventListener("mousedown",handleClick);
        }
    },[node,setShow])

    return{

    }
}


export default useClickDetection