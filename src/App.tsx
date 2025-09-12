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

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
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