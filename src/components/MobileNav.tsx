"use client"

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  href: string;
  label: string;
  external?: boolean;
}

interface MobileNavProps {
  isMobileNavOpen: boolean;
  setIsMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const navItems: NavItem[] = [
  { href: '/about-us', label: 'About Us' },
  { href: '/#our-work', label: 'Our Work' },
  { href: '/#news', label: 'News' },
  { href: '/#contact-us', label: 'Contact Us' },
  { href: '/#we-are-hiring', label: "We're Hiring" }
];

const menuVariants = {
  closed: {
    x: '-100%',
    transition: {
      type: 'tween',
      duration: 0.4,
      when: 'afterChildren'
    }
  },
  open: {
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.4,
      when: 'beforeChildren',
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  closed: {
    x: -20,
    opacity: 0
  },
  open: {
    x: 0,
    opacity: 1
  }
};

const backdropVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.3
    }
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.3
    }
  }
};

const MobileNav: React.FC<MobileNavProps> = ({ isMobileNavOpen, setIsMobileNavOpen }) => {
  const pathname = usePathname();
  
  const closeNav = () => setIsMobileNavOpen(false);

  return (
    <AnimatePresence>
      {isMobileNavOpen && (
        <motion.div 
          className="fixed inset-0 z-[99999] flex"
          initial="closed"
          animate="open"
          exit="closed"
        >
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={closeNav}
            initial="closed"
            animate="open"
            exit="closed"
          />

          {/* Navigation Panel */}
          <motion.div
            variants={menuVariants}
            className="relative w-[85%] max-w-sm h-full bg-white shadow-2xl"
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={closeNav}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </motion.button>

            {/* Logo or Brand (optional) */}
            <div className="px-8 py-8">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-bold text-gray-900"
              >
                Pixel
              </motion.div>
            </div>

            {/* Navigation Items */}
            <nav className="px-6 py-4">
              <motion.div className="space-y-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.href || pathname.startsWith(item.href);
                  
                  return (
                    <motion.div
                      key={item.href}
                      variants={itemVariants}
                      whileHover={{ x: 4 }}
                      className="relative"
                    >
                      <Link
                        href={item.href}
                        onClick={closeNav}
                        className={`group flex items-center justify-between p-3 rounded-lg text-lg ${
                          isActive 
                            ? 'bg-blue-50 text-blue-600' 
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronRight 
                          className={`w-5 h-5 transition-transform ${
                            isActive ? 'text-blue-600' : 'text-gray-400'
                          } group-hover:translate-x-1`}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </nav>

            {/* Footer Section */}
            <motion.div 
              variants={itemVariants}
              className="absolute bottom-0 left-0 right-0 p-8 border-t border-gray-100"
            >
              <p className="text-sm text-gray-500">
                Have a project in mind? Let's create something amazing together.
              </p>
              <Link 
                href="/#contact-us"
                onClick={closeNav}
                className="mt-4 flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get in Touch
                <ExternalLink className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;