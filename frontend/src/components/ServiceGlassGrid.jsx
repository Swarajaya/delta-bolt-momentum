import { useState } from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const SERVICES = [
  {
    id: 1,
    title: 'Website Development',
    description: 'Custom, high-performance websites built for conversion and scale.',
    iconName: 'Monitor',
    gradient: 'from-[#59bfff] to-[#a78bfa]',
    glow: 'rgba(89,191,255,0.22)',
  },
  {
    id: 2,
    title: 'Branding',
    description: 'Distinctive brand identities that resonate and endure.',
    iconName: 'Palette',
    gradient: 'from-[#d4b5fd] to-[#f9a8d4]',
    glow: 'rgba(212,181,253,0.22)',
  },
  {
    id: 3,
    title: 'AI Automation',
    description: 'Intelligent workflows that save time and multiply output.',
    iconName: 'BrainCircuit',
    gradient: 'from-[#59bfff] to-[#34d399]',
    glow: 'rgba(89,191,255,0.20)',
  },
  {
    id: 4,
    title: 'WhatsApp Automation',
    description: 'Smart conversational bots that convert leads 24/7.',
    iconName: 'MessageCircle',
    gradient: 'from-[#34d399] to-[#59bfff]',
    glow: 'rgba(52,211,153,0.20)',
  },
  {
    id: 5,
    title: 'Social Media Management',
    description: 'Consistent, engaging content strategies that build loyal audiences.',
    iconName: 'Share2',
    gradient: 'from-[#ffdaf3] to-[#d4b5fd]',
    glow: 'rgba(255,218,243,0.22)',
  },
  {
    id: 6,
    title: 'SEO',
    description: 'Data-driven optimization to dominate search rankings organically.',
    iconName: 'TrendingUp',
    gradient: 'from-[#a78bfa] to-[#59bfff]',
    glow: 'rgba(167,139,250,0.22)',
  },
  {
    id: 7,
    title: 'Paid Ads',
    description: 'Precision-targeted campaigns with measurable ROI at every step.',
    iconName: 'Megaphone',
    gradient: 'from-[#fbbf24] to-[#f9a8d4]',
    glow: 'rgba(251,191,36,0.18)',
  },
  {
    id: 8,
    title: 'UI/UX Design',
    description: 'Intuitive, beautiful interfaces crafted for delight and retention.',
    iconName: 'Layers',
    gradient: 'from-[#59bfff] to-[#ffdaf3]',
    glow: 'rgba(89,191,255,0.18)',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.10,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

function ServiceCard({ service }) {
  const [hovered, setHovered] = useState(false);
  const IconComponent = Icons[service?.iconName] || Icons['HelpCircle'];

  return (
    <motion.div
      variants={cardVariants}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{
        y: -10,
        scale: 1.03,
        transition: { duration: 0.28, ease: 'easeOut' },
      }}
      className="relative flex flex-col items-start gap-5 rounded-3xl p-8 cursor-default
        border border-white/20
        bg-white/10
        backdrop-blur-xl
        shadow-xl
        overflow-hidden
        group"
      style={{
        boxShadow: hovered
          ? `0 24px 48px 0 ${service?.glow}, 0 2px 16px 0 rgba(89,191,255,0.10)`
          : `0 8px 32px 0 rgba(89,191,255,0.08)`,
        transition: 'box-shadow 0.3s cubic-bezier(0.4,0,0.2,1)',
        border: hovered
          ? '1.5px solid rgba(89,191,255,0.55)'
          : '1.5px solid rgba(255,255,255,0.18)',
      }}
    >
      <motion.div
        animate={{
          opacity: hovered ? 0.18 : 0,
          scale: hovered ? 1.2 : 0.9,
        }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={`absolute -top-10 -right-10 w-48 h-48 rounded-full bg-gradient-to-br ${service?.gradient} blur-2xl pointer-events-none`}
      />

      <div
        className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service?.gradient} shadow-lg shrink-0`}
      >
        <IconComponent size={26} strokeWidth={1.6} className="text-white" />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-slate-900 tracking-tight leading-snug font-jakarta">
          {service?.title}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed font-inter">
          {service?.description}
        </p>
      </div>

      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={`absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r ${service?.gradient} origin-left rounded-full`}
      />
    </motion.div>
  );
}

export default function ServiceGlassGrid() {
  return (
    <section
      id="services"
      className="relative w-full py-24 overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #f0f7ff 0%, #f8f4ff 40%, #fff5fb 70%, #f0f9ff 100%)',
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 20% 10%, rgba(89,191,255,0.13) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(212,181,253,0.13) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariants}
          className="flex flex-col items-center text-center mb-16 gap-4"
        >
          <motion.span
            variants={headingVariants}
            className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full
              bg-gradient-to-r from-[#59bfff]/15 to-[#d4b5fd]/15
              border border-[#59bfff]/25 text-[#3a9fd8] font-jakarta"
          >
            What We Do
          </motion.span>

          <motion.h2
            variants={headingVariants}
            className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight font-jakarta"
          >
            Services Built for{' '}
            <span
              className="bg-gradient-to-r from-[#59bfff] to-[#d4b5fd] bg-clip-text text-transparent"
            >
              Impact
            </span>
          </motion.h2>

          <motion.p
            variants={headingVariants}
            className="max-w-2xl text-base md:text-lg text-slate-500 leading-relaxed font-inter"
          >
            From brand inception to digital dominance — every service we offer is engineered for
            measurable growth and premium experiences.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service?.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
