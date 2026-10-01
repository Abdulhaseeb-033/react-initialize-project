import { useParams, useNavigate } from "react-router-dom";
import { products } from "../utils/Product";
import { ChevronRight, ShoppingCart, Zap } from "lucide-react";
import PageNotFound from "./PageNotFound";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id == id);

  if (!product) return <PageNotFound />;

  return (
    <div className="container mx-auto px-4 py-8 text-white">
      
      
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <span className="hover:text-white cursor-pointer" onClick={() => navigate("/")}>Home</span>
        <ChevronRight size={14} />
        <span className="hover:text-white cursor-pointer" onClick={() => navigate("/products")}>Products</span>
        <ChevronRight size={14} />
        <span className="text-blue-500">{product.name}</span>
      </div>

      <div className="bg-[#0f172a] rounded-[2rem] border border-gray-800 overflow-hidden shadow-2xl">
        <div className="flex flex-col lg:flex-row">
          
          
          <div className="lg:w-1/2 p-10 bg-white flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto max-h-[400px] object-contain"
            />
          </div>

          
          <div className="lg:w-1/2 p-10 flex flex-col justify-center">
            
            <h1 className="text-4xl font-black text-white mb-2">
              {product.name}
            </h1>

            
            <div className="mb-6 flex items-center gap-2">
              <span className="text-yellow-400 text-lg">⭐ {product.rating}</span>
              <span className="text-gray-500 text-sm">(Customer Rating)</span>
            </div>

            <div className="mb-8">
              <h2 className="text-4xl font-bold text-white">
                Price: {product.price}
              </h2>
              <p className="text-gray-500 text-sm mt-1 tracking-wide uppercase">
                (Inclusive of all taxes)
              </p>
            </div>

            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 border-b border-gray-800 pb-2 italic">About Product</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• <strong>Description:</strong> {product.desc}</li>
                <li>• <strong>Hardware:</strong> {product.ram} RAM / {product.storage} Storage</li>
                <li>• <strong>Camera:</strong> {product.camera}</li>
                <li>• <strong>Battery:</strong> {product.battery}</li>
                <li>• <strong>Color:</strong> {product.color}</li>
                <li>• <strong>Stock:</strong> {product.stock}</li>
              </ul>
            </div>

            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2 uppercase tracking-tighter">
                <Zap size={20} fill="black" /> Buy Now
              </button>
              <button className="flex-1 bg-gray-800 text-white font-bold py-4 rounded-xl border border-gray-700 hover:bg-gray-700 transition-all flex items-center justify-center gap-2 uppercase tracking-tighter">
                <ShoppingCart size={20} /> Add to Cart
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;