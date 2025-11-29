import React from 'react';
import { Settings, HelpCircle, Heart, Ruler, Droplets, Quote } from 'lucide-react';
import { heroQuotes } from '../data';

const KnowledgeBase: React.FC = () => {
  return (
    <section id="tips" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">Biker's Encyclopedia</span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900">Essential Guides</h2>
          <p className="mt-4 text-slate-500 text-xl font-light">Master your machine with our expert maintenance tips.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
            {/* Main Article Column */}
            <div className="lg:col-span-8 space-y-12">
                <div className="group bg-slate-50 p-8 rounded-[2rem] hover:bg-white hover:shadow-card transition-all duration-300 border border-slate-100">
                    <div className="flex items-start gap-6">
                        <div className="hidden sm:flex flex-shrink-0 h-14 w-14 bg-white rounded-2xl items-center justify-center text-hero-red shadow-sm border border-slate-100 group-hover:bg-hero-red group-hover:text-white transition-colors">
                            <Ruler size={28} />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">How to Choose a Bike Size?</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                                Safety starts with the fit. In Dhaka's stop-and-go traffic, being able to flat-foot your bike is crucial.
                            </p>
                            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                                <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide border-b border-slate-100 pb-2">Height Compatibility Chart</h4>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center text-base">
                                        <span className="text-slate-500 font-medium">5'0" - 5'3"</span>
                                        <span className="font-bold text-slate-900 bg-slate-50 px-3 py-1 rounded-lg">Pleasure / 750-780mm</span>
                                    </div>
                                    <div className="flex justify-between items-center text-base">
                                        <span className="text-slate-500 font-medium">5'4" - 5'8"</span>
                                        <span className="font-bold text-slate-900 bg-slate-50 px-3 py-1 rounded-lg">Splendor+ / 780-800mm</span>
                                    </div>
                                    <div className="flex justify-between items-center text-base">
                                        <span className="text-slate-500 font-medium">5'9" +</span>
                                        <span className="font-bold text-slate-900 bg-slate-50 px-3 py-1 rounded-lg">Hunk 150R / 800mm+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="group bg-slate-50 p-8 rounded-[2rem] hover:bg-white hover:shadow-card transition-all duration-300 border border-slate-100">
                    <div className="flex items-start gap-6">
                         <div className="hidden sm:flex flex-shrink-0 h-14 w-14 bg-white rounded-2xl items-center justify-center text-blue-600 shadow-sm border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <Droplets size={28} />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Chain Maintenance 101</h3>
                            <p className="text-slate-600 mb-6 text-lg">
                                A clean chain transfers power efficiently. Follow this 4-step ritual every 500km:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Place bike on center stand.",
                                    "Use kerosene to degrease.",
                                    "Wipe dry completely.",
                                    "Apply lube while rotating."
                                ].map((step, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100">
                                        <span className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-black">{i+1}</span>
                                        <span className="text-slate-700 font-medium">{step}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4 space-y-6">
                 <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-soft hover:-translate-y-1 transition-transform duration-300">
                   <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                        <Settings className="text-hero-red" size={24}/>
                   </div>
                   <h3 className="font-bold text-xl mb-3 text-slate-900">Commuter Bike?</h3>
                   <p className="text-slate-500 text-base leading-relaxed">
                     Built for daily grind. Focuses on mileage <span className="text-slate-900 font-semibold">(50-70 kmpl)</span>, comfort, and low maintenance. Example: <strong>Hero Glamour</strong>.
                   </p>
                 </div>

                 <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-soft hover:-translate-y-1 transition-transform duration-300">
                   <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6">
                        <HelpCircle className="text-purple-600" size={24}/>
                   </div>
                   <h3 className="font-bold text-xl mb-3 text-slate-900">What is ABS?</h3>
                   <p className="text-slate-500 text-base leading-relaxed">
                     <strong>Anti-lock Braking System</strong>. Prevents wheel lock during panic braking. Crucial for sandy BD roads.
                   </p>
                 </div>

                 <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-soft hover:-translate-y-1 transition-transform duration-300">
                   <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                        <HelpCircle className="text-green-600" size={24}/>
                   </div>
                   <h3 className="font-bold text-xl mb-3 text-slate-900">What is CC?</h3>
                   <p className="text-slate-500 text-base leading-relaxed">
                     <strong>Cubic Capacity</strong>. <br/>100-110cc = Mileage. <br/>150-160cc = Power & Speed.
                   </p>
                 </div>
            </div>
        </div>

        {/* Quotes Section */}
        <div className="relative bg-slate-900 rounded-[3rem] p-10 md:p-20 text-center text-white overflow-hidden shadow-2xl">
            {/* Abstract Background */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-hero-red/20 opacity-50"></div>
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-hero-red rounded-full blur-[100px] opacity-20"></div>
            
            <div className="relative z-10">
                <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur rounded-2xl mb-8">
                     <Heart className="h-8 w-8 text-hero-red fill-current animate-pulse" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-12 bangla-text">Bike Lover বাইক নিয়ে স্ট্যাটাস</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {heroQuotes.map((quote, idx) => (
                        <div key={idx} className="relative bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors group">
                            <Quote className="absolute top-6 left-6 text-white/20 h-8 w-8 transform -scale-x-100" />
                            <p className="text-lg italic opacity-90 bangla-text leading-relaxed mt-4">"{quote}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
          
      </div>
    </section>
  );
};

export default KnowledgeBase;