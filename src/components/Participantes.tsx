import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { LinkedinIcon, TwitterIcon, Globe } from 'lucide-react';

export function Participantes() {
  // Skeleton para participantes
  const participantes = [
    {
      nome: 'A ser confirmado',
      cargo: 'Especialista em IA',
      empresa: 'Tech Company',
      tema: 'Inteligência Artificial: O Futuro é Agora',
      bio: 'Biografia do palestrante será adicionada em breve.',
      image: `${import.meta.env.BASE_URL}/img/palestrante.png`,
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#'
      }
    },
    {
      nome: 'A ser confirmado',
      cargo: 'Desenvolvedor Senior',
      empresa: 'Web Solutions',
      tema: 'Desenvolvimento Web Moderno',
      bio: 'Biografia do palestrante será adicionada em breve.',
      image: `${import.meta.env.BASE_URL}/img/palestrante.png`,
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#'
      }
    },
    {
      nome: 'A ser confirmado',
      cargo: 'Especialista em Segurança',
      empresa: 'CyberSec Corp',
      tema: 'CyberSecurity 2025',
      bio: 'Biografia do palestrante será adicionada em breve.',
      image: `${import.meta.env.BASE_URL}/img/palestrante.png`,
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#'
      }
    },
    {
      nome: 'A ser confirmado',
      cargo: 'Cloud Architect',
      empresa: 'CloudTech',
      tema: 'Cloud Computing e DevOps',
      bio: 'Biografia do palestrante será adicionada em breve.',
      image: `${import.meta.env.BASE_URL}/img/palestrante.png`,
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#'
      }
    },
    {
      nome: 'A ser confirmado',
      cargo: 'UX/UI Designer',
      empresa: 'Design Studio',
      tema: 'UX/UI Design: Criando Experiências',
      bio: 'Biografia do palestrante será adicionada em breve.',
      image: `${import.meta.env.BASE_URL}/img/palestrante.png`,
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#'
      }
    },
    {
      nome: 'A ser confirmado',
      cargo: 'Blockchain Developer',
      empresa: 'Crypto Solutions',
      tema: 'Blockchain e Criptomoedas',
      bio: 'Biografia do palestrante será adicionada em breve.',
      image: `${import.meta.env.BASE_URL}/img/palestrante.png`,
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#'
      }
    }
  ];

  return (
    <section id="participantes" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Participantes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça os especialistas que compartilharão seus conhecimentos durante a Semana Tecnológica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {participantes.map((participante, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="aspect-w-1 aspect-h-1">
                <ImageWithFallback 
                  src={participante.image}
                  alt={participante.nome}
                  className="w-full h-64 object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{participante.nome}</h3>
                <p className="text-blue-600 mb-1">{participante.cargo}</p>
                <p className="text-sm text-gray-500 mb-4">{participante.empresa}</p>
                
                <div className="mb-4">
                  <Badge variant="outline" className="bg-purple-50 text-purple-700">
                    {participante.tema}
                  </Badge>
                </div>
                
                <p className="text-sm text-gray-600 mb-4">{participante.bio}</p>
                
                <div className="flex space-x-3">
                  <a 
                    href={participante.social.linkedin} 
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <LinkedinIcon size={20} />
                  </a>
                  <a 
                    href={participante.social.twitter} 
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <TwitterIcon size={20} />
                  </a>
                  <a 
                    href={participante.social.website} 
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <Globe size={20} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Temas das Palestras</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Inteligência Artificial</h4>
                <p className="text-sm text-blue-600">Machine Learning, Deep Learning e aplicações práticas da IA</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Desenvolvimento Web</h4>
                <p className="text-sm text-green-600">Frameworks modernos, performance e melhores práticas</p>
              </div>
              <div className="p-4 bg-red-50 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Segurança Cibernética</h4>
                <p className="text-sm text-red-600">Proteção de dados, ameaças e estratégias de defesa</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Cloud Computing</h4>
                <p className="text-sm text-purple-600">AWS, Azure, DevOps e arquiteturas escaláveis</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">UX/UI Design</h4>
                <p className="text-sm text-orange-600">Design thinking, prototipagem e experiência do usuário</p>
              </div>
              <div className="p-4 bg-indigo-50 rounded-lg">
                <h4 className="font-semibold text-indigo-800 mb-2">Blockchain</h4>
                <p className="text-sm text-indigo-600">Criptomoedas, contratos inteligentes e descentralização</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}