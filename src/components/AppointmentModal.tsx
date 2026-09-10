import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, ArrowUpRight, Stethoscope, MessageCircle } from 'lucide-react';
import { SERVICES, PRICING_PLANS } from '../data/mockData';
import { PricingPlan } from '../types';
import { sendConsultationToWhatsApp } from '../utils/whatsapp';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  preselectedPlan?: PricingPlan | null;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
  preselectedPlan,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('10:00 AM');
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingCode, setBookingCode] = useState('');

  useEffect(() => {
    if (preselectedPlan) {
      const sym = preselectedPlan.currencySymbol || '₹';
      setService(`${preselectedPlan.name} (${sym}${preselectedPlan.price})`);
    } else if (preselectedService) {
      setService(preselectedService);
    } else {
      setService(SERVICES[0].title);
    }
  }, [preselectedPlan, preselectedService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    sendConsultationToWhatsApp({
      name,
      phone,
      email,
      date,
      time,
      type: service,
    });

    const code = `AMAN-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingCode(code);
    setIsSuccess(true);
  };

  const handleDone = () => {
    setIsSuccess(false);
    setName('');
    setEmail('');
    setPhone('');
    setDate('');
    onClose();
  };

  return (
    <div
      id="appointment-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/65 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="bg-[#3D5B67] text-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-white/15 relative overflow-hidden max-h-[95vh] overflow-y-auto">
        {/* Background Ambient Glow */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          id="close-appointment-modal"
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-teal-300 text-[#1E2E36] mx-auto flex items-center justify-center shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-white">
              Appointment Scheduled!
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-sm mx-auto">
              Your appointment request with <strong>Dr. Aman Kumar</strong> is confirmed under reference code{' '}
              <span className="bg-white/15 px-2 py-0.5 rounded font-mono font-bold text-teal-200">
                {bookingCode}
              </span>
              . Our medical coordinator will reach out shortly.
            </p>

            <div className="p-4 rounded-2xl bg-white/10 text-left text-xs space-y-1.5 border border-white/15 max-w-sm mx-auto">
              <p>
                <span className="text-slate-300">Patient:</span>{' '}
                <strong className="text-white">{name}</strong>
              </p>
              <p>
                <span className="text-slate-300">Service:</span>{' '}
                <strong className="text-white">{service}</strong>
              </p>
              {date && (
                <p>
                  <span className="text-slate-300">Date & Slot:</span>{' '}
                  <strong className="text-white">
                    {date} at {time}
                  </strong>
                </p>
              )}
            </div>

            <button
              onClick={handleDone}
              className="mt-4 px-8 py-3 rounded-full bg-white hover:bg-slate-100 text-[#1E2E36] text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="space-y-5">
            <div className="flex items-center gap-2.5 pb-2">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-teal-200">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-200">
                  Direct Booking
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  Book an Appointment
                </h3>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs sm:text-sm">
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Eleanor Vance"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-white placeholder-slate-300/70 focus:outline-hidden focus:ring-2 focus:ring-teal-300 focus:bg-white/15 text-xs sm:text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 00000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-white placeholder-slate-300/70 focus:outline-hidden focus:ring-2 focus:ring-teal-300 focus:bg-white/15 text-xs sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-white placeholder-slate-300/70 focus:outline-hidden focus:ring-2 focus:ring-teal-300 focus:bg-white/15 text-xs sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1">
                  Consultation Plan or Service
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-[#2E4650] border border-white/20 rounded-xl px-4 py-2.5 text-white focus:outline-hidden focus:ring-2 focus:ring-teal-300 text-xs sm:text-sm"
                >
                  {PRICING_PLANS.map((p) => {
                    const sym = p.currencySymbol || '₹';
                    return (
                      <option key={p.id} value={`${p.name} (${sym}${p.price})`} className="bg-[#263a43]">
                        {p.name} ({sym}${p.price} {p.period})
                      </option>
                    );
                  })}
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title} className="bg-[#263a43]">
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#2E4650] border border-white/20 rounded-xl px-4 py-2 text-white focus:outline-hidden focus:ring-2 focus:ring-teal-300 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">
                    Preferred Slot
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-[#2E4650] border border-white/20 rounded-xl px-4 py-2 text-white focus:outline-hidden focus:ring-2 focus:ring-teal-300 text-xs"
                  >
                    <option value="09:30 AM" className="bg-[#263a43]">09:30 AM</option>
                    <option value="11:00 AM" className="bg-[#263a43]">11:00 AM</option>
                    <option value="02:00 PM" className="bg-[#263a43]">02:00 PM</option>
                    <option value="04:30 PM" className="bg-[#263a43]">04:30 PM</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-3 py-3.5 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send to WhatsApp & Confirm</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
