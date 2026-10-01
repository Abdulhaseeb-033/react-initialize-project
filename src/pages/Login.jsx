import { Mail, Lock, } from "lucide-react";

function Login() {
  return (
    <form className="space-y-5 animate-in fade-in duration-500">
      
      <div>
        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
          Email Address
        </label>
        <div className="relative mt-2">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
          <input 
            type="email" 
            placeholder="name@example.com"
            className="w-full bg-[#161e2d] border border-gray-800 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-700"
          />
        </div>
      </div>

      
      <div>
        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
          Password
        </label>
        <div className="relative mt-2">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
          <input 
            type="password" 
            placeholder="••••••••"
            className="w-full bg-[#161e2d] border border-gray-800 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-700"
          />
        </div>
      </div>

      
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98] mt-2 uppercase tracking-widest">
        Sign In
      </button>

      
      <div className="pt-4 border-t border-gray-900 mt-6 text-center">
        <p className="text-gray-500 text-sm">
          Forgot your password? 
          <span className="text-white font-bold ml-2 cursor-pointer hover:text-blue-500 transition-colors">
            Reset Here
          </span>
        </p>
      </div>
    </form>
  );
}

export default Login;