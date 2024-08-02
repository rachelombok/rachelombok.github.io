import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import errorgif from '../images/misc/404.gif';

export default function NotFoundPage() {
    const navigate = useNavigate();

    return(
<section className="bg-neutral">
    <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
            <img src={errorgif} className='my-6 border-4 border-solid rounded border-base-content'/>
            <h1 className="mt-3 text-2xl font-semibold md:text-3xl text-neutral-content">Oops! Page not found</h1>
            <p className="mt-4 text-neutral-content">The page you are looking for doesn't exist.</p>

            <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
        
                <button onClick={() => navigate(-1)} className="flex items-center justify-center w-1/2 px-5 py-2 text-sm transition-colors duration-200 border border-2 rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100 text-base-content bg-base-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>


                   
                    <span>Go back</span>
                   

                </button>
                <Link to="/">
                
                <button className="w-1/2 px-5 py-2 text-sm border border-2 tracking-wide text-primary-content transition-colors duration-200 rounded-lg shrink-0 sm:w-auto hover:bg-primary-content hover:text-primary bg-primary">
                    Take me home
                </button>
                </Link>
            </div>
        </div>
    </div>
</section>
    );
};