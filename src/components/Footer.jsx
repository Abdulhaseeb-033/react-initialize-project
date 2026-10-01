import { Mail, Phone, MapPin, ShieldCheck, Zap, RotateCcw, CreditCard } from "lucide-react";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

import logoPath from "../assets/images/Logo.png.jpeg";

function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-10 border-t border-gray-900 mt-20">
      <div className="container mx-auto px-6 max-w-7xl">
        
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
      
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={logoPath} alt="buyNova Logo" className="h-10 w-auto" />
              <span className="text-2xl font-black italic tracking-tighter">buy<span className="text-blue-500">Nova</span></span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Experience the future of tech shopping in Pakistan. "Buy Smart. Live Better."
            </p>
          
            <div className="space-y-4">
              <p className="text-gray-400 text-xs font-bold uppercase">Newsletter</p>
              <div className="flex bg-[#161e2d] p-1.5 rounded-xl border border-gray-800 focus-within:border-blue-500/50 transition-all">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-transparent border-none text-xs px-3 focus:outline-none w-full"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-all">
                  <Zap size={16} fill="white" />
                </button>
              </div>
            </div>
          </div>

        
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 border-l-4 border-blue-600 pl-3">Resources</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-medium">
              <li><NavLink to="/products" className="hover:text-white transition-colors">Latest Gadgets</NavLink></li>
              <li><NavLink to="/blog" className="hover:text-white transition-colors">Tech News</NavLink></li>
              <li><NavLink to="/guides" className="hover:text-white transition-colors">Buying Guides</NavLink></li>
              <li><NavLink to="/faq" className="hover:text-white transition-colors">Customer FAQs</NavLink></li>
            </ul>
          </div>

      
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 border-l-4 border-blue-600 pl-3">Company</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-medium">
              <li><NavLink to="/about" className="hover:text-white transition-colors">About Our Brand</NavLink></li>
              <li><NavLink to="/careers" className="hover:text-white transition-colors">Join Our Team</NavLink></li>
              <li><NavLink to="/terms" className="hover:text-white transition-colors">Terms of Service</NavLink></li>
              <li><NavLink to="/privacy" className="hover:text-white transition-colors">Privacy Policy</NavLink></li>
            </ul>
          </div>

        
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 border-l-4 border-blue-600 pl-3">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400 group cursor-pointer hover:text-blue-500 transition-colors">
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm">hello@buynova.pk</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-blue-500 transition-colors">
                <Phone size={18} />
                <span className="text-sm">+92 321 8273645</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} />
                <span className="text-sm">Karachi, Pakistan</span>
              </div>
            </div>
          </div>

        </div>


        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-10 border-y border-gray-900 mb-10">
          <div className="flex items-center gap-4 group">
            <div className="bg-blue-600/10 p-3 rounded-2xl group-hover:bg-blue-600 transition-all">
              <ShieldCheck className="text-blue-500 group-hover:text-white" size={24} />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-tighter">SSL Secured</p>
              <p className="text-[10px] text-gray-500">256-bit Encryption</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="bg-blue-600/10 p-3 rounded-2xl group-hover:bg-blue-600 transition-all">
              <Zap className="text-blue-500 group-hover:text-white" size={24} />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-tighter">Official Store</p>
              <p className="text-[10px] text-gray-500">Authentic Tech Only</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="bg-blue-600/10 p-3 rounded-2xl group-hover:bg-blue-600 transition-all">
              <RotateCcw className="text-blue-500 group-hover:text-white" size={24} />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-tighter">Easy Return</p>
              <p className="text-[10px] text-gray-500">7 Days Exchange</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="bg-blue-600/10 p-3 rounded-2xl group-hover:bg-blue-600 transition-all">
              <CreditCard className="text-blue-500 group-hover:text-white" size={24} />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-tighter">Safe Payments</p>
              <p className="text-[10px] text-gray-500">COD & Card Supported</p>
            </div>
          </div>
        </div>

      
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          
          <p className="text-gray-600 text-xs font-medium order-3 lg:order-1">
            © 2026 <span className="text-blue-500">buyNova</span> Store Pakistan. All Rights Reserved.
          </p>
          
          
          <div className="flex items-center gap-4 order-1 lg:order-2">
            <a href="https://www.instagram.com/" className="text-gray-500 hover:text-blue-500 transition-colors"><FaInstagram size={18} /></a>
            <a href="https://www.facebook.com/" className="text-gray-500 hover:text-blue-500 transition-colors"><FaFacebookF size={18} /></a>
            <a href="https://www.twitter.com/" className="text-gray-500 hover:text-blue-500 transition-colors"><FaTwitter size={18} /></a>
            <a href="https://www.whatsapp.com/" className="text-gray-500 hover:text-blue-500 transition-colors"><FaWhatsapp size={18} /></a>
            <a href="https://www.youtube.com/" className="text-gray-500 hover:text-blue-500 transition-colors"><FaYoutube size={18} /></a>
          </div>

    
          <div className="flex items-center gap-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all order-2 lg:order-3">
             <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mr-2">We Accept:</span>
             <div className="h-6 w-10 bg-gray-800 rounded flex items-center justify-center text-[8px] font-black italic">VISA</div>
             <div className="h-6 w-10 bg-gray-800 rounded flex items-center justify-center text-[8px] font-black italic">COD</div>
             <div className="h-6 w-10 bg-gray-800 rounded flex items-center justify-center text-[8px] font-black italic tracking-tighter">JazzCash</div>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;