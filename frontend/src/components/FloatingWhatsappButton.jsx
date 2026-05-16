import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';

const WHATSAPP_NUMBER = '15551234567';
const WHATSAPP_MESSAGE = 'Hi VELORA! I\'d like to inquire about your digital services.';

export default function FloatingWhatsappButton({ isContactOpen = false }) {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  const MessageCircleIcon = Icons['MessageCircle'] || Icons['HelpCircle'];

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const encoded = encodeURIComponent(WHATSAPP_MESSAGE);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {visible && !isContactOpen && (
        <motion.div
          className="fixed bottom-6 right-6 md:bottom-[60px] md:right-[60px] z-50"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            y: [0, -6, 0],
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            scale: { duration: 0.4, ease: 'easeOut' },
            opacity: { duration: 0.4, ease: 'easeOut' },
            y: {
              delay: 0.5,
              duration: 1.2,
              repeat: 3,
              ease: 'easeInOut',
            },
          }}
        >
          <motion.button
            onClick={handleClick}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.93 }}
            aria-label="Chat with VELORA on WhatsApp"
            className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-green-400 focus-visible:ring-offset-2"
          >
            <span
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                boxShadow: hovered
                  ? '0 0 0 6px rgba(37,211,102,0.18), 0 8px 32px rgba(37,211,102,0.45)'
                  : '0 0 0 3px rgba(37,211,102,0.12), 0 6px 24px rgba(37,211,102,0.30)',
              }}
            />

            <span className="absolute inset-0 rounded-full backdrop-blur-sm bg-white/10 border border-white/20" />

            <AnimatePresence>
              {hovered && (
                <motion.span
                  className="absolute inset-0 rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1.18 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  style={{
                    background: 'radial-gradient(circle, rgba(37,211,102,0.22) 0%, transparent 70%)',
                  }}
                />
              )}
            </AnimatePresence>

            <span className="relative z-10 flex items-center justify-center">
              <MessageCircleIcon
                size={hovered ? 28 : 26}
                strokeWidth={2}
                className="text-white transition-all duration-200"
              />
            </span>
          </motion.button>

          <AnimatePresence>
            {hovered && (
              <motion.span
                initial={{ opacity: 0, x: 10, scale: 0.92 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.92 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="absolute right-full top-1/2 -translate-y-1/2 mr-3 whitespace-nowrap rounded-xl px-4 py-2 text-sm font-semibold text-white pointer-events-none"
                style={{
                  background: 'rgba(18, 140, 126, 0.92)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  boxShadow: '0 4px 16px rgba(18,140,126,0.30)',
                  fontFamily: "'Inter', 'Plus Jakarta Sans', sans-serif",
                }}
              >
                Chat with us
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
