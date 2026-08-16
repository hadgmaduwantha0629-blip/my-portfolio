"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { navItems, profile } from "@/lib/data";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-[rgba(247,245,239,0.82)] backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="nav-mark" aria-label="Go to top">
          <span>{profile.initials}</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              <span>{item.number}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
        <button
          type="button"
          className="mobile-menu-button md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className={open ? "is-open" : ""} />
          <span className={open ? "is-open" : ""} />
          <span className="sr-only">Toggle navigation</span>
        </button>
      </nav>
      <motion.div
        id="mobile-nav"
        className="mobile-nav md:hidden"
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
      >
        <div className="grid gap-1 px-5 pb-5">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="mobile-nav-link" onClick={() => setOpen(false)}>
              <span>{item.number}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </header>
  );
}
