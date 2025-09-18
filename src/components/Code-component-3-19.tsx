import { Button } from './ui/button';
import { Calendar, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="pt-16 min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1748767358264-8254666bb119?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwYmFja2dyb3VuZCUyMGFic3RyYWN0fGVufDF8fHx8MTc1NzcwMjc4MXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Tech Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Content */}
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Semana Tecnológica
            </h1>
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

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3"
                onClick={() => window.open('https://forms.google.com', '_blank')}
              >
                Inscreva-se Gratuitamente
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-3"
                onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Saiba Mais
              </Button>
            </div>
          </div>

          {/* VR Image */}
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1715866558475-d2543c67a840?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTc3MDI3NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Pessoa usando VR"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}