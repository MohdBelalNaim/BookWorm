import React from 'react';
import { Link } from 'react-router-dom';
import AuthorCard from '../Components/Author-card';
import BookCard from '../Components/Book-card';
import HomeScreenBanner from '../Components/Home-screen-banner'

const HomeScreen = () =>{
        return(
        <div className='animate__animated animate__fadeIn'>
            <HomeScreenBanner/>
            <div>
                <div className='container mt-4 h5'> <b>Top reads</b></div>
                <div className='container'>
                    <div className='row py-2'>
                       <BookCard/>
                       <BookCard/>
                       <BookCard/>
                       <BookCard/>
                    </div>
                </div>
                <div className='container mt-4 h5'> <b>Top categories</b></div>
                <div className='container'>
                    <div className='row py-3'>
                        <div className='col-lg-3 mt-2'>
                        <Link style={{"textDecoration":"none"}} to="/category-section">
                            <div className='text-center px-3 py-4 rounded border' style={{"backgroundColor":"#945AE0","color":"white"}}>
                                Inspirational
                            </div>
                        </Link>
                        </div>
                        
                        <div className='col-lg-3 mt-2'>
                            <div className='text-center px-3 py-4 rounded border' style={{"backgroundColor":"#CF4ABF","color":"white"}}>
                                Romantic
                            </div>
                        </div>

                        <div className='col-lg-3 mt-2'>
                            <div className='text-center px-3 py-4 rounded border' style={{"backgroundColor":"#D4E7FE","color":"black"}}>
                                Educative
                            </div>
                        </div>

                        <div className='col-lg-3 mt-2'>
                            <div className='text-center px-3 py-4 rounded border' style={{"backgroundColor":"black","color":"white"}}>
                                Thriller
                            </div>
                        </div>

                    </div>
                </div>

                <div className='container mt-4 h5'> <b>Best selling authors</b></div>
                <div className='container'>
                    <div className='row py-3'>
                     <AuthorCard/>
                     <AuthorCard/>
                     <AuthorCard/>
                     <AuthorCard/>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default HomeScreen