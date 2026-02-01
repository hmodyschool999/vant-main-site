import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import LetterSection from '@/components/LetterSection';
import OutroSection from '@/components/OutroSection';

const letterSections = [
  {
    letter: 'V',
    meaning: 'Vision',
    title: 'Seeing Beyond the Obvious',
    description: 'The Vision team leads with foresight and creativity. We identify opportunities others miss, crafting strategies that transform ideas into impactful realities. Our visionaries set the direction for every groundbreaking project.',
    teamColor: 'Green',
    bgClass: 'bg-vant-v-bg',
    textColorClass: 'text-vant-v',
    glowClass: 'text-shadow-glow-v',
    particleColor: 'rgba(76, 175, 80, 0.3)',
  },
  {
    letter: 'A',
    meaning: 'Architect',
    title: 'Building the Foundation',
    description: 'Architects design the blueprints of success. Our team structures complex systems into elegant solutions, ensuring every project stands on solid ground. From wireframes to final builds, we engineer excellence.',
    teamColor: 'Yellow',
    bgClass: 'bg-vant-a-bg',
    textColorClass: 'text-vant-a',
    glowClass: 'text-shadow-glow-a',
    particleColor: 'rgba(255, 179, 0, 0.3)',
  },
  {
    letter: 'N',
    meaning: 'Neutralize',
    title: 'Solving the Unsolvable',
    description: 'The Neutralize team tackles challenges head-on. We identify problems, eliminate barriers, and smooth the path to success. No obstacle is too complex when our problem-solvers are on the case.',
    teamColor: 'Blue',
    bgClass: 'bg-vant-n-bg',
    textColorClass: 'text-vant-n',
    glowClass: 'text-shadow-glow-n',
    particleColor: 'rgba(33, 150, 243, 0.3)',
  },
  {
    letter: 'T',
    meaning: 'Thrive',
    title: 'Growing Beyond Limits',
    description: 'Thrive is about sustained growth and long-term success. Our team nurtures projects from launch to legacy, ensuring continuous improvement and lasting impact. We help ideas flourish into movements.',
    teamColor: 'Orange',
    bgClass: 'bg-vant-t-bg',
    textColorClass: 'text-vant-t',
    glowClass: 'text-shadow-glow-t',
    particleColor: 'rgba(255, 87, 34, 0.3)',
  },
];

const Index = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    if (location.state?.scrollToFooter && footerRef.current) {
      setTimeout(() => {
        footerRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      if (mainRef.current) {
        mainRef.current.scrollTop = 0;
      }
      window.scrollTo(0, 0);
    }
  }, [location.state]); 

  return (
    <motion.main
      ref={mainRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <HeroSection />
      
      {letterSections.map((section, index) => (
        <LetterSection key={section.letter} {...section} />
      ))}
      
      <div ref={footerRef}>
        <OutroSection />
      </div>
    </motion.main>
  );
};

export default Index;
