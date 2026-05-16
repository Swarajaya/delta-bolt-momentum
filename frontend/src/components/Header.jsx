import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const WHATSAPP_NUMBER = '919258903072';
const WHATSAPP_MESSAGE = 'Hello! I found VELORA online and I want to learn more about your services.';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const MenuIcon = Icons['Menu'] || Icons['HelpCircle'];
const XIcon = Icons['X'] || Icons['HelpCircle'];
const MessageCircleIcon = Icons['MessageCircle'] || Icons['HelpCircle'];
const PhoneIcon = Icons['Phone'] || Icons['HelpCircle'];

export default function Header({ isMobile }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/70 backdrop-blur-xl shadow-xl border-b border-white/60'
            : 'bg-white/40 backdrop-blur-md border-b border-white/30'
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            <motion.a
              href="#home"
              onClick={handleNavClick}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 select-none"
            >
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-[#59bfff] via-[#a78bfa] to-[#d4b5fd] bg-clip-text text-transparent font-['Plus_Jakarta_Sans',Inter,sans-serif]">
                VELORA
              </span>
              <span className="hidden sm:inline-block text-xs font-semibold tracking-widest text-slate-400 uppercase mt-1 font-['Inter',sans-serif]">
                Digital
              </span>
            </motion.a>

            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={handleNavClick}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.4, ease: 'easeOut' }}
                  whileHover={{ y: -1 }}
                  className="relative px-3 py-2 text-sm font-medium text-slate-600 hover:text-[#59bfff] transition-colors duration-200 group font-['Inter',sans-serif] rounded-lg"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-3 right-3 h-0.5 rounded-full bg-gradient-to-r from-[#59bfff] to-[#d4b5fd] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.06, boxShadow: '0 0 20px rgba(89,191,255,0.35)' }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#59bfff] to-[#a78bfa] text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-shadow duration-200 font-['Inter',sans-serif]"
              >
                <MessageCircleIcon size={16} />
                <span>WhatsApp</span>
              </motion.a>
              <motion.a
                href="#contact"
                onClick={handleNavClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#59bfff]/50 text-[#59bfff] text-sm font-semibold hover:bg-[#59bfff]/10 transition-colors duration-200 font-['Inter',sans-serif]"
              >
                <PhoneIcon size={16} />
                <span>Contact</span>
              </motion.a>
            </div>

            <motion.button
              className="md:hidden relative z-[9999] flex items-center justify-center w-10 h-10 rounded-xl bg-white/60 backdrop-blur border border-white/50 shadow text-slate-700 hover:text-[#59bfff] transition-colors duration-200"
              style={{ touchAction: 'manipulation', pointerEvents: 'auto' }}
              onClick={() => setMenuOpen((prev) => !prev)}
              whileTap={{ scale: 0.92 }}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
            </motion.button>
          </div>
        </div>

        {menuOpen && (
          <div
            className="md:hidden bg-white/90 backdrop-blur-xl border-t border-white/50"
            style={{ position: 'relative', zIndex: 9998, pointerEvents: 'auto' }}
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-sm font-medium text-slate-700 hover:text-[#59bfff] hover:bg-blue-50 transition-colors duration-200 font-['Inter',sans-serif]"
                  style={{ pointerEvents: 'auto', touchAction: 'manipulation', zIndex: 9999, position: 'relative' }}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-2xl bg-gradient-to-r from-[#59bfff] to-[#a78bfa] text-white text-sm font-semibold shadow-md font-['Inter',sans-serif]"
                  style={{ pointerEvents: 'auto', touchAction: 'manipulation' }}
                >
                  <MessageCircleIcon size={17} />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-2xl border border-[#59bfff]/50 text-[#59bfff] text-sm font-semibold hover:bg-[#59bfff]/10 transition-colors duration-200 font-['Inter',sans-serif]"
                  style={{ pointerEvents: 'auto', touchAction: 'manipulation' }}
                >
                  <PhoneIcon size={17} />
                  <span>Contact Us</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </motion.header>

      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5, ease: 'easeOut' }}
        whileHover={{ scale: 1.12, boxShadow: '0 0 32px rgba(89,191,255,0.5)' }}
        whileTap={{ scale: 0.93 }}
        className="fixed bottom-6 right-6 z-50 md:hidden flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#59bfff] to-[#a78bfa] text-white shadow-2xl"
      >
        <MessageCircleIcon size={26} />
      </motion.a>
    </>
  );
}
