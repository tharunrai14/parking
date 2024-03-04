import React from 'react';
 import tailwindcss from 'tailwindcss/tailwind.css'
import { useRouter } from 'next/router';

const HomePage = () => {

     const router = useRouter();
    const handleClick = () => {
        event.preventDefault();
    // Redirect to the desired route
    router.push('/book');
  };
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <img src="/your-logo.png" className="h-7 sm:h-8" />
                        </div>
                        <div className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <p>An advanced online parking booking system.</p>
                                <form className="mt-6" >
                                    <div>
                                        <label htmlFor="location" className="sr-only">Location</label>
                                        <input id="location"  type="text" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Enter your location" />
                                    </div>
                                    <div className="mt-6">
                                        <button  onClick={handleClick} className="w-full px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md focus:outline-none">Book a parking space</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;