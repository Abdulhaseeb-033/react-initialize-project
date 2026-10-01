import { ShieldCheck, Truck, BadgeCheck, Clock, MapPin, Phone, Mail, Award } from "lucide-react";

function About() {
  return (
    <div className="container mx-auto px-4 py-12 text-white">
      
      
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-blue-950 p-12 md:p-20 rounded-3xl border border-gray-800 shadow-2xl mb-16">
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <span className="bg-blue-600/20 text-blue-400 text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-blue-600/30">
            Our Journey
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-6 leading-tight">
            Redefining Tech in <span className="text-blue-500 italic">Pakistan.</span>
          </h1>
          <p className="mt-6 text-gray-400 text-lg md:text-xl leading-relaxed">
            Founded with a vision to bridge the gap between premium technology and accessibility, 
            <span className="text-white font-semibold"> BuyNova</span> is more than just a store. 
            We are a team of tech enthusiasts dedicated to bringing you the world's most 
            advanced smartphones with zero compromise on authenticity.
          </p>
        </div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full"></div>
      </div>

      
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="bg-[#0f172a] p-10 rounded-3xl border border-gray-800 hover:border-blue-500/30 transition-all">
          <div className="bg-blue-600/10 w-fit p-3 rounded-2xl mb-6">
            <Award className="text-blue-500" size={32} />
          </div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            At BuyNova, our mission is simple: <span className="text-blue-400 italic">“Buy Smart. Live Better.”</span>  
            We strive to empower our customers by providing authentic gadgets that enhance their 
            digital lifestyle, backed by transparent pricing and world-class support.
          </p>
        </div>

        <div className="bg-[#0f172a] p-10 rounded-3xl border border-gray-800 hover:border-blue-500/30 transition-all">
          <div className="bg-blue-600/10 w-fit p-3 rounded-2xl mb-6">
            <BadgeCheck className="text-blue-500" size={32} />
          </div>
          <h2 className="text-3xl font-bold mb-4">Quality First</h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            Every device that leaves our warehouse undergoes a rigorous quality check. 
            From PTA approval status to battery health and hardware integrity, 
            we ensure that you only receive perfection.
          </p>
        </div>
      </div>

      
      <div className="mb-24">
        <h2 className="text-center text-3xl font-bold mb-12 text-[#0f172a]">The BuyNova Promise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
            <ShieldCheck className="mx-auto text-blue-500 mb-4" size={40} />
            <h3 className="font-bold text-xl mb-2">100% Original</h3>
            <p className="text-gray-500">Official brand warranty and genuine accessories in every box.</p>
          </div>
          <div className="text-center p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
            <Truck className="mx-auto text-blue-500 mb-4" size={40} />
            <h3 className="font-bold text-xl mb-2">Nationwide Express</h3>
            <p className="text-gray-500">Secure and insured delivery to your doorstep within 24-48 hours.</p>
          </div>
          <div className="text-center p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
            <BadgeCheck className="mx-auto text-blue-500 mb-4" size={40} />
            <h3 className="font-bold text-xl mb-2">Market Best Rates</h3>
            <p className="text-gray-500">Premium tech at prices that make sense. No hidden costs, ever.</p>
          </div>
        </div>
      </div>

      
      <div className="grid md:grid-cols-2 gap-8 bg-gradient-to-r from-[#0f172a] to-black p-10 rounded-3xl border border-gray-800">
        <div>
          <h2 className="text-3xl font-bold mb-6 italic">Get In Touch</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-gray-800 rounded-full group-hover:bg-blue-600 transition-colors">
                <MapPin size={20} />
              </div>
              <p className="text-gray-400 group-hover:text-white">Karachi, Sindh, Pakistan</p>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-gray-800 rounded-full group-hover:bg-blue-600 transition-colors">
                <Phone size={20} />
              </div>
              <p className="text-gray-400 group-hover:text-white">+92 321 8273645</p>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-gray-800 rounded-full group-hover:bg-blue-600 transition-colors">
                <Mail size={20} />
              </div>
              <p className="text-gray-400 group-hover:text-white">hello@buynova.pk</p>
            </div>
          </div>
        </div>

        <div className="border-l border-gray-800 md:pl-12">
          <h2 className="text-3xl font-bold mb-6 italic flex items-center gap-3">
             Store Timings <Clock className="text-blue-500" />
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between border-b border-gray-800 pb-2">
              <span className="text-gray-400">Monday - Friday</span>
              <span className="text-blue-400 font-mono">11:00 AM - 10:00 PM</span>
            </div>
            <div className="flex justify-between border-b border-gray-800 pb-2">
              <span className="text-gray-400">Saturday</span>
              <span className="text-blue-400 font-mono">12:00 PM - 09:00 PM</span>
            </div>
            <div className="flex justify-between border-b border-gray-800 pb-2">
              <span className="text-gray-400">Sunday</span>
              <span className="text-red-400 font-bold uppercase tracking-widest">Closed</span>
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-500 italic">
            *Online orders are accepted 24/7. Delivery processing starts during store hours.
          </p>
        </div>
      </div>

    </div>
  );
}

export default About;