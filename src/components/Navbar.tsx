import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/assets/Logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/impact", label: "Impact" },
  { to: "/programs", label: "Programs" },
  { to: "/speaking", label: "Speaking" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-background/95 backdrop-blur-md border-b border-gray-200 dark:border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group"
          >
            <motion.div 
              className="p-2 rounded-xl bg-gradient-to-br from-blue-900/10 to-orange-500/10 group-hover:from-blue-900/20 group-hover:to-orange-500/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={Logo} 
                alt="Isaac Tashlex Logo" 
                className="h-10 sm:h-12 w-auto"
              />
            </motion.div>
            <span className=" sm:block font-heading text-2xl sm:text-2xl font-bold bg-gradient-to-r from-blue-900 to-orange-500 bg-clip-text text-transparent">
              Isaac Tashlex
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.div key={link.to} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
                <Link
                  to={link.to}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 relative group ${
                    location.pathname === link.to
                      ? "text-primary"
                      : "text-gray-700 dark:text-muted-foreground hover:text-primary dark:hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {location.pathname === link.to && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-blue-900 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {location.pathname !== link.to && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-blue-900 rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile toggle */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} className="text-foreground" /> : <Menu size={24} className="text-foreground" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white dark:bg-background border-b border-gray-200 dark:border-border shadow-lg"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-300 ${
                    location.pathname === link.to
                      ? "text-primary bg-orange-50 dark:bg-primary/10 border-l-4 border-orange-500"
                      : "text-gray-700 dark:text-muted-foreground hover:text-primary hover:bg-gray-50 dark:hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
