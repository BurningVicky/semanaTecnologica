import { Button } from './ui/button';
import { Calendar, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="pt-16 min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <ImageWithFallback 
          src="src/public/img/techBg1.png"
          alt="Tech Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" /> {/* overlay */}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Content */}
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight font-conthrax"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Semana Tecnológica
            </motion.h1>
            <p className="text-xl mb-8 text-gray-200">
              O maior evento de tecnologia da região sul! Palestras, workshops e networking 
              com os principais especialistas do setor tecnológico.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Calendar className="text-blue-400" size={20} />
                <span className="text-lg">12 a 15 de Novembro de 2025</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-purple-400" size={20} />
                <span className="text-lg">Universidade Católica de Pelotas</span>
              </div>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3"
                onClick={() => window.open('https://forms.google.com', '_blank')}
              >
                Inscreva-se Gratuitamente
              </Button>
              <Button 
                size="lg"
                className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-3 backdrop-blur-sm"
                onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Saiba Mais
              </Button>
            </motion.div>
          </motion.div>

          {/* VR Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="relative z-10 cursor-pointer"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5
              }}
              transition={{ duration: 0.3 }}
            >
              <ImageWithFallback 
                src="src/public/img/animeCharMetaVR.jpg"
                alt="Mulher utilizando um VR em um mundo Synthwave"
                 className="w-full h-auto rounded-lg shadow-2xl transition-all duration-300 hover:opacity-50 opacity-100"
              />
            </motion.div>
            {/* Glow effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg blur-xl"
              whileHover={{ 
                scale: 1.1,
                opacity: 0.6
              }}
              transition={{ duration: 0.3 }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}