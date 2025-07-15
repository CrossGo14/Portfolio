import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles, Code, Zap } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
        ctx.fill();

        // Draw connections
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Calculate split animation based on scroll
  const splitOffset = Math.min(scrollY * 0.5, 200);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-3 bg-blue-500/10 backdrop-blur-sm px-6 py-3 rounded-full text-blue-300 font-medium border border-blue-500/20 animate-bounce">
              <Sparkles className="h-5 w-5 animate-spin" />
              <span>Innovative Solutions</span>
              <Zap className="h-5 w-5" />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 animate-fade-in-up leading-tight">
            <div className="relative overflow-hidden">
              <span 
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-gradient transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${splitOffset}px)` }}
              > 
                Mini
              </span>
              <span 
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-gradient transition-transform duration-700 ease-out"
                style={{ transform: `translateX(${splitOffset}px)` }}
              >
                Byte
              </span>
            </div>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 animate-fade-in-up animation-delay-500 leading-relaxed max-w-4xl mx-auto">
            We are a passionate team of tech enthusiasts dedicated to creating innovative solutions that drive business growth and digital transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-1000">
            <button
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center space-x-3"
            >
              <span>Get Started</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="group border-2 border-blue-400 text-blue-400 px-10 py-5 rounded-full font-semibold text-lg hover:bg-blue-400 hover:text-slate-900 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm flex items-center justify-center space-x-3">
              <Code className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              <span>Learn More</span>
            </button>
          </div>

          {/* Floating icons */}
          <div className="absolute top-1/4 left-10 animate-float">
            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-500/20">
              <Code className="h-8 w-8 text-blue-400" />
            </div>
          </div>
          <div className="absolute top-1/3 right-10 animate-float animation-delay-2000">
            <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-500/20">
              <Zap className="h-6 w-6 text-purple-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;