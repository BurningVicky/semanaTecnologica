import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Sobre o Evento', href: '#sobre' },
    { name: 'Programação', href: '#programacao' },
    { name: 'Participantes', href: '#participantes' },
    { name: 'Organização', href: '#organizacao' },
    { name: 'Eventos Anteriores', href: '#eventos-anteriores' },
    { name: 'Contato', href: '#contato' }
  ];

  return (
    <motion.header 
      className="bg-white/80 backdrop-blur-md border-b border-white/20 fixed top-0 left-0 right-0 z-50 shadow-lg"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 0.9 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
              <a href="/" className="block">
                <img 
                src={`${import.meta.env.BASE_URL}/img/UCPLG.png`}
                alt="Logo UCPEL" 
                className="h-10 w-auto object-contain"
                />
              </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-blue-600 transition-all duration-300 relative px-3 py-2 rounded-lg"
                whileHover={{ 
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: 5,
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  hover: { duration: 0.2 }
                }}
                style={{ transformOrigin: "center" }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                rotateX: 5,
                rotateY: 5,
                boxShadow: "0 15px 30px rgba(147, 51, 234, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
                onClick={() => window.open('https://forms.gle/TGJ6ErsBtDmYqmp66', '_blank')}
              >
                Inscreva-se
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2 rounded-lg"
              whileHover={{ 
                scale: 1.1,
                backgroundColor: "rgba(59, 130, 246, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-md border-t border-white/20">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 transition-all duration-200 rounded-lg hover:bg-blue-50"
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.div 
                className="px-3 py-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    onClick={() => window.open('https://forms.google.com', '_blank')}
                  >
                    Inscreva-se
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}