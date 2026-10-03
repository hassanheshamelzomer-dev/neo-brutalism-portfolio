import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Sending...');

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStatus('Message sent successfully!');
          setIsSubmitting(false);
          form.current.reset();
          setTimeout(() => setStatus(''), 5000);
        },
        (error) => {
          setStatus('Failed to send. Please try again.');
          setIsSubmitting(false);
          setTimeout(() => setStatus(''), 5000);
        }
      );
  };

  return (
    <section id="contact" className="w-full bg-neo-cream py-20 px-4 border-b-[3px] border-black scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="card-brutal card-brutal-hover p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 flex items-center gap-4 text-black uppercase tracking-tight">
                <span className="material-symbols-outlined text-5xl md:text-6xl text-black">mail</span>
                Let's Connect
              </h2>
              <p className="text-lg md:text-xl mb-10 text-black font-bold bg-neo-lime inline-block px-4 py-2 border-2 border-black rounded-sm shadow-[2px_2px_0px_0px_#000]">
                Open for opportunities, collaborations, and discussions about Software QA and AI.
              </p>
              
              <div className="space-y-6 mb-10">
                <a href="mailto:hassan.heshamelzomer@gmail.com" className="flex items-center gap-5 text-lg md:text-xl font-bold text-black hover:underline group">
                  <div className="icon-box bg-neo-coral text-black group-hover:-translate-y-1 transition-transform">
                    <span className="material-symbols-outlined">email</span>
                  </div>
                  <span className="break-all">hassan.heshamelzomer@gmail.com</span>
                </a>
                <a href="tel:+201008752855" className="flex items-center gap-5 text-lg md:text-xl font-bold text-black hover:underline group">
                  <div className="icon-box bg-neo-lavender text-black group-hover:-translate-y-1 transition-transform">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  +20 1008752855
                </a>
                <div className="flex items-center gap-5 text-lg md:text-xl font-bold text-black">
                  <div className="icon-box bg-neo-blue text-black">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  Giza, Egypt
                </div>
              </div>
            </div>
            
            <form ref={form} onSubmit={sendEmail} className="bg-neo-blue p-6 md:p-8 rounded-sm brutal-border brutal-shadow flex flex-col gap-6 w-full relative">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-neo-lime rounded-sm border-2 border-black flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined font-bold text-black">edit</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-black">Send a Message</h3>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="user_name" className="font-bold text-black text-lg">Name</label>
                <input type="text" name="user_name" id="user_name" placeholder="Your Name" className="input-brutal bg-white" required />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="user_email" className="font-bold text-black text-lg">Email</label>
                <input type="email" name="user_email" id="user_email" placeholder="your.email@example.com" className="input-brutal bg-white" required />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-bold text-black text-lg">Message</label>
                <textarea name="message" id="message" rows="4" placeholder="How can I help you?" className="input-brutal bg-white resize-none" required></textarea>
              </div>
              
              <button type="submit" disabled={isSubmitting} className="btn-brutal bg-neo-coral text-black text-lg md:text-xl w-full mt-2 py-4 disabled:opacity-70">
                <span className="material-symbols-outlined mr-2">{isSubmitting ? 'hourglass_empty' : 'send'}</span>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {status && (
                <div className={`absolute -bottom-16 left-0 right-0 p-3 brutal-border rounded-sm text-center font-bold text-black z-10 ${status.includes('success') ? 'bg-neo-lime' : status.includes('Failed') ? 'bg-neo-coral' : 'bg-white'}`}>
                  {status}
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
