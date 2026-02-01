import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail, Youtube, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
const XIcon = () => <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>;
interface FooterLink {
  name: string;
  href: string;
  soon?: boolean;
}
interface FooterSection {
  title: string;
  links: FooterLink[];
}
const footerSections: FooterSection[] = [{
  title: 'Product',
  links: [{
    name: 'Features',
    href: '/features'
  }, {
    name: 'Roadmap',
    href: '/roadmap'
  }, {
    name: 'Pricing',
    href: '/pricing',
    soon: true
  }]
}, {
  title: 'Company',
  links: [{
    name: 'About Us',
    href: '/about'
  }, {
    name: 'Careers',
    href: '/careers',
    soon: true
  }, {
    name: 'Contact',
    href: '/contact'
  }]
}, {
  title: 'Legal',
  links: [{
    name: 'Privacy Policy',
    href: '/privacy'
  }, {
    name: 'Terms of Service',
    href: '/terms'
  }, {
    name: 'Cookies Policy',
    href: '/cookies'
  }]
}, {
  title: 'Resources',
  links: [{
    name: 'Blog',
    href: '/blog',
    soon: true
  }, {
    name: 'Status',
    href: '/status',
    soon: true
  }]
}];
const socialLinks = [
// {
//   icon: Mail,
//   href: 'mailto:contact@vant.com',
//   label: 'Email'
// }, 
{
  icon: Linkedin,
  href: 'https://www.linkedin.com/company/vant-hq/',
  label: 'Linkedin'
}, {
  icon: XIcon,
  href: 'https://x.com/hqVANT',
  label: 'X (Twitter)',
  isCustom: true
}, {
  icon: Facebook,
  href: 'https://facebook.com/hqVANT',
  label: 'Facebook'
}, {
  icon: Instagram,
  href: 'https://instagram.com/hqVANT',
  label: 'Instagram'
}, {
  icon: Youtube,
  href: 'https://youtube.com/@hqVANT',
  label: 'YouTube'
}];
const FooterAccordion = ({
  section
}: {
  section: FooterSection;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="border-b border-foreground/10 md:border-none">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between py-4 md:py-0 md:pointer-events-none">
        <span className="font-logo font-bold text-sm text-foreground">
          {section.title}
        </span>
        <motion.div animate={{
        rotate: isOpen ? 180 : 0
      }} transition={{
        duration: 0.3
      }} className="md:hidden">
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {(isOpen || typeof window !== 'undefined' && window.innerWidth >= 768) && <motion.ul initial={{
        height: 0,
        opacity: 0
      }} animate={{
        height: 'auto',
        opacity: 1
      }} exit={{
        height: 0,
        opacity: 0
      }} transition={{
        duration: 0.3
      }} className="overflow-hidden md:!h-auto md:!opacity-100 space-y-3 pb-4 md:pb-0 md:mt-4">
            {section.links.map(link => <li key={link.name}>
                <Link to={link.href} className="font-body text-sm text-muted-foreground hover:text-neon transition-colors duration-300 flex items-center gap-2">
                  {link.name}
                  {link.soon && <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-neon/20 text-neon border border-neon/30">
                      soon
                    </span>}
                </Link>
              </li>)}
          </motion.ul>}
      </AnimatePresence>
    </div>;
};
const Footer = () => {
  return <footer className="relative bg-gradient-to-b from-muted/30 via-muted/50 to-muted/70 backdrop-blur-xl border-t border-foreground/10 mt-auto pb-1">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-32 left-1/4 w-96 h-96 bg-gradient-to-tr from-vant-v/20 to-vant-a/10 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-32 right-1/4 w-80 h-80 bg-gradient-to-tl from-vant-n/20 to-vant-t/10 rounded-full blur-3xl" 
        />
        
        {/* Subtle pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '24px 24px',
          }}
        />
        
        {/* Top gradient fade */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background/50 to-transparent" />
      </div>

      <div className="container mx-auto sm:px-6 py-12 sm:py-16 relative z-10 px-[2px]">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12">
          {/* Navigation sections */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-8">
            {footerSections.map(section => <FooterAccordion key={section.title} section={section} />)}
          </div>

          {/* Right side - Branding & Social */}
          <div className="flex flex-col items-center md:items-end gap-6 pt-8 md:pt-0 border-t border-foreground/10 md:border-none">
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => <motion.a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.15,
              y: -2
            }} whileTap={{
              scale: 0.9
            }} className="w-9 h-9 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center text-muted-foreground hover:text-neon hover:border-neon/50 transition-all duration-300" aria-label={social.label}>
                  {social.isCustom ? <social.icon /> : <social.icon className="w-4 h-4" />}
                </motion.a>)}
            </div>

            {/* Branding */}
            <motion.div whileHover={{
            scale: 1.02
          }} className="text-center md:text-right">
              <span className="font-logo font-bold text-xl text-foreground whitespace-nowrap">
                VANT © 2026
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;