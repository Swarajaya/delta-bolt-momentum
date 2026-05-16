import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';

const CheckCircle = Icons['CheckCircle'] || Icons['HelpCircle'];
const Send = Icons['Send'] || Icons['HelpCircle'];
const MessageCircle = Icons['MessageCircle'] || Icons['HelpCircle'];
const Mail = Icons['Mail'] || Icons['HelpCircle'];
const Phone = Icons['Phone'] || Icons['HelpCircle'];
const User = Icons['User'] || Icons['HelpCircle'];
const AtSign = Icons['AtSign'] || Icons['HelpCircle'];
const MessageSquare = Icons['MessageSquare'] || Icons['HelpCircle'];

const WHATSAPP_NUMBER = '919258903072';
const EMAIL = 'velora2049@gmail.com';
const PHONE = '+919258903072';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function validate(fields) {
  const errors = {};
  if (!fields.name?.trim()) errors.name = 'Name is required.';
  if (!fields.email?.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!fields.message?.trim() || fields.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  }
  return errors;
}

export default function ContactSection() {
  const [fields, setFields] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.currentTarget;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (touched?.[name]) {
      setErrors((prev) => ({ ...prev, ...validate({ ...fields, [name]: value }) }));
    }
  }

  function handleBlur(e) {
    const { name } = e.currentTarget;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate({ ...fields, [name]: fields[name] }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const allTouched = { name: true, email: true, message: true };
    setTouched(allTouched);
    const errs = validate(fields);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1400));
    setLoading(false);
    setSubmitted(true);
  }

  function handleReset() {
    setFields({ name: '', email: '', message: '' });
    setErrors({});
    setTouched({});
    setSubmitted(false);
  }

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi VELORA! I would like to get in touch.')}` ;

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-24 px-4 md:px-8"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-200 opacity-20 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-purple-200 opacity-20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-pink-100 opacity-15 blur-2xl" />
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-screen-xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div variants={itemVariants} className="mb-14 text-center">
          <span className="inline-block mb-3 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold tracking-widest text-blue-600 uppercase">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Get in{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            Ready to elevate your brand? Reach out and let&apos;s build something exceptional together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div
            variants={itemVariants}
            className="rounded-3xl p-8 md:p-10 backdrop-blur-xl bg-white/70 border border-white/60 shadow-xl"
            style={{ boxShadow: '0 12px 48px 0 rgba(89,191,255,0.13), 0 2px 8px 0 rgba(212,181,253,0.10)' }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="flex flex-col items-center justify-center gap-6 py-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
                    className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 shadow-lg"
                  >
                    <CheckCircle className="w-10 h-10 text-white" strokeWidth={2.2} />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-500 text-base">
                      Thank you for reaching out. Our team will get back to you shortly.
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleReset}
                    className="mt-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3.5 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-shadow"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="flex flex-col gap-6"
                >
                  <div className="mb-2">
                    <h3 className="text-2xl font-bold text-slate-900">Send a Message</h3>
                    <p className="text-slate-400 text-sm mt-1">We reply within 24 hours.</p>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-name" className="text-sm font-medium text-slate-600">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        autoComplete="name"
                        placeholder="Your full name"
                        value={fields.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full rounded-2xl border bg-white/80 py-3.5 pl-11 pr-4 text-slate-800 placeholder-slate-300 text-sm transition focus:outline-none focus:ring-2 ${
                          errors.name && touched.name
                            ? 'border-red-300 focus:ring-red-200'
                            : 'border-slate-200 focus:ring-blue-200 focus:border-blue-400'
                        }`}
                      />
                    </div>
                    {errors.name && touched.name && (
                      <p className="text-xs text-red-500 mt-0.5 pl-1">{errors.name}</p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-email" className="text-sm font-medium text-slate-600">
                      Email Address
                    </label>
                    <div className="relative">
                      <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        value={fields.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full rounded-2xl border bg-white/80 py-3.5 pl-11 pr-4 text-slate-800 placeholder-slate-300 text-sm transition focus:outline-none focus:ring-2 ${
                          errors.email && touched.email
                            ? 'border-red-300 focus:ring-red-200'
                            : 'border-slate-200 focus:ring-blue-200 focus:border-blue-400'
                        }`}
                      />
                    </div>
                    {errors.email && touched.email && (
                      <p className="text-xs text-red-500 mt-0.5 pl-1">{errors.email}</p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-message" className="text-sm font-medium text-slate-600">
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-slate-400" />
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        placeholder="Tell us about your project..."
                        value={fields.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full rounded-2xl border bg-white/80 py-3.5 pl-11 pr-4 text-slate-800 placeholder-slate-300 text-sm transition focus:outline-none focus:ring-2 resize-none ${
                          errors.message && touched.message
                            ? 'border-red-300 focus:ring-red-200'
                            : 'border-slate-200 focus:ring-blue-200 focus:border-blue-400'
                        }`}
                      />
                    </div>
                    {errors.message && touched.message && (
                      <p className="text-xs text-red-500 mt-0.5 pl-1">{errors.message}</p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={!loading ? { scale: 1.03 } : {}}
                    whileTap={!loading ? { scale: 0.97 } : {}}
                    className="mt-2 flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 py-4 px-8 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full inline-block"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="rounded-3xl p-8 md:p-10 backdrop-blur-xl bg-white/60 border border-white/60 shadow-xl flex flex-col gap-8"
            style={{ boxShadow: '0 12px 48px 0 rgba(89,191,255,0.13), 0 2px 8px 0 rgba(212,181,253,0.10)' }}
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Contact Information</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Prefer a direct line? Choose whichever channel suits you best. We&apos;re always available.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-4 rounded-2xl bg-gradient-to-r from-green-400 to-emerald-500 p-5 shadow-md group cursor-pointer"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white/80 uppercase tracking-widest mb-0.5">WhatsApp</p>
                  <p className="text-base font-bold text-white">{PHONE}</p>
                  <p className="text-xs text-white/70 mt-0.5">Chat with us instantly</p>
                </div>
              </motion.a>

              <motion.a
                href={`mailto:${EMAIL}`}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-4 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 p-5 shadow-md group cursor-pointer"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-white/80 uppercase tracking-widest mb-0.5">Email</p>
                  <p className="text-base font-bold text-white truncate">{EMAIL}</p>
                  <p className="text-xs text-white/70 mt-0.5">We reply within 24 hours</p>
                </div>
              </motion.a>

              <motion.a
                href={`tel:${PHONE}`}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-4 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 p-5 shadow-md group cursor-pointer"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white/80 uppercase tracking-widest mb-0.5">Phone</p>
                  <p className="text-base font-bold text-white">{PHONE}</p>
                  <p className="text-xs text-white/70 mt-0.5">Mon – Sat, 9am – 7pm IST</p>
                </div>
              </motion.a>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 p-5">
              <p className="text-sm text-slate-500 leading-relaxed">
                <span className="font-semibold text-slate-700">VELORA</span> is a premium digital agency crafting world-class websites, brands, and digital experiences. Let&apos;s shape your future together.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}