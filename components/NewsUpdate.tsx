import React from 'react';
import { Bell, TrendingUp, Calendar, AlertCircle, ArrowRight } from 'lucide-react';

const NewsUpdate: React.FC = () => {
  const news = [
    {
      tag: "Rumor",
      color: "bg-purple-100 text-purple-700",
      icon: <AlertCircle size={18} />,
      title: "Hero Mavrick 440 in Bangladesh?",
      date: "Nov 24, 2025",
      desc: "Sources suggest Hero might bring the Mavrick 440 by Q1 2026 to compete in the higher cc segment permit."
    },
    {
      tag: "Market",
      color: "bg-green-100 text-green-700",
      icon: <TrendingUp size={18} />,
      title: "Price Drop on 125cc Models",
      date: "Nov 20, 2025",
      desc: "To clear year-end stock, dealers are offering flat ৳5,000 discounts on Glamour XTEC and Ignitor models."
    },
    {
      tag: "Event",
      color: "bg-blue-100 text-blue-700",
      icon: <Calendar size={18} />,
      title: "Winter Service Camp 2025",
      date: "Nov 15, 2025",
      desc: "Free 10-point checkup for all Hero bikes registered in 2024. Visit your nearest service center."
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-3 bg-red-50 rounded-xl">
            <Bell className="text-hero-red" size={24} />
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900">
            Market Updates <span className="text-slate-400 font-light">& Rumors</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, idx) => (
            <div key={idx} className="group relative bg-slate-50 rounded-[2rem] p-6 border border-slate-100 hover:bg-white hover:shadow-card transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider ${item.color}`}>
                  {item.icon} {item.tag}
                </span>
                <span className="text-xs text-slate-400 font-medium">{item.date}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-hero-red transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                {item.desc}
              </p>
              <a href="#" className="inline-flex items-center text-sm font-bold text-slate-900 group-hover:gap-2 transition-all">
                Read More <ArrowRight size={16} className="ml-1 text-slate-400 group-hover:text-hero-red" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsUpdate;