import React from "react";

const HomeScreen = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Main Container - Overview Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 space-y-6 bg-gradient-to-br from-indigo-600 via-blue-500 to-teal-400 text-white">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Proactive Network Professional Technologies
        </h2>
        <h1 className="text-6xl sm:text-8xl font-extrabold">The Future</h1>
        <h1 className="text-6xl sm:text-8xl font-extrabold">Belongs to the Cloud</h1>
        <p className="text-lg sm:text-2xl max-w-2xl mx-auto">
          At PNP Technologies, we are on a mission to conquer the business landscape with our talent and expertise.
        </p>
        <p className="text-lg sm:text-2xl max-w-2xl mx-auto">
          As a rapidly growing agency, we bring energy and fresh perspectives to every project we undertake.
        </p>

        {/* Contact Us Button with Glassmorphism */}
        <div className="mt-8">
          <button
            className="bg-white bg-opacity-20 backdrop-blur-lg text-white py-3 px-8 rounded-full shadow-lg hover:bg-opacity-30 transition duration-300"
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* Why Us Section - Grid Layout */}
      <section className="py-24 px-4 sm:px-10 bg-white text-gray-900">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Why Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Grid Item 1 */}
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-5xl mb-4">💡</h2>
            <h3 className="text-2xl font-semibold mb-2">Specialized Expertise</h3>
            <p className="text-lg">
              Our team specializes in cloud computing, data analytics, and DevOps. Each team member is highly skilled and certified in data engineering and automation.
            </p>
          </div>

          {/* Grid Item 2 */}
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-5xl mb-4">🌟</h2>
            <h3 className="text-2xl font-semibold mb-2">Client-Centric Approach</h3>
            <p className="text-lg">
              We focus on understanding client needs and tailor solutions that drive growth, efficiency, and success.
            </p>
          </div>

          {/* Grid Item 3 */}
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-5xl mb-4">🔧</h2>
            <h3 className="text-2xl font-semibold mb-2">Innovation & Excellence</h3>
            <p className="text-lg">
              Innovation is at the core of everything we do. We explore new technologies to deliver cutting-edge solutions.
            </p>
          </div>

          {/* Grid Item 4 */}
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-5xl mb-4">🤝</h2>
            <h3 className="text-2xl font-semibold mb-2">Collaborative Partnership</h3>
            <p className="text-lg">
              We work closely with our clients as trusted partners, building strong relationships based on mutual trust.
            </p>
          </div>

          {/* Grid Item 5 */}
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-5xl mb-4">🌐</h2>
            <h3 className="text-2xl font-semibold mb-2">Global Reach</h3>
            <p className="text-lg">
              Our ambition knows no bounds. We take on projects globally, no matter the scale.
            </p>
          </div>

          {/* Grid Item 6 */}
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-5xl mb-4">✨</h2>
            <h3 className="text-2xl font-semibold mb-2">Let's Conquer Together!</h3>
            <p className="text-lg">
              Join us in harnessing the power of cloud, data, and DevOps. Together, we will conquer new heights of success!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
