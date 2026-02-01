import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import Footer from './Footer';
import Card3D from './Card3D';
import HolographicBorder from './HolographicBorder';
import GlitchText from './GlitchText';
import { ParallaxLayer } from './MouseParallax';
import LightEffects from './LightEffects';

const projects = [{
  title: 'Soon...',
  category: 'Soon...',
  color: 'from-vant-v/30 to-vant-v/5',
  borderColor: 'border-vant-v/40',
  glowColor: 'rgba(76, 175, 80, 0.3)',
  logo: 'https://vanthq.net/public/favicon.ico', 
  link: ''
}];

const OutroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section 
      ref={ref} 
      className="relative overflow-hidden py-16 sm:py-1" 
      style={{ background: 'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--muted)/0.3) 50%, hsl(var(--muted)/0.5) 100%)' }}
    >
      <LightEffects />
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Diagonal lines */}
        <motion.div
          animate={{ opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 100px,
              hsl(var(--vant-v) / 0.05) 100px,
              hsl(var(--vant-v) / 0.05) 101px
            )`,
          }}
        />
        
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
            className="absolute h-px bg-gradient-to-r from-transparent via-vant-v/20 to-transparent"
            style={{ top: `${30 + i * 20}%`, width: '200%' }}
          />
        ))}
      </div>

      <ParallaxLayer depth={0.5} className="absolute inset-0 pointer-events-none">
        <motion.div animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          rotateZ: [0, 10, 0]
        }} transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }} className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-vant-v/15 to-vant-a/5 blur-3xl" style={{
          transformStyle: 'preserve-3d'
        }} />
        <motion.div animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
          rotateZ: [0, -10, 0]
        }} transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }} className="absolute bottom-40 left-20 w-48 h-48 rounded-full bg-gradient-to-tl from-vant-n/15 to-vant-t/5 blur-3xl" style={{
          transformStyle: 'preserve-3d'
        }} />
        <motion.div animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }} transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-vant-a/10 to-transparent blur-3xl" />
      </ParallaxLayer>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex-1 flex flex-col justify-center">

        <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="mb-16 sm:mb-24">
          <motion.h2 initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} className="font-logo font-bold text-3xl sm:text-4xl md:text-5xl text-foreground text-center mb-4">
            <GlitchText text="Current Projects" glitchIntensity={1} />
          </motion.h2>
          <motion.p initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.1
          }} className="font-body text-muted-foreground text-center mb-12 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base">
            Showcasing our current work across all VANT teams
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div key={project.title} initial={{
                opacity: 0,
                scale: 0.9,
                y: 20,
                rotateY: -10
              }} whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
                rotateY: 0
              }} transition={{
                delay: index * 0.15,
                duration: 0.6,
                type: "spring"
              }} viewport={{
                once: true
              }}>
                <Card3D glowColor={project.glowColor}>
                  <HolographicBorder borderWidth={2} animationDuration={4}>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`relative aspect-[4/3] rounded-3xl bg-gradient-to-br ${project.color} overflow-hidden cursor-pointer block group`}
                    >
                      <motion.div animate={{
                        rotate: 360
                      }} transition={{
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear"
                      }} className="absolute inset-0 opacity-10" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                      }} />

                      <motion.div initial={{
                        x: '-100%',
                        opacity: 0
                      }} whileHover={{
                        x: '200%',
                        opacity: 1
                      }} transition={{
                        duration: 0.8
                      }} className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.img 
                          src={project.logo} 
                          alt={project.title}
                          className="w-24 h-24 sm:w-32 sm:h-32 object-contain rounded-xl bg-white/10 backdrop-blur-sm p-4 border border-white/20"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>

                      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                        <motion.h3 initial={{
                          opacity: 0,
                          y: 10
                        }} whileInView={{
                          opacity: 1,
                          y: 0
                        }} transition={{
                          delay: 0.4 + index * 0.1
                        }} className="font-logo font-bold text-xl sm:text-2xl text-foreground">
                          {project.title}
                        </motion.h3>
                        <motion.span initial={{
                          opacity: 0,
                          x: -20
                        }} whileInView={{
                          opacity: 1,
                          x: 0
                        }} transition={{
                          delay: 0.3 + index * 0.1
                        }} className="font-body text-xs sm:text-sm text-foreground/60 mt-1 tracking-wide">
                          {project.category}
                        </motion.span>
                      </div>

                      <motion.div initial={{
                        opacity: 0.5
                      }} whileHover={{
                        opacity: 1,
                        scale: 1.1,
                        rotate: -45
                      }} className="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center border border-foreground/20 transition-all duration-300 group-hover:bg-foreground/20" style={{
                        transformStyle: 'preserve-3d'
                      }}>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
                      </motion.div>

                      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />
                    </a>
                  </HolographicBorder>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-16 sm:mb-24" style={{
          perspective: '1000px'
        }}>
          <motion.h2 initial={{
            opacity: 0,
            scale: 0.9,
            rotateX: -20
          }} whileInView={{
            opacity: 1,
            scale: 1,
            rotateX: 0
          }} className="font-logo font-bold text-1xl sm:text-2xl md:text-4xl text-foreground mb-6">
            <GlitchText text="Looking for products?" glitchIntensity={2} />
          </motion.h2>
          
          <motion.p initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }} className="font-body text-sm sm:text-base text-muted-foreground mb-8 sm:mb-10 max-w-xl mx-auto">
            Take a look at our commercial products
          </motion.p>

          <HolographicBorder className="inline-block rounded-full">
            <motion.a 
              href="https://category.vanthq.net"
              // target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05
              }} 
              whileTap={{
                scale: 0.95
              }} 
              className="group relative inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-neon text-dark-bg font-logo font-bold text-sm sm:text-base overflow-hidden shadow-2xl shadow-neon/30 cursor-pointer" 
              style={{
                transformStyle: 'preserve-3d',
                textDecoration: 'none'
              }}
            >
              <motion.span 
                animate={{
                  opacity: [0.5, 1, 0.5]
                }} 
                transition={{
                  duration: 2,
                  repeat: Infinity
                }} 
                className="absolute inset-0 bg-gradient-to-r from-neon via-white to-neon opacity-0 group-hover:opacity-20" 
              />
              
              <span className="relative z-10">Category</span>
              
              <motion.div 
                animate={{
                  x: [0, 5, 0]
                }} 
                transition={{
                  duration: 1.5,
                  repeat: Infinity
                }}
              >
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.div>
              
              <motion.div 
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3]
                }} 
                transition={{
                  duration: 2,
                  repeat: Infinity
                }} 
                className="absolute inset-0 rounded-full bg-neon blur-xl opacity-50" 
              />
            </motion.a>
          </HolographicBorder>
        </motion.div>

      </div>

      <div className="w-full relative z-20 mt-auto">
        <Footer />
      </div>

    </section>
  );
};
export default OutroSection;