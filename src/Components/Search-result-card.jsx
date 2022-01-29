import React from 'react';
import { Link } from 'react-router-dom';

const SeacrhResultCard = () =>{
    return(
        <Link to="/product-details" style={{"textDecoration":"none","color":"black"}}>
        <div className='row px-2 p-2 border rounded mt-2 animate__animated animate__slideInUp'>
            <div className='col-lg-5 col-5 text-center'>
                <img src="https://images-na.ssl-images-amazon.com/images/I/61Iz2yy2CKL.jpg" alt="book" className='img-fluid' style={{"maxWidth":60+"%"}}/>
            </div>
            <div className='col-lg-7 col-7'>
                <div>
                    The monk who sold his ferrari
                </div>
                <div className='mt-2' style={{"fontSize":16+"px"}}>
                    Robin sharma
                </div>
            </div>
        </div>
        </Link>
    )
}


export default SeacrhResultCard