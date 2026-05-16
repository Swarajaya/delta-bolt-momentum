import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import cafeImg from '../assets/cafe_branding_modern_design.jpg';
import fashionImg from '../assets/fashion_ecommerce_startup_website.jpg';
import gymImg from '../assets/gym_fitness_brand_modern.jpg';
import hotelImg from '../assets/luxury_hotel_digital_branding.jpg';
import restaurantImg from '../assets/restaurant_website_mockup_premium.jpg';

const CASE_STUDIES = {
  'cafe-branding': {
    id: 'cafe-branding',
    title: 'Brewed & Bold — Café Brand Identity',
    industry: 'Food & Beverage',
    image: cafeImg,
    description:
      'A full-spectrum brand overhaul for an artisan café chain. We crafted a cohesive visual identity, custom packaging, and a digital presence that elevated their story from a local favourite to a nationally recognised lifestyle brand.',
    results: [
      '340% increase in social media engagement within 90 days',
      'Brand recall score jumped from 22% to 71% post-launch',
      '2× revenue growth driven by repositioned premium tier',
      'Featured in three national design publications',
    ],
    tags: ['Brand Identity', 'Packaging Design', 'Social Strategy', 'Photography'],
  },
  'fashion-ecommerce': {
    id: 'fashion-ecommerce',
    title: 'Lumière — Fashion eCommerce Platform',
    industry: 'Fashion & Retail',
    image: fashionImg,
    description:
      'End-to-end eCommerce experience for an emerging fashion startup. We designed and engineered a conversion-optimised storefront, curated editorial lookbooks, and built a retention-first email funnel.',
    results: [
      'Cart conversion rate improved by 58% in the first quarter',
      'Average order value increased by 42% via upsell UX patterns',
      '120 000 unique visitors in month one post-launch',
      'Email list grew to 35 000 subscribers in six months',
    ],
    tags: ['eCommerce', 'UX/UI Design', 'Email Marketing', 'Copywriting'],
  },
  'gym-fitness': {
    id: 'gym-fitness',
    title: 'Apex Fitness — Digital Brand Launch',
    industry: 'Health & Fitness',
    image: gymImg,
    description:
      'A high-energy digital launch for a premium gym network. From logo system and brand guidelines to a performance-focused website and paid acquisition campaigns, we built the brand's entire digital infrastructure.',
    results: [
      '4 800 membership sign-ups generated through digital channels',
      'Cost-per-lead reduced by 63% versus industry benchmark',
      'Website loads in under 1.2 s on mobile (Core Web Vitals: green)',
      'Google Business rating reached 4.9 ★ within three months',
    ],
    tags: ['Brand System', 'Web Development', 'Paid Ads', 'SEO'],
  },
  'luxury-hotel': {
    id: 'luxury-hotel',
    title: 'Maison Éclat — Luxury Hotel Digital Presence',
    industry: 'Hospitality',
    image: hotelImg,
    description:
      'A bespoke digital experience for a five-star boutique hotel. We reimagined their online presence with cinematic visuals, a seamless booking flow, and multi-channel storytelling that resonates with affluent travellers.',
    results: [
      'Direct bookings increased by 89%, reducing OTA dependency',
      'Average booking value rose by 31% post-relaunch',
      'Bounce rate dropped from 74% to 28% on key landing pages',
      'TripAdvisor ranking moved from #47 to #3 in the region',
    ],
    tags: ['Web Design', 'Booking UX', 'Content Strategy', 'Photography'],
  },
  'restaurant-website': {
    id: 'restaurant-website',
    title: 'Saffron — Restaurant Digital Experience',
    industry: 'Dining & Hospitality',
    image: restaurantImg,
    description:
      'A premium web presence and reservation system for a fine-dining destination. We married editorial storytelling with functional UX to create a digital experience worthy of a Michelin-starred ambition.',
    results: [
      'Online reservations up 210% in the first two months',
      'Dwell time on menu pages increased to 4 min 22 s average',
      'Instagram following grew by 18 000 from integrated social feed',
      'Featured in Condé Nast Traveller digital edition',
    ],
    tags: ['Web Design', 'Reservation UX', 'Social Integration', 'Brand Voice'],
  },
};

const TAG_COLORS = [
  'bg-blue-100 text-blue-700',
  'bg-purple-100 text-purple-700',
  'bg-pink-100 text-pink-700',
  'bg-teal-100 text-teal-700',
  'bg-indigo-100 text-indigo-700',
];

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, y: 48, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 32, scale: 0.96 },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.08, duration: 0.35, ease: 'easeOut' } }),
};

function ProjectCaseStudyModal({ projectId, isOpen, onClose }) {
  const CloseIcon = Icons['X'] || Icons['HelpCircle'];
  const CheckIcon = Icons['CheckCircle2'] || Icons['HelpCircle'];

  const project = CASE_STUDIES[projectId] ?? null;
  const scrollRef = useRef(null);
  const closeBtnRef = useRef(null);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose?.();
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => closeBtnRef.current?.focus(), 120);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      clearTimeout(timer);
    };
  }, [isOpen, handleKeyDown]);

  useEffect(() => {
    if (isOpen && scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [isOpen, projectId]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          key="overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Case study: ${project?.title}`}
          onClick={(e) => { if (e.target === e.currentTarget) onClose?.(); }}
        >
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" aria-hidden="true" />

          <motion.div
            key="modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.38, ease: 'easeOut' }}
            className="relative w-full max-w-xl z-10"
          >
            <div
              className="relative rounded-3xl overflow-hidden bg-white/80 backdrop-blur-2xl border border-white/60 shadow-2xl"
              style={{}}
            >
              <div className="absolute inset-0 rounded-3xl pointer-events-none" aria-hidden="true">
                <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br from-[#59bfff]/20 to-[#d4b5fd]/20 blur-3xl" />
                <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-gradient-to-tr from-[#ffdaf3]/30 to-[#59bfff]/10 blur-2xl" />
              </div>

              <button
                ref={closeBtnRef}
                onClick={() => onClose?.()}
                aria-label="Close case study modal"
                className="absolute top-4 right-4 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-white/70 backdrop-blur-sm border border-slate-200/60 text-slate-500 hover:text-slate-800 hover:bg-white transition-all duration-200 shadow-sm"
              >
                <CloseIcon size={17} strokeWidth={2.2} />
              </button>

              <div ref={scrollRef} className="relative z-10 max-h-[88vh] overflow-y-auto">
                <div className="relative">
                  <img
                    src={project?.image}
                    alt={project?.title}
                    className="w-full object-cover max-h-52"
                    style={{ borderRadius: '24px 24px 0 0' }}
                    onError={(e) => { e.currentTarget.src = 'https://placehold.co/640x208/e2e8f0/94a3b8?text=Project'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" style={{ borderRadius: '24px 24px 0 0' }} aria-hidden="true" />
                  <span className="absolute bottom-4 left-5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/50 text-xs font-semibold text-slate-600 shadow-sm font-[Inter,sans-serif] tracking-wide">
                    {project?.industry}
                  </span>
                </div>

                <div className="px-7 pt-6 pb-8 space-y-5">
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.35, ease: 'easeOut' }}
                    className="text-2xl font-bold text-slate-800 leading-snug tracking-tight font-[Inter,sans-serif] pr-8"
                  >
                    {project?.title}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.16, duration: 0.35, ease: 'easeOut' }}
                    className="text-slate-600 text-base leading-relaxed font-[Inter,sans-serif]"
                  >
                    {project?.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.22, duration: 0.35, ease: 'easeOut' }}
                    className="space-y-3"
                  >
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-[Inter,sans-serif]">Results</h3>
                    <ul className="space-y-2.5">
                      {project?.results?.map((result, i) => (
                        <motion.li
                          key={i}
                          custom={i}
                          variants={listItemVariants}
                          initial="hidden"
                          animate="visible"
                          className="flex items-start gap-3"
                        >
                          <span className="mt-0.5 shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-[#59bfff] to-[#d4b5fd]">
                            <CheckIcon size={11} strokeWidth={2.8} className="text-white" />
                          </span>
                          <span className="text-slate-700 text-sm leading-relaxed font-[Inter,sans-serif]">{result}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.34, duration: 0.35, ease: 'easeOut' }}
                    className="space-y-3"
                  >
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-[Inter,sans-serif]">Services Delivered</h3>
                    <div className="flex flex-wrap gap-2">
                      {project?.tags?.map((tag, i) => (
                        <span
                          key={tag}
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold font-[Inter,sans-serif] ${TAG_COLORS[i % TAG_COLORS.length]}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.42, duration: 0.35, ease: 'easeOut' }}
                    className="pt-2"
                  >
                    <a
                      href={`https://wa.me/15550000000?text=${encodeURIComponent(`Hi VELORA! I'd love to discuss a project similar to "${project?.title}".`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-[#59bfff] to-[#d4b5fd] text-white font-semibold text-sm tracking-wide shadow-lg hover:shadow-[0_8px_28px_0_rgba(89,191,255,0.38)] hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 font-[Inter,sans-serif]"
                    >
                      Start a Similar Project
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProjectCaseStudyModal;
