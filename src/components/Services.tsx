import React from 'react';
import { Globe, Smartphone, Palette, BarChart3, Sparkles, Zap, Star } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const Services = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [cardsRef, visibleCards] = useStaggeredAnimation(4, 200);

  const services = [
    {
      title: 'Web Apps',
      description: 'Modern, responsive web applications built with cutting-edge technologies for optimal performance and user experience.',
      icon: Globe,
      color: 'blue'
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that deliver seamless experiences across all devices.',
      icon: Smartphone,
      color: 'purple'
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that prioritize user experience and drive engagement through thoughtful interactions.',
      icon: Palette,
      color: 'pink'
    },
    {
      title: 'Data Analysis',
      description: 'Transform your data into actionable insights with advanced analytics and visualization solutions.',
      icon: BarChart3,
      color: 'cyan'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          gradient: 'from-blue-500 to-blue-600',
          bg: 'bg-blue-500/10',
          border: 'border-blue-500/20',
          text: 'text-blue-400',
          shadow: 'shadow-blue-500/20',
          glow: 'hover:shadow-blue-500/25'
        };
      case 'purple':
        return {
          gradient: 'from-purple-500 to-purple-600',
          bg: 'bg-purple-500/10',
          border: 'border-purple-500/20',
          text: 'text-purple-400',
          shadow: 'shadow-purple-500/20',
          glow: 'hover:shadow-purple-500/25'
        };
      case 'pink':
        return {
          gradient: 'from-pink-500 to-pink-600',
          bg: 'bg-pink-500/10',
          border: 'border-pink-500/20',
          text: 'text-pink-400',
          shadow: 'shadow-pink-500/20',
          glow: 'hover:shadow-pink-500/25'
        };
      case 'cyan':
        return {
          gradient: 'from-cyan-500 to-cyan-600',
          bg: 'bg-cyan-500/10',
          border: 'border-cyan-500/20',
          text: 'text-cyan-400',
          shadow: 'shadow-cyan-500/20',
          glow: 'hover:shadow-cyan-500/25'
        };
      default:
        return {
          gradient: 'from-gray-500 to-gray-600',
          bg: 'bg-gray-500/10',
          border: 'border-gray-500/20',
          text: 'text-gray-400',
          shadow: 'shadow-gray-500/20',
          glow: 'hover:shadow-gray-500/25'
        };
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-4 h-4 ${i % 3 === 0 ? 'bg-blue-400/10' : i % 3 === 1 ? 'bg-purple-400/10' : 'bg-cyan-400/10'} ${i % 2 === 0 ? 'rounded-full' : 'rotate-45'} animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            titleVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-16'
          }`}
        >
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-purple-500/10 backdrop-blur-sm px-6 py-3 rounded-full text-purple-400 font-medium border border-purple-500/20 hover:bg-purple-500/20 transition-all duration-300 group">
              <Sparkles className="h-5 w-5 animate-spin group-hover:animate-pulse" />
              <span>What We Do</span>
              <Zap className="h-4 w-4 animate-bounce" />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 relative">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 animate-gradient">
              Services
            </span>
            <div className="absolute -top-6 -right-6 w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-30 animate-ping"></div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-50"></div>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed relative">
            We offer comprehensive digital solutions to help your business thrive in the modern world.
            <Star className="absolute -top-3 -left-3 h-5 w-5 text-purple-400 animate-pulse" />
            <Star className="absolute -bottom-3 -right-3 h-4 w-4 text-cyan-400 animate-spin" />
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const colors = getColorClasses(service.color);
            const isVisible = visibleCards[index];
            
            return (
              <div
                key={index}
                className={`group bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-${service.color}-500/30 transform hover:-translate-y-8 hover:rotate-2 transition-all duration-700 hover:shadow-2xl ${colors.glow} relative overflow-hidden ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-24 scale-90'
                }`}
                style={{ 
                  transitionDelay: isVisible ? `${index * 150}ms` : '0ms',
                  transitionDuration: '800ms'
                }}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Enhanced floating particles effect */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500"></div>
                <div className="absolute top-8 right-8 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping animation-delay-500 transition-opacity duration-500"></div>
                <div className="absolute top-6 right-12 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce animation-delay-1000 transition-opacity duration-500"></div>
                
                {/* Glowing border effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${colors.gradient} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg relative overflow-hidden`}>
                    <IconComponent className="h-10 w-10 text-white relative z-10" />
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-blue-300 transition-colors duration-300 relative">
                    {service.title}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-6">
                    {service.description}
                  </p>

                  {/* Enhanced hover indicator */}
                  <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className={`w-2 h-2 rounded-full ${colors.bg} ${colors.border} border animate-pulse`}></div>
                    <span className={`text-sm ${colors.text} font-medium`}>Explore Service</span>
                    <div className="w-1 h-1 bg-white rounded-full animate-bounce"></div>
                  </div>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-br ${colors.gradient} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300 animate-spin`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced bottom decoration */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-4 bg-slate-800/50 backdrop-blur-sm px-8 py-4 rounded-2xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 group">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse animation-delay-500"></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse animation-delay-1000"></div>
            </div>
            <p className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300">
              Ready to transform your business? <span className="font-semibold text-purple-400">Let's get started!</span>
            </p>
            <Sparkles className="h-5 w-5 text-purple-400 animate-spin group-hover:animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;