import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Home, Briefcase, Heart, User } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-6 sm:top-6"
    >
      <div className="max-w-fit mx-auto">
        <div className="bg-white/30 dark:bg-black/30 backdrop-blur-sm rounded-full px-4 sm:px-6 py-3 shadow-lg border border-amber-500/10 gradient-border-animation">
          <ul className="flex items-center justify-center gap-2 sm:gap-8">
            <NavItem to="home" icon={<Home size={20} />} text="Home" />
            <NavItem to="projects" icon={<Briefcase size={20} />} text="Projects" />
            <NavItem to="experience" icon={<User size={20} />} text="Experience" />
            <NavItem to="interests" icon={<Heart size={20} />} text="Interests" />
            <li className="ml-2">
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

const NavItem = ({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) => (
  <li>
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
      className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 rounded-full transition-all text-sm cursor-pointer text-amber-600/70 hover:text-amber-600 dark:text-amber-100/70 dark:hover:text-amber-100 gradient-border-animation"
      activeClass="text-amber-600 dark:text-amber-100 bg-gradient-to-r from-amber-500/20 to-amber-600/20"
    >
      {icon}
      <span className="hidden sm:inline font-medium">{text}</span>
    </Link>
  </li>
);

export default Navbar;
