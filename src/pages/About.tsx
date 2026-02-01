import { motion } from 'framer-motion';
import { ArrowLeft, Users, Target, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LightEffects from '@/components/LightEffects';

const values = [
  {
    icon: Target,
    title: 'Vision',
    description: 'We see beyond the horizon, anticipating trends and shaping the future of technology.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Great things are built together. We believe in the power of diverse teams and perspectives.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'We pour our hearts into everything we create, striving for excellence in every detail.',
  },
];

const About = () => {
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
          className="font-logo font-bold text-4xl sm:text-5xl md:text-6xl text-foreground mb-6"
        >
          About Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-body text-xl text-muted-foreground max-w-3xl mb-8"
        >
          VANT is a collective of visionaries, architects, neutralizers, and thrivers. 
          We're on a mission to transform how teams build and grow together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-body text-muted-foreground max-w-3xl mb-16 space-y-4"
        >
          <p>
            Founded in 2024, VANT emerged from a simple belief: the best solutions come from 
            teams that embrace diverse thinking and bold innovation. Our name represents the 
            four pillars of our approach.
          </p>
          <p>
            Today, we work with forward-thinking organizations worldwide, helping them 
            navigate complexity and achieve extraordinary results.
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-logo font-bold text-2xl text-foreground mb-8"
        >
          Our Values
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="p-6 rounded-2xl bg-muted/50 border border-foreground/10"
            >
              <value.icon className="w-8 h-8 text-neon mb-4" />
              <h3 className="font-logo font-bold text-lg text-foreground mb-2">
                {value.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
