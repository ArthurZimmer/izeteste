'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/beneficios', label: 'Benefícios' },
    { href: '/pacotes', label: 'Pacotes' },
    { href: '/produtos', label: 'Produtos' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <Zap className="w-8 h-8 text-[#7C3AED] group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-bold gradient-text">IZE</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks?.map((link) => (
              <Link
                key={link?.href ?? ''}
                href={link?.href ?? '/'}
                className="text-gray-700 hover:text-[#7C3AED] font-medium transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#7C3AED] after:transition-all hover:after:w-full"
              >
                {link?.label ?? ''}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-[#7C3AED] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks?.map((link) => (
                <Link
                  key={link?.href ?? ''}
                  href={link?.href ?? '/'}
                  className="block py-2 px-4 text-gray-700 hover:text-[#7C3AED] hover:bg-purple-50 rounded-lg font-medium transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link?.label ?? ''}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
