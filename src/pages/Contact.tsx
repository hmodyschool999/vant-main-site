import { motion } from 'framer-motion';
import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LightEffects from '@/components/LightEffects';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@vant.com',
    href: 'mailto:contact@vant.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'San Francisco, CA',
  },
];

const Contact = () => {
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
          Contact
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-body text-lg text-muted-foreground max-w-2xl mb-16"
        >
          Have a question or want to work together? We'd love to hear from you.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-neon/20 flex items-center justify-center">
                  <info.icon className="w-5 h-5 text-neon" />
                </div>
                <div>
                  <span className="font-body text-sm text-muted-foreground block">
                    {info.label}
                  </span>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="font-logo text-foreground hover:text-neon transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="font-logo text-foreground">
                      {info.value}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <label className="font-body text-sm text-muted-foreground block mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-foreground/10 text-foreground font-body focus:border-neon/50 focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="font-body text-sm text-muted-foreground block mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-foreground/10 text-foreground font-body focus:border-neon/50 focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="font-body text-sm text-muted-foreground block mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-foreground/10 text-foreground font-body focus:border-neon/50 focus:outline-none transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 rounded-xl bg-neon text-foreground font-logo font-bold hover:bg-neon/90 transition-colors"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
