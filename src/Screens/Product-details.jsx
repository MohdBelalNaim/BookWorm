import React from 'react';

const ProductDetails = () =>{
    return(
        <div className='container animate__animated animate__fadeIn'>
            <div className='row'>
                <div className='col-lg-6 text-center'>
                    <img src="https://images-na.ssl-images-amazon.com/images/I/61Iz2yy2CKL.jpg" style={{"maxWidth":45+"%"}} className='img-fluid mt-4' alt="" />
                </div>
                <div className='col-lg-6'>
                    <div className='mt-5'>
                        <div className='h4'>The monk who sold his ferrari</div>
                        <div className='h5' >Robin sharma</div>
                    </div>

                    <div className='row mt-4'>
                        <div className='col-lg-4 col-6'>
                            <div className='border text-center px-2 py-2'>
                                <div className='text-center'>Pages</div>
                                <div className='h4 mt-2'><i className='fas fa-book-open'></i></div>
                                <div style={{"fontSize":16+"px"}}>227 pages</div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-6'>
                            <div className='border text-center px-2 py-2'>
                                <div className='text-center'>Language</div>
                                <div className='h4 mt-2'><i className='fas fa-language'></i></div>
                                <div style={{"fontSize":16+"px"}}>English</div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-4'>
                        <span className='h4'>₹220</span> <span style={{"fontSize":16+"px"}} className='px-2'>(Taxes included)</span>
                    </div>
                    <div className='mt-4'>
                        <button className='btn border py-2' style={{"backgroundColor":"#CF4ABF","color":"white"}}>Add to cart <i className='fas fa-plus px-1'></i></button>
                    </div>

                    <div className='mt-5 h5'>
                        <b>About the book</b>
                    </div>
                    <div className='mt-3'>
                        <p>
                        The Monk Who Sold His Ferrari: A Fable About Fulfilling Your Dreams and Reaching Your Destiny by motivational speaker and author Robin Sharma is an inspiring tale that provides a step-by-step approach to living with greater courage, balance, abundance and joy. The Monk Who Sold His Ferrari tells the extraordinary story of Julian Mantle, a lawyer forced to confront the spiritual crisis of his out-of-balance life, and the subsequent wisdom that he gains on a life-changing odyssey that enables him to create a life of passion, purpose and peace.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails