import React, { useState } from 'react';
import { bikeData } from '../data';
import { ArrowUpRight } from 'lucide-react';
import SEO from '../components/SEO';

const PriceList: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Commuter', 'Sports'];

  const filteredData = filter === 'All' 
    ? bikeData 
    : bikeData.filter(bike => bike.tag === filter);

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <SEO 
        title="Hero All Bike Price in Bangladesh 2025 | Latest Price List"
        description="Complete price list of all Hero bikes in Bangladesh for 2024-2025. Compare commuter, sports, and scooter prices updated for November 2025."
        keywords="hero all bike price in bangladesh, hero bike price list 2025, hero motorcycle price bd"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          {/* SEO Optimized H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight mb-4">
            Hero All Bike Price in Bangladesh
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-500 font-light">
             Latest 2024 & 2025 Market Rates
          </h2>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            Looking for <strong>Hero bike price in Bangladesh 2024</strong> or upcoming <strong>2025</strong> models? 
            Below is the comprehensive list updated for the current month.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-10 overflow-x-auto no-scrollbar pb-2">
            <div className="inline-flex bg-white p-1.5 rounded-2xl whitespace-nowrap shadow-sm border border-slate-200">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                            filter === cat 
                            ? 'bg-slate-900 text-white shadow-md' 
                            : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>

        {/* Price Table Desktop */}
        <div className="hidden md:block rounded-[2rem] border border-slate-200 shadow-card bg-white overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-100">
              <thead className="bg-slate-50/80 backdrop-blur-sm sticky top-0 z-10">
                <tr>
                  <th scope="col" className="px-8 py-6 text-left text-xs font-bold text-slate-400 uppercase tracking-widest">Model</th>
                  <th scope="col" className="px-6 py-6 text-left text-xs font-bold text-slate-400 uppercase tracking-widest">Spec</th>
                  <th scope="col" className="px-6 py-6 text-left text-xs font-bold text-slate-400 uppercase tracking-widest">2023 Price</th>
                  <th scope="col" className="px-6 py-6 text-left text-xs font-bold text-hero-red uppercase tracking-widest bg-red-50/50">2024 Price</th>
                  <th scope="col" className="px-6 py-6 text-left text-xs font-bold text-blue-600 uppercase tracking-widest">2025 Est.</th>
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
              <div className="flex items-start justify-between mb-5 relative z-10">
                <div className="flex items-center space-x-4">
                    <img src={bike.image} alt={bike.name} className="w-20 h-20 rounded-2xl object-cover shadow-md border border-slate-100" />
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 leading-tight pr-4">{bike.name}</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-lg uppercase border border-slate-200">{bike.cc}</span>
                            {bike.abs && <span className="text-[10px] font-bold text-white bg-slate-900 px-2 py-1 rounded-lg">ABS</span>}
                        </div>
                    </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-4 relative z-10">
                 <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                    <span className="block text-[10px] text-slate-400 font-bold uppercase mb-1">Old Rate (2023)</span>
                    <span className="block text-sm font-semibold text-slate-600 line-through decoration-red-300">{bike.price2023}</span>
                 </div>
                 <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                    <span className="block text-[10px] text-blue-600 font-bold uppercase mb-1">2025 Forecast</span>
                    <span className="block text-sm font-bold text-blue-700">{bike.price2025Est}</span>
                 </div>
              </div>

              <div className="bg-slate-900 p-4 rounded-2xl shadow-lg flex justify-between items-center relative overflow-hidden group">
                  <span className="text-xs font-bold text-slate-300 relative z-10">2024 Price</span>
                  <span className="text-xl font-black text-white relative z-10">{bike.price2024}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceList;