import React from 'react';
import { ArrowRight, ChevronDown, CalendarCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-[95vh] flex items-center justify-center bg-slate-900 text-white overflow-hidden">
      {/* Background Image with Fixed Attachment for Parallax Feel */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/70 to-slate-900 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2670&auto=format&fit=crop" 
          alt="Hero bike rider on Bangladesh road" 
          className="w-full h-full object-cover opacity-60 scale-105 animate-pan"
        />
        <style>{`
          @keyframes pan {
            0% { object-position: 50% 50%; transform: scale(1.05); }
            50% { object-position: 50% 40%; transform: scale(1.1); }
            100% { object-position: 50% 50%; transform: scale(1.05); }
          }
          .animate-pan { animation: pan 20s infinite alternate ease-in-out; }
        `}</style>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32 md:pt-40 text-center md:text-left">
        <div className="md:w-3/4 lg:w-2/3 mx-auto md:mx-0">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 md:mb-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs md:text-sm font-semibold text-red-200 shadow-xl animate-float">
            <CalendarCheck size={16} className="text-hero-red" />
            <span>Updated: 2025-26</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tight mb-6 md:mb-8 leading-[1.1] drop-shadow-2xl">
            Hero Bike Price <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-hero-red via-red-500 to-orange-500">in Bangladesh</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-2xl text-slate-300 mb-8 md:mb-10 max-w-2xl leading-relaxed font-light mx-auto md:mx-0">
            Welcome to <span className="font-semibold text-white">bdBike</span>. The definitive <span className="text-white font-medium">2025-26</span> guide for Hero motorcycle prices, specs, and market trends.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#prices" className="group inline-flex items-center justify-center px-8 py-4 text-base md:text-lg font-bold rounded-full text-white bg-hero-red shadow-glow hover:bg-red-700 transition-all transform hover:-translate-y-1 hover:shadow-red-600/50">
              Check Price List
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#new-models" className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-base md:text-lg font-bold rounded-full text-white hover:bg-white hover:text-slate-900 transition-all backdrop-blur-sm hover:backdrop-blur-none">
              New 2025 Models
            </a>
          </div>

          <div className="mt-12 md:mt-16 flex flex-wrap items-center justify-center md:justify-start gap-6 md:gap-8 text-xs md:text-sm text-slate-400 font-medium tracking-wide">
            <div className="flex items-center gap-2">
               <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                    </div>
                  ))}
               </div>
               <span className="text-slate-300">Trusted by 50k+ Riders</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/10"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              Live Market Data
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500 hidden md:block">
        <ChevronDown size={32} strokeWidth={1.5} />
      </div>
    </section>
  );
};

export default Hero;