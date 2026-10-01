import { User, Mail, Lock } from "lucide-react";

function Register() {
  return (
    <form className="space-y-5 animate-in fade-in duration-500">
      <div>
        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
        <div className="relative mt-2">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
          <input 
            type="text" 
            placeholder="Abdul Haseeb"
            className="w-full bg-[#161e2d] border border-gray-800 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 transition-all"
          />
        </div>
      </div>

      <div>
        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
        <div className="relative mt-2">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
          <input 
            type="email" 
            placeholder="name@example.com"
            className="w-full bg-[#161e2d] border border-gray-800 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 transition-all"
          />
        </div>
      </div>

      <div>
        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Create Password</label>
        <div className="relative mt-2">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
          <input 
            type="password" 
            placeholder="••••••••"
            className="w-full bg-[#161e2d] border border-gray-800 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 transition-all"
          />
        </div>
      </div>

      <button className="w-full bg-white text-black font-black py-4 rounded-xl hover:bg-gray-200 transition-all active:scale-95">
        CREATE ACCOUNT
      </button>
    </form>
  );
}

export default Register;