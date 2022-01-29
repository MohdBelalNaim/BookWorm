import React from 'react';

const CartItemCard = () =>{
    return(
        <div className='row border rounded px-2 py-3 mt-2'>
            <div className='text-center col-lg-5 col-5'>
                <img src="https://images-na.ssl-images-amazon.com/images/I/61Iz2yy2CKL.jpg" alt="book" className='img-fluid' style={{"maxWidth":50+"%"}} />
            </div>
            <div className='col-lg-7 col-7'>
                <div><b>The monk who sold his ferrari</b></div>
                <div className='mt-2'>Robin sharma</div>
                <div>₹220</div>
                <div className='mt-4'>
                    <button className='btn btn-danger' style={{"fontSize":16+"px"}}> <i className='fas fa-trash px-2'></i> Remove</button>
                </div>
            </div>
        </div>

    )
}

export default CartItemCard