import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';

const ChevronDown = Icons['ChevronDown'] || Icons['HelpCircle'];

const FAQ_ITEMS = [
  {
    id: 1,
    question: 'What services does VELORA offer?',
    answer: 'VELORA provides end-to-end digital solutions including brand strategy, UI/UX design, web development, e-commerce builds, SEO optimization, and ongoing digital marketing. We handle everything from concept to launch and beyond.'
  },
  {
    id: 2,
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope. A landing page typically takes 1–2 weeks, while a full e-commerce platform or custom web application ranges from 4–10 weeks. We provide a detailed timeline during our initial consultation.'
  },
  {
    id: 3,
    question: 'Are your pricing packages negotiable?',
    answer: 'Absolutely. Every business has unique needs and budgets. We encourage you to reach out via WhatsApp or email so we can craft a custom proposal tailored specifically to your goals and investment level.'
  },
  {
    id: 4,
    question: 'Do you work with international clients?',
    answer: 'Yes, we work with clients globally. Our team operates across multiple time zones and communicates fluently in English, Spanish, and Portuguese. Remote collaboration is seamless with our project management workflow.'
  },
  {
    id: 5,
    question: 'What does your design process look like?',
    answer: 'We follow a structured five-step process: Discovery, Strategy, Design, Development, and Launch. Each phase includes client checkpoints to ensure alignment, transparency, and a final result that exceeds expectations.'
  },
  {
    id: 6,
    question: 'Will my website be mobile-friendly and fast?',
    answer: 'Every project we deliver is fully responsive and performance-optimized. We target 90+ Google PageSpeed scores, use modern frameworks, and apply best practices for Core Web Vitals to ensure fast, smooth experiences across all devices.'
  },
  {
    id: 7,
    question: 'Do you offer post-launch support and maintenance?',
    answer: 'Yes. We offer flexible maintenance plans covering updates, security patches, performance monitoring, and content changes. Our team remains available via WhatsApp for urgent matters, ensuring your digital presence stays healthy long after launch.'
  },
  {
    id: 8,
    question: 'How do I get started with VELORA?',
    answer: 'Simply reach out via our WhatsApp button, email, or the contact form below. We will schedule a free 30-minute strategy call to understand your project, answer your questions, and outline next steps — no commitment required.'
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <motion.div
      variants={itemVariants}
      className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
        isOpen
          ? 'border-[#59bfff]/60 bg-white/70 shadow-[0_8px_32px_0_rgba(89,191,255,0.18)]'
          : 'border-white/40 bg-white/40 shadow-[0_2px_12px_0_rgba(89,191,255,0.06)]'
      } backdrop-blur-xl`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 px-8 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#59bfff]/60 rounded-3xl"
      >
        <span
          className={`text-base md:text-lg font-semibold leading-snug transition-colors duration-300 ${
            isOpen ? 'text-[#2563eb]' : 'text-slate-800'
          }`}
        >
          {item?.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-300 ${
            isOpen
              ? 'bg-gradient-to-br from-[#59bfff] to-[#d4b5fd] text-white'
              : 'bg-slate-100 text-slate-400'
          }`}
        >
          <ChevronDown size={16} strokeWidth={2.5} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <div className="px-8 pb-7 pt-0">
              <div className="w-full h-px bg-gradient-to-r from-[#59bfff]/30 via-[#d4b5fd]/40 to-transparent mb-5" />
              <p className="text-slate-600 text-base md:text-[17px] leading-relaxed">
                {item?.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FaqAccordion() {
  const [openId, setOpenId] = useState(null);

  function handleToggle(id) {
    setOpenId(prev => (prev === id ? null : id));
  }

  return (
    <section
      id="faq"
      className="relative py-24 md:py-32 px-6 md:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 via-[#f0f8ff] to-[#f5f0ff]" />
      <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-[#59bfff]/10 blur-3xl -z-10" />
      <div className="absolute -bottom-40 -left-40 w-[480px] h-[480px] rounded-full bg-[#d4b5fd]/12 blur-3xl -z-10" />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-[#59bfff]/20 to-[#d4b5fd]/20 text-[#2563eb] border border-[#59bfff]/30">
            Got Questions?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
            Frequently Asked
            <span className="block bg-gradient-to-r from-[#59bfff] to-[#d4b5fd] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            Everything you need to know before working with us. Can&apos;t find an answer?{' '}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563eb] font-semibold hover:underline"
            >
              Chat with us directly.
            </a>
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="flex flex-col gap-4"
        >
          {FAQ_ITEMS.map(item => (
            <AccordionItem
              key={item?.id}
              item={item}
              isOpen={openId === item?.id}
              onToggle={() => handleToggle(item?.id)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default FaqAccordion;
