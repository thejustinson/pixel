"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"; // For close button
import TeamData from "@/app/json/teamdata.json";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

interface TeamMember {
  name: string;
  image: string;
  position: string;
  about: string;
}

const MeetTheTeam = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section className="py-20 px-10 sm:px-10 border-t border-t-neutral-200 bg-neutral-50" id="the-team">
      <motion.div 
        className="flex flex-col items-center max-w-7xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-2 text-center">Meet The Team</h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          className="h-1 w-24 bg-blue-600 mx-auto rounded mb-10"
        />
        <div className="w-full">
          <TeamGrid selectedMember={selectedMember} setSelectedMember={setSelectedMember} />
        </div>

        {/* Medium and larger screens bio display */}
        <AnimatePresence mode="wait">
          {selectedMember && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="hidden md:block w-full mt-12"
            >
              <div className="bg-white rounded-xl shadow-lg p-8 relative">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
                      <Image
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {selectedMember.name}
                    </h3>
                    <p className="text-lg text-gray-600 italic mb-6">
                      {selectedMember.position}
                    </p>
                    <div className="space-y-4">
                      {selectedMember.about
                        .split('\n')
                        .map((paragraph, idx) => (
                          <motion.p
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="text-gray-700 leading-relaxed"
                          >
                            {paragraph}
                          </motion.p>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

const TeamGrid = ({ selectedMember, setSelectedMember }: { selectedMember: TeamMember | null, setSelectedMember: React.Dispatch<React.SetStateAction<TeamMember | null>> }) => {
  const teamdata = TeamData.data;
  
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {teamdata.map((item, key) => (
        <motion.div key={key} variants={itemVariants}>
          <TeamGridItem 
            {...item}
            isSelected={selectedMember?.name === item.name}
            onSelect={() => setSelectedMember(item)}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

interface TeamGridItemProps extends TeamMember {
  isSelected: boolean;
  onSelect: () => void;
}

const TeamGridItem = ({ name, image, position, about, isSelected, onSelect }: TeamGridItemProps) => {
  const [showMobileInfo, setShowMobileInfo] = useState(false);
  const paragraphArray = about.split('\n');

  return (
    <div className="relative group">
      <motion.div
        className="relative h-[300px] overflow-hidden rounded-lg cursor-pointer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => {
          onSelect();
          setShowMobileInfo(!showMobileInfo);
        }}
      >
        <Image
          src={image}
          alt={name}
          width={640}
          height={800}
          className={`w-full h-full object-cover rounded-lg transition-all duration-300 filter ${
            !isSelected ? "grayscale hover:grayscale-0" : ""
          }`}
        />
        <motion.div 
          className="absolute left-0 bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent p-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-900">{name}</h3>
            <p className="italic text-gray-600">{position}</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Mobile-only bio display */}
      <AnimatePresence>
        {showMobileInfo && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden md:hidden" // Hide on medium and larger screens
          >
            <div className="mt-4 p-5 bg-white border rounded-lg shadow-md">
              <div className="space-y-3 text-neutral-800 text-sm">
                {paragraphArray.map((paragraph:string, key:number) => (
                  <motion.p 
                    key={key}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: key * 0.1 }}
                    className="leading-relaxed"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MeetTheTeam;
