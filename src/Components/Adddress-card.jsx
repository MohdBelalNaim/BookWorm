import React from 'react';

const AddressCard = () =>{
    return(
        <div className='px-3 py-3 mt-2 border rounded'>
            <div>Mohd Belal Naim</div>
            <div className='mt-1'>Near makka masjid, zahidabad, gorakhnath</div>
            <div className='mt-1'>Gorakhpur</div>
            <div className='mt-1'>Uttar pradesh 273015</div>
            <button className="form-control btn btn-danger mt-3" style={{"fontSize":16+"px"}}> <i class="px-2 fa fa-trash" aria-hidden="true"></i> Remove</button>
        </div>
    )
}

export default AddressCard