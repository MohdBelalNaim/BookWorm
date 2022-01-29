export const loggedIn=()=>{
    return{
        type:"LOGGED_IN"
    }
}

export const loggedOut=()=>{
    return{
        type:"LOGGED_OUT"
    }
}

export const showLogin = () =>{
    return{
        type:"SHOW_LOGIN"
    }
}


export const hideLogin = () =>{
    return{
        type:"HIDE_LOGIN"
    }
}

export const showLoader = () =>{
    return{
        type:"SHOW_LOADER"
    }
}

export const hideLoader = () =>{
    return{
        type:"HIDE_LOADER"
    }
}