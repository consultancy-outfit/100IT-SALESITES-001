import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from './Navigation';
import { motion } from 'motion/react';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Header />
      <main className="flex-grow pt-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
