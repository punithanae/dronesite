"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Youtube,
  Linkedin,
  Facebook,
} from "lucide-react";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  Instagram,
  Youtube,
  Linkedin,
  Facebook,
};

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT_INFO.phone,
    href: `tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: CONTACT_INFO.address,
    href: "#",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat: 9:00 AM - 7:00 PM",
    href: null,
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gray-50 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Get In Touch"
          title="Let's Start Your"
          highlight="Project"
          description="Have a project in mind? Get in touch and let's create something amazing together."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactDetails.map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="block bg-white rounded-xl p-6 border border-gray-100 hover:border-gold-200 hover:shadow-card-hover transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-200 transition-colors">
                          <contact.icon className="w-6 h-6 text-gold-600" />
                        </div>
                        <div>
                          <p className="text-gray-500 text-sm mb-1">{contact.label}</p>
                          <p className="text-gray-900 font-medium group-hover:text-gold-600 transition-colors">
                            {contact.value}
                          </p>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="bg-white rounded-xl p-6 border border-gray-100">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center flex-shrink-0">
                          <contact.icon className="w-6 h-6 text-gold-600" />
                        </div>
                        <div>
                          <p className="text-gray-500 text-sm mb-1">{contact.label}</p>
                          <p className="text-gray-900 font-medium">{contact.value}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 border border-gray-100"
            >
              <h3 className="text-gray-900 font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((social) => {
                  const IconComponent = iconMap[social.icon] || Instagram;
                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gold-100 hover:text-gold-600 transition-all duration-300"
                      aria-label={social.platform}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* DGCA Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gold-50 to-gold-100/50 rounded-xl p-6 border border-gold-200"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center shadow-soft">
                  <span className="text-green-600 font-bold text-2xl">✓</span>
                </div>
                <div>
                  <p className="text-gold-700 font-semibold">DGCA Approved</p>
                  <p className="text-gray-600 text-sm">
                    License: {CONTACT_INFO.dgcaLicense}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden h-[500px] shadow-card border border-gray-100"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74847524895!2d72.41493184738927!3d23.02049903100264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
