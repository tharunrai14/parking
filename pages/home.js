import React from 'react';
 import tailwindcss from 'tailwindcss/tailwind.css'
import { useRouter } from 'next/router';
import { FaBolt } from "react-icons/fa";
const HomePage = () => {

     const router = useRouter();
    const handleClick = (event) => {
        event.preventDefault();
    // Redirect to</div> the desired route
    router.push('/book');
  };
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="flex items-center justify-between px-4 py-2 bg-white shadow">
                <div>
                    <img src="https://api.time.com/wp-content/uploads/2015/02/apple-logo.jpg" alt="Logo" className="h-8 w-auto" />
                </div>
                <div>
                    <button onClick={() => router.push('/book')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Book
                    </button>
                    <button onClick={() => router.push('/rent')} className="ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Rent
                    </button>
                </div>
            </div>
            <div className="relative py-3 sm:max-w-xl sm:mx-auto"></div>
            
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <img src="https://api.time.com/wp-content/uploads/2015/02/apple-logo.jpg" className="h-7 sm:h-8" />
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
                                        <button   onClick={handleClick} className="w-full mr-auto px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md focus:outline-none"> <FaBolt /> Book a parking space</button>
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