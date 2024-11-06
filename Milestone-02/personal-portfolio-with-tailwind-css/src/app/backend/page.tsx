import React from 'react';
import Particle from '../Components/Particle';

export default function Backend() {
  return (
    <div
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center bg-blue-950 p-4"
      style={{ backgroundImage: "url('/c1.png')" }}
    >
      <div className="border-2 border-black bg-gradient-to-r from-gray-400 to-gray-600  h-auto sm:h-40 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl p-4 sm:px-6 rounded-2xl shadow-xl shadow-black">
        <h1 className="text-base sm:text-lg md:text-xl font-extrabold font-serif text-black mt-4 sm:mt-6">
          Your message has been sent successfully. We will get in touch with you shortly.
        </h1>
      </div>
    </div>
  );
}
