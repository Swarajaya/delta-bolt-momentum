import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';

const StarIcon = Icons['Star'] || Icons['HelpCircle'];
const ChevronLeftIcon = Icons['ChevronLeft'] || Icons['HelpCircle'];
const ChevronRightIcon = Icons['ChevronRight'] || Icons['HelpCircle'];
const QuoteIcon = Icons['Quote'] || Icons['HelpCircle'];

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sophia Laurent',
    company: 'Lumière Boutique',
    role: 'CEO & Founder',
    avatar: 'https://placehold.co/80x80/dbeafe/3b82f6?text=SL',
    quote: 'VELORA transformed our digital presence completely. The glassmorphism design they created elevated our brand to a luxury tier we never thought possible. Revenue up 340% in 6 months.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Marcus Chen',
    company: 'Apex Fitness Co.',
    role: 'Marketing Director',
    avatar: 'https://placehold.co/80x80/ede9fe/7c3aed?text=MC',
    quote: 'Working with VELORA felt like partnering with a world-class studio. Every pixel was intentional, every interaction seamless. Our conversion rate doubled within the first quarter.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Elena Rossi',
    company: 'Grand Palazzo Hotel',
    role: 'Brand Manager',
    avatar: 'https://placehold.co/80x80/fce7f3/db2777?text=ER',
    quote: 'The attention to detail is unparalleled. VELORA delivered a website that captured the soul of our brand. Bookings increased by 210% within the first two months post-launch.',
    rating: 5,
  },
  {
    id: 4,
    name: 'James Thornton',
    company: 'Thornton & Co. Legal',
    role: 'Managing Partner',
    avatar: 'https://placehold.co/80x80/dcfce7/16a34a?text=JT',
    quote: 'VELORA brought sophistication and clarity to our digital identity. The results exceeded all projections. Our client inquiries tripled after the redesign. Truly world-class work.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Isabelle Fontaine',
    company: 'Maison Fontaine',
    role: 'Creative Director',
    avatar: 'https://placehold.co/80x80/fff7ed/ea580c?text=IF',
    quote: "Pure artistry meets technical excellence. VELORA's team understood our vision instantly and delivered something far beyond what we imagined. The ongoing support is equally exceptional.",
    rating: 5,
  },
];

const CARDS_VISIBLE_DESKTOP = 3;
const CARDS_VISIBLE_MOBILE = 1;

const cardVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60, scale: 0.96 }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60, scale: 0.96 }),
};

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon
          key={i}
          size={15}
          className={i < rating ? 'text-amber-400 fill-amber-400' : 'text-slate-300 fill-slate-300'}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="relative flex flex-col justify-between rounded-3xl p-8 h-full min-h-72 cursor-default"
      style={{}}
    >
      <div className="absolute inset-0 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl" />
      <div
        className="absolute inset-0 rounded-3xl opacity-60"
        style={{
          background:
            'linear-gradient(135deg, rgba(89,191,255,0.13) 0%, rgba(212,181,253,0.13) 50%, rgba(255,218,243,0.10) 100%)',
        }}
      />
      <div className="absolute inset-0 rounded-3xl border border-transparent"
        style={{
          background:
            'linear-gradient(white, white) padding-box, linear-gradient(135deg, #59bfff55, #d4b5fd55, #ffdaf355) border-box',
          WebkitMask: 'none',
        }}
      />
      <div className="relative z-10 flex flex-col gap-5 h-full">
        <div className="flex items-start justify-between">
          <QuoteIcon size={28} className="text-blue-300 opacity-80" />
          <StarRating rating={testimonial?.rating ?? 5} />
        </div>
        <p className="text-slate-700 text-base leading-relaxed italic flex-1">
          &ldquo;{testimonial?.quote}&rdquo;
        </p>
        <div className="flex items-center gap-4 pt-2 border-t border-slate-100/80">
          <img
            src={testimonial?.avatar}
            alt={testimonial?.name ?? 'Client'}
            className="w-12 h-12 rounded-full object-cover shadow-md ring-2 ring-white"
            onError={(e) => {
              e.currentTarget.src = 'https://placehold.co/80x80/e2e8f0/64748b?text=?';
            }}
          />
          <div className="flex flex-col">
            <span className="text-slate-900 font-semibold text-sm tracking-tight">
              {testimonial?.name}
            </span>
            <span className="text-blue-500 text-xs font-medium">
              {testimonial?.role} &middot; {testimonial?.company}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialReviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const visibleCount = isMobile ? CARDS_VISIBLE_MOBILE : CARDS_VISIBLE_DESKTOP;
  const maxIndex = TESTIMONIALS.length - visibleCount;

  const goNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(goNext, 4500);
    return () => clearInterval(timer);
  }, [isPaused, goNext]);

  const visibleTestimonials = TESTIMONIALS.slice(activeIndex, activeIndex + visibleCount);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, ease: 'easeOut' } },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id="reviews"
      className="relative w-full overflow-hidden py-24 md:py-32"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(160deg, #f8fbff 0%, #eef6ff 30%, #f3edff 65%, #fff5fb 100%)',
        }}
      />
      <div
        className="absolute top-0 left-0 w-full h-px -z-10"
        style={{
          background: 'linear-gradient(90deg, transparent, #59bfff44, #d4b5fd44, transparent)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-full h-px -z-10"
        style={{
          background: 'linear-gradient(90deg, transparent, #d4b5fd44, #59bfff44, transparent)',
        }}
      />

      <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center text-center mb-14 md:mb-18"
        >
          <motion.div variants={headingVariants}>
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full border"
              style={{
                color: '#59bfff',
                borderColor: '#59bfff44',
                background: 'rgba(89,191,255,0.08)',
              }}
            >
              Testimonials
            </span>
          </motion.div>
          <motion.h2
            variants={headingVariants}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
          >
            Client{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #59bfff 0%, #d4b5fd 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Reviews
            </span>
          </motion.h2>
          <motion.div
            variants={headingVariants}
            className="w-16 h-1 rounded-full mb-5"
            style={{
              background: 'linear-gradient(90deg, #59bfff, #d4b5fd)',
            }}
          />
          <motion.p
            variants={headingVariants}
            className="text-slate-500 text-lg max-w-xl leading-relaxed"
          >
            Real stories from clients who trusted VELORA to elevate their digital presence.
          </motion.p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.42, ease: 'easeOut' }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {visibleTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial?.id ?? index}
                  testimonial={testimonial}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-6 mt-12">
            <motion.button
              onClick={goPrev}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              aria-label="Previous testimonials"
              className="flex items-center justify-center w-11 h-11 rounded-full border bg-white/80 backdrop-blur-sm shadow-md transition-colors hover:bg-white"
              style={{ borderColor: '#59bfff55' }}
            >
              <ChevronLeftIcon size={20} className="text-slate-600" />
            </motion.button>

            <div className="flex items-center gap-2">
              {TESTIMONIALS.slice(0, maxIndex + 1).map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => {
                    setDirection(i > activeIndex ? 1 : -1);
                    setActiveIndex(i);
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                  animate={{
                    width: i === activeIndex ? 28 : 8,
                    opacity: i === activeIndex ? 1 : 0.4,
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="h-2 rounded-full"
                  style={{
                    background:
                      i === activeIndex
                        ? 'linear-gradient(90deg, #59bfff, #d4b5fd)'
                        : '#cbd5e1',
                  }}
                />
              ))}
            </div>

            <motion.button
              onClick={goNext}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              aria-label="Next testimonials"
              className="flex items-center justify-center w-11 h-11 rounded-full border bg-white/80 backdrop-blur-sm shadow-md transition-colors hover:bg-white"
              style={{ borderColor: '#59bfff55' }}
            >
              <ChevronRightIcon size={20} className="text-slate-600" />
            </motion.button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16"
        >
          {[
            { value: '98%', label: 'Client Satisfaction' },
            { value: '200+', label: 'Projects Delivered' },
            { value: '5.0', label: 'Average Rating' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span
                className="text-3xl font-extrabold tracking-tight"
                style={{
                  background: 'linear-gradient(135deg, #59bfff 0%, #d4b5fd 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {stat.value}
              </span>
              <span className="text-slate-500 text-sm font-medium">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
