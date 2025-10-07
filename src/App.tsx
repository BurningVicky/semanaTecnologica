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
import RippleGrid from './components/RippleGrid';

export default function App() {
  const glitch: GlitchHandle = useGlitch({ glitchTimeSpan: false });

  return (
    <div className="min-h-screen relative">
      
      {/* 1. CONTAINER FIXO DE FUNDO (Z-index negativo para ficar atrás) */}
      <div className="fixed inset-0 -z-10 w-full h-full"> 
        
        {/* Contêiner para o RippleGrid (ajuste o estilo se necessário) */}
        <div style={{ position: 'relative', height: '100%', overflow: 'hidden' }}>
          <RippleGrid
            enableRainbow={false}
            gridColor="#ffffff"
            rippleIntensity={0.05}
            gridSize={10}
            gridThickness={15}
            mouseInteraction={true}
            mouseInteractionRadius={1.2}
            opacity={0.8}
          />
          
          {/* Overlay leve para contraste (dentro do contêiner fixo) */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>

      <Header />

      <main className="relative z-10">
        
        {/* Hero mantém o Prism próprio */}
        <Hero />

        {/* Demais seções aparecem sobre o PixelBlast */}
        <Sobre />
        <Programacao />
        <Participantes />
        <Organizacao />
        <EventosAnteriores />
        <Contato />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}