import React from 'react';

const AuthorCard = () =>{
    return(
    <div className='col-lg-3 col-6 mt-2'>
        <div className='border px-3 py-3'>
             <div className='text-center'> <img style={{"maxWidth":60+"%"}}  src="https://m.media-amazon.com/images/M/MV5BYzQxNTVlMjItZDQ4Zi00MzMwLWJiZTQtYzk5MDk3YjlkYjdkXkEyXkFqcGdeQXVyMTk4MDgwNA@@._V1_.jpg" className='img-fluid' alt="" /> </div>
             <div className='mt-3'>
                 <b>Danielle steel</b>
             </div>
             <div>
                 <button className='form-control mt-2' style={{"backgroundColor":"#cf4abf","color":"white"}}>See books</button>
             </div>
        </div>
    </div>
    )
}

export default AuthorCard