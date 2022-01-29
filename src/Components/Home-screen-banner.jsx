import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeScreenBanner = () =>{

    const navigate = useNavigate()

    return(
            <div className='container'>
                <div className='row mt-3' style={{"backgroundColor":"#D4E7FE"}}>
                    <div className='col-lg-6 text-center'>
                        <img className='img-fluid' src="https://image.freepik.com/free-vector/top-view-hands-holding-books-flat-illustration_74855-17930.jpg" alt="" />
                    </div>
                    <div className='col-lg-6'>
                        <div className='mt-5'>
                            <div className='h4'>
                                <b>
                                    All the books to satisfy  
                                </b>
                            </div>
                            <div className='h4'>
                                <b>
                                   the reader inisde you
                                </b>
                            </div>
                        </div>
                        <div className='row py-4'>
                            <div className='col-lg-8 col-9'>
                                <input type="text" className='form-control py-2' placeholder='Search your next read'/>
                            </div>
                            <div className='col-lg-2 col-3'>
                                <button className='form-control py-2' style={{"backgroundColor":"#945AE0","color":"white"}} onClick={()=>navigate('/search-results')}>Go</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default HomeScreenBanner