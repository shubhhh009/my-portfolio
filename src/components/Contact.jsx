const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-[60vh] bg-white dark:bg-black text-black dark:text-white px-10 py-10 flex "
    >
      <div className="w-full mx-auto flex flex-col gap-12">
        {/* Heading */}
        <div>
          <h2 className="text-4xl font-semibold">
            Contact <span className="text-purple-600">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-xl">
            If you want to discuss a project, collaboration, or opportunity,
            feel free to reach out via email or phone.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Email Card */}
          <div className="border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 rounded-xl p-6
                          hover:border-purple-500/50 transition-all">
            <h3 className="text-2xl font-semibold mb-3">Email</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Click below to send me an email directly.
            </p>

            <a
              href="mailto:tiwarisachin8482@gmail.com"
              className="inline-block bg-purple-600 hover:bg-purple-700
                         transition-all px-6 py-3 rounded-lg font-medium text-white"
            >
              Send Email
            </a>

            <p className="text-sm text-gray-500 mt-4">
             tiwarisachin8482@gmail.com
            </p>
          </div>

          {/* Phone Card */}
          <div className="border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 rounded-xl p-6
                          hover:border-purple-500/50 transition-all">
            <h3 className="text-2xl font-semibold mb-3">Phone</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Call or WhatsApp me directly using the button below.
            </p>

            <a
              href="tel:+916386042773"
              className="inline-block bg-purple-600 hover:bg-purple-700
                         transition-all px-6 py-3 rounded-lg font-medium text-white"
            >
              Call Now
            </a>

            <p className="text-sm text-gray-500 mt-4">
              +91 63860 42773
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-gray-500 text-sm">
          I usually respond within 24 hours.
        </p>
      </div>
    </section>
  );
};

export default Contact;
