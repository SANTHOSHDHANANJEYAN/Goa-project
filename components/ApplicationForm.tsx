"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

type ApplicationFormProps = {
  id: string;
  title: string;
  subtitle: string;
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  experience: string;
  format: string;
  message: string;
};

const ApplicationForm: React.FC<ApplicationFormProps> = ({ id, title, subtitle }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    experience: "",
    format: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulated delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        experience: "",
        format: "",
        message: "",
      });
    } catch (error) {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id={id} className="py-16 px-4 bg-purple-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">{title}</h2>
        <p className="text-center text-gray-600 mb-12">{subtitle}</p>

        {submitSuccess && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-8 text-center">
            <p className="font-medium">Application submitted successfully!</p>
            <p>We'll contact you soon to discuss next steps.</p>
          </div>
        )}

        {submitError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-8 text-center">
            <p className="font-medium">There was an error submitting your application.</p>
            <p>Please try again or contact us directly.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label htmlFor="experience" className="block text-gray-700 mb-2">Yoga Experience *</label>
              <select
                id="experience"
                name="experience"
                required
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Select experience level</option>
                <option value="0-6 months">0–6 months</option>
                <option value="6-12 months">6–12 months</option>
                <option value="1-3 years">1–3 years</option>
                <option value="3+ years">3+ years</option>
              </select>
            </div>

            <div>
              <label htmlFor="format" className="block text-gray-700 mb-2">Preferred Training Format *</label>
              <select
                id="format"
                name="format"
                required
                value={formData.format}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Select format</option>
                <option value="Intensive (4 weeks)">Intensive (4 weeks)</option>
                <option value="Weekend (3 months)">Weekend (3 months)</option>
                <option value="Online-Hybrid (6 months)">Online-Hybrid (6 months)</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-gray-700 mb-2">Why do you want to join this training? *</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 text-white bg-purple-600 rounded-lg font-medium 
                ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-purple-700"} 
                transition-colors`}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ApplicationForm;
