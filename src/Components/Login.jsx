import React, { useState } from 'react';

const Login = ({setLogin}) =>{

    const[signMenu,setSignMenu]=useState(false)

    const LoginMenu = () =>{
        return(
            <>
            <div className='h5 text-center'>Login to your account <span onClick={()=>setLogin(false)}><i className='fas fa-times' style={{"float":"right","fontSize":18+"px"}}></i></span></div>
            <div className='mt-3'>
                <label htmlFor="">Email</label>
                <input type="text" className='form-control' placeholder='Email address here'/>
                
                <label className='mt-2' htmlFor="">Password</label>
                <input type="password" className='form-control' placeholder='Password here'/>

                <button className='form-control mt-3' style={{"backgroundColor":"#CF4ABF","color":"white"}}>Login</button>

                <div className='text-center mt-2'>or</div>
                <button className='form-control mt-2' style={{"fontSize":18+"px"}}> <img className='img-fluid' style={{"maxWidth":9+"%"}} src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" /> Continue with google</button>
            </div>
            <div className='text-center mt-3' style={{"fontSize":16+"px"}} onClick={()=>setSignMenu(true)}>I don't have an account</div>
            </>
        )
    }

    const SignupMenu = () =>{
        return(
            <>
            <div className='h5 text-center'>Create your account <span onClick={()=>setLogin(false)}><i className='fas fa-times' style={{"float":"right","fontSize":18+"px"}}></i></span></div>
            <div className='mt-3'>
                <label htmlFor="">Email</label>
                <input type="text" className='form-control' placeholder='Email address here'/>
                
                <label className='mt-2' htmlFor="">Password</label>
                <input type="password" className='form-control' placeholder='Password here'/>

                <button className='form-control mt-3' style={{"backgroundColor":"#CF4ABF","color":"white"}}>Signup</button>
            </div>
            <div className='text-center mt-3' style={{"fontSize":16+"px"}}  onClick={()=>setSignMenu(false)}>Take me to login</div>
            </>
        )
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
                        {
                            signMenu?<SignupMenu/>:<LoginMenu/>
                        }
                   </div>
                   <div className='col-lg-4'></div>
               </div>
           </div>
        </div>
        </>
    )
}

export default Login