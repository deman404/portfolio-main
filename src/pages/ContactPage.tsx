import React, { useState } from "react";
import * as icons from "lucide-react";
import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/ui/Button";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<{
    status: "idle" | "submitting" | "success" | "error";
    message: string;
  }>({
    status: "idle",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        status: "error",
        message: "Please fill out all required fields.",
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        status: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    // Simulate form submission
    setFormStatus({
      status: "submitting",
      message: "",
    });

    // Simulate API call
    setTimeout(() => {
      setFormStatus({
        status: "success",
        message:
          "Thank you for your message! I will get back to you as soon as possible.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="pt-24 pb-16 md:pb-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Let's Connect"
          subtitle="Have a project in mind or just want to say hello? I'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="">Select a subject</option>
                  <option value="project">Project Inquiry</option>
                  <option value="job">Job Opportunity</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                ></textarea>
              </div>

              {/* Form Status Message */}
              {formStatus.message && (
                <div
                  className={`mb-6 p-4 rounded-md ${
                    formStatus.status === "error"
                      ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                      : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                disabled={formStatus.status === "submitting"}
                className="w-full md:w-auto"
              >
                {formStatus.status === "submitting" ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <icons.Send size={16} className="mr-2" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 md:p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-teal-600 dark:text-teal-500 mr-3">
                    <icons.Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </h4>
                    <a
                      href="mailto:mr.aymanazhar.m@gmail.com"
                      className="text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-500 transition-colors"
                    >
                      mr.aymanazhar.m@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-teal-600 dark:text-teal-500 mr-3">
                    <icons.Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone
                    </h4>
                    <a
                      href="tel:+1234567890"
                      className="text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-500 transition-colors"
                    >
                      +212 7 83199633
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-teal-600 dark:text-teal-500 mr-3">
                    <icons.MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Location
                    </h4>
                    <p className="text-gray-900 dark:text-white">
                     Marrakech, Morocco
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 md:p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Connect With Me
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href="https://github.com/MrAymanAzhar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center py-4 px-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-teal-100 dark:hover:bg-teal-900/30 transition-colors"
                >
                  <icons.Github size={20} className="mr-2" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/ayman-azhar-9936b1332/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center py-4 px-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-teal-100 dark:hover:bg-teal-900/30 transition-colors"
                >
                  <icons.Linkedin size={20} className="mr-2" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center py-4 px-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-teal-100 dark:hover:bg-teal-900/30 transition-colors"
                >
                  <icons.Twitter size={20} className="mr-2" />
                  <span>Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
