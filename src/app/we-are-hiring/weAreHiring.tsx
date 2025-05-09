"use client"

import React from 'react';
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Heart, Wallet, Mail, Building, Users, Star } from "lucide-react";

interface JobPosition {
  id: string;
  title: string;
  description: string;
  requirements: string[];
}

interface PerksItem {
  icon: React.ReactNode;
  text: string;
}

const jobPositions: JobPosition[] = [
    {
      id: 'copywriters',
      title: 'Copywriters',
      description: "If you are a wordsmith with a knack for storytelling and have a passion for crafting compelling narratives that captivate audiences, then this opportunity is definitely for you! We're on the lookout for talented copywriters who can breathe life into our brand through their words. From creating engaging website copy to crafting captivating social media posts, you'll have the opportunity to showcase your creativity and leave a lasting impact on our audience.",
      requirements: [
        'Proven experience as a copywriter or similar role',
        'Excellent writing, editing, and proofreading skills',
        'Strong attention to detail and ability to meet deadlines',
        'Knowledge of SEO best practices is a plus'
      ]
    },
    {
      id: 'designer',
      title: 'Designers',
      description: "If you are a design guru with an eye for aesthetics and a passion for pushing the boundaries of creativity, this is definitely for you! We're seeking talented designers who can bring our vision to life through stunning visuals and innovative designs. Whether you specialize in graphic design, UI/UX design, or web design, we want to hear from you. Join us in creating memorable experiences that inspire and delight.",
      requirements: [
        'Proficiency in design software such as Adobe Creative Suite',
        'Strong portfolio showcasing your design skills and creativity',
        'Ability to collaborate with cross-functional teams and take feedback',
        'Knowledge of current design trends and best practices'
      ]
    },
    {
      id: 'web-developer',
      title: 'Web Developers',
      description: "If you are a coding maestro with a passion for building sleek and responsive websites, this opportunity is definitely for you! We're searching for skilled web developers who can turn our vision into reality through clean and efficient code. From front-end development to back-end integration, you'll play a crucial role in creating seamless online experiences for our audience. Join us in shaping the future of the web.",
      requirements: [
        'Proficiency in HTML, CSS, JavaScript, and other relevant programming languages',
        'Experience with web development frameworks such as React, Angular, or Vue.js',
        'Strong problem-solving skills and attention to detail',
        'Knowledge of SEO principles and web accessibility standards is a plus'
      ]
    },
    {
      id: 'photographer',
      title: 'Photographer',
      description: "If you are a shutterbug with a passion for capturing moments and telling stories through your lens, this opportunity is definitely for you! We're seeking talented photographers who can bring our brand to life through stunning imagery. Whether you specialize in portrait photography, product photography, or landscape photography, we want to see the world through your eyes. Join us in creating visual experiences that leave a lasting impression.",
      requirements: [
        'Proven experience as a photographer, with a strong portfolio showcasing your work',
        'Proficiency in photography techniques, including lighting, composition, and editing',
        'Ability to collaborate with clients and creative teams to bring concepts to life',
        'Knowledge of industry-standard photography equipment and software'
      ]
    }
  ];

const perks: PerksItem[] = [
    {
      icon: <Building className="w-5 h-5" />,
      text: 'Competitive salary commensurate with experience'
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: 'Flexible working hours and remote work opportunities'
    },
    {
      icon: <Star className="w-5 h-5" />,
      text: 'Ongoing training and professional development opportunities'
    },
    {
      icon: <Heart className="w-5 h-5" />,
      text: 'Health insurance and other benefits'
    },
    {
      icon: <Wallet className="w-5 h-5" />,
      text: 'Weekly payout for all team members'
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: 'A vibrant and inclusive work culture that celebrates diversity and creativity'
    }
  ];

const animationVariants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.6 } }
  },
  slideUp: {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.8 } }
  },
  slideLeft: {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.6, delay: 0.3 } }
  }
};

const QuickNavigation: React.FC = () => (
  <motion.div 
    variants={animationVariants.fadeIn}
    initial="initial"
    animate="animate"
    className="sticky top-4 bg-white/80 backdrop-blur-sm p-4 rounded-lg z-10 border"
  >
    <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
      <ChevronDown className="w-5 h-5" />
      Quick Navigation
    </h2>
    <div className="flex flex-col space-y-2">
      {jobPositions.map(position => (
        <Link 
          key={position.id}
          href={`/we-are-hiring#${position.id}`}
          className="text-sm hover:text-blue-600 transition-colors duration-200"
        >
          {position.title}
        </Link>
      ))}
    </div>
  </motion.div>
);

const JobSection: React.FC<{ position: JobPosition }> = ({ position }) => (
  <motion.div
    variants={animationVariants.slideUp}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    className="bg-white rounded-lg p-6 border"
    id={position.id}
  >
    <h2 className="text-xl font-bold mb-4">{position.title}</h2>
    <p className="text-gray-600 mb-6">{position.description}</p>
    
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Requirements</h3>
      <ul className="space-y-2">
        {position.requirements.map((req, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-sm bg-blue-600 mt-2 flex-shrink-0" />
            <span>{req}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const PerksSection: React.FC = () => (
  <motion.div
    variants={animationVariants.slideLeft}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6 border"
    id="perks"
  >
    <h2 className="text-xl font-bold mb-6">Perks of Joining Our Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {perks.map((perk, index) => (
        <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border">
          {perk.icon}
          <span className="text-gray-700">{perk.text}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

const WeAreHiring: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50"
    >
      <motion.div 
        className="bg-gradient-to-r from-blue-900 to-black text-white py-20"
        variants={animationVariants.fadeIn}
        initial="initial"
        animate="animate"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
            variants={animationVariants.slideUp}
            initial="initial"
            animate="animate"
          >
            We're Hiring
          </motion.h1>
          <motion.p
            className="text-xl opacity-90"
            variants={animationVariants.slideUp}
            initial="initial"
            animate="animate"
          >
            Join our team of dreamers, innovators, and creators
          </motion.p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
          <QuickNavigation />
          
          <div className="space-y-8">
            {jobPositions.map(position => (
              <JobSection key={position.id} position={position} />
            ))}
            
            <PerksSection />

            <motion.div
              variants={animationVariants.slideUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 border text-center"
              id="mode-of-application"
            >
              <h2 className="text-xl font-bold mb-4">Ready to Join Us?</h2>
              <p className="text-gray-600 mb-6">
                Send your CV and cover letter to get started on your journey with us.
              </p>
              <a
                href="mailto:careers@pixelgig.org"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                Apply Now
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WeAreHiring;