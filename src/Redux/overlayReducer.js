const overlayReducer = (state=false,action) =>{
    switch(action.type){
        case "SHOW_LOADER":
            return state = true
        case "HIDE_LOADER":
            return state = false
        default:
            return state
    }
}

export default overlayReducer