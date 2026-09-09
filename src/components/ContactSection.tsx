import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
} from 'lucide-react';
import { DOCTOR_INFO, SERVICES, PRICING_PLANS } from '../data/mockData';
import { AppointmentFormState } from '../types';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = '',
}) => {
  const [formData, setFormData] = useState<AppointmentFormState>({
    fullName: '',
    email: '',
    phone: '',
    serviceType: initialService || SERVICES[0].title,
    preferredDate: '',
    preferredTime: '10:00 AM',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;

    // Generate reference code
    const refCode = `AMAN-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(refCode);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      serviceType: SERVICES[0].title,
      preferredDate: '',
      preferredTime: '10:00 AM',
      notes: '',
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Clinic Picture & Detailed Contact Info */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#3D5B67] block">
                In-Person & Virtual Appointments
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19272E] tracking-tight">
                Consult With Dr. Thomas
              </h2>
              <p className="text-sm text-slate-600 max-w-lg leading-relaxed">
                Take the first step toward restoring your health balance. We welcome patients for chronic illness workups, annual health reviews, and specialized second opinions.
              </p>
            </div>

            {/* Clinic Consultation Image matching screenshot */}
            <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 aspect-16/9 relative group">
              <img
                src={DOCTOR_INFO.contactImage}
                alt="Dr. Thomas consulting with a patient in medical office"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-200">
                  Private Consultation Suite
                </span>
                <p className="text-sm font-bold">St. Jude Specialist Health Center</p>
              </div>
            </div>

            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#3D5B67]/10 text-[#3D5B67] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Clinic Address</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                    {DOCTOR_INFO.address}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#3D5B67]/10 text-[#3D5B67] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Clinic Hours</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                    {DOCTOR_INFO.workingHours}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#3D5B67]/10 text-[#3D5B67] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Direct Telephone</h4>
                  <a
                    href={`tel:${DOCTOR_INFO.phone}`}
                    className="text-xs font-medium text-slate-600 hover:text-[#3D5B67] mt-0.5 block"
                  >
                    {DOCTOR_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#3D5B67]/10 text-[#3D5B67] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Email Inquiries</h4>
                  <a
                    href={`mailto:${DOCTOR_INFO.email}`}
                    className="text-xs font-medium text-slate-600 hover:text-[#3D5B67] mt-0.5 block truncate"
                  >
                    {DOCTOR_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Slate-Teal "Contact Info" Box */}
          <div className="lg:col-span-6 bg-[#3D5B67] text-white p-7 sm:p-9 rounded-3xl shadow-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/15">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-200">
                    Schedule Your Visit
                  </span>
                  <h3 className="text-2xl font-extrabold text-white tracking-tight">
                    Contact Info
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-teal-200" />
                </div>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-teal-300 text-[#1E2E36] mx-auto flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    Appointment Request Received!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-200 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Your clinical request has been logged under reference{' '}
                    <span className="px-2 py-0.5 rounded bg-white/15 font-mono text-teal-200 font-bold">
                      {bookingRef}
                    </span>
                    . Our desk will contact you via phone or email to confirm the exact slot.
                  </p>

                  <div className="p-4 rounded-2xl bg-white/10 text-left text-xs space-y-1.5 max-w-sm mx-auto border border-white/15">
                    <div>
                      <span className="text-slate-300">Service:</span>{' '}
                      <span className="font-semibold text-white">
                        {formData.serviceType}
                      </span>
                    </div>
                    {formData.preferredDate && (
                      <div>
                        <span className="text-slate-300">Date & Time:</span>{' '}
                        <span className="font-semibold text-white">
                          {formData.preferredDate} at {formData.preferredTime}
                        </span>
                      </div>
                    )}
                    <div>
                      <span className="text-slate-300">Phone:</span>{' '}
                      <span className="font-semibold text-white">{formData.phone}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="mt-4 px-6 py-2.5 rounded-full bg-white text-[#1E2E36] text-xs font-bold uppercase tracking-wider hover:bg-slate-100 transition-colors"
                  >
                    Book Another Appointment
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Anderson"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-300/70 focus:outline-hidden focus:ring-2 focus:ring-teal-300 focus:bg-white/15 transition-all text-xs sm:text-sm"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-300/70 focus:outline-hidden focus:ring-2 focus:ring-teal-300 focus:bg-white/15 transition-all text-xs sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-300/70 focus:outline-hidden focus:ring-2 focus:ring-teal-300 focus:bg-white/15 transition-all text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  {/* Service Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                      Consultation / Service Type
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) =>
                        setFormData({ ...formData, serviceType: e.target.value })
                      }
                      className="w-full bg-[#2E4650] border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-hidden focus:ring-2 focus:ring-teal-300 transition-all text-xs sm:text-sm"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title} className="bg-[#263a43]">
                          {s.title}
                        </option>
                      ))}
                      {PRICING_PLANS.map((p) => (
                        <option
                          key={p.id}
                          value={`${p.name} ($${p.price})`}
                          className="bg-[#263a43]"
                        >
                          {p.name} (${p.price})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredDate: e.target.value })
                        }
                        className="w-full bg-[#2E4650] border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-hidden focus:ring-2 focus:ring-teal-300 transition-all text-xs sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Preferred Time Slot
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredTime: e.target.value })
                        }
                        className="w-full bg-[#2E4650] border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-hidden focus:ring-2 focus:ring-teal-300 transition-all text-xs sm:text-sm"
                      >
                        <option value="09:30 AM" className="bg-[#263a43]">09:30 AM - Morning</option>
                        <option value="11:00 AM" className="bg-[#263a43]">11:00 AM - Morning</option>
                        <option value="02:00 PM" className="bg-[#263a43]">02:00 PM - Afternoon</option>
                        <option value="04:30 PM" className="bg-[#263a43]">04:30 PM - Late Afternoon</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                      Brief Symptoms or Medical History (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Elevated blood pressure readings for 2 weeks..."
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-white placeholder-slate-300/70 focus:outline-hidden focus:ring-2 focus:ring-teal-300 focus:bg-white/15 transition-all text-xs sm:text-sm resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="contact-form-submit"
                    className="w-full mt-2 py-3.5 px-6 rounded-2xl bg-white hover:bg-slate-100 text-[#1E2E36] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 shadow-md active:scale-98"
                  >
                    <span>Book Appointment</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
