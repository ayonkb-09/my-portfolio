import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // নিচে 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_PUBLIC_KEY' এর জায়গায় তোমার আসল কি (Key) বসাতে হবে
    emailjs.sendForm('service_ho0x8wb', 'template_iaiskbm', form.current, 'fvEniAZDvC4Ma7wua')
      .then((result) => {
          setIsSent(true);
          form.current.reset(); // মেসেজ যাওয়ার পর ফর্ম খালি করে দেবে
          setTimeout(() => setIsSent(false), 5000); // ৫ সেকেন্ড পর সাকসেস মেসেজ লুকিয়ে ফেলবে
      }, (error) => {
          alert("Something went wrong! Please try again.");
      });
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 px-6 sm:px-12 md:px-24">
      <div className="max-w-xl mx-auto text-center">
        
        <h2 className="text-3xl font-bold text-slate-200 mb-6 flex items-center justify-center">
          <span className="text-teal-400 font-mono text-xl mr-2"></span> What's Next?
        </h2>
        
        <h3 className="text-4xl md:text-5xl font-bold text-slate-300 mb-4">Get In Touch</h3>
        <p className="text-slate-400 mb-6 leading-relaxed">
          I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        {/* কন্টাক্ট ফর্ম */}
        <motion.form 
          ref={form} 
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-5 text-left"
        >
          <div className="flex flex-col gap-2">
            <label className="text-slate-400 font-mono text-sm">Name</label>
            <input 
              type="text" 
              name="user_name" 
              required 
              className="bg-slate-800 border border-slate-700 rounded p-3 text-slate-200 focus:outline-none focus:border-teal-400 transition"
              placeholder="Your Name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-slate-400 font-mono text-sm">Email</label>
            <input 
              type="email" 
              name="user_email" 
              required 
              className="bg-slate-800 border border-slate-700 rounded p-3 text-slate-200 focus:outline-none focus:border-teal-400 transition"
              placeholder="yourname@gmail.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-slate-400 font-mono text-sm">Message</label>
            <textarea 
              name="message" 
              rows="5" 
              required 
              className="bg-slate-800 border border-slate-700 rounded p-3 text-slate-200 focus:outline-none focus:border-teal-400 transition resize-none"
              placeholder="Hello Ayon, I would like to talk about..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full mt-4 border border-teal-400 text-teal-400 font-mono py-4 rounded hover:bg-teal-400/10 transition duration-300"
          >
            Say Hello
          </button>

          {/* মেসেজ সেন্ড হলে এই লেখাটি দেখাবে */}
          {isSent && (
            <p className="text-teal-400 text-center mt-4 font-mono">
              Message sent successfully!
            </p>
          )}
        </motion.form>

      </div>
    </section>
  );
};

export default Contact;