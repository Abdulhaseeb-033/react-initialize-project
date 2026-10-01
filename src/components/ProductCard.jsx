import { useNavigate } from "react-router-dom";
import { ShoppingCart, Eye, Star, Heart } from "lucide-react";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div className="group relative bg-[#0f172a] rounded-[2rem] overflow-hidden border border-gray-800 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
      
      
      <div className="relative h-60 bg-white m-2 rounded-[1.8rem] flex items-center justify-center p-8 overflow-hidden">

        <button className="absolute top-4 right-4 p-2 bg-gray-50 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all shadow-sm">
          <Heart size={18} />
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </div>

    
      <div className="p-6 pt-2">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-xl text-white truncate w-44 group-hover:text-blue-400 transition-colors">
              {product.name}
            </h3>
            <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mt-1">
              {product.brand}
            </p>
          </div>
          <div className="flex items-center gap-1 bg-gray-800/50 px-2 py-1 rounded-lg text-yellow-400 text-sm font-bold">
            <Star size={14} fill="currentColor" /> {product.rating}
          </div>
        </div>

        
        <div className="mt-4">
          <span className="text-2xl font-black text-blue-500">
            {product.price}
          </span>
        </div>

        
        <div className="flex flex-col gap-3 mt-6">
          
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-blue-600/20">
            <ShoppingCart size={18} /> Add to Cart
          </button>
          
          
          <button 
            className="w-full bg-transparent border border-gray-700 hover:border-white text-gray-400 hover:text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <Eye size={18} /> View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;