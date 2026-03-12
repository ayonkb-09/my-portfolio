import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* লোগো বা তোমার নাম */}
        <div className="text-2xl font-bold text-teal-400 cursor-pointer">
          Ayon
        </div>

        {/* ডেস্কটপ মেনু */}
        <ul className="hidden md:flex space-x-8 text-slate-300 font-medium">
          <li className="hover:text-teal-400 cursor-pointer transition duration-300">About</li>
          <li className="hover:text-teal-400 cursor-pointer transition duration-300">Skills</li>
          <li className="hover:text-teal-400 cursor-pointer transition duration-300">Projects</li>
          <li className="hover:text-teal-400 cursor-pointer transition duration-300">Contact</li>
        </ul>

        {/* মোবাইল মেনুর আইকন (আপাতত সিম্পল রাখছি) */}
        <button className="md:hidden text-teal-400 text-2xl">
          ☰
        </button>

      </div>
    </nav>
  );
};

export default Navbar;