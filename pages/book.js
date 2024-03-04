import React from 'react';
// import {useClient} from "next"
import tailwindcss from 'tailwindcss/tailwind.css'

const Book = () => {
    // useClient();
    // const [location, setLocation] = useState('');
    // const [date, setDate] = useState('');
    // const [time, setTime] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Handle submission logic here
    // };
const vehicleTypes = ["Car", "Motorcycle", "Van", "Truck"];
    return (
            <div className="bg-gradient-to-r from-blue-400 to-indigo-500 min-h-screen">
      <div className="container mx-auto py-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">Parking Booking</h1>
          <form>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="location">Location</label>
              <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text" id="location" name="location" placeholder="Enter location" />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="vehicleType">Vehicle Type</label>
              <div className="relative">
                <select className="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-2 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="vehicleType" name="vehicleType">
                  {vehicleTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/></svg>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="date">Date</label>
              <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="date" id="date" name="date" />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="time">Time</label>
              <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="time" id="time" name="time" />
            </div>
            <div className="mb-6">
              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300" type="submit">Book Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    );
};

export default Book;