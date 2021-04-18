import types from '../../types'

const modalActionCreator =(()=>{

    return{
        showModalLogin(action){
            return{
                type:types.showModalLogin
            }
        },
        hideModal(action){
        
            return{
                type:types.hideModal
            }
        }
    }

})()


export default modalActionCreator