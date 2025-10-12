import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Calendar, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useGlitch } from 'react-powerglitch';

export function EventosAnteriores() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const fotos = [
    { id: 1, titulo: 'Abertura do Evento 2024', descricao: 'Cerimônia de abertura com autoridades' },
    { id: 2, titulo: 'Palestra sobre IA', descricao: 'Especialista apresentando sobre inteligência artificial' },
    { id: 3, titulo: 'Minicurso Ferramentas de Acessibilidade', descricao: 'Sessão prática de desenvolvimento e operações' },
    { id: 4, titulo: 'Networking Coffee', descricao: 'Momento de interação entre participantes' },
    { id: 5, titulo: 'Mesa Redonda', descricao: 'Discussão sobre futuro da tecnologia' },
    { id: 6, titulo: 'Encerramento 2024', descricao: 'Cerimônia de encerramento' }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % fotos.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + fotos.length) % fotos.length);

  const eventosAnteriores = [
    {
      ano: '2024',
      titulo: 'Semana Tecnológica 2024: Reflexões e Perspectivas da Inteligência Artificial para a Próxima Geração',
      data: '11-14 de Novembro',
      participantes: 'x00+',
      palestras: '4',
      descricao: 'Evento focado em Inteligência Artificial, Machine Learning e suas aplicações no mercado de trabalho.',
      highlights: [
        'Reflexões e Perspectivas da Inteligência Artificial para a Próxima Geração',
        'Do matchmaking para a educação: o que jogos nos ensinam sobre aprendizagem',
        'Tendências e Desafios em Tecnologia na Era do Tudo Conectado',
        'Mesa Redonda: Os avanços tecnológicos na Engenharia'
      ],
      imagem: `${import.meta.env.BASE_URL}/img/evento2024.png`,
      link: 'https://st2024ucpel.exehda.org/doku.php?id=start'
    },
    {
      ano: '2023',
      titulo: 'Semana Tecnológica 2023: Serviço às Pessoas e à Sociedade',
      data: '06-09 de Novembro',
      participantes: 'x00+',
      palestras: '8',
      descricao: 'Edição dedicada à transformação digital à serviço das pessoas e da sociedade.',
      highlights: [
        'Empreendedorismo: o modelo de negócio para incubação de empresas',
        'Inovações tecnológicas na área da saúde: Equipamentos médico-hospitalares',
        'Minicurso: Fundamentos de Impressão 3D',
        'Segurança em Sistemas Embarcados: problemas, soluções e perspectivas'
      ],
      imagem: `${import.meta.env.BASE_URL}/img/evento2023.png`,
      link: 'http://olaria.ucpel.edu.br/st2023/doku.php'
    }
  ];

  const estatisticas = {
    totalParticipantes: 'x00+',
    totalPalestras: 'xx+',
    totalEdicoes: '10',
    satisfacao: '99%'
  };

  const glitchCTA1 = useGlitch({
      playMode: 'hover',
      createContainers: true,
      hideOverflow: true,
      glitchTimeSpan: false,
      slice: { count: 3, velocity: 8, minHeight: 0.05, maxHeight: 0.15 },
      shake: { velocity: 5, amplitudeX: 0.1, amplitudeY: 0.1 },
      pulse: false,
    });

  return (
    <section id="eventos-anteriores" className="relative py-20 bg-transparent overflow-hidden">
      {/* Camada de fundo com glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 to-purple-50/30 backdrop-blur-2xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight font-conthrax">Eventos Anteriores</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Relembre as edições passadas da Semana Tecnológica e veja como o evento tem crescido ao longo dos anos.
          </p>
        </div>

        {/* Estatísticas Gerais */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { icon: <Users className="text-blue-600" size={32} />, valor: estatisticas.totalParticipantes, label: 'Participantes' },
            { icon: <Award className="text-green-600" size={32} />, valor: estatisticas.totalPalestras, label: 'Palestras' },
            { icon: <Calendar className="text-purple-600" size={32} />, valor: estatisticas.totalEdicoes, label: 'Edições' },
            { icon: <Award className="text-orange-600" size={32} />, valor: estatisticas.satisfacao, label: 'Satisfação' },
          ].map((item, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-white/30 backdrop-blur-md border border-white/40 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-white/50">
                {item.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900">{item.valor}</div>
              <div className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Cards dos Eventos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {eventosAnteriores.map((evento, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border border-white/40 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <ImageWithFallback 
                  src={evento.imagem}
                  alt={evento.titulo}
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight text-2xl font-conthrax">
                  <span>{evento.titulo}</span>
                  <span className="text-lg font-normal text-blue-600">{evento.ano}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <div className="text-white flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{evento.data}</span>
                  </div>
                  <div className="text-white flex items-center space-x-1">
                    <Users size={16} />
                    <span>{evento.participantes} participantes</span>
                  </div>
                  <div className="text-white flex items-center space-x-1">
                    <Award size={16} />
                    <span>{evento.palestras} palestras</span>
                  </div>
                </div>
                
                <p className="text-white mb-4">{evento.descricao}</p>
                
                <div className="mb-6">
                  <h4 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight font-semibold mb-3 text-gray-900">Principais Destaques:</h4>
                  <ul className="space-y-2">
                    {evento.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full bg-white/60 hover:bg-white/80 text-blue-800 border-white/50 backdrop-blur-md"
                  onClick={() => window.open(evento.link, '_blank')}
                >
                  Ver Detalhes do Evento
                  <ExternalLink size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Galeria de Fotos - Slider */}
        <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/40">
          <h3 className="text-2xl font-semibold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight font-conthrax">Galeria de Momentos</h3>
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {fotos.map((foto) => (
                  <div key={foto.id} className="w-full flex-shrink-0">
                    <div className="aspect-video bg-white/60 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center p-8">
                      <div className="text-center">
                        <h4 className="text-lg font-semibold mb-2 text-gray-800">{foto.titulo}</h4>
                        <p className="text-gray-600">{foto.descricao}</p>
                        <div className="mt-4 w-16 h-16 bg-blue-100/70 rounded-full flex items-center justify-center mx-auto">
                          <span className="text-blue-600 text-2xl">📸</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Controles do Slider */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
            >
              <ChevronLeft size={24} className="text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
            >
              <ChevronRight size={24} className="text-gray-600" />
            </button>
            
            {/* Indicadores */}
            <div className="flex justify-center mt-6 space-x-2">
              {fotos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/20 backdrop-blur-md border border-white/40 rounded-2xl p-8 text-white shadow-lg">
            <h3 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight font-conthrax text-2xl font-semibold mb-4">Faça Parte da História!</h3>
            <p className="text-xl mb-6">
              Participe da edição 2025 e seja parte do maior evento de tecnologia da região.
            </p>
            <div ref={glitchCTA1.ref}>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3"
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSf435wtiOgvmrIXR3Z9a44Ikgw3rjx7rK9lSG2HL83eSD0weA/viewform?usp=sharing&ouid=112873183507119668479', '_blank')}
                >
                  Inscreva-se Gratuitamente
                </Button>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
}
