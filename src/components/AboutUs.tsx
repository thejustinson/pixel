"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface Stat {
  label: string;
  value: string;
}

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

interface ContentSectionProps {
  isFullPage: boolean;
}

const stats: Stat[] = [
  { label: "Years of Experience", value: "2+" },
  { label: "Happy Clients", value: "100+" },
  { label: "Projects Completed", value: "250+" },
  { label: "Team Members", value: "15+" },
];

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: delay,
      ease: "easeOut",
    },
  }),
};

const slideInVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: (delay: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: delay,
      ease: "easeOut",
    },
  }),
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  delay = 0,
  className = "",
}) => {
  return (
    <motion.div
      className={className}
      variants={slideInVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={delay}
    >
      {children}
    </motion.div>
  );
};

const StatsSection: React.FC = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
    {stats.map((stat, index) => (
      <motion.div
        key={stat.label}
        variants={fadeInUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.1 * index}
      >
        <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
          <div className="text-3xl font-bold text-blue-600 mb-2">
            {stat.value}
          </div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </div>
      </motion.div>
    ))}
  </div>
);

const HeroSection: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative h-[400px] mb-16 rounded-xl overflow-hidden shadow-2xl"
  >
    <Image
      src="/images/about-us.jpg"
      fill
      alt="PIXEL Studio Team"
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="absolute bottom-8 left-8 text-white"
    >
      <h3 className="text-2xl font-bold mb-2">San Francisco's Creative Hub</h3>
      <p className="text-lg">Where imagination becomes reality</p>
    </motion.div>
  </motion.div>
);

const HeaderSection: React.FC = () => (
  <div className="text-center mb-16">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
    >
      About Us
    </motion.h2>
    <div className="flex items-center justify-center space-x-2">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        className="h-1 w-20 bg-blue-600 rounded origin-left"
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg text-gray-600"
      >
        PIXEL Studio:{" "}
        <span className="font-semibold">Where Creativity Meets Innovation</span>
      </motion.p>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        className="h-1 w-20 bg-blue-600 rounded origin-right"
      />
    </div>
  </div>
);

const ContentSection: React.FC<ContentSectionProps> = ({ isFullPage }) => (
  <div className="max-w-3xl mx-auto">
    <AnimatedSection>
      <p className="text-gray-600 leading-relaxed mb-6">
        In the beautiful city of San Francisco, amidst the city's cacophony, is
        a haven where dreams are not just imagined but brought to life. Welcome
        to PIXEL, your home of incredible digital care where the ordinary
        transcends into the extraordinary, and the impossible becomes possible.
      </p>
    </AnimatedSection>

    {isFullPage ? (
      <div className="space-y-6">
        <AnimatedSection delay={0.2}>
          <p className="text-gray-600 leading-relaxed">
            Nestled within the vibrant slope of the Bay Area, our team at PIXEL
            is on a mission to weave the threads of imagination into the fabric
            of reality. With the Golden Gate as our backdrop and the spirit of
            innovation as our guide, we embark on a journey of transformation,
            one brand at a time with a perfect touch of creativity.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-4">Our Mission</h4>
            <p className="text-gray-700">
              To empower brands with creative solutions that transcend ordinary
              boundaries and create lasting impressions in the digital
              landscape.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-gray-600 leading-relaxed">
            For two years, we have positioned a startling branding team at
            Goodlett Place, San Francisco, California, 94102. Helping brands to
            strive above the competitive landscape of business. We believe that
            competition is a part of every day to day activity. On the flip
            side, we make you stay on the edge.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-gray-600 leading-relaxed">
            At PIXEL, we are storytellers, magicians of the modern age. With a
            flick of our pens and a stroke of our keyboards, we breathe life
            into concepts, giving form to the intangible and substance to the
            abstract. Our canvas is the world of brands, our palette the colors
            of creativity, and our masterpiece. Nothing less than the
            manifestation of your wildest visions.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-gray-600 leading-relaxed">
            But our craft is not solitary; it thrives on collaboration, Our team
            is a mosaic of diverse talents and backgrounds—graphic designers,
            writers, developers, marketers, and strategists—all united by a
            shared passion for innovation and a relentless pursuit of
            excellence. Together, we collaborate, we create, and we inspire,
            pushing the boundaries of what's possible and redefining the art of
            storytelling in the digital age.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-gray-600 leading-relaxed">
            But our impact extends far beyond our studio walls. Through our
            work, we seek to make a meaningful difference in the lives of
            others, whether it's by helping a brand tell its story in a more
            compelling way, providing a platform for emerging artists to
            showcase their talents, or empowering freelancers to pursue their
            passions and build successful careers on their own terms.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-gray-600 leading-relaxed">
            One of our proudest moments came when we had the opportunity to
            collaborate with a local nonprofit organization on a campaign to
            raise awareness for a pressing social issue. Through a combination
            of powerful storytelling, impactful design, and strategic marketing,
            we were able to shine a spotlight on an important cause, mobilize
            support from the community, and drive real change.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-gray-600 leading-relaxed">
            But our journey is far from over. As we look to the future, we
            remain committed to our core values of creativity, collaboration,
            and community. Whether we're partnering with a global brand on a
            groundbreaking campaign, mentoring the next generation of creatives,
            or simply sharing our passion for storytelling with the world, one
            thing is certain—we will continue to celebrate creativity, empower
            dreams, and make a positive impact on the world, one project at a
            time. Welcome to PIXEL.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-gray-600 leading-relaxed">
            We hope to give you the best brand touch.
          </p>
        </AnimatedSection>
      </div>
    ) : (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Link
          href="/about-us"
          className="inline-flex items-center mt-6 text-blue-600 hover:text-blue-700 font-semibold group"
        >
          Read our full story
          <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    )}
  </div>
);

const AboutUs: React.FC = () => {
  const pathName = usePathname();
  const isFullPage = pathName === "/about-us";

  return (
    <div className="py-16 bg-white px-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeaderSection />
        <HeroSection />
        <StatsSection />
        <ContentSection isFullPage={isFullPage} />
      </div>
    </div>
  );
};

export default AboutUs;
