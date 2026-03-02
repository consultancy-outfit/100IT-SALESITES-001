import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'motion/react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="pt-20"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
