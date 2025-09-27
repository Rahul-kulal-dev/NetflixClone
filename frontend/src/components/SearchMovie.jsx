import axios from 'axios';
import React, { useState } from 'react'
import { options, Search_Movie_API } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchMovieDetails } from '../redux/SearchSlice';
import { setLoading } from '../redux/userSlice';
import MovieList from './MovieList';

function SearchMovie() {
    const [searchMovie, setSearchMovie] = useState("");
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.app.isLoading);
    const allSearchedMovies = useSelector((state) => state.search?.searchMovie);
    const moviesName = useSelector((state) => state.search?.movieName);

    const submitHandler = async (e) => {
        e.preventDefault();
        
        if (!searchMovie.trim()) {
            return;
        }

        dispatch(setLoading(true));
        
        try {
            const res = await axios.get(
                `${Search_Movie_API}${searchMovie}&include_adult=false&language=en-US&page=1`, 
                options
            );
            
            const movies = res?.data?.results;
            dispatch(setSearchMovieDetails({ searchMovie, movies }));
            
        } catch (error) {
            console.error('Search error:', error);
        } finally {
            dispatch(setLoading(false));
        }
        
        setSearchMovie("");
    }

    return (
        <div className='min-h-screen bg-black'>
            {/* Search Section */}
            <div className='flex flex-col items-center pt-20 sm:pt-24 md:pt-28 lg:pt-36 px-4'>
                <div className='w-full max-w-4xl mb-8'>
                    <form onSubmit={submitHandler} className='w-full'>
                        <div className='flex flex-col sm:flex-row gap-3 sm:gap-0 w-full'>
                            {/* Search Input */}
                            <div className='flex-1 relative'>
                                <input 
                                    value={searchMovie} 
                                    onChange={(e) => setSearchMovie(e.target.value)} 
                                    type="text"
                                    className='w-full h-12 sm:h-14 md:h-16 px-4 sm:px-6 
                                              font-semibold text-base sm:text-lg 
                                              rounded-md sm:rounded-r-none 
                                              outline-none border-2 border-gray-300 
                                              focus:border-red-500 focus:ring-2 focus:ring-red-200
                                              transition-all duration-200
                                              placeholder:text-gray-500 text-white' 
                                    placeholder='Search Movies...' 
                                    disabled={isLoading}
                                />
                            </div>
                            
                            {/* Search Button */}
                            <button 
                                type="submit"
                                disabled={isLoading || !searchMovie.trim()}
                                className='h-12 sm:h-14 md:h-16 px-6 sm:px-8 
                                          bg-red-600 hover:bg-red-700 
                                          disabled:bg-red-400 cursor-pointer
                                          text-white font-semibold text-base sm:text-lg
                                          rounded-md sm:rounded-l-none 
                                          transition-colors duration-200
                                          flex items-center justify-center
                                          min-w-[100px] sm:min-w-[120px]'
                            >
                                {isLoading ? (
                                    <span className='h-5 w-5 sm:h-6 sm:w-6 block border-2 border-l-transparent 
                                                    animate-spin border-white rounded-full'></span>
                                ) : (
                                    <span>Search</span>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Results Section */}
            <div className='px-4 pb-8'>
                {allSearchedMovies && allSearchedMovies.length > 0 && (
                    <div className='max-w-7xl mx-auto'>
                        <MovieList 
                            title={moviesName ? `Search Results for "${moviesName}"` : "Search Results"} 
                            movies={allSearchedMovies}
                        />
                    </div>
                )}
                
                {/* No Results Message */}
                {allSearchedMovies && allSearchedMovies.length === 0 && moviesName && (
                    <div className='text-center py-12'>
                        <div className='text-white text-xl mb-2'>No movies found</div>
                        <div className='text-gray-400'>
                            Try searching with different keywords
                        </div>
                    </div>
                )}
                
                {/* Loading State for Results */}
                {isLoading && (
                    <div className='text-center py-12'>
                        <div className='text-white text-lg'>Searching movies...</div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SearchMovie