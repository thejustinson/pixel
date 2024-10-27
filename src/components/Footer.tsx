"use client"

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    { href: "/about-us", label: "About Us" },
    { href: "/#our-work", label: "Our Work" },
    { href: "/#news", label: "News" },
    { href: "/#contact-us", label: "Contact Us" },
    { href: "/#we-are-hiring", label: "We're Hiring" },
  ];

  const contactInfo = [
    { icon: MapPin, text: "San Francisco, CA" },
    { icon: Mail, text: "hello@pixelstudio.com" },
    { icon: Phone, text: "+1 (415) 555-0123" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 bg-black text-neutral-200 border-t-[0.5px] border-t-neutral-900 px-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-4">
              <p className="font-semibold text-2xl tracking-tight">
                Pixel{" "}
                <span className="ml-2 font-normal text-base text-neutral-400">
                  &copy; {new Date().getFullYear()}
                </span>
              </p>
              <div className="w-full h-[2px] bg-gradient-to-r from-blue-600 to-transparent" />
              <p className="text-neutral-400 pr-8">
                Where imagination becomes reality in the heart of San Francisco
              </p>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-4">
              {footerLinks.map((link, index) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex items-center space-x-2 text-neutral-400 hover:text-blue-400 transition-colors duration-200"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-neutral-400 hover:text-blue-400 transition-colors duration-200"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="w-full h-[0.5px] bg-neutral-800 my-8 origin-left"
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-sm text-neutral-500"
        >
          Designed and developed with ❤️ by Pixel team
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
