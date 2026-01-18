"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaPhone, FaEnvelope, FaTerminal, FaPaperPlane } from "react-icons/fa";
import { useToast } from "./ToastContext";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const { showToast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Create form data
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    try {
      await fetch("https://getform.io/f/amddklrb", {
        method: "POST",
        body: data,
      });
      showToast(
        "Message sent successfully! I'll get back to you soon.",
        "success",
      );
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      showToast("Error sending message. Please try again.", "error");
    }
  };

  return (
    <div className="py-24 bg-black relative overflow-hidden" id="contact">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#00ff41 1px, transparent 1px), linear-gradient(90deg, #00ff41 1px, transparent 1px)`,
            backgroundSize: "35px 35px",
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-block">
            <div className="bg-gray-900/90 backdrop-blur-sm border border-emerald-500/30 rounded-lg overflow-hidden">
              <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-400 text-sm font-mono ml-2">
                  contact.sh
                </span>
              </div>
              <div className="px-6 py-4 font-mono">
                <div className="text-gray-500 text-sm mb-2">
                  $ ./sendMessage.sh --interactive
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">
                  <span className="text-white">Get In</span>{" "}
                  <span className="text-emerald-400">Touch</span>
                </h2>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Terminal window for contact info */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-lg overflow-hidden">
              <div className="bg-gray-800/80 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/70"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/70"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/70"></div>
                </div>
                <span className="text-gray-400 text-xs font-mono ml-2">
                  contact-info.log
                </span>
              </div>

              <div className="p-6 space-y-6">
                <div className="font-mono text-sm text-gray-500 mb-4">
                  $ cat contact.json
                </div>

                {/* Phone */}
                <div className="group">
                  <div className="flex items-center gap-4 p-4 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-emerald-500/50 transition-all">
                    <div className="bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/30">
                      <FaPhone className="text-emerald-400" size={24} />
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs font-mono mb-1">
                        PHONE_NUMBER
                      </div>
                      <div className="text-white font-mono">
                        +91 938 033 3454
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="group">
                  <div className="flex items-center gap-4 p-4 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-emerald-500/50 transition-all">
                    <div className="bg-cyan-500/10 p-3 rounded-lg border border-cyan-500/30">
                      <FaEnvelope className="text-cyan-400" size={24} />
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs font-mono mb-1">
                        EMAIL_ADDRESS
                      </div>
                      <div className="text-white font-mono text-sm break-all">
                        arjunbr270@gmail.com
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status */}
                <div className="pt-4 border-t border-gray-800 font-mono text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span>Available for opportunities</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick commands */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 font-mono text-sm">
              <div className="text-gray-500 mb-2">// Quick commands</div>
              <div className="space-y-1 text-gray-600">
                <div>$ mail -s "Opportunity" arjunbr270@gmail.com</div>
                <div>$ call +91-938-033-3454</div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-lg overflow-hidden">
              {/* Terminal Header */}
              <div className="bg-gray-800/80 px-4 py-2 flex items-center justify-between border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/70"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500/70"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500/70"></div>
                  </div>
                  <FaTerminal className="text-emerald-400 ml-2" size={12} />
                  <span className="text-gray-400 text-xs font-mono">
                    message-composer
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-gray-500 text-xs font-mono">Ready</span>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-8">
                <div className="mb-6">
                  <div className="font-mono text-sm text-gray-500 mb-2">
                    $ nano new_message.txt
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Let's Connect
                  </h3>
                  <p className="text-gray-400">
                    Send me a message and let's schedule a call
                  </p>
                </div>

                <div className="space-y-4" onSubmit={handleSubmit}>
                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs text-gray-500 mb-2">
                        FIRST_NAME
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("firstName")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="John"
                        className={`w-full bg-gray-800/50 border ${
                          focusedField === "firstName"
                            ? "border-emerald-500 shadow-lg shadow-emerald-500/20"
                            : "border-gray-700"
                        } rounded-lg p-3 text-white font-mono focus:outline-none transition-all`}
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs text-gray-500 mb-2">
                        LAST_NAME
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("lastName")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Doe"
                        className={`w-full bg-gray-800/50 border ${
                          focusedField === "lastName"
                            ? "border-emerald-500 shadow-lg shadow-emerald-500/20"
                            : "border-gray-700"
                        } rounded-lg p-3 text-white font-mono focus:outline-none transition-all`}
                      />
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs text-gray-500 mb-2">
                        EMAIL
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="john@example.com"
                        className={`w-full bg-gray-800/50 border ${
                          focusedField === "email"
                            ? "border-emerald-500 shadow-lg shadow-emerald-500/20"
                            : "border-gray-700"
                        } rounded-lg p-3 text-white font-mono focus:outline-none transition-all`}
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs text-gray-500 mb-2">
                        PHONE
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="+91 XXXXX XXXXX"
                        maxLength={10}
                        className={`w-full bg-gray-800/50 border ${
                          focusedField === "phone"
                            ? "border-emerald-500 shadow-lg shadow-emerald-500/20"
                            : "border-gray-700"
                        } rounded-lg p-3 text-white font-mono focus:outline-none transition-all`}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-mono text-xs text-gray-500 mb-2">
                      MESSAGE
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Your message here..."
                      rows={5}
                      className={`w-full bg-gray-800/50 border ${
                        focusedField === "message"
                          ? "border-emerald-500 shadow-lg shadow-emerald-500/20"
                          : "border-gray-700"
                      } rounded-lg p-3 text-white font-mono focus:outline-none transition-all resize-none`}
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSubmit}
                    className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3 px-6 rounded-lg font-mono flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20"
                  >
                    <FaPaperPlane />
                    <span>$ ./send.sh</span>
                  </motion.button>

                  {/* Command output */}
                  <div className="pt-4 border-t border-gray-800 font-mono text-xs text-gray-600">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400">$</span>
                      <span>Ready to send your message</span>
                      <span className="animate-pulse">_</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
