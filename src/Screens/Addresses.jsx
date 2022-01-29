import React from 'react';
import AddressCard from '../Components/Adddress-card';

const Addresses = () =>{
    return(
        <div className='container animate__animated animate__fadeIn'>
            <div className='row'>
                <div className='col-lg-4'>&nbsp;</div>
                <div className='col-lg-4'>
                    <div className='py-3 h5'>My addresses</div>
                    <div className='border px-2 py-2 rounded'> <i className='fas fa-plus px-1'></i> Add another address</div>
                    <div>
                        <AddressCard/>
                        <AddressCard/>
                        <AddressCard/>
                        <AddressCard/>
                    </div>
                </div>
                <div className='col-lg-4'>&nbsp;</div>
            </div>
            
        </div>
    )
}

export default Addresses