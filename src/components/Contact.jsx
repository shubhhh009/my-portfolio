import { Mail, Phone, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 w-full mb-20 md:mb-0">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div className="flex flex-col gap-4 mt-8">
              <a href="mailto:tiwarisachin8482@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl glass hover:bg-white/50 dark:hover:bg-white/10 transition-all group">
                <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wider">Email Me</p>
                  <p className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    tiwarisachin8482@gmail.com
                  </p>
                </div>
              </a>

              <a href="tel:+916386042773" className="flex items-center gap-4 p-4 rounded-2xl glass hover:bg-white/50 dark:hover:bg-white/10 transition-all group">
                <div className="p-3 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wider">Call Me</p>
                  <p className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                    +91 63860 42773
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Form (Visual Only for now) */}
          <div className="glass p-8 rounded-3xl border border-white/20 dark:border-white/5 shadow-xl">
             <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Send a Message</h3>
             <form className="flex flex-col gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                />
                 <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                />
                <textarea 
                  rows="4"
                  placeholder="Your Message..." 
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                ></textarea>
                <button 
                  type="button" 
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                >
                  <Send size={18} /> Send Message
                </button>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
