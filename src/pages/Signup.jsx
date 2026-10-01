import { Outlet, NavLink } from "react-router-dom";
import { ShieldCheck, LogIn, UserPlus, } from "lucide-react";
import { FaChrome } from "react-icons/fa";

function Signup() {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-black text-white flex flex-col items-center">
      
      
      <div className="text-center mb-8 px-4">
        <div className="bg-blue-600/10 w-fit p-3 rounded-2xl mb-4 mx-auto border border-blue-500/20">
          <ShieldCheck className="text-blue-500" size={32} />
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight">
          Welcome to <span className="text-blue-500 italic">BuyNova</span>
        </h1>
        <p className="text-gray-500 mt-2 text-sm md:text-base max-w-xs mx-auto">
          "Buy Smart. Live Better." — Join Pakistan's premium tech store.
        </p>
      </div>

      
      <div className="w-full max-w-[450px] px-4">
        <div className="bg-[#0a0a0a] rounded-[2.5rem] border border-gray-800 p-3 shadow-2xl shadow-blue-900/10">
          
          
          <div className="flex bg-black/50 rounded-2xl p-1 mb-4 border border-gray-900">
            <NavLink 
              to="login" 
              className={({ isActive }) => 
                `flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all duration-300 ${
                  isActive ? "bg-white text-black shadow-xl" : "text-gray-500 hover:text-white"
                }`
              }
            >
              <LogIn size={18} /> Login
            </NavLink>

            <NavLink 
              to="register" 
              className={({ isActive }) => 
                `flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all duration-300 ${
                  isActive ? "bg-white text-black shadow-xl" : "text-gray-500 hover:text-white"
                }`
              }
            >
              <UserPlus size={18} /> Register
            </NavLink>
          </div>

          
          <div className="p-4 md:px-6">
            <Outlet />
          </div>

          
          
    
          <div className="flex items-center gap-4 my-4 px-6">
            <div className="h-[1px] flex-1 bg-gray-800"></div>
            <span className="text-xs text-gray-600 font-bold uppercase tracking-widest">OR</span>
            <div className="h-[1px] flex-1 bg-gray-800"></div>
          </div>

          
          <div className="px-6 pb-4">
            <button className="w-full bg-[#161e2d] border border-gray-800 text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-gray-800 transition-all active:scale-95">
              <FaChrome size={20} className="text-blue-400" />
              Continue with Google
            </button>
          </div>
          
          

        </div>

        
        <div className="mt-10 grid grid-cols-3 gap-4 px-2">
            <div className="text-center">
                <div className="text-blue-500 font-bold text-lg">Fast</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-tighter">Checkout</div>
            </div>
            <div className="text-center border-x border-gray-800">
                <div className="text-blue-500 font-bold text-lg">Easy</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-tighter">Tracking</div>
            </div>
            <div className="text-center">
                <div className="text-blue-500 font-bold text-lg">Exclusive</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-tighter">Discounts</div>
            </div>
        </div>

        
        <p className="mt-8 text-center text-gray-600 text-xs">
          Need help? <span className="text-blue-500 cursor-pointer hover:underline">Contact BuyNova Support</span>
        </p>

        
        <div className="mt-6 flex justify-center items-center gap-6 text-gray-600 border-t border-gray-900 pt-6">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
            SSL Secure
          </div>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
            Official Store
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;