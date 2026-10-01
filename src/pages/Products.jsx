import { products } from "../utils/Product";
import ProductCard from "../components/ProductCard";
import { ShoppingBag, Sparkles } from "lucide-react";

function Products() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-28 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        
        
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 px-4 py-1.5 rounded-full text-blue-500 text-xs font-bold uppercase tracking-widest animate-pulse">
            <Sparkles size={14} />
            <span>Premium Tech Collection</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase">
            All <span className="text-blue-600">Mobiles</span>
          </h1>
          
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Discover the next generation of mobile technology. "Buy Smart. Live Better." 
            Experience high-performance flagship devices curated for your lifestyle.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent mx-auto mt-6"></div>
        </div>

    
        <div className="flex justify-center gap-10 mb-12 opacity-50 grayscale">
           <div className="text-center">
              <p className="text-xl font-bold">100%</p>
              <p className="text-[10px] uppercase tracking-widest font-black">Original</p>
           </div>
           <div className="text-center border-x border-gray-800 px-10">
              <p className="text-xl font-bold">Fast</p>
              <p className="text-[10px] uppercase tracking-widest font-black">Delivery</p>
           </div>
           <div className="text-center">
              <p className="text-xl font-bold">Secure</p>
              <p className="text-[10px] uppercase tracking-widest font-black">Warranty</p>
           </div>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((p) => (
            <div key={p.id} className="animate-in fade-in slide-in-from-bottom-6 duration-700">
              <ProductCard product={p} />
            </div>
          ))}
        </div>

      
        {products.length === 0 && (
          <div className="text-center py-32 space-y-4 border border-dashed border-gray-900 rounded-3xl mt-10">
            <ShoppingBag size={48} className="mx-auto text-gray-800" />
            <p className="text-gray-600 italic font-medium">
              No flagship devices available in this sector yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;