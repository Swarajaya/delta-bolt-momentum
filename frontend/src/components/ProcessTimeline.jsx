import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import * as Icons from 'lucide-react';

const STEPS = [
  {
    number: '01',
    label: 'Discovery',
    icon: 'Search',
    description: 'We dive deep into your brand, goals, and competitive landscape to uncover real opportunity.',
  },
  {
    number: '02',
    label: 'Strategy',
    icon: 'Compass',
    description: 'We craft a precise digital roadmap aligned with your business objectives and KPIs.',
  },
  {
    number: '03',
    label: 'Design',
    icon: 'Pen',
    description: 'Pixel-perfect, conversion-focused visuals that elevate your brand above the noise.',
  },
  {
    number: '04',
    label: 'Development',
    icon: 'Code2',
    description: 'Clean, scalable code built on modern stacks — fast, accessible, and future-proof.',
  },
  {
    number: '05',
    label: 'Launch',
    icon: 'Rocket',
    description: 'Rigorous QA and a smooth go-live — no surprises, just results from day one.',
  },
  {
    number: '06',
    label: 'Growth',
    icon: 'TrendingUp',
    description: 'Ongoing optimisation, analytics, and support to compound your digital returns.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
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

export default function ProcessTimeline() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full bg-gradient-to-br from-[#59bfff]/10 via-[#d4b5fd]/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full bg-gradient-to-tl from-[#ffdaf3]/20 to-transparent blur-2xl" />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-10">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.span
            variants={headingVariants}
            className="inline-block text-xs font-semibold tracking-widest uppercase text-[#59bfff] mb-4 px-4 py-1.5 rounded-full bg-[#59bfff]/10 border border-[#59bfff]/20"
          >
            How We Work
          </motion.span>
          <motion.h2
            variants={headingVariants}
            className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-5 font-inter"
          >
            Our Process
          </motion.h2>
          <motion.p
            variants={headingVariants}
            className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed"
          >
            A transparent, proven methodology built for clarity, speed, and outcomes you can measure.
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[52px] left-0 right-0 h-px mx-auto" style={{maxWidth: 'calc(100% - 80px)', left: '40px'}}>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#59bfff]/50 to-transparent" />
            <div className="w-full h-px mt-[-1px] blur-sm bg-gradient-to-r from-transparent via-[#59bfff]/30 to-transparent" />
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 lg:gap-4"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={containerVariants}
          >
            {STEPS.map((step, index) => {
              const IconComp = Icons[step.icon] || Icons['HelpCircle'];
              const isHovered = hoveredIndex === index;

              return (
                <motion.div
                  key={step.number}
                  variants={cardVariants}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative flex flex-col items-center lg:items-center"
                >
                  <div className="hidden lg:flex w-px absolute top-[-40px] left-1/2 h-10 bg-gradient-to-b from-[#59bfff]/0 to-[#59bfff]/30" />

                  <motion.div
                    animate={{
                      y: isHovered ? -8 : 0,
                      boxShadow: isHovered
                        ? '0 20px 48px 0 rgba(89,191,255,0.22), 0 2px 0 0 rgba(89,191,255,0.12) inset'
                        : '0 4px 24px 0 rgba(89,191,255,0.08)',
                    }}
                    transition={{ duration: 0.28, ease: 'easeOut' }}
                    className="w-full rounded-3xl border border-white/80 bg-white/70 backdrop-blur-md px-5 py-7 flex flex-col items-center text-center gap-4"
                    style={{ backdropFilter: 'blur(16px)' }}
                  >
                    <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[#59bfff]/20 to-[#d4b5fd]/20 border border-white/60 shadow-sm">
                      <motion.div
                        animate={{
                          scale: isHovered ? 1.12 : 1,
                          rotate: isHovered ? 6 : 0,
                        }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                      >
                        <IconComp
                          size={22}
                          strokeWidth={1.8}
                          className="text-[#59bfff]"
                        />
                      </motion.div>
                      <motion.div
                        className="absolute inset-0 rounded-2xl"
                        animate={{
                          opacity: isHovered ? 1 : 0,
                          background: isHovered
                            ? 'radial-gradient(circle, rgba(89,191,255,0.18) 0%, transparent 70%)'
                            : 'none',
                        }}
                        transition={{ duration: 0.25 }}
                      />
                    </div>

                    <div className="flex flex-col items-center gap-1.5">
                      <span className="text-[11px] font-bold tracking-widest text-[#59bfff]/70 uppercase">
                        {step.number}
                      </span>
                      <h3 className="text-base font-bold text-slate-800 tracking-tight font-inter">
                        {step.label}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-500 leading-relaxed">
                      {step.description}
                    </p>

                    <motion.div
                      className="w-8 h-0.5 rounded-full bg-gradient-to-r from-[#59bfff] to-[#d4b5fd]"
                      animate={{ scaleX: isHovered ? 1.6 : 1, opacity: isHovered ? 1 : 0.5 }}
                      transition={{ duration: 0.25 }}
                    />
                  </motion.div>

                  {index < STEPS.length - 1 && (
                    <div className="flex lg:hidden w-px h-8 bg-gradient-to-b from-[#59bfff]/40 to-transparent mt-1" />
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
