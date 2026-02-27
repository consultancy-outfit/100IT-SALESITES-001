import { useForm } from "react-hook-form";
import { motion } from "motion/react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2,
  MessageSquare
} from "lucide-react";
import { COMPANY_DETAILS } from "../constants";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
  consent: boolean;
};

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    setIsSubmitted(true);
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-display font-bold text-slate-900 mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600"
          >
            Have a question or ready to start your IT audit? Our team is here to help.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">Contact Details</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-brand-accent shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-1">Our Office</div>
                    <p className="text-slate-600 leading-relaxed">{COMPANY_DETAILS.address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-brand-accent shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-1">Phone Number</div>
                    <p className="text-slate-600 leading-relaxed">{COMPANY_DETAILS.phone}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-brand-accent shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-1">Email Address</div>
                    <p className="text-slate-600 leading-relaxed">{COMPANY_DETAILS.email}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-brand-accent shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-1">Business Hours</div>
                    <p className="text-slate-600 leading-relaxed">{COMPANY_DETAILS.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-slate-100 rounded-[2.5rem] h-64 flex items-center justify-center relative overflow-hidden group">
              <img 
                src="https://picsum.photos/seed/london-map/800/400?grayscale" 
                alt="Map Placeholder" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-10 bg-white/90 backdrop-blur px-6 py-3 rounded-full shadow-lg flex items-center space-x-2">
                <MapPin className="text-brand-accent" size={20} />
                <span className="font-bold text-slate-900">View on Google Maps</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/50">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-8">
                    <CheckCircle2 size={40} />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Message Sent!</h2>
                  <p className="text-lg text-slate-600 mb-8">
                    Thank you for reaching out. One of our IT experts will be in touch with you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-brand-accent font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="flex items-center space-x-3 mb-10">
                    <MessageSquare className="text-brand-accent" size={28} />
                    <h2 className="text-3xl font-display font-bold text-slate-900">Send a Message</h2>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                        <input
                          {...register("name", { required: "Name is required" })}
                          placeholder="John Smith"
                          className={`w-full px-6 py-4 rounded-2xl bg-slate-50 border transition-all focus:ring-2 focus:ring-brand-accent outline-none ${errors.name ? 'border-red-500' : 'border-slate-100 focus:border-brand-accent'}`}
                        />
                        {errors.name && <p className="text-xs text-red-500 ml-1">{errors.name.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                        <input
                          {...register("email", { 
                            required: "Email is required",
                            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                          })}
                          placeholder="john@company.co.uk"
                          className={`w-full px-6 py-4 rounded-2xl bg-slate-50 border transition-all focus:ring-2 focus:ring-brand-accent outline-none ${errors.email ? 'border-red-500' : 'border-slate-100 focus:border-brand-accent'}`}
                        />
                        {errors.email && <p className="text-xs text-red-500 ml-1">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Company Name</label>
                        <input
                          {...register("company")}
                          placeholder="Acme Ltd"
                          className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 transition-all focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                        <input
                          {...register("phone")}
                          placeholder="020 8123 4567"
                          className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 transition-all focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Service Required</label>
                      <select
                        {...register("service")}
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 transition-all focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none appearance-none"
                      >
                        <option value="">Select a service...</option>
                        <option value="managed-it">Managed IT Support</option>
                        <option value="cybersecurity">Cybersecurity</option>
                        <option value="cloud">Cloud Migration</option>
                        <option value="consultancy">IT Consultancy</option>
                        <option value="other">Other Enquiry</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                      <textarea
                        {...register("message", { required: "Message is required" })}
                        rows={4}
                        placeholder="How can we help you?"
                        className={`w-full px-6 py-4 rounded-2xl bg-slate-50 border transition-all focus:ring-2 focus:ring-brand-accent outline-none ${errors.message ? 'border-red-500' : 'border-slate-100 focus:border-brand-accent'}`}
                      ></textarea>
                      {errors.message && <p className="text-xs text-red-500 ml-1">{errors.message.message}</p>}
                    </div>

                    <div className="flex items-start space-x-3 py-2">
                      <input
                        type="checkbox"
                        {...register("consent", { required: true })}
                        className="mt-1 w-5 h-5 rounded border-slate-300 text-brand-accent focus:ring-brand-accent"
                      />
                      <label className="text-sm text-slate-600 leading-relaxed">
                        I consent to Walfinch IT processing my data in accordance with the <a href="/privacy" className="text-brand-accent hover:underline">Privacy Policy</a>.
                      </label>
                    </div>
                    {errors.consent && <p className="text-xs text-red-500">You must consent to proceed.</p>}

                    <button
                      type="submit"
                      className="w-full bg-brand-primary text-white py-5 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center group shadow-xl shadow-slate-200"
                    >
                      Send Message
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
