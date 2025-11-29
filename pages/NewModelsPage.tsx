import React from 'react';
import { Play, Zap, ArrowRight, Clock } from 'lucide-react';
import SEO from '../components/SEO';

const NewModelsPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <SEO 
        title="Hero New Bike Price in Bangladesh 2025 | Upcoming Launches"
        description="Explore the newest Hero bikes in Bangladesh. Latest prices for Karizma XMR 210, Xtreme 125R, and upcoming 2025 models."
        keywords="hero new bike price in bangladesh, hero upcoming bikes in bangladesh 2025, hero karizma xmr price in bd"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
         <div className="mb-16 text-center">
            <span className="text-hero-red font-bold text-sm tracking-widest uppercase mb-2 block">Just Arrived</span>
            {/* SEO Optimized H1 */}
            <h1 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-6">
                Hero New Bike Price in Bangladesh 2025
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto text-xl font-light">
                Discover the latest launches. From the sporty Karizma XMR to the updated 2025 commuter series.
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
                <h2 className="font-display font-bold text-4xl mb-6 tracking-tight">Karizma XMR 210</h2>
                
                <div className="space-y-5 mb-10">
                    <div className="flex justify-between items-center border-b border-slate-700 pb-3">
                        <span className="text-slate-400 font-medium">Status</span>
                        <span className="font-bold text-lg text-green-400">In Stock</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-700 pb-3">
                        <span className="text-slate-400 font-medium">Showroom Price</span>
                        <span className="font-bold text-2xl text-white">৳ 3,99,990</span>
                    </div>
                </div>
                <button className="w-full py-4 rounded-2xl bg-white text-slate-900 font-bold text-lg hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 group-hover:gap-3">
                    Book Test Ride <ArrowRight size={20} />
                </button>
              </div>
            </div>

            {/* Light Secondary Card */}
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 hover:border-hero-red/30 transition-colors shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                 <Clock size={20} className="text-hero-red" />
                 <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Trending 125cc</span>
              </div>
              <h3 className="font-display font-bold text-3xl text-slate-900 mb-4">Xtreme 125R</h3>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                  Disrupting the segment with single-channel ABS. The new "Stealth Black" color is now available.
              </p>
              <div className="flex items-center justify-between bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <span className="text-3xl font-black text-slate-900">৳ 1,55,000</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-lg uppercase tracking-wide">Best Seller</span>
              </div>
            </div>
          </div>

          {/* Media Column */}
          <div className="space-y-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-slate-900 px-2">Video Reviews</h3>
            {/* Video Placeholder 1 */}
            <div className="relative bg-slate-900 rounded-[2rem] overflow-hidden aspect-video group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500">
               <img src="https://images.unsplash.com/photo-1544866601-527da2559ccb?q=80&w=800&auto=format&fit=crop" alt="Karizma XMR Review" className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="h-20 w-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20 shadow-2xl">
                    <Play className="text-white fill-current ml-1" size={24} />
                 </div>
               </div>
               <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                 <p className="text-white font-bold text-xl mb-1">Karizma XMR 210 Review</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewModelsPage;