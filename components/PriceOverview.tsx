import React, { useState } from 'react';
import { bikeData } from '../data';
import { TrendingUp, Calendar, ArrowUpRight } from 'lucide-react';

const PriceOverview: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Commuter', 'Sports'];

  const filteredData = filter === 'All' 
    ? bikeData 
    : bikeData.filter(bike => bike.tag === filter);

  return (
    <section id="prices" className="py-20 md:py-24 bg-white relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight">
            Price Overview
          </h2>
          <p className="mt-4 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-light">
            Current market rates for <span className="text-slate-900 font-semibold">Hero bikes in Bangladesh</span> (2025-26).
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-10 overflow-x-auto no-scrollbar pb-2">
            <div className="inline-flex bg-slate-100 p-1.5 rounded-2xl whitespace-nowrap">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                            filter === cat 
                            ? 'bg-white text-slate-900 shadow-sm' 
                            : 'text-slate-500 hover:text-slate-700'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>

        {/* Price Table Desktop */}
        <div className="hidden md:block rounded-[2rem] border border-slate-100 shadow-card bg-white overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-100">
              <thead className="bg-slate-50/80 backdrop-blur-sm sticky top-0 z-10">
                <tr>
                  <th scope="col" className="px-8 py-6 text-left text-xs font-bold text-slate-400 uppercase tracking-widest">Model</th>
                  <th scope="col" className="px-6 py-6 text-left text-xs font-bold text-slate-400 uppercase tracking-widest">Spec</th>
                  <th scope="col" className="px-6 py-6 text-left text-xs font-bold text-slate-400 uppercase tracking-widest">2023 Old</th>
                  <th scope="col" className="px-6 py-6 text-left text-xs font-bold text-hero-red uppercase tracking-widest bg-red-50/50">2025-26 Price</th>
                  <th scope="col" className="px-6 py-6 text-left text-xs font-bold text-blue-600 uppercase tracking-widest">2026 Trend</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-50">
                {filteredData.map((bike) => (
                  <tr key={bike.id} className="group hover:bg-slate-50/80 transition-colors duration-200">
                    <td className="px-8 py-6 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-16 w-16 shadow-lg rounded-2xl overflow-hidden border border-slate-100 bg-white p-1">
                          <img className="h-full w-full object-cover rounded-xl transform group-hover:scale-110 transition-transform duration-500" src={bike.image} alt={bike.name} />
                        </div>
                        <div className="ml-5">
                          <div className="text-lg font-bold text-slate-900">{bike.name}</div>
                          <div className="flex items-center gap-2 mt-1">
                             <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide px-2 py-0.5 bg-slate-100 rounded-md border border-slate-200">{bike.tag}</span>
                             {bike.abs && <span className="text-[10px] font-bold text-white bg-slate-900 px-1.5 py-0.5 rounded">ABS</span>}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6 whitespace-nowrap">
                      <span className="text-sm font-bold text-slate-700">
                        {bike.cc}
                      </span>
                      <span className="block text-xs text-slate-400 mt-0.5">{bike.mileage}</span>
                    </td>
                    <td className="px-6 py-6 whitespace-nowrap text-sm text-slate-400 font-medium line-through decoration-slate-300">{bike.price2023}</td>
                    <td className="px-6 py-6 whitespace-nowrap bg-red-50/20 group-hover:bg-red-50/40 transition-colors">
                      <div className="text-xl font-black text-slate-900 group-hover:text-hero-red transition-colors">{bike.price2024}</div>
                    </td>
                    <td className="px-6 py-6 whitespace-nowrap">
                       <div className="flex items-center text-blue-600 font-bold text-sm bg-blue-50 w-max px-3 py-1 rounded-lg">
                          {bike.price2025Est}
                          <ArrowUpRight size={14} className="ml-1" />
                       </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-5">
          {filteredData.map((bike) => (
            <div key={bike.id} className="bg-white rounded-[2rem] p-5 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
               {/* Background accent for card */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-10 -mt-10 z-0"></div>
              
              <div className="flex items-start justify-between mb-5 relative z-10">
                <div className="flex items-center space-x-4">
                    <img src={bike.image} alt={bike.name} className="w-20 h-20 rounded-2xl object-cover shadow-md border border-slate-100" />
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 leading-tight pr-4">{bike.name}</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-lg uppercase border border-slate-200">{bike.cc}</span>
                            <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-lg uppercase border border-slate-200">{bike.tag}</span>
                            {bike.abs && <span className="text-[10px] font-bold text-white bg-slate-900 px-2 py-1 rounded-lg">ABS</span>}
                        </div>
                    </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-4 relative z-10">
                 <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                    <span className="block text-[10px] text-slate-400 font-bold uppercase mb-1">Old Rate</span>
                    <span className="block text-sm font-semibold text-slate-600 line-through decoration-red-300">{bike.price2023}</span>
                 </div>
                 <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                    <span className="block text-[10px] text-blue-600 font-bold uppercase mb-1">2026 Trend</span>
                    <span className="block text-sm font-bold text-blue-700">{bike.price2025Est}</span>
                 </div>
              </div>

              <div className="bg-slate-900 p-4 rounded-2xl shadow-lg flex justify-between items-center relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl -mr-10 -mt-10 group-hover:bg-hero-red/20 transition-colors"></div>
                  <span className="text-xs font-bold text-slate-300 relative z-10">Current Price</span>
                  <span className="text-xl font-black text-white relative z-10">{bike.price2024}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Insight Block */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="group relative bg-gradient-to-br from-blue-600 to-indigo-700 p-8 md:p-10 rounded-[2.5rem] text-white shadow-2xl overflow-hidden hover:scale-[1.01] transition-transform duration-500">
            <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
            
            <h3 className="flex items-center text-xl md:text-2xl font-bold mb-4 z-10 relative">
              <div className="bg-white/20 p-2 rounded-lg mr-3 backdrop-blur-sm">
                  <TrendingUp size={24} className="text-white"/>
              </div>
              Market Forecast
            </h3>
            <p className="text-blue-100 leading-relaxed z-10 relative text-base md:text-lg font-light">
              Prices have stabilized in late 2025. Expect a <span className="font-bold text-white">minor 2-3% hike</span> in early 2026 for imported units like Karizma.
            </p>
          </div>
          
          <div className="group relative bg-slate-50 border border-slate-200 p-8 md:p-10 rounded-[2.5rem] shadow-xl overflow-hidden hover:border-hero-red/30 transition-colors duration-500">
            <h3 className="flex items-center text-xl md:text-2xl font-bold text-slate-900 mb-4 relative z-10">
               <div className="bg-red-100 p-2 rounded-lg mr-3">
                  <Calendar className="text-hero-red" size={24}/>
               </div>
               Best Time to Buy
            </h3>
            <p className="text-slate-600 leading-relaxed relative z-10 text-base md:text-lg">
              Year-end clearance sales are approaching. Look out for "Winter Fest 2025" discounts offering up to <span className="font-bold text-slate-900">৳8,000 off</span> on Commuter models.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PriceOverview;