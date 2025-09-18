import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Mail, Phone, LinkedinIcon } from 'lucide-react';

export function Organizacao() {
  const organizadores = [
    {
      nome: 'Profª. Dra. Morgana Macedo',
      cargo: 'Coordenadora Geral',
      departamento: 'Ciência da Computação',
      email: '@ucpel.edu.br',
      linkedin: '#',
      bio: 'Lorem.',
      image: '/semanaTecnologica/img/palestraPlaceholder.png'
    },
    {
      nome: 'Profª. Lorem',
      cargo: 'Vice-Coordenadora',
      departamento: 'Sistemas',
      email: '@ucpel.edu.br',
      linkedin: '#',
      bio: 'Lorem.',
      image: '/semanaTecnologica/img/palestraPlaceholder.png'
    },
    {
      nome: 'Prof. Lorem',
      cargo: 'Coordenador x',
      departamento: 'Engenharia de Software',
      email: '@ucpel.edu.br',
      linkedin: '#',
      bio: 'Lorem.',
      image: '/semanaTecnologica/img/palestraPlaceholder.png'
    },
    {
      nome: 'Profª. Lorem',
      cargo: 'Coordenadora',
      departamento: 'Lorem',
      email: '@ucpel.edu.br',
      linkedin: '#',
      bio: 'Lorem.',
      image: '/semanaTecnologica/img/palestraPlaceholder.png'
    }
  ];

  const instituicoes = [
    {
      nome: 'Universidade Católica de Pelotas',
      tipo: 'Organizadora Principal',
      logo: '#'
    },
    {
      nome: 'Lorem',
      tipo: 'Apoio Institucional',
      logo: '#'
    },
    {
      nome: 'Lorem',
      tipo: 'Parceira',
      logo: '#'
    },
    {
      nome: 'Lorem',
      tipo: 'Apoio',
      logo: '#'
    }
  ];

  return (
    <section id="organizacao" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Organização</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça a equipe de professores e profissionais responsáveis pela organização da Semana Tecnológica.
          </p>
        </div>

        {/* Organizadores */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center mb-12">Comitê Organizador</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {organizadores.map((organizador, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-w-1 aspect-h-1">
                  <ImageWithFallback 
                    src={organizador.image}
                    alt={organizador.nome}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-1">{organizador.nome}</h4>
                  <p className="text-blue-600 text-sm mb-1">{organizador.cargo}</p>
                  <p className="text-gray-500 text-sm mb-3">{organizador.departamento}</p>
                  <p className="text-sm text-gray-600 mb-4">{organizador.bio}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <Mail size={16} className="text-gray-400" />
                      <a href={`mailto:${organizador.email}`} className="text-blue-600 hover:underline">
                        {organizador.email}
                      </a>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Phone size={16} className="text-gray-400" />
                      <span className="text-gray-600">{organizador.telefone}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <LinkedinIcon size={16} className="text-gray-400" />
                      <a href={organizador.linkedin} className="text-blue-600 hover:underline">
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Instituições */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-12">Instituições Parceiras</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {instituicoes.map((instituicao, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 text-center">
                <CardContent className="p-6">
                  <div className="h-24 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-gray-500 text-sm">Logo da {instituicao.nome}</span>
                  </div>
                  <h4 className="font-semibold mb-2">{instituicao.nome}</h4>
                  <p className="text-sm text-blue-600">{instituicao.tipo}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}