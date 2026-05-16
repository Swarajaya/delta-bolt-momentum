import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const packages = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Perfect for new ventures',
    icon: 'Zap',
    borderColor: 'from-blue-400 to-cyan-400',
    glowColor: 'rgba(89,191,255,0.22)',
    iconBg: 'from-blue-500 to-cyan-400',
    badgeBg: 'from-blue-500/20 to-cyan-400/20',
    badgeText: 'text-blue-300',
    features: [
      'Brand identity & logo design',
      'Responsive landing page',
      'Basic SEO setup',
      'Social media kit',
      '2 revision rounds',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'Scale your digital presence',
    icon: 'TrendingUp',
    borderColor: 'from-violet-500 to-purple-400',
    glowColor: 'rgba(167,139,250,0.28)',
    iconBg: 'from-violet-500 to-purple-400',
    badgeBg: 'from-violet-500/20 to-purple-400/20',
    badgeText: 'text-violet-300',
    featured: true,
    features: [
      'Full website design & development',
      'Advanced SEO & analytics',
      'Social media management',
      'Email marketing setup',
      'Performance optimisation',
      '4 revision rounds',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    tagline: 'End-to-end digital excellence',
    icon: 'Crown',
    borderColor: 'from-pink-500 to-rose-400',
    glowColor: 'rgba(244,114,182,0.22)',
    iconBg: 'from-pink-500 to-rose-400',
    badgeBg: 'from-pink-500/20 to-rose-400/20',
    badgeText: 'text-pink-300',
    features: [
      'Custom web app development',
      'Full brand strategy & identity',
      'Paid ads management',
      'Conversion rate optimisation',
      'Dedicated account manager',
      'Unlimited revisions',
    ],
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
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
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

function PricingPackages() {
  const CheckIcon = Icons['Check'] || Icons['HelpCircle'];

  return (
    <section
      id="pricing"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={containerVariants}
        >
          <motion.span
            variants={headingVariants}
            className="inline-block text-sm font-semibold tracking-widest uppercase text-blue-400 mb-4 px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-400/10"
          >
            Pricing Packages
          </motion.span>

          <motion.h2
            variants={headingVariants}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 font-jakarta"
          >
            Tailored to Your{' '}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              Ambition
            </span>
          </motion.h2>

          <motion.p
            variants={headingVariants}
            className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed"
          >
            Every engagement is custom-crafted. Our packages are a starting point — we shape each scope around your specific goals.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          {packages.map((pkg) => {
            const PkgIcon = Icons[pkg?.icon] || Icons['HelpCircle'];

            return (
              <motion.div
                key={pkg?.id}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  boxShadow: `0 32px 64px 0 ${pkg?.glowColor}`,
                  transition: { duration: 0.28, ease: 'easeOut' },
                }}
                className={`relative flex flex-col rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl ${
                  pkg?.featured ? 'ring-2 ring-violet-400/50' : ''
                }`}
                style={{ boxShadow: `0 8px 32px 0 ${pkg?.glowColor}` }}
              >
                {pkg?.featured && (
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent" />
                )}

                <div
                  className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${pkg?.borderColor} opacity-80`}
                />

                {pkg?.featured && (
                  <div className="absolute top-5 right-5">
                    <span className="text-xs font-bold tracking-widest uppercase text-violet-200 bg-violet-500/30 border border-violet-400/30 px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex flex-col flex-1 p-8 gap-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${pkg?.iconBg} flex items-center justify-center shadow-lg flex-shrink-0`}
                    >
                      <PkgIcon className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white font-jakarta">
                        {pkg?.name}
                      </h3>

                      <p className="text-sm text-slate-400">
                        {pkg?.tagline}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`self-start bg-gradient-to-r ${pkg?.badgeBg} border border-white/10 rounded-full px-5 py-2`}
                  >
                    <span
                      className={`text-sm font-semibold tracking-wide ${pkg?.badgeText}`}
                    >
                      Flexible Pricing
                    </span>
                  </div>

                  <ul className="flex flex-col gap-3 flex-1">
                    {pkg?.features?.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span
                          className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${pkg?.iconBg} flex items-center justify-center`}
                        >
                          <CheckIcon
                            className="w-3 h-3 text-white"
                            strokeWidth={3}
                          />
                        </span>

                        <span className="text-slate-300 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto h-[54px]" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.p
          className="text-center text-slate-500 text-sm mt-10 max-w-lg mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          All packages are fully custom and negotiable. Final scope,
          deliverables, and investment are agreed upon after an initial
          consultation at no obligation.
        </motion.p>
      </div>
    </section>
  );
}

export default PricingPackages;
