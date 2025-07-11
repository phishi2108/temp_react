const Contact = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 px-6 py-10 md:px-16 lg:px-32 text-gray-800 dark:text-white transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-red-600 dark:text-red-400">Contact Us</h1>
        <p className="text-lg mb-8">
          Have questions, feedback, or just want to say hello? We're here to help! Fill out the form below and we'll get back to you as soon as possible.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-1 p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full mt-1 p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-sm text-gray-500 dark:text-gray-400">
          Note: This form is for demonstration purposes only.
        </div>
      </div>
    </div>
  );
};

export default Contact;
