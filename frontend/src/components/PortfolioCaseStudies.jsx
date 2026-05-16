import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import cafeImg from '../assets/cafe_branding_modern_design.jpg';
import fashionImg from '../assets/fashion_ecommerce_startup_website.jpg';
import gymImg from '../assets/gym_fitness_brand_modern.jpg';
import hotelImg from '../assets/luxury_hotel_digital_branding.jpg';
import startupImg from '../assets/premium_digital_agency_workspace_modern.jpg';
import restaurantImg from '../assets/restaurant_website_mockup_premium.jpg';

const XIcon = Icons['X'] || Icons['HelpCircle'];
const ExternalLinkIcon = Icons['ExternalLink'] || Icons['HelpCircle'];
const TagIcon = Icons['Tag'] || Icons['HelpCircle'];
const TrendingUpIcon = Icons['TrendingUp'] || Icons['HelpCircle'];

const CASE_STUDIES = [
  {
    id: 1,
    client: 'Maison Bistro',
    industry: 'Restaurant',
    thumbnail: restaurantImg,
    tagline: 'A full digital rebrand for a Michelin-starred dining experience.',
    description:
      'We crafted a premium digital presence for Maison Bistro, combining an immersive online reservation system with rich visual storytelling that mirrors the restaurant five-star ambiance. Conversion-optimized landing pages and a curated social media strategy elevated their brand to a new audience.',
    results: [
      { label: 'Reservations Increase', value: '+210%' },
      { label: 'Organic Traffic', value: '+185%' },
      { label: 'Avg. Session Duration', value: '4m 32s' },
    ],
    tags: ['Brand Identity', 'Web Design', 'SEO', 'Social Media'],
    accentFrom: '#59bfff',
    accentTo: '#d4b5fd',
  },
  {
    id: 2,
    client: 'PeakForm Gym',
    industry: 'Fitness & Wellness',
    thumbnail: gymImg,
    tagline: 'High-energy brand and performance marketing for a premium gym chain.',
    description:
      'PeakForm needed a brand that matched the intensity of their training programs. We delivered a bold visual identity, a membership-focused website with class scheduling, and a paid media strategy that drove unprecedented membership growth across three city locations.',
    results: [
      { label: 'Membership Growth', value: '+340%' },
      { label: 'Cost-per-Lead', value: '-60%' },
      { label: 'App Downloads', value: '12,000+' },
    ],
    tags: ['Brand Identity', 'Performance Ads', 'App Design', 'Email Marketing'],
    accentFrom: '#38ef7d',
    accentTo: '#59bfff',
  },
  {
    id: 3,
    client: 'Aurus Collection',
    industry: 'Luxury Hotel',
    thumbnail: hotelImg,
    tagline: 'Digital elegance for an award-winning boutique hotel group.',
    description:
      'Aurus Collection required a digital experience that communicated exclusivity and timeless luxury. We designed an immersive booking platform with bespoke animations, multi-language support, and a content strategy that positioned the brand as the premier choice for discerning global travelers.',
    results: [
      { label: 'Direct Bookings', value: '+290%' },
      { label: 'Revenue per Visit', value: '+$420' },
      { label: 'Bounce Rate Reduction', value: '-44%' },
    ],
    tags: ['UI/UX Design', 'Booking System', 'Content Strategy', 'Multilingual SEO'],
    accentFrom: '#f7c59f',
    accentTo: '#d4b5fd',
  },
  {
    id: 4,
    client: 'Velour Atelier',
    industry: 'Fashion Brand',
    thumbnail: fashionImg,
    tagline: 'E-commerce excellence for an independent luxury fashion label.',
    description:
      'Velour Atelier needed a seamless online store that captured the tactile luxury of their garments. We built a bespoke Shopify storefront with editorial photography integration, influencer campaign management, and a CRM-driven email flow that turned browsers into loyal customers.',
    results: [
      { label: 'Online Revenue', value: '+520%' },
      { label: 'Return Customer Rate', value: '68%' },
      { label: 'Cart Abandonment', value: '-38%' },
    ],
    tags: ['E-Commerce', 'Shopify Dev', 'Email Automation', 'Influencer Marketing'],
    accentFrom: '#ffdaf3',
    accentTo: '#d4b5fd',
  },
  {
    id: 5,
    client: 'NexaLaunch',
    industry: 'Tech Startup',
    thumbnail: startupImg,
    tagline: 'From zero to Series A — a complete digital growth engine.',
    description:
      'NexaLaunch came to us pre-launch with a product and no audience. We built their go-to-market strategy from the ground up: brand architecture, a conversion-optimized SaaS landing page, SEO foundation, and a growth loop that generated thousands of beta sign-ups before launch day.',
    results: [
      { label: 'Beta Sign-ups', value: '8,500+' },
      { label: 'Launch Day Traffic', value: '45,000' },
      { label: 'Funding Secured', value: '$2.4M' },
    ],
    tags: ['Growth Strategy', 'SaaS Design', 'SEO', 'PR & Launch'],
    accentFrom: '#59bfff',
    accentTo: '#38ef7d',
  },
  {
    id: 6,
    client: 'Bloom & Grind',
    industry: 'Café & Lifestyle',
    thumbnail: cafeImg,
    tagline: 'A warm, digital community for an artisan specialty coffee brand.',
    description:
      'Bloom & Grind wanted their online presence to feel as inviting as their café. We built a lifestyle-first brand identity, a content-rich website with an integrated loyalty program, and an Instagram-led social strategy that grew a highly engaged community of coffee enthusiasts.',
    results: [
      { label: 'Instagram Followers', value: '+22,000' },
      { label: 'Loyalty Sign-ups', value: '3,800+' },
      { label: 'Online Orders', value: '+175%' },
    ],
    tags: ['Brand Identity', 'Social Media', 'Loyalty Program', 'Content Creation'],
    accentFrom: '#f7c59f',
    accentTo: '#ffdaf3',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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

const modalVariants = {
  hidden: { opacity: 0, scale: 0.93, y: 32 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.38, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    scale: 0.93,
    y: 32,
    transition: { duration: 0.28, ease: 'easeIn' },
  },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

function CaseStudyCard({ study, onOpen }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      className="relative group rounded-3xl overflow-hidden cursor-pointer shadow-lg"
      style={{}}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(study)}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
    >
      <div className="relative w-full h-72 md:h-80 overflow-hidden">
        <motion.img
          src={study?.thumbnail}
          alt={study?.client}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.07 : 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          onError={(e) => {
            e.currentTarget.src = 'https://placehold.co/600x400/e2e8f0/64748b?text=Project';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-white/70 mb-1">
          {study?.industry}
        </span>
        <h3 className="text-xl font-bold text-white leading-tight">{study?.client}</h3>
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="absolute inset-0 flex flex-col justify-end p-6"
            style={{
              background:
                'linear-gradient(160deg, rgba(89,191,255,0.18) 0%, rgba(212,181,253,0.22) 100%)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              border: '1px solid rgba(255,255,255,0.18)',
            }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-sky-300 mb-2">
              {study?.industry}
            </span>
            <h3 className="text-xl font-bold text-white mb-2">{study?.client}</h3>
            <p className="text-sm text-white/80 leading-relaxed mb-5 line-clamp-3">
              {study?.tagline}
            </p>
            <motion.button
              whileTap={{ scale: 0.96 }}
              className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white"
              style={{
                background: `linear-gradient(135deg, ${study?.accentFrom}, ${study?.accentTo})`,
                boxShadow: `0 4px 20px rgba(89,191,255,0.35)`,
              }}
            >
              View Project
              <ExternalLinkIcon size={14} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ProjectCaseStudyModal({ study, onClose }) {
  if (!study) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        style={{ backgroundColor: 'rgba(10,14,30,0.75)', backdropFilter: 'blur(8px)' }}
        onClick={onClose}
      >
        <motion.div
          key="modal"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl"
          style={{
            background: 'rgba(255,255,255,0.96)',
            boxShadow: '0 32px 80px rgba(89,191,255,0.18), 0 2px 24px rgba(0,0,0,0.12)',
            border: '1px solid rgba(89,191,255,0.18)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full h-56 md:h-72 rounded-t-3xl overflow-hidden">
            <img
              src={study?.thumbnail}
              alt={study?.client}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src =
                  'https://placehold.co/800x400/e2e8f0/64748b?text=Project';
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${study?.accentFrom}55 0%, ${study?.accentTo}55 100%)`,
              }}
            />
            <div className="absolute bottom-5 left-6">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-white/80 mb-1">
                {study?.industry}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">{study?.client}</h2>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-white/80 hover:bg-white text-slate-600 hover:text-slate-900 shadow-md transition-all duration-200"
          >
            <XIcon size={18} />
          </button>

          <div className="p-6 md:p-10 space-y-8">
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              {study?.description}
            </p>

            <div>
              <h4 className="text-sm font-bold tracking-widest uppercase text-slate-400 mb-4">
                Key Results
              </h4>
              <div className="grid grid-cols-3 gap-4">
                {study?.results?.map((result, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-4 text-center"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(89,191,255,0.08) 0%, rgba(212,181,253,0.10) 100%)',
                      border: '1px solid rgba(89,191,255,0.14)',
                    }}
                  >
                    <div className="flex justify-center mb-2">
                      <TrendingUpIcon size={16} className="text-sky-400" />
                    </div>
                    <p className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-800">
                      {result?.value}
                    </p>
                    <p className="text-xs text-slate-500 mt-1 leading-snug">{result?.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold tracking-widest uppercase text-slate-400 mb-4">
                Services Delivered
              </h4>
              <div className="flex flex-wrap gap-2">
                {study?.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(89,191,255,0.12) 0%, rgba(212,181,253,0.14) 100%)',
                      border: '1px solid rgba(89,191,255,0.20)',
                      color: '#2d7bb5',
                    }}
                  >
                    <TagIcon size={12} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function PortfolioCaseStudies() {
  const [activeStudy, setActiveStudy] = useState(null);

  const handleOpen = (study) => {
    setActiveStudy(study);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setActiveStudy(null);
    document.body.style.overflow = '';
  };

  return (
    <section
      id="portfolio"
      className="relative w-full py-24 md:py-32 overflow-hidden"
      style={{
        background:
          'linear-gradient(160deg, #f0f9ff 0%, #faf5ff 50%, #fff0fb 100%)',
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-[-120px] right-[-80px] w-[500px] h-[500px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, #59bfff55 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute bottom-[-100px] left-[-60px] w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #d4b5fd66 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-10">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-sky-500 mb-4">
            Our Work
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-5"
          >
            Case Studies
          </h2>
          <p className="max-w-xl mx-auto text-lg text-slate-500 leading-relaxed">
            Real results for real brands. Explore how we&apos;ve transformed ambitious ideas into
            measurable digital success.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {CASE_STUDIES.map((study) => (
            <CaseStudyCard key={study?.id} study={study} onOpen={handleOpen} />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {activeStudy && (
          <ProjectCaseStudyModal study={activeStudy} onClose={handleClose} />
        )}
      </AnimatePresence>
    </section>
  );
}