"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";

const QuickContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("Please agree to the terms before submitting.");
      return;
    }

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", consent: false });
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-xl mx-auto p-8 bg-white/30 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center text-purple-800 drop-shadow-sm">
          Do you have any Questions?
        </h2>

        {submitSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 text-center"
          >
            <p>Thank you! We'll be in touch soon.</p>
          </motion.div>
        )}

        {submitError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 text-center"
          >
            <p>Submission failed. Please try again.</p>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-gray-800 mb-1 font-medium">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 bg-white"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-800 mb-1 font-medium">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 bg-white"
            />
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1"
            />
            <label htmlFor="consent" className="text-sm text-gray-700">
              I agree to receive updates and communications via email.
            </label>
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileTap={{ scale: 0.95 }}
            className={`w-full py-3 px-6 text-white bg-purple-600 rounded-lg font-medium 
              ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-purple-700"} 
              transition-all duration-300 shadow-md`}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default QuickContactForm;
