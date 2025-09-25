import React, { useRef } from 'react'
import MovieCard from './MovieCard'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

function MovieList({title,movies}) {
    const scrollRef = useRef(null);

    const slideLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -600, behavior: 'smooth' });
        }
    };

    const slideRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 600, behavior: 'smooth' });
        }
    };

    return (
        <div className='bg-[#000000] px-4 md:px-10 p-5'>
            <h1 className='text-3xl md:text-5xl text-white font-semibold pt-16 md:pt-24 pb-6 px-4 md:px-10'>{title}</h1>
            
            <div className='relative group flex items-center'>
                <MdChevronLeft 
                    onClick={slideLeft} 
                    className='bg-black/60 text-white cursor-pointer absolute left-2 md:left-6 z-20 hidden group-hover:block hover:bg-black/90 hover:scale-110 rounded-full transition-all shadow-lg shadow-black' 
                    size={48} 
                />
                
                <div 
                    ref={scrollRef} 
                    className='flex overflow-x-auto no-scrollbar gap-8 px-4 md:px-10 scroll-smooth w-full'
                >
                    {
                        movies?.map((item,index)=>{
                            return ( <MovieCard key={item.id || index} item={item}/> )
                        })
                    }
                </div>
                
                <MdChevronRight 
                    onClick={slideRight} 
                    className='bg-black/60 text-white cursor-pointer absolute right-2 md:right-6 z-20 hidden group-hover:block hover:bg-black/90 hover:scale-110 rounded-full transition-all shadow-lg shadow-black' 
                    size={48} 
                />
            </div>
        </div>
    )
}

export default MovieList