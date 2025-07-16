import React, { FormEvent, useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  MessageSquare,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import {
  useScrollAnimation,
  useStaggeredAnimation,
} from "../hooks/useScrollAnimation";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [formRef, formVisible] = useScrollAnimation();
  const [contactInfoRef, contactInfoVisible] = useStaggeredAnimation(3, 200);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  //this if a form refrecne used by <form> idk why but iya hai use
  const form = useRef<HTMLFormElement>(null);

  //this is the function handling the sending mail
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSubmitting(true); // Set submitting state to true

    emailjs
      .sendForm(
        "service_38q9lve",
        "template_fpu8qik",
        form.current,
        "oBJ75kYAS3kv2v23Z"
      )
      .then(
        () => {
          toast.success(
            "Thank you for your message! We'll get back to you soon."
          );
          setIsSubmitted(true); // Update state to show success message
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            subject: "",
          }); // Reset form
        },
        (error) => {
          toast.warning(
            "There has been an error sending the message, contact: minibytes@gmail.com directly"
          );
          console.error("EmailJS Error:", error);
        }
      )
      .finally(() => {
        setIsSubmitting(false); // Reset submitting state
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      primary: "minibyteswork@gmail.com",
      secondary: "support@minibyte.com",
      color: "blue",
    },
    {
      icon: Phone,
      title: "Phone",
      primary: "+1 (555) 123-4567",
      secondary: "+1 (555) 987-6543",
      color: "green",
    },
    {
      icon: MapPin,
      title: "Address",
      primary: "123 Tech Street",
      secondary: "Silicon Valley, CA 94000",
      color: "purple",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Enhanced background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating contact-themed elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className={`absolute ${
              i % 4 === 0
                ? "w-3 h-3 bg-blue-400/10 rounded-full"
                : i % 4 === 1
                ? "w-2 h-2 bg-purple-400/15 rounded-full"
                : i % 4 === 2
                ? "w-4 h-1 bg-cyan-400/10 rounded-full"
                : "w-1 h-4 bg-green-400/10 rounded-full"
            } animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-16"
          }`}
        >
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-cyan-500/10 backdrop-blur-sm px-6 py-3 rounded-full text-cyan-400 font-medium border border-cyan-500/20 hover:bg-cyan-500/20 transition-all duration-300 group">
              <MessageSquare className="h-5 w-5 animate-bounce group-hover:animate-pulse" />
              <span>Get In Touch</span>
              <Zap className="h-4 w-4 animate-spin" />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 relative">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 animate-gradient">
              Us
            </span>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 animate-ping"></div>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-60"></div>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed relative">
            Ready to start your next project? Get in touch with us and let's
            discuss how we can help bring your vision to life.
            <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-cyan-400 animate-spin" />
            <Star className="absolute -bottom-2 -left-2 h-5 w-5 text-blue-400 animate-pulse" />
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Form */}
          <div
            ref={formRef}
            className={`bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-700 relative overflow-hidden ${
              formVisible
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 -translate-x-12 scale-95"
            }`}
          >
            {/* Form background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-50"></div>
            <div className="absolute top-8 right-8 w-1 h-1 bg-purple-400 rounded-full animate-bounce opacity-50"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6 relative">
                Send us a message
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </h3>
              <p className="text-gray-400 mb-2">Message will be sent to</p>
              <p className="text-blue-400 font-semibold mb-4 hover:text-blue-300 transition-colors duration-300">
                minibyteswork@gmail.com
              </p>
              <div className="flex items-center space-x-2 text-green-400 mb-8 bg-green-500/10 p-3 rounded-xl border border-green-500/20">
                <CheckCircle className="h-5 w-5 animate-pulse" />
                <span className="text-sm">
                  Recipient address confirmed - your message will be delivered
                  here
                </span>
              </div>

              {isSubmitted ? (
                <div className="text-center py-16 relative">
                  <div className="relative">
                    <CheckCircle className="h-20 w-20 text-green-400 mx-auto mb-6 animate-bounce" />
                    <div className="absolute inset-0 bg-green-400/20 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-300 rounded-full animate-ping"></div>
                  </div>
                  <h4 className="text-2xl font-semibold text-white mb-4">
                    Message Sent!
                  </h4>
                  <p className="text-gray-400">
                    We'll get back to you within 24 hours.
                  </p>
                  <div className="flex justify-center space-x-2 mt-4">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce animation-delay-500"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce animation-delay-1000"></div>
                  </div>
                </div>
              ) : (
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="group">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-blue-400 transition-colors duration-300"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-blue-500/30 transform focus:scale-105 hover:bg-slate-700/70"
                    />
                  </div>

                  <div className="group">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-blue-400 transition-colors duration-300"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-blue-500/30 transform focus:scale-105 hover:bg-slate-700/70"
                    />
                  </div>

                  <div className="group">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-blue-400 transition-colors duration-300"
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="Your Phone Number"
                      className="w-full px-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-blue-500/30 transform focus:scale-105 hover:bg-slate-700/70"
                    />
                  </div>

                  <div className="group">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-blue-400 transition-colors duration-300"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Enter the Subject"
                      className="w-full px-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-blue-500/30 transform focus:scale-105 hover:bg-slate-700/70"
                    />
                  </div>

                  <div className="group">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-blue-400 transition-colors duration-300"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-blue-500/30 resize-none transform focus:scale-105 hover:bg-slate-700/70"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 shadow-lg hover:shadow-blue-500/25 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>Send Message to minibyteswork@gmail.com</span>
                      </>
                    )}
                  </button>
                </form>
              )}

              <div className="mt-8 p-4 bg-green-500/10 rounded-xl border border-green-500/20 hover:bg-green-500/15 transition-colors duration-300 group">
                <div className="flex items-center space-x-2 text-green-400">
                  <CheckCircle className="h-5 w-5 group-hover:animate-spin" />
                  <span className="text-sm font-medium">
                    Recipient Address Configured
                  </span>
                </div>
                <p className="text-sm text-green-300 mt-1">
                  All messages are guaranteed to be sent to
                  minibyteswork@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-8 relative">
                Get in touch
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
              </h3>

              <div ref={contactInfoRef} className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  const isVisible = contactInfoVisible[index];

                  return (
                    <div
                      key={index}
                      className={`group flex items-start space-x-4 p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-${
                        info.color
                      }-500/30 transition-all duration-700 hover:shadow-lg hover:shadow-${
                        info.color
                      }-500/10 relative overflow-hidden ${
                        isVisible
                          ? "opacity-100 translate-x-0 scale-100"
                          : "opacity-0 translate-x-12 scale-95"
                      }`}
                      style={{
                        transitionDelay: isVisible ? `${index * 200}ms` : "0ms",
                        transitionDuration: "800ms",
                      }}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-r from-${info.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      ></div>
                      <div
                        className={`bg-${info.color}-500/10 p-4 rounded-xl border border-${info.color}-500/20 group-hover:bg-${info.color}-500/20 transition-all duration-300 group-hover:scale-110 relative z-10`}
                      >
                        <IconComponent
                          className={`h-6 w-6 text-${info.color}-400 group-hover:animate-pulse`}
                        />
                      </div>
                      <div className="relative z-10">
                        <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                          {info.title}
                        </h4>
                        <p
                          className={`text-${info.color}-400 font-medium hover:text-${info.color}-300 transition-colors duration-300`}
                        >
                          {info.primary}
                        </p>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          {info.secondary}
                        </p>
                      </div>
                      <div className="absolute top-2 right-2 w-2 h-2 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-2xl border border-blue-500/20 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex items-center space-x-3 text-blue-400 mb-3 relative z-10">
                <span className="text-3xl animate-bounce">💡</span>
                <span className="font-semibold text-lg group-hover:text-blue-300 transition-colors duration-300">
                  Response Time:
                </span>
                <Sparkles className="h-5 w-5 animate-spin group-hover:animate-pulse" />
              </div>
              <p className="text-blue-300 font-medium group-hover:text-blue-200 transition-colors duration-300 relative z-10">
                We typically respond within 24 hours!
              </p>
              <div className="absolute top-2 right-2 w-3 h-3 bg-blue-400/30 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
