import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { motion } from 'motion/react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Header />
      <main className="pt-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};
