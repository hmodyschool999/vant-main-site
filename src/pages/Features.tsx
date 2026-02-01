import { motion } from 'framer-motion';
import { ArrowLeft, Brain, Hammer, Shield, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LightEffects from '@/components/LightEffects';

const features = [
  { icon: Brain, title: 'Vision', description: 'Leading with foresight and creative strategy to identify opportunities others miss.' },
  { icon: Hammer, title: 'Architecture', description: 'Designing elegant solutions and structuring complex systems on solid foundations.' },
  { icon: Shield, title: 'Neutralize', description: 'Tackling challenges head-on, eliminating barriers and smoothing the path to success.' },
  { icon: TrendingUp, title: 'Thrive', description: 'Nurturing sustained growth and ensuring continuous improvement for lasting impact.' },
];

const Features = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/', { state: { scrollToFooter: true } });
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <LightEffects />
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 relative z-10">
        <motion.button
          onClick={handleBack}
          whileHover={{ x: -5 }}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-neon transition-colors mb-12"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-body">Back to Home</span>
        </motion.button>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-logo font-bold text-4xl sm:text-5xl md:text-6xl text-foreground mb-6 text-center"
        >
          Features
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-body text-lg text-muted-foreground mb-16 text-center max-w-2xl mx-auto"
        >
          Discover the core pillars that drive everything we build at VANT.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="p-8 rounded-2xl bg-muted/50 border border-foreground/10 backdrop-blur-sm"
            >
              <feature.icon className="w-12 h-12 text-neon mb-4" />
              <h3 className="font-logo font-bold text-xl text-foreground mb-2">{feature.title}</h3>
              <p className="font-body text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
