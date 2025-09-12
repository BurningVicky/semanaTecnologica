import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Calendar, Users, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function EventosAnteriores() {
  const eventosAnteriores = [
    {
      ano: '2024',
      titulo: 'Semana Tecnológica 2024: IA e Futuro',
      data: '15-18 de Novembro',
      participantes: '500+',
      palestras: '12',
      descricao: 'Evento focado em Inteligência Artificial, Machine Learning e suas aplicações no mercado de trabalho.',
      highlights: [
        'Palestras sobre ChatGPT e IA Generativa',
        'Workshop de Python para Data Science',
        'Mesa redonda sobre ética em IA',
        'Feira de estágios em tech'
      ],
      imagem: 'https://images.unsplash.com/photo-1748767358264-8254666bb119?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwYmFja2dyb3VuZCUyMGFic3RyYWN0fGVufDF8fHx8MTc1NzcwMjc4MXww&ixlib=rb-4.1.0&q=80&w=1080',
      link: 'https://ucpel.edu.br/eventos/semana-tecnologica-2024'
    },
    {
      ano: '2023',
      titulo: 'Semana Tecnológica 2023: Transformação Digital',
      data: '13-16 de Novembro',
      participantes: '450+',
      palestras: '10',
      descricao: 'Edição dedicada à transformação digital nas empresas e o impacto das novas tecnologias.',
      highlights: [
        'Cloud Computing e AWS',
        'Desenvolvimento Mobile com React Native',
        'Segurança da Informação',
        'Startup Pitch Competition'
      ],
      imagem: 'https://images.unsplash.com/photo-1748767358264-8254666bb119?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwYmFja2dyb3VuZCUyMGFic3RyYWN0fGVufDF8fHx8MTc1NzcwMjc4MXwx&ixlib=rb-4.1.0&q=80&w=1080',
      link: 'https://ucpel.edu.br/eventos/semana-tecnologica-2023'
    }
  ];

  const estatisticas = {
    totalParticipantes: '950+',
    totalPalestras: '22',
    totalEdicoes: '2',
    satisfacao: '98%'
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

        {/* Galeria de Fotos */}
        <div className="bg-white rounded-lg p-8 shadow-md">
          <h3 className="text-2xl font-semibold text-center mb-8">Galeria de Momentos</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-sm">Foto {index}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Button variant="outline">
              Ver Todas as Fotos
              <ExternalLink size={16} className="ml-2" />
            </Button>
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
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900"
              onClick={() => window.open('https://forms.google.com', '_blank')}
            >
              Inscreva-se Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}