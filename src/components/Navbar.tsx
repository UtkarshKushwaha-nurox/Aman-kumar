import React, { useState, useEffect } from 'react';
import { Stethoscope, ArrowUpRight, Menu, X, Calendar, Phone } from 'lucide-react';
import { DOCTOR_INFO } from '../data/mockData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Why Choose Me', href: '#why-me' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Services', href: '#services' },
    { name: 'Fees', href: '#fees' },
    { name: 'Case Study', href: '#case-study' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Articles', href: '#articles' },
  ];

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#EDF3F5]/90 backdrop-blur-md shadow-xs py-3 border-b border-slate-200/60'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          id="brand-logo"
          className="flex items-center gap-2.5 group focus:outline-hidden"
        >
          <div className="w-10 h-10 rounded-xl bg-[#3D5B67] flex items-center justify-center text-white shadow-xs group-hover:bg-[#2F4752] transition-colors">
            <Stethoscope className="w-5 h-5" />
          </div>
          <div>
            <span className="font-bold text-lg sm:text-xl text-[#1E2E36] tracking-tight block leading-tight">
              {DOCTOR_INFO.name}
            </span>
            <span className="text-xs text-slate-500 font-medium tracking-wide">
              {DOCTOR_INFO.degrees}
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav
          id="desktop-nav"
          className="hidden xl:flex items-center gap-6 bg-white/70 backdrop-blur-md px-6 py-2.5 rounded-full border border-slate-200/70 shadow-2xs"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-[#2F4752] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${DOCTOR_INFO.phone.replace(/\s+/g, '')}`}
            className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-2"
          >
            <Phone className="w-3.5 h-3.5 text-[#3D5B67]" />
            {DOCTOR_INFO.phone}
          </a>
          <button
            id="nav-contact-btn"
            onClick={onOpenBooking}
            className="flex items-center gap-2 bg-[#1E2E36] hover:bg-[#2B404B] text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-xs hover:shadow-md active:scale-95"
          >
            <span>Contact Me</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            id="mobile-contact-cta"
            onClick={onOpenBooking}
            className="p-2 bg-[#1E2E36] text-white rounded-full text-xs"
            aria-label="Book appointment"
          >
            <Calendar className="w-4 h-4" />
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:bg-white/60 rounded-lg focus:outline-hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="xl:hidden bg-[#EDF3F5] border-b border-slate-200 px-6 py-4 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-700 hover:text-[#3D5B67] py-1.5"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
            <a
              href={`tel:${DOCTOR_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 text-sm text-slate-600 font-medium"
            >
              <Phone className="w-4 h-4 text-[#3D5B67]" />
              {DOCTOR_INFO.phone}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="flex items-center justify-center gap-2 w-full bg-[#1E2E36] text-white py-3 rounded-xl text-sm font-semibold"
            >
              <span>Contact Me & Book Appointment</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
