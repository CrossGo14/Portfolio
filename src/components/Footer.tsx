import React from 'react';
import { Code2, Globe, Smartphone, Palette, BarChart3, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black text-white py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <Code2 className="h-10 w-10 text-blue-400 group-hover:text-blue-300 transition-all duration-300 group-hover:rotate-12" />
                <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-3xl font-bold group-hover:text-blue-300 transition-colors duration-300">MiniByte</span>
            </div>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              Transforming ideas into powerful digital experiences with cutting-edge technology and innovative solutions.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {[Github, Twitter, Linkedin].map((Icon, index) => (
                <button
                  key={index}
                  className="group w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-blue-500/30 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Icon className="h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-blue-400">Quick Links</h4>
            <ul className="space-y-4">
              {['home', 'about', 'services', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="text-gray-400 hover:text-white transition-all duration-300 capitalize relative group"
                  >
                    <span className="relative z-10">{section}</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-purple-400">Services</h4>
            <ul className="space-y-4">
              {[
                { icon: Globe, name: 'Web Apps', color: 'text-blue-400' },
                { icon: Smartphone, name: 'Mobile Apps', color: 'text-purple-400' },
                { icon: Palette, name: 'UI/UX Design', color: 'text-pink-400' },
                { icon: BarChart3, name: 'Data Analysis', color: 'text-cyan-400' }
              ].map((service, index) => (
                <li key={index} className="flex items-center space-x-3 group cursor-pointer">
                  <service.icon className={`h-4 w-4 ${service.color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-gray-400 group-hover:text-white transition-colors duration-300">{service.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 MiniByte. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <button className="text-gray-400 hover:text-white transition-colors duration-300 text-sm relative group">
              <span>Privacy Policy</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button className="text-gray-400 hover:text-white transition-colors duration-300 text-sm relative group">
              <span>Terms of Service</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;