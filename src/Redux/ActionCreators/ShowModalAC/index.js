import types from '../../types'

const modalActionCreator =(()=>{

    return{
        showModalLogin(action){
            return{
                type:types.showModalLogin
            }
        },
        showModalSignup(action){
            return{
                type:types.showModalSignup
            }
        },
        showModalPost(action){
            return{
                type:types.showModalPost
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