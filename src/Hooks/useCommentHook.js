import {useEffect,useState} from 'react'


const useCommentHook =(initialState,validation,show,status,message)=>{
    const [state,setState] = useState(initialState);
    const [errors,setErrors] = useState(initialState);
    const [isSubmitting,setIsSubmitting] = useState(false)

    const handleChange =(e)=>{
        const {name,value} = e.target

        setState({...state,[name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        setIsSubmitting(true)

        setErrors(validation(state))
        
    }

    useEffect(()=>{
        if(isSubmitting && Object.keys(errors).length === 0){
            show(true)
            status("success")
            message("Comment Posted")
        }else if(isSubmitting && Object.keys(errors).length > 0){
            show(true)
            status("fail")
            message("Enter Comment")
        }
        setIsSubmitting(false)
    },[isSubmitting,errors])



    return{
        state,
        errors,
        handleSubmit,
        handleChange
    }
}

export default useCommentHook