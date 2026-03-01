import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type FormData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
  privacyConsent: boolean;
};

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-zinc-50 pt-24 pb-16 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-zinc-900 mb-6 tracking-tight">Contact Us</h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Have a question or ready to start your IT transformation? We're here to help.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-zinc-900 mb-8">Get in Touch</h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-zinc-100 rounded-xl">
                      <Phone className="h-6 w-6 text-zinc-900" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-1">Phone</div>
                      <div className="text-lg font-medium text-zinc-900">0137 531 1275</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-zinc-100 rounded-xl">
                      <Mail className="h-6 w-6 text-zinc-900" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-1">Email</div>
                      <div className="text-lg font-medium text-zinc-900">info@kanmorehouse.co.uk</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-zinc-100 rounded-xl">
                      <MapPin className="h-6 w-6 text-zinc-900" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-1">Office</div>
                      <div className="text-lg font-medium text-zinc-900 leading-relaxed">
                       38 Brennan House 610 High Road Leyton, London, England, E10 6RN
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-zinc-100 rounded-xl">
                      <Clock className="h-6 w-6 text-zinc-900" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-1">Business Hours</div>
                      <div className="text-lg font-medium text-zinc-900">
                        Monday - Friday: 09:00 - 17:30<br />
                        Saturday - Sunday: Closed
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video bg-zinc-100 rounded-3xl border border-zinc-200 overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 font-medium">
                  [ Google Maps Placeholder ]
                </div>
                <img 
                  src="https://picsum.photos/seed/london-map/800/450?blur=2" 
                  alt="London Map"
                  className="w-full h-full object-cover opacity-50 grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-zinc-50 p-8 md:p-12 rounded-[2.5rem] border border-zinc-200 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit(onSubmit)} 
                      className="space-y-6 relative z-10"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-zinc-700 ml-1">Full Name</label>
                          <input 
                            {...register('name', { required: true })}
                            className="w-full px-5 py-4 bg-white border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900/5 focus:border-zinc-900 transition-all"
                            placeholder="John Smith"
                          />
                          {errors.name && <span className="text-xs text-red-500 ml-1">This field is required</span>}
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-zinc-700 ml-1">Email Address</label>
                          <input 
                            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                            className="w-full px-5 py-4 bg-white border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900/5 focus:border-zinc-900 transition-all"
                            placeholder="john@company.co.uk"
                          />
                          {errors.email && <span className="text-xs text-red-500 ml-1">Please enter a valid email</span>}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-zinc-700 ml-1">Company Name</label>
                          <input 
                            {...register('company')}
                            className="w-full px-5 py-4 bg-white border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900/5 focus:border-zinc-900 transition-all"
                            placeholder="Your Business Ltd"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-zinc-700 ml-1">Phone Number</label>
                          <input 
                            {...register('phone')}
                            className="w-full px-5 py-4 bg-white border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900/5 focus:border-zinc-900 transition-all"
                            placeholder="07700 900000"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-bold text-zinc-700 ml-1">Service Required</label>
                        <select 
                          {...register('service')}
                          className="w-full px-5 py-4 bg-white border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900/5 focus:border-zinc-900 transition-all appearance-none"
                        >
                          <option value="managed-it">Managed IT Support</option>
                          <option value="cybersecurity">Cybersecurity</option>
                          <option value="cloud">Cloud Migration</option>
                          <option value="consultancy">Consultancy</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-bold text-zinc-700 ml-1">Message</label>
                        <textarea 
                          {...register('message', { required: true })}
                          rows={4}
                          className="w-full px-5 py-4 bg-white border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900/5 focus:border-zinc-900 transition-all resize-none"
                          placeholder="Tell us about your requirements..."
                        ></textarea>
                        {errors.message && <span className="text-xs text-red-500 ml-1">Please enter your message</span>}
                      </div>

                      <div className="flex items-start space-x-3 py-2">
                        <input 
                          type="checkbox" 
                          {...register('privacyConsent', { required: true })}
                          className="mt-1 h-4 w-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900"
                        />
                        <label className="text-xs text-zinc-500 leading-relaxed">
                          I consent to Kanmore House storing my details for the purpose of responding to my enquiry. See our <a href="/privacy" className="underline hover:text-zinc-900">Privacy Policy</a> for more information.
                        </label>
                      </div>
                      {errors.privacyConsent && <div className="text-xs text-red-500 ml-7">You must consent to proceed</div>}

                      <button 
                        type="submit"
                        className="w-full py-5 bg-zinc-900 text-white rounded-xl font-bold hover:bg-zinc-800 transition-all flex items-center justify-center group"
                      >
                        Send Message
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12 space-y-6"
                    >
                      <div className="inline-flex p-6 bg-emerald-50 rounded-full">
                        <CheckCircle2 className="h-12 w-12 text-emerald-500" />
                      </div>
                      <h3 className="text-3xl font-bold text-zinc-900">Message Sent!</h3>
                      <p className="text-lg text-zinc-600 max-w-md mx-auto">
                        Thank you for reaching out. One of our IT specialists will be in touch within 24 business hours.
                      </p>
                      <button 
                        onClick={() => setIsSubmitted(false)}
                        className="text-zinc-500 font-bold hover:text-zinc-900 transition-colors"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
