import React from 'react';
import { Facebook, Instagram, Youtube, Bike } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-hero-red p-2 rounded-xl">
                 <Bike className="h-6 w-6 text-white" />
              </div>
              <span className="font-display font-extrabold text-2xl tracking-tight">bd<span className="text-hero-red">Bike</span></span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              The ultimate resource for <span className="text-white">Hero bike price in Bangladesh</span>. 
              Updated for 2025-26 market rates.
            </p>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-bold text-lg mb-8 text-white tracking-wide">Price Lists</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li><a href="#/prices" className="hover:text-hero-red transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-hero-red transition-colors"></span>Hero Price List 2025</a></li>
              <li><a href="#/125cc" className="hover:text-hero-red transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-hero-red transition-colors"></span>125cc Bike Prices</a></li>
              <li><a href="#/prices" className="hover:text-hero-red transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-hero-red transition-colors"></span>Sports Bike Prices</a></li>
            </ul>
          </div>

           {/* Links 2 */}
          <div>
            <h4 className="font-bold text-lg mb-8 text-white tracking-wide">Rider's Corner</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li><a href="#/new-models" className="hover:text-hero-red transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-hero-red transition-colors"></span>New 2025 Models</a></li>
              <li><a href="#/guide" className="hover:text-hero-red transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-hero-red transition-colors"></span>Maintenance Tips</a></li>
              <li><a href="#/guide" className="hover:text-hero-red transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-hero-red transition-colors"></span>Common Questions</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-lg mb-8 text-white tracking-wide">Community</h4>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="h-12 w-12 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1"><Facebook size={20} /></a>
              <a href="#" className="h-12 w-12 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white transition-all duration-300 hover:-translate-y-1"><Instagram size={20} /></a>
              <a href="#" className="h-12 w-12 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white transition-all duration-300 hover:-translate-y-1"><Youtube size={20} /></a>
            </div>
            <p className="text-xs text-slate-600">
              *Disclaimer: bdBike is an independent portal. Prices may vary by showroom.
            </p>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm font-medium">
          <p>&copy; 2025-26 bdBike. All rights reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
             <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;