
const formValidation =(()=>{
    return{
        validateText(state){
            let errors ={}
            // get the keys
            let keys = Object.keys(state) 

            // make sure nothing is empty
            keys.forEach((item,index)=>{
                if(!state[item]){
                     errors[item] = `Enter ${item}`
                }
            })

            return errors
        }
    }
})()

export default formValidation