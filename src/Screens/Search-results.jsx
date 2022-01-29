import React from 'react';
import SearchResultCard from '../Components/Search-result-card';

const SearchResults = () =>{
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4'>&nbsp;</div>
                <div className='col-lg-4'>
                    <div>
                        <div className='h5 py-3'>
                            Search results
                        </div>
                    </div>
                    <div className='px-2'>
                        <SearchResultCard/>
                        <SearchResultCard/>
                        <SearchResultCard/>
                    </div>
                </div>
                <div className='col-lg-4'>&nbsp;</div>
            </div>
        </div>
    )
}

export default SearchResults