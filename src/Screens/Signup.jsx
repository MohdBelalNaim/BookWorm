import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { showLogin } from '../Redux/actions';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import Swal from 'sweetalert2';
toast.configure()

const Signup = () =>{


    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[verify,setVerify]=useState("")


    const navigate = useNavigate()
    const dispatch = useDispatch()
    function toLogin(){
        navigate('/')
        dispatch(showLogin())
    }

    const signup =(e) =>{
        e.preventDefault()
        if(password.length>=6){
            if(password===verify){
                createUserWithEmailAndPassword(auth,email,password)
                .then(created=>{
                    new Swal("Account created","Signin to continue","success")
                    .then(res=>{
                        navigate("/")
                        dispatch(showLogin())
                    })
                })
                .catch(err=>{
                    if(err.message==="Firebase: Error (auth/email-already-in-use)."){
                        toast.error("This email is already in use",
                        {position: toast.POSITION.BOTTOM_RIGHT})
                    }
                })
            }
            else{
                toast.error("Passwords don't match",
                {position: toast.POSITION.BOTTOM_RIGHT})
            }
        }
        else{
            toast.error("Password must have 6 characters",
            {position: toast.POSITION.BOTTOM_RIGHT}
            )
        }
    }


    return(
       <div style={{"backgroundColor":"#FEC1C2"}} className='py-5'>
            <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <div>
                        <div className='py-5'>  
                            <img className='image-fluid' style={{"maxWidth":100+"%"}} src="https://cdn.dribbble.com/users/5453970/screenshots/14277298/media/11a6ec1b79dda3cbe17151e778017576.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className='col-lg-5'>
                    <div className='animate__animated animate__bounceIn border rounded px-3 py-3 mt-4 bg-light'>
                        <div className='text-center h5'><b>Create your account</b></div>
                        <div className='mt-4'>
                            <div>
                                <form onSubmit={signup}>
                                    <label style={{"fontSize":16+"px"}} htmlFor="">Email address</label>
                                    <input value={email} onChange={e=>setEmail(e.target.value)} type="text" className='form-control'placeholder='Your email address here' required/>
                                    <label style={{"fontSize":16+"px"}} className='mt-2' htmlFor="">Create password</label>
                                    <input value={password} onChange={e=>setPassword(e.target.value)} type="password" className='form-control'placeholder='New password' required/>
                                    <label style={{"fontSize":16+"px"}} className='mt-2' htmlFor="">Confirm password</label>
                                    <input value={verify} onChange={e=>setVerify(e.target.value)} type="password" className='form-control' placeholder='Confirm password' required/>

                                    <button className='form-control mt-4' style={{"backgroundColor":"#CF4ABF","color":"white"}}>Signup</button>
                                </form>
                            </div>
                        </div>
                        <div className='mt-3 text-center' onClick={toLogin} style={{"fontSize":16+"px"}}>Take me to login</div>
                    </div>
                </div>
            </div>
        </div>
       </div>
    )
}

export default Signup