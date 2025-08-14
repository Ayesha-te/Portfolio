import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_h8lbgu3',          
        'template_y5537t8',         
        formData,                   
        'qTTsda15feaglZYr'          
      );

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Failed to send message:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const contactInfo = [
    { icon: <Mail className="w-6 h-6" />, title: 'Email', value: 'ayeshajahangir280@gmail.com', link: 'mailto:ayeshajahangir280@gmail.com' },
    { icon: <Phone className="w-6 h-6" />, title: 'Phone', value: '+923144217577', link: 'tel:+923144217577' }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Let's Talk</h3>
            <p className="text-gray-400 text-lg mb-8">
              I'm always interested in new opportunities and exciting projects.
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, idx) => (
                <a key={idx} href={info.link} className="flex items-center p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.title}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                    placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject *</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                  placeholder="What's this about?" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 focus:border-purple-500 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..." />
              </div>

              <button type="submit" disabled={isSubmitting || isSubmitted}
                className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center">
                {isSubmitting ? (
                  <div className="flex items-center"><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />Sending...</div>
                ) : isSubmitted ? (
                  <div className="flex items-center"><CheckCircle className="w-5 h-5 mr-2" />Message Sent!</div>
                ) : (
                  <div className="flex items-center"><Send className="w-5 h-5 mr-2" />Send Message</div>
                )}
              </button>
            </form>

            {isSubmitted && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900/90 backdrop-blur-sm rounded-lg">
                <div className="text-center animate-fadeInUp">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4 animate-bounce" />
                  <h4 className="text-2xl font-bold mb-2">Thank You!</h4>
                  <p className="text-gray-400">Your message has been sent successfully.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
