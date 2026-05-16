import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import heroAbstract from '../assets/premium_glassmorphism_hero_abstract_gradient_blue_purple.jpg';

const STATS = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 20, suffix: '+', label: 'Industries Served' },
  { value: 8, suffix: '', label: 'Years of Excellence' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
];

const FLOAT_CARDS = [
  {
    id: 1,
    icon: 'Layers',
    title: 'Brand Strategy',
    desc: 'Crafting identities that resonate',
    delay: 0,
    position: 'top-[12%] left-[4%]',
    glow: 'rgba(89,191,255,0.22)',
  },
  {
    id: 2,
    icon: 'Sparkles',
    title: 'UI/UX Design',
    desc: 'Premium digital experiences',
    delay: 0.15,
    position: 'top-[10%] right-[3%]',
    glow: 'rgba(212,181,253,0.22)',
  },
  {
    id: 3,
    icon: 'Code2',
    title: 'Web Development',
    desc: 'Precision-engineered solutions',
    delay: 0.3,
    position: 'bottom-[22%] left-[2%]',
    glow: 'rgba(255,218,243,0.22)',
  },
  {
    id: 4,
    icon: 'TrendingUp',
    title: 'Growth Marketing',
    desc: 'Data-driven campaign excellence',
    delay: 0.45,
    position: 'bottom-[20%] right-[2%]',
    glow: 'rgba(89,191,255,0.18)',
  },
];

function useCountUp(target, duration, start) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatItem({ stat, index, startCount }) {
  const count = useCountUp(stat?.value ?? 0, 2 + index * 0.3, startCount);
  const ArrowIcon = Icons['ArrowRight'] || Icons['HelpCircle'];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 + index * 0.1, duration: 0.5, ease: 'easeOut' }}
      className="flex flex-col items-center px-6 py-4"
    >
      <span className="text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#59bfff] to-[#d4b5fd]">
        {count}{stat?.suffix}
      </span>
      <span className="text-sm md:text-base text-slate-400 font-medium mt-1 text-center">{stat?.label}</span>
    </motion.div>
  );
}

function FloatCard({ card }) {
  const IconComp = Icons[card?.icon] || Icons['HelpCircle'];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: { delay: 0.6 + card.delay, duration: 0.6, ease: 'easeOut' },
        scale: { delay: 0.6 + card.delay, duration: 0.6, ease: 'easeOut' },
        y: {
          delay: 0.6 + card.delay,
          duration: 3.5 + card.delay,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
      whileHover={{ scale: 1.06, y: -14 }}
      className={`absolute ${card?.position} hidden lg:flex flex-col gap-2 p-5 w-52 rounded-3xl cursor-pointer select-none z-10`}
      style={{
        background: 'rgba(255,255,255,0.07)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.18)',
        boxShadow: `0 8px 32px 0 ${card?.glow}, 0 2px 8px 0 rgba(0,0,0,0.10)`,
      }}
    >
      <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#59bfff22] to-[#d4b5fd22] border border-white/10">
        <IconComp className="w-5 h-5 text-[#59bfff]" />
      </div>
      <span className="text-white font-semibold text-sm leading-tight">{card?.title}</span>
      <span className="text-slate-400 text-xs leading-snug">{card?.desc}</span>
    </motion.div>
  );
}

export default function HeroAnimatedGradient() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  const ArrowRightIcon = Icons['ArrowRight'] || Icons['HelpCircle'];
  const MessageCircleIcon = Icons['MessageCircle'] || Icons['HelpCircle'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry?.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#06080f]"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroAbstract}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <motion.div
          animate={{
            background: [
              'radial-gradient(ellipse 80% 60% at 20% 40%, rgba(89,191,255,0.18) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 60%, rgba(212,181,253,0.14) 0%, transparent 70%)',
              'radial-gradient(ellipse 70% 55% at 60% 30%, rgba(89,191,255,0.16) 0%, transparent 70%), radial-gradient(ellipse 80% 60% at 20% 70%, rgba(212,181,253,0.18) 0%, transparent 70%)',
              'radial-gradient(ellipse 90% 65% at 40% 60%, rgba(255,218,243,0.12) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 70% 30%, rgba(89,191,255,0.20) 0%, transparent 70%)',
              'radial-gradient(ellipse 80% 60% at 20% 40%, rgba(89,191,255,0.18) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 60%, rgba(212,181,253,0.14) 0%, transparent 70%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06080f]/40 via-transparent to-[#06080f]/80" />
      </div>

      {FLOAT_CARDS.map((card) => (
        <FloatCard key={card.id} card={card} />
      ))}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 flex flex-col items-center text-center px-6 md:px-12 pt-32 pb-10 max-w-5xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-5">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase text-[#59bfff] border border-[#59bfff]/30"
            style={{ background: 'rgba(89,191,255,0.08)', backdropFilter: 'blur(8px)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#59bfff] animate-pulse" />
            Premium Digital Agency
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight mb-6"
        >
          <motion.span
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            className="inline-block text-transparent bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(135deg, #59bfff 0%, #d4b5fd 35%, #ffdaf3 55%, #59bfff 80%, #d4b5fd 100%)',
              backgroundSize: '300% 300%',
            }}
          >
            We Build Digital
          </motion.span>
          <br />
          <span className="text-white">Experiences That</span>
          <br />
          <motion.span
            animate={{
              backgroundPosition: ['100% 50%', '0% 50%', '100% 50%'],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
            className="inline-block text-transparent bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(135deg, #ffdaf3 0%, #d4b5fd 40%, #59bfff 70%, #ffdaf3 100%)',
              backgroundSize: '300% 300%',
            }}
          >
            Define Brands.
          </motion.span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-slate-400 font-medium max-w-2xl mb-10 leading-relaxed"
        >
          VELORA crafts world-class digital strategies, design systems, and technology solutions
          for brands that refuse to settle for ordinary.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <motion.a
            href="/#portfolio"
            whileHover={{ scale: 1.04, boxShadow: '0 0 32px 4px rgba(89,191,255,0.28)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 320, damping: 22 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base text-white"
            style={{
              background: 'linear-gradient(135deg, #59bfff 0%, #d4b5fd 100%)',
              boxShadow: '0 4px 24px 0 rgba(89,191,255,0.22)',
            }}
          >
            See Our Work
            <ArrowRightIcon className="w-4 h-4" />
          </motion.a>

          <motion.a
            href="https://wa.me/1234567890?text=Hello%20VELORA%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, borderColor: 'rgba(89,191,255,0.7)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 320, damping: 22 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base text-white border border-white/20"
            style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(12px)' }}
          >
            <MessageCircleIcon className="w-4 h-4 text-[#59bfff]" />
            Contact Us
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        ref={statsRef}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.7, ease: 'easeOut' }}
        className="relative z-20 w-full max-w-4xl mx-auto px-4 pb-12 mt-auto"
      >
        <div
          className="flex flex-wrap justify-center divide-x divide-white/10 rounded-3xl"
          style={{
            background: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.10)',
            boxShadow: '0 8px 40px 0 rgba(89,191,255,0.10)',
          }}
        >
          {STATS.map((stat, i) => (
            <StatItem key={stat?.label} stat={stat} index={i} startCount={statsVisible} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
