import React from "react";

const FreeManualSignup: React.FC = () => {
  return (
    <section className="relative bg-transparent py-20 text-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('/images/radial-bg.png')] bg-cover bg-center" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-900 mb-4">
          Get your FREE <br className="sm:hidden" /> 50-hour study manual
        </h2>
        <p className="text-gray-700 max-w-xl mb-8">
          and 5 video lessons to discover the fundamental principles of creating your own
          yoga class and essential tools for teaching
        </p>

        <form className="w-full max-w-md space-y-4">
          <input
            type="email"
            placeholder="e-mail"
            className="w-full px-4 py-3 border border-indigo-200 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-indigo-200 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="w-full py-3 bg-indigo-900 text-white font-semibold rounded-full hover:bg-indigo-800 transition"
          >
            GET IT
          </button>
          <p className="text-xs text-gray-600 mt-2">
            By clicking "Get It", you agree to the{" "}
            <a href="/privacy-policy" className="underline text-indigo-700">
              privacy policy
            </a>
          </p>
        </form>

        <div className="mt-10">
          <img
            src="/yg_logo-removebg-preview.png"
            alt="200 hrs Yoga Teacher Training Manual"
            className="w-40 sm:w-56 mx-auto shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default FreeManualSignup;