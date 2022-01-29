import React from 'react';

const MyAccount = () =>{

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
                   <div className='h5'>Manage your account </div>
                    <div className='mt-3'>
                        <label htmlFor="">Email</label>
                        <input type="text" className='form-control' placeholder='Email address here'/>

                        <label className='mt-2' htmlFor="">Password</label>
                        <input type="password" className='form-control' placeholder='Password here'/>

                        <button className='form-control mt-3' style={{"backgroundColor":"#CF4ABF","color":"white"}}>Login</button>

                        <div className='text-center mt-2'>or</div>
                        <button className='form-control mt-2' style={{"fontSize":18+"px"}}> <img className='img-fluid' style={{"maxWidth":9+"%"}} src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" /> Continue with google</button>
                    </div>

                   </div>
                   <div className='col-lg-4'></div>
               </div>
           </div>
        </div>
        </>
    )
}

export default MyAccount