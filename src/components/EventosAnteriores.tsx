import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Calendar, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function EventosAnteriores() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const fotos = [
    { id: 1, titulo: 'Abertura do Evento 2024', descricao: 'Cerimônia de abertura com autoridades' },
    { id: 2, titulo: 'Palestra sobre IA', descricao: 'Especialista apresentando sobre inteligência artificial' },
    { id: 3, titulo: 'Workshop DevOps', descricao: 'Sessão prática de desenvolvimento e operações' },
    { id: 4, titulo: 'Networking Coffee', descricao: 'Momento de interação entre participantes' },
    { id: 5, titulo: 'Mesa Redonda', descricao: 'Discussão sobre futuro da tecnologia' },
    { id: 6, titulo: 'Encerramento 2024', descricao: 'Cerimônia de encerramento' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % fotos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + fotos.length) % fotos.length);
  };

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
      imagem: '/semanaTecnologica/public/img/evento2024.png',
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
      imagem: '/semanaTecnologica/public/img/evento2023.png',
      link: 'http://olaria.ucpel.edu.br/st2023/doku.php'
    }
  ];

  const estatisticas = {
    totalParticipantes: 'x00+',
    totalPalestras: 'xx+',
    totalEdicoes: '10',
    satisfacao: '99%'
  };

  return (
    <section id="eventos-anteriores" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Eventos Anteriores</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Relembre as edições passadas da Semana Tecnológica e veja como o evento tem crescido ao longo dos anos.
          </p>
        </div>

        {/* Estatísticas Gerais */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="text-blue-600" size={32} />
            </div>
            <div className="text-3xl font-bold text-gray-900">{estatisticas.totalParticipantes}</div>
            <div className="text-gray-600">Participantes</div>
          </div>
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Award className="text-green-600" size={32} />
            </div>
            <div className="text-3xl font-bold text-gray-900">{estatisticas.totalPalestras}</div>
            <div className="text-gray-600">Palestras</div>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Calendar className="text-purple-600" size={32} />
            </div>
            <div className="text-3xl font-bold text-gray-900">{estatisticas.totalEdicoes}</div>
            <div className="text-gray-600">Edições</div>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Award className="text-orange-600" size={32} />
            </div>
            <div className="text-3xl font-bold text-gray-900">{estatisticas.satisfacao}</div>
            <div className="text-gray-600">Satisfação</div>
          </div>
        </div>

        {/* Cards dos Eventos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {eventosAnteriores.map((evento, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <ImageWithFallback 
                  src={evento.imagem}
                  alt={evento.titulo}
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{evento.titulo}</span>
                  <span className="text-lg font-normal text-blue-600">{evento.ano}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{evento.data}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users size={16} />
                    <span>{evento.participantes} participantes</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Award size={16} />
                    <span>{evento.palestras} palestras</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{evento.descricao}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Principais Destaques:</h4>
                  <ul className="space-y-2">
                    {evento.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full"
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
        <div className="bg-white rounded-lg p-8 shadow-md">
          <h3 className="text-2xl font-semibold text-center mb-8">Galeria de Momentos</h3>
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {fotos.map((foto, index) => (
                  <div key={foto.id} className="w-full flex-shrink-0">
                    <div className="aspect-video bg-gray-100 rounded-lg flex flex-col items-center justify-center p-8">
                      <div className="text-center">
                        <h4 className="text-lg font-semibold mb-2 text-gray-700">{foto.titulo}</h4>
                        <p className="text-gray-500">{foto.descricao}</p>
                        <div className="mt-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
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
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
            >
              <ChevronLeft size={24} className="text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
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
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">Faça Parte da História!</h3>
            <p className="text-xl mb-6">
              Participe da edição 2025 e seja parte do maior evento de tecnologia da região.
            </p>
            <Button 
              size="lg"
              className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-blue-900 backdrop-blur-sm"
              onClick={() => window.open('https://forms.gle/TGJ6ErsBtDmYqmp66', '_blank')}
            >
              Inscreva-se Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}