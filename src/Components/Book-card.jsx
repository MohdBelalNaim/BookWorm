import React from 'react';

const BookCard = () =>{
    return(
        <div className='col-lg-3 col-6 mt-2'>
            <div className='border px-3 py-3'>
            <div className='text-center'>
                <img className='img-fluid' style={{"maxWidth":60+"%"}} src="https://images-na.ssl-images-amazon.com/images/I/61Iz2yy2CKL.jpg" alt="" />
            </div>
            <div className='mt-3'><b>The monk who sold his ferrari</b></div>
            <div className='mt-2'>By Robin Sharma</div>
            <button className='form-control mt-3' style={{"backgroundColor":"#945AE0","color":"white"}}>Add to cart</button>
        </div>
        </div>
    )
}

export default BookCard