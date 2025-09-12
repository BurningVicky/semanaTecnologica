import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Mail, Phone, LinkedinIcon } from 'lucide-react';

export function Organizacao() {
  const organizadores = [
    {
      nome: 'Prof. Dr. João Silva',
      cargo: 'Coordenador Geral',
      departamento: 'Ciência da Computação',
      email: 'joao.silva@ucpel.edu.br',
      telefone: '(53) 2123-8800',
      linkedin: '#',
      bio: 'Professor titular com mais de 15 anos de experiência em tecnologia e coordenador de eventos acadêmicos.',
      image: 'https://images.unsplash.com/photo-1691026336764-f24456f76e03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTc3MDI3NzF8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      nome: 'Profª. Msc. Maria Santos',
      cargo: 'Vice-Coordenadora',
      departamento: 'Sistemas de Informação',
      email: 'maria.santos@ucpel.edu.br',
      telefone: '(53) 2123-8801',
      linkedin: '#',
      bio: 'Especialista em gestão de projetos tecnológicos e desenvolvimento de software.',
      image: 'https://images.unsplash.com/photo-1691026336764-f24456f76e03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTc3MDI3NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      nome: 'Prof. Dr. Carlos Oliveira',
      cargo: 'Coordenador de Palestras',
      departamento: 'Engenharia de Software',
      email: 'carlos.oliveira@ucpel.edu.br',
      telefone: '(53) 2123-8802',
      linkedin: '#',
      bio: 'Doutor em Engenharia de Software com foco em metodologias ágeis e DevOps.',
      image: 'https://images.unsplash.com/photo-1691026336764-f24456f76e03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTc3MDI3NzN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      nome: 'Profª. Ana Costa',
      cargo: 'Coordenadora de Logistics',
      departamento: 'Administração',
      email: 'ana.costa@ucpel.edu.br',
      telefone: '(53) 2123-8803',
      linkedin: '#',
      bio: 'Especialista em gestão de eventos e coordenação logística de grandes projetos.',
      image: 'https://images.unsplash.com/photo-1691026336764-f24456f76e03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTc3MDI3NzR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const instituicoes = [
    {
      nome: 'Universidade Católica de Pelotas',
      tipo: 'Organizadora Principal',
      logo: '/api/placeholder/200/100'
    },
    {
      nome: 'Prefeitura de Pelotas',
      tipo: 'Apoio Institucional',
      logo: '/api/placeholder/200/100'
    },
    {
      nome: 'Federação das Indústrias',
      tipo: 'Parceira',
      logo: '/api/placeholder/200/100'
    },
    {
      nome: 'SEBRAE RS',
      tipo: 'Apoio',
      logo: '/api/placeholder/200/100'
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

        {/* Contato da Organização */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-center mb-6">Contato da Organização</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold mb-2">Email Geral</h4>
              <p className="text-blue-600">semana.tecnologica@ucpel.edu.br</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Telefone</h4>
              <p className="text-gray-600">(53) 2123-8800</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Endereço</h4>
              <p className="text-gray-600">Rua Félix da Cunha, 412 - Pelotas/RS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}