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
import rippleGrid from './components/rippleGrid';

export default function App() {
  const glitch: GlitchHandle = useGlitch({ glitchTimeSpan: false });

  return (
    <div className="min-h-screen relative">
      <Header />

      {/* Background PixelBlast para as seções após o Hero */}
      <div style={{position: 'relative', height: '500px', overflow: 'hidden'}}>
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
        </div>
        {/* Overlay leve para contraste */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

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
