import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../firebase';
import { hideLoader, hideLogin, loggedIn, showLoader } from '../Redux/actions';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate } from 'react-router-dom';
toast.configure()

const Login = () =>{

    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[failed,setFailed] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const provider = new GoogleAuthProvider()

    const googleLogin = () =>{
        signInWithPopup(auth,provider)
        .then(result=>{
            dispatch(loggedIn())
            dispatch(hideLogin())
            toast.success("Logged in successfully",
            {position: toast.POSITION.BOTTOM_RIGHT})
            localStorage.setItem('auth',JSON.stringify(result))
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const emailLogin =(e) =>{
        dispatch(showLoader())
        e.preventDefault()
        signInWithEmailAndPassword(auth,email,password)
        .then(res=>{
            dispatch(hideLoader())
            toast.success("Logged in successfully")
            dispatch(hideLogin())
            localStorage.setItem('auth',JSON.stringify(res))
        })
        .catch(err=>{
            dispatch(hideLoader())
            setFailed(true)
        })
    } 

    const toSignup=()=>{
        dispatch(hideLogin())
        navigate('/signup')
        
    }

    return(
        <>
        <div style={
            {
                "height":100+"%",
                "width":100+"%",
                "position":"fixed",
                "zIndex":99999,
                "opacity":0.8,
                "backgroundColor":"black"
            }
        }>
        </div>
          <div style={
            {
                "height":100+"%",
                "width":100+"%",
                "position":"fixed",
                "display":"flex",
                "alignItems":"center",
                "justifyContent":"center",
                "zIndex":999999,
            }
        }>
           <div className='container'>
               <div className='row px-3'>
                   <div className='col-lg-4'></div>
                   <div className='col-lg-4 bg-light px-3 py-3 rounded animate__animated animate__bounceIn'>
                   <div className='h5 text-center'>Login to your account <span onClick={()=>dispatch(hideLogin())}><i className='fas fa-times' style={{"float":"right","fontSize":18+"px"}}></i></span></div>
                    <div className='mt-3'>
                        <form onSubmit={emailLogin}>
                            <label htmlFor="">Email</label>
                            <input value={email} onChange={e=>setEmail(e.target.value)} type="text" className='form-control' placeholder='Email address here' required/>

                            <label className='mt-2' htmlFor="">Password</label>
                            <input value={password} onChange={e=>setPassword(e.target.value)} type="password" className='form-control' placeholder='Password here' required/>

                            {
                                failed &&
                                <div className='bg-danger text-light px-2 py-1 rounded mt-2 animate__animated animate__shakeX'>
                                    Invalid email or password
                                </div>

                            }
                            <button className='form-control mt-3' style={{"backgroundColor":"#CF4ABF","color":"white"}}>Login</button>
            
                        </form>
                        <div className='text-center mt-2'>or</div>
                        <button onClick={()=>googleLogin()}  className='form-control mt-2' style={{"fontSize":18+"px"}}> <img className='img-fluid' style={{"maxWidth":9+"%"}} src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" /> Continue with google</button>
                    </div>
                    <div className='text-center mt-3' style={{"fontSize":16+"px"}} onClick={()=>toSignup()}>I don't have an account</div>
                   </div>
                   <div className='col-lg-4'></div>
               </div>
           </div>
        </div>
        </>
    )
}

export default Login