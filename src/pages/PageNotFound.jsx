import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';

function PageNotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6">
      <div className="text-center space-y-8 animate-in fade-in zoom-in duration-500">
        
        
        <div className="relative inline-block">
          <h1 className="text-[120px] md:text-[180px] font-black leading-none tracking-tighter text-[#161e2d]">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <AlertCircle size={60} className="text-blue-600 animate-pulse" />
          </div>
        </div>

      
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-black italic uppercase text-white tracking-widest">
            Lost in <span className="text-blue-600">Space?</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto leading-relaxed">
            Oops! The page you're looking for has vanished into the digital void. Let's get you back to the home base.
          </p>
        </div>

        
        <div className="pt-4">
          <NavLink 
            to="/" 
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-black py-4 px-8 rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-95 group"
          >
            <Home size={18} className="group-hover:-translate-y-1 transition-transform" />
            BACK TO HOME
          </NavLink>
        </div>

      
        <div className="pt-10 flex justify-center gap-4 opacity-20">
          <div className="h-1 w-12 bg-gray-800 rounded-full"></div>
          <div className="h-1 w-1 bg-blue-600 rounded-full"></div>
          <div className="h-1 w-12 bg-gray-800 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;