import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Process', href: '/#process' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
];

const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    icon: 'Facebook',
    href: 'https://www.facebook.com/share/1LHXJQA23U/',
    label: 'Facebook',
    color: 'from-blue-500 to-blue-700',
  },

  {
    name: 'Instagram',
    icon: 'Instagram',
    href: 'https://www.instagram.com/velor.a14?igsh=YXVnYzIwY3k0N2hp',
    label: 'Instagram',
    color: 'from-pink-500 to-rose-500',
  },

  {
    name: 'MessageCircle',
    icon: 'MessageCircle',
    href: 'https://wa.me/919258903072',
    label: 'WhatsApp',
    color: 'from-green-400 to-green-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

function Footer() {

  const FacebookIcon = Icons['Facebook'] || Icons['BadgeInfo'];
  const InstagramIcon = Icons['Instagram'] || Icons['Camera'];
  const MessageCircleIcon = Icons['MessageCircle'];

  const MailIcon = Icons['Mail'] || Icons['HelpCircle'];
  const PhoneIcon = Icons['Phone'] || Icons['HelpCircle'];
  const MapPinIcon = Icons['MapPin'] || Icons['HelpCircle'];

  const iconMap = {
    Facebook: FacebookIcon,
    Instagram: InstagramIcon,
    MessageCircle: MessageCircleIcon,
  };

  const leftLinks = NAV_LINKS.slice(0, 4);
  const rightLinks = NAV_LINKS.slice(4);

  return (
    <footer className="relative w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="relative z-10 max-w-7xl mx-auto px-8 py-16"
      >
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            <motion.div variants={itemVariants} className="lg:col-span-1 flex flex-col gap-6">
              <div>
                <span className="text-3xl font-bold tracking-tight bg-gradient-to-r from-[#59bfff] via-[#d4b5fd] to-[#ffdaf3] bg-clip-text text-transparent select-none">
                  VELORA
                </span>

                <p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-xs">
                  We craft premium digital experiences that elevate brands and drive meaningful growth.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="mailto:velora2049@gmail.com"
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-[#59bfff] transition-colors duration-200"
                >
                  <MailIcon size={15} className="shrink-0 text-[#59bfff]" />
                  velora2049@gmail.com
                </a>

                <a
                  href="tel:+919258903072"
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-[#59bfff] transition-colors duration-200"
                >
                  <PhoneIcon size={15} className="shrink-0 text-[#59bfff]" />
                  +91 9258903072
                </a>

                <span className="flex items-center gap-3 text-sm text-slate-400">
                  <MapPinIcon size={15} className="shrink-0 text-[#59bfff]" />
                  Dehradun, India
                </span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Navigation
              </h4>

              <ul className="flex flex-col gap-3">
                {leftLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                More
              </h4>

              <ul className="flex flex-col gap-3">
                {rightLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
                  Connect
                </h4>

                <div className="flex flex-wrap gap-3">
                  {SOCIAL_LINKS.map((social) => {
                    const SocialIcon = iconMap[social.icon] || Icons['HelpCircle'];

                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        whileHover={{ scale: 1.12, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200`}
                      >
                        <SocialIcon
                          size={18}
                          strokeWidth={2.3}
                          fill="white"
                          className="text-white"
                        />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-4">
                <p className="text-xs text-slate-400 mb-3">
                  Ready to transform your brand?
                </p>

                <motion.a
                  href="https://wa.me/919258903072"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#59bfff] to-[#d4b5fd] text-white text-sm font-semibold shadow-lg hover:shadow-blue-500/25 transition-shadow duration-200"
                >
                  <MessageCircleIcon size={15} />
                  Chat on WhatsApp
                </motion.a>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} VELORA Digital Solutions. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="/#privacy"
                className="text-xs text-slate-500 hover:text-slate-300 transition-colors duration-200"
              >
                Privacy Policy
              </a>

              <a
                href="/#terms"
                className="text-xs text-slate-500 hover:text-slate-300 transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
