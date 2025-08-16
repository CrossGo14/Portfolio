import React from 'react';
import { Code, Palette, TrendingUp, Users, Star, Sparkles } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [cardsRef, visibleCards] = useStaggeredAnimation(3, 300);

  const team = [
    {
      name: 'Mithil',
      role: 'Lead Developer',
      description: 'Specializes in full-stack development with expertise in modern web technologies and system architecture.',
      icon: Code,
      color: 'blue',
      initial: 'M'
    },
  
    {
      name: 'Aarya',
      role: 'Business Strategist',
      description: 'Drives business growth through strategic planning and data-driven insights.',
      icon: TrendingUp,
      color: 'cyan',
      initial: 'A'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-500/10',
          text: 'text-blue-400',
          border: 'border-blue-500/20',
          gradient: 'from-blue-600 to-blue-700',
          hover: 'hover:bg-blue-500/20',
          glow: 'hover:shadow-blue-500/25'
        };
      case 'purple':
        return {
          bg: 'bg-purple-500/10',
          text: 'text-purple-400',
          border: 'border-purple-500/20',
          gradient: 'from-purple-600 to-purple-700',
          hover: 'hover:bg-purple-500/20',
          glow: 'hover:shadow-purple-500/25'
        };
      case 'cyan':
        return {
          bg: 'bg-cyan-500/10',
          text: 'text-cyan-400',
          border: 'border-cyan-500/20',
          gradient: 'from-cyan-600 to-cyan-700',
          hover: 'hover:bg-cyan-500/20',
          glow: 'hover:shadow-cyan-500/25'
        };
      default:
        return {
          bg: 'bg-gray-500/10',
          text: 'text-gray-400',
          border: 'border-gray-500/20',
          gradient: 'from-gray-600 to-gray-700',
          hover: 'hover:bg-gray-500/20',
          glow: 'hover:shadow-gray-500/25'
        };
    }
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
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
            <div className="flex items-center space-x-2 bg-blue-500/10 backdrop-blur-sm px-6 py-3 rounded-full text-blue-400 font-medium border border-blue-500/20 hover:bg-blue-500/20 transition-all duration-300">
              <Users className="h-5 w-5 animate-pulse" />
              <span>Our Team</span>
              <Star className="h-4 w-4 animate-spin" />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 relative">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 animate-gradient">
              Us
            </span>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-ping"></div>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed relative">
            We are a passionate team of tech enthusiasts dedicated to creating innovative solutions that drive business growth and digital transformation.
            <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-blue-400 animate-spin" />
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => {
            const IconComponent = member.icon;
            const colors = getColorClasses(member.color);
            const isVisible = visibleCards[index];
            
            return (
              <div
                key={index}
                className={`group bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-${member.color}-500/30 transform hover:-translate-y-6 hover:rotate-1 transition-all duration-700 hover:shadow-2xl ${colors.glow} relative overflow-hidden ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-20 scale-95'
                }`}
                style={{ 
                  transitionDelay: isVisible ? `${index * 200}ms` : '0ms',
                  transitionDuration: '800ms'
                }}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Floating particles effect */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500"></div>
                <div className="absolute top-8 right-8 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping animation-delay-500 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="relative mb-8">
                    <div className={`w-20 h-20 rounded-2xl ${colors.bg} ${colors.hover} border ${colors.border} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                      <IconComponent className={`h-10 w-10 ${colors.text}`} />
                    </div>
                    <div className={`absolute -top-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-r ${colors.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {member.initial}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 relative">
                      {member.name}
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
                    </h3>
                    <p className={`text-lg font-semibold ${colors.text} mb-4 group-hover:scale-105 transition-transform duration-300`}>
                      {member.role}
                    </p>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {member.description}
                    </p>
                  </div>

                  {/* Hover indicator */}
                  <div className="mt-6 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className={`w-2 h-2 rounded-full ${colors.bg} ${colors.border} border animate-pulse`}></div>
                    <span className={`text-sm ${colors.text} font-medium`}>View Profile</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-3 bg-slate-800/50 backdrop-blur-sm px-8 py-4 rounded-2xl border border-slate-700/50 hover:border-green-500/30 transition-all duration-300 group">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <p className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300">
              Contact: <span className="font-semibold text-blue-400">+1 (555) 123-4567</span>
            </p>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;