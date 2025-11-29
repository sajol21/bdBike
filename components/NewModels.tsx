import React from 'react';
import { Play, Zap, Clock, ArrowRight } from 'lucide-react';

const NewModels: React.FC = () => {
  return (
    <section id="new-models" className="py-24 bg-white overflow-hidden relative">
       {/* Decorative Elements */}
       <div className="absolute top-0 left-0 w-64 h-64 bg-hero-red/5 rounded-full filter blur-3xl -ml-20 -mt-20"></div>
       <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl -mr-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
            <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-hero-red animate-pulse"></span>
                <span className="text-hero-red font-bold text-sm tracking-widest uppercase">2025-26 Lineup</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-6">
                Latest Releases & <br/><span className="text-hero-red">Arrivals</span>
            </h2>
            <p className="text-slate-600 max-w-2xl text-xl font-light leading-relaxed">
                The wait is over. The late 2025 performance series is now available in Bangladesh showrooms.
            </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Content Column */}
          <div className="space-y-8">
            {/* Dark Premium Card */}
            <div className="relative group bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl overflow-hidden hover:shadow-glow transition-shadow duration-500">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-hero-red rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <span className="px-4 py-1.5 rounded-full bg-hero-red text-white text-xs font-bold uppercase tracking-wide shadow-lg shadow-red-900/50">Market Hit</span>
                    <Zap size={20} className="text-yellow-400 fill-current" />
                </div>
                <h3 className="font-display font-bold text-4xl mb-6 tracking-tight">Karizma XMR 210</h3>
                
                <div className="space-y-5 mb-10">
                    <div className="flex justify-between items-center border-b border-slate-700 pb-3">
                        <span className="text-slate-400 font-medium">Status</span>
                        <span className="font-bold text-lg text-green-400">In Stock</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-700 pb-3">
                        <span className="text-slate-400 font-medium">Showroom Price</span>
                        <span className="font-bold text-2xl text-white">৳ 3,99,990</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-700 pb-3">
                        <span className="text-slate-400 font-medium">Power</span>
                        <span className="font-bold text-white">25.5 PS @ 9250 rpm</span>
                    </div>
                </div>
                <button className="w-full py-4 rounded-2xl bg-white text-slate-900 font-bold text-lg hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 group-hover:gap-3">
                    Book Test Ride <ArrowRight size={20} />
                </button>
              </div>
            </div>

            {/* Light Secondary Card */}
            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200 hover:border-hero-red/30 transition-colors">
              <div className="flex items-center gap-2 mb-4">
                 <Clock size={20} className="text-hero-red" />
                 <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Trending 125cc</span>
              </div>
              <h3 className="font-display font-bold text-3xl text-slate-900 mb-4">Xtreme 125R</h3>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                  Disrupting the segment with single-channel ABS and 66 kmpl mileage. The new "Stealth Black" color is now in stock.
              </p>
              <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  <span className="text-3xl font-black text-slate-900">৳ 1,55,000</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-lg uppercase tracking-wide">Best Seller</span>
              </div>
            </div>
          </div>

          {/* Media Column - Video Placeholders */}
          <div className="space-y-8 flex flex-col justify-center">
            <div className="flex items-center justify-between px-2">
                <h3 className="text-2xl font-bold text-slate-900">User Reviews (Nov '25)</h3>
                <a href="#" className="text-sm font-bold text-hero-red hover:text-red-800 transition-colors">View All</a>
            </div>
            
            {/* Video Placeholder 1 */}
            <div className="relative bg-slate-900 rounded-[2rem] overflow-hidden aspect-video group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
               <img src="https://images.unsplash.com/photo-1544866601-527da2559ccb?q=80&w=800&auto=format&fit=crop" alt="Karizma XMR Review" className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="h-20 w-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20 shadow-2xl">
                    <div className="h-14 w-14 bg-hero-red rounded-full flex items-center justify-center shadow-lg pl-1">
                        <Play className="text-white fill-current" size={24} />
                    </div>
                 </div>
               </div>
               <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                 <p className="text-white font-bold text-xl mb-1">Karizma XMR 210 Top Speed Test</p>
                 <p className="text-slate-300 text-sm font-medium">Dhaka Expressway • 12:30</p>
               </div>
            </div>

            {/* Video Placeholder 2 */}
            <div className="relative bg-slate-900 rounded-[2rem] overflow-hidden aspect-video group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
               <img src="https://images.unsplash.com/photo-1622185135505-2d795043dfeb?q=80&w=800&auto=format&fit=crop" alt="Xtreme 125R Owner Review" className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="h-20 w-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20 shadow-2xl">
                    <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center shadow-lg pl-1">
                        <Play className="text-slate-900 fill-current" size={24} />
                    </div>
                 </div>
               </div>
               <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                 <p className="text-white font-bold text-xl mb-1">Xtreme 125R: 6 Months Later</p>
                 <p className="text-slate-300 text-sm font-medium">Owner Review • 09:45</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewModels;