import {useEffect,useState} from 'react'


const useFormHook =(initialState,validation)=>{
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
            console.log('SUBMITTED')
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

export default useFormHook