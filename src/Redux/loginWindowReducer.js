const loginWindowReducer=(state=false,action)=>{
    switch(action.type){
        case "SHOW_LOGIN":
            return state =true
        case "HIDE_LOGIN":
                return state =false
        default:
            return state
    }
}

export default loginWindowReducer