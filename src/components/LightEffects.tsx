import { motion } from 'framer-motion';

const LightEffects = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-vant-v/30 via-vant-v/10 to-transparent blur-3xl"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.25, 0.4, 0.25],
          x: [0, -25, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-gradient-to-tr from-vant-n/30 via-vant-n/10 to-transparent blur-3xl"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-bl from-vant-a/25 via-vant-a/5 to-transparent blur-3xl"
      />

      {/* Geometric shapes */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-20 left-[15%] w-20 h-20 border border-vant-v/20 rounded-xl opacity-40"
      />
      
      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 1.15, 1],
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-32 right-[20%] w-16 h-16 border border-vant-n/20 rounded-full opacity-30"
      />

      <motion.div
        animate={{
          rotate: 180,
          y: [0, -15, 0],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-1/2 right-[10%] w-12 h-12 border border-vant-a/20 opacity-25"
        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
      />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Animated scan lines */}
      <motion.div
        animate={{
          y: ['-100%', '200%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-0 right-0 h-32 bg-gradient-to-b from-transparent via-vant-v/5 to-transparent"
      />
    </div>
  );
};

export default LightEffects;
