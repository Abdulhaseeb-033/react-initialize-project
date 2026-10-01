import { products } from "../utils/Product";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";
import { ShoppingBag, Truck, ShieldCheck, Zap, ArrowRight, Info, Users } from "lucide-react";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8 text-white">
      

      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-blue-950 p-10 md:p-20 rounded-3xl border border-gray-800 shadow-2xl">
        <div className="relative z-10 md:w-3/4">
          <span className="bg-blue-600/20 text-blue-400 text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-blue-600/30">
            Welcome to BuyNova
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mt-6 leading-tight tracking-tighter">
            Buy Smart. <br />
            <span className="text-blue-500 italic">Live Better.</span>
          </h1>
          <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed">
            Experience the future of mobile shopping in Pakistan. At BuyNova, we bring you cutting-edge 
            technology with a commitment to authenticity and style.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-full transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20"
              onClick={() => navigate("/products")}
            >
              Explore Store <ShoppingBag size={20} />
            </button>
            
          
            <button
              className="bg-transparent border border-gray-700 hover:border-blue-500 text-gray-300 font-bold px-10 py-4 rounded-full transition-all flex items-center gap-2"
              onClick={() => navigate("/about")}
            >
              Our Story <Info size={20} />
            </button>
          </div>
        </div>
        
        
        <div className="absolute -right-20 -top-20 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        <div className="bg-[#0f172a] p-8 rounded-2xl border border-gray-800 hover:bg-gray-900 transition-all">
          <Truck className="text-blue-500 mb-4" size={32} />
          <h3 className="text-xl font-bold mb-2">Lightning Fast Delivery</h3>
          <p className="text-gray-500">Safe and trackable shipping across Karachi, Lahore, Islamabad, and nationwide.</p>
        </div>

        <div className="bg-[#0f172a] p-8 rounded-2xl border border-gray-800 hover:bg-gray-900 transition-all">
          <ShieldCheck className="text-blue-500 mb-4" size={32} />
          <h3 className="text-xl font-bold mb-2">PTA Approved Only</h3>
          <p className="text-gray-500">Every device is 100% genuine, PTA approved, and comes with an official warranty.</p>
        </div>

        <div className="bg-[#0f172a] p-8 rounded-2xl border border-gray-800 hover:bg-gray-900 transition-all">
          <Zap className="text-blue-500 mb-4" size={32} />
          <h3 className="text-xl font-bold mb-2">Smart Pricing</h3>
          <p className="text-gray-500">Premium tech shouldn't break the bank. We offer the most competitive rates in Pakistan.</p>
        </div>
      </div>

      
      <div className="mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-blue-500">Today's Hot Picks</h2>
            <p className="text-gray-500 mt-2 text-lg italic">"Buy Smart. Live Better." — Chosen for performance and value.</p>
          </div>
          <button 
            className="group flex items-center gap-2 text-blue-500 font-semibold text-lg"
            onClick={() => navigate("/products")}
          >
            Browse Full Catalog <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 3).map((p) => (
            <div key={p.id} className="group">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>

      
      <div className="mt-24 grid md:grid-cols-2 gap-8">
        
        <div className="bg-gradient-to-r from-gray-900 to-[#1e293b] p-10 rounded-3xl border border-gray-800 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-4">Who is BuyNova?</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              More than just a mobile store, BuyNova is a community of tech enthusiasts. 
              We believe in quality and transparency. Learn more about our mission and why 
              thousands of customers trust us for their digital upgrades.
            </p>
          </div>
          <button 
            onClick={() => navigate("/about")}
            className="w-fit text-blue-400 font-bold flex items-center gap-2 hover:text-white transition-colors"
          >
            Read Our Story <ArrowRight size={18} />
          </button>
        </div>

        
        <div className="bg-blue-600/10 p-10 rounded-3xl border border-blue-600/20 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-400 flex items-center gap-2">
               Connect with us <Users size={24} />
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Don't miss out on daily tech news, flash sales, and giveaway alerts. 
              Join the <strong>#BuyNovaFamily</strong> on our social platforms. 
              Check the links in the footer to follow us!
            </p>
          </div>
          <p className="text-sm text-gray-500 uppercase font-bold tracking-widest">
            Scroll down to find our social links
          </p>
        </div>
      </div>

      
      <div className="mt-24 py-16 border-t border-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-500">Never Miss a Drop.</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">Get notified first when the latest flagships land at BuyNova.</p>
        <div className="flex max-w-md mx-auto gap-3 p-1 bg-[#0f172a] rounded-xl border border-gray-800 focus-within:border-blue-500">
          <input 
            type="email" 
            placeholder="your@email.com" 
            className="flex-1 bg-transparent px-4 py-3 outline-none text-white"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-colors">
            Subscribe
          </button>
        </div>
      </div>

    </div>
  );
}

export default Home;