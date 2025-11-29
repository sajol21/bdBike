import React from 'react';
import { bikeData } from '../data';
import { Fuel, Gauge, Zap, ChevronRight } from 'lucide-react';

const CCSegment: React.FC = () => {
  // Filter for 125cc bikes
  const bikes125 = bikeData.filter(b => b.cc === '125cc');

  return (
    <section id="125cc" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:flex md:justify-between md:items-end">
            <div className="md:w-2/3">
                <span className="inline-block py-1.5 px-4 rounded-full bg-red-100 text-hero-red text-xs font-bold uppercase tracking-widest mb-4">Top Segment</span>
                <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 leading-tight">
                    Hero 125cc Price <span className="text-slate-400">Range</span>
                </h2>
                <p className="mt-6 text-xl text-slate-500 font-light">
                    Perfect balance of power and economy. The 125cc range is the most searched segment for daily commuting.
                </p>
            </div>
            <div className="mt-8 md:mt-0">
                <a href="#prices" className="group inline-flex items-center text-hero-red font-bold text-lg hover:text-red-800 transition">
                    View Full Spec Sheet 
                    <div className="ml-2 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center group-hover:bg-red-200 transition-colors">
                        <ChevronRight size={18} />
                    </div>
                </a>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bikes125.map((bike) => (
            <div key={bike.id} className="group bg-white rounded-[2rem] shadow-soft hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-slate-100">
              <div className="relative h-64 overflow-hidden bg-slate-100 p-4">
                 <div className="absolute inset-0 bg-slate-200/50 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 relative z-0 mix-blend-multiply" src={bike.image} alt={`Hero ${bike.name} 125cc bd price`} />
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur text-hero-red text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  Best Value
                </div>
              </div>
              
              <div className="p-8">
                <div className="mb-6">
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1">{bike.tag} Series</p>
                    <h3 className="text-2xl font-display font-bold text-slate-900 group-hover:text-hero-red transition-colors">{bike.name}</h3>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-slate-50 rounded-2xl p-4 text-center border border-slate-100 group-hover:border-blue-100 transition-colors">
                    <Fuel size={20} className="text-blue-500 mb-2 mx-auto" />
                    <span className="block text-xs text-slate-400 font-bold uppercase">Mileage</span>
                    <span className="block font-bold text-slate-900">{bike.mileage}</span>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-4 text-center border border-slate-100 group-hover:border-green-100 transition-colors">
                    <Gauge size={20} className="text-green-500 mb-2 mx-auto" />
                    <span className="block text-xs text-slate-400 font-bold uppercase">Power</span>
                    <span className="block font-bold text-slate-900">10.7 BHP</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Market Price</p>
                    <p className="text-3xl font-display font-black text-slate-900">{bike.price2024.replace('৳', '')}<span className="text-lg text-slate-500 font-sans font-medium">৳</span></p>
                  </div>
                  <button className="h-12 w-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-hero-red shadow-lg transition-all duration-300 transform group-hover:rotate-12">
                    <Zap size={20} className="fill-current" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CCSegment;