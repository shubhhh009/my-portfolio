import { useState } from "react";
import { Mail, Phone, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  // REPLACE THIS URL WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby8Lt1fqTKKqeDtzIyuf55pXXsLAjlkJPiE3NV75tX4aOfeGdfNlgTKBTpDtDVCUUBy/exec"; 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    if(GOOGLE_SCRIPT_URL.includes("...")) {
        setStatus({ loading: false, success: false, error: "Please configure the Google Script URL in the code." });
        return;
    }

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("message", formData.message);

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: data,
        mode: "no-cors" // Important for Google Apps Script
      });

      // Since mode is no-cors, we can't fully read the response, so we assume success if no error is thrown.
      // Ideally, the script returns JSON, but no-cors makes it opaque.
      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: "", email: "", message: "" });
      
      // Auto-reset success message after 5 seconds
      setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);

    } catch (error) {
      console.error("Submission Error:", error);
      setStatus({ loading: false, success: false, error: "Something went wrong. Please try again." });
    }
  };

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

          {/* Contact Form */}
          <div className="glass p-8 rounded-3xl border border-white/20 dark:border-white/5 shadow-xl">
             <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Send a Message</h3>
             <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                />
                 <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email" 
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                />
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Your Message..." 
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                ></textarea>
                
                <button 
                  type="submit" 
                  disabled={status.loading}
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status.loading ? (
                    <>
                        <Loader2 size={18} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                        <Send size={18} /> Send Message
                    </>
                  )}
                </button>

                {status.success && (
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 p-3 rounded-xl text-sm font-medium animate-fade-in">
                        <CheckCircle size={18} /> Message sent successfully!
                    </div>
                )}

                {status.error && (
                    <div className="flex items-center gap-2 text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30 p-3 rounded-xl text-sm font-medium animate-fade-in">
                        <AlertCircle size={18} /> {status.error}
                    </div>
                )}
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
