import types from '../../types'

const initialState={
    showModal:false,
    modalStatus:'login'
}


const showModalReducer =(state,action)=>{
    switch (action.type) {
        case types.showModalLogin:
            return {...state,showModal:true,modalStatus:"login"}

        case types.showModalSignup:
            return {...state,showModal:true,modalStatus:"signup"}
        
        case types.hideModal:
            return {...state,showModal:false}

        default:
            return initialState;
    }
}


export default showModalReducer