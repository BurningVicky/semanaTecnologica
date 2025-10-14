import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Sobre } from './components/Sobre';
import { Programacao } from './components/Programacao';
import { Participantes } from './components/Participantes';
import { Organizacao } from './components/Organizacao';
import { EventosAnteriores } from './components/EventosAnteriores';
import { Contato } from './components/Contato';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { useGlitch, GlitchHandle } from 'react-powerglitch';
import Prism from './components/Prism';

export default function App() {
  const glitch: GlitchHandle = useGlitch({ glitchTimeSpan: false });

  return (
    <div className="min-h-screen relative">
      
      {/* CONTAINER FIXO DE FUNDO (Z-index negativo para ficar atrás) */}
      <div className="fixed inset-0 -z-10 w-full h-full"> 
        
        {/* Background Prism */}
        <div className='bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900' style={{ width: '100%', height: '100%', position: 'absolute' }}>
          <Prism
            animationType="3drotate"
            timeScale={0.8}
            height={2.5}
            baseWidth={3.8}
            scale={5}
            hueShift={-0.34}
            colorFrequency={0.55}
            noise={0}
            glow={0.7}
          />
          
          {/* Overlay leve para contraste (dentro do contêiner fixo) */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>

      <Header />

      <main className="relative z-10">
        
        <Hero />
        <Sobre />
        <Programacao />
        <Participantes />
        <Organizacao />
        <EventosAnteriores />
        <Contato />
        <Footer />
      </main>

      <ScrollToTop />
    </div>
  );
}