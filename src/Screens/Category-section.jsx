import React from 'react';
import BookCard from '../Components/Book-card';

const CategorySection = () =>{
    return(
        <div className='animate__animated animate__fadeIn'>
            <div className='text-center bg-dark text-light h5 py-5'>
                Thrillers
            </div>
            <div className='container'>
                <div className='row'>
                    <BookCard/>
                    <BookCard/>
                    <BookCard/>
                    <BookCard/>
                    <BookCard/>
                    <BookCard/>
                    <BookCard/>
                    <BookCard/>
                    <BookCard/>
                    <BookCard/>
                    <BookCard/>
                    <BookCard/>
                    <BookCard/>

                </div>
            </div>
        </div>
    )
}

export default CategorySection