import React from 'react';
import CartItemCard from '../Components/Cart-item-card';

const Cart = () =>{
    return(
        <div className='container animate__animated animate__fadeIn'>
            <div className='row'>
                <div className='col-lg-6'>
                    <div>
                        <div className='h5 py-4'>
                            Your items
                        </div>
                        <div className='px-2'>
                            <CartItemCard/>
                            <CartItemCard/>
                            <CartItemCard/>
                            <CartItemCard/>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 px-4'>
                    <div className='h5 py-4'>
                        Cart total
                    </div>
                    <div className='border text-center py-3 rounded'>
                        <div className='row'>
                            <div className='mt-2 col-lg-6 col-6'>Total items</div>
                            <div className='mt-2 col-lg-6 col-6'>3</div>
                            
                            <div className='mt-2 col-lg-6 col-6'>Cart total</div>
                            <div className='mt-2 col-lg-6 col-6'>₹220</div>
                            
                            <div className='mt-2 col-lg-6 col-6'>Delivery charge</div>
                            <div className='mt-2 col-lg-6 col-6'>₹50</div>

                            <div className='mt-2 col-lg-6 col-6'>Order total</div>
                            <div className='mt-2 col-lg-6 col-6'>₹270</div>
                        </div>
                        <div className='px-4 mt-4'>
                            <button className='form-control' style={{"backgroundColor":"#CF4ABF","color":"white"}}>Select delivery address</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart