import types from '../../types'

const initialState = [
    {
        latLong:[43.6532, -79.3832],
        description:"dave to poodle was spotted here",
        img:"https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80"
    },
    {
        latLong:[44.6488, -63.5752],
        description:"Tim the mut",
        img:"https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80"
    }
]


const mapReducer =(state=initialState,action)=>{
    switch (action.type) {
        case types.showMapData:
            
            break;
    
        default:
            return state;
    }
}

export default mapReducer