import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { LinkedinIcon, TwitterIcon, Globe } from 'lucide-react';

export function Participantes() {
  // Skeleton para participantes
  const participantes = [
    {
      nome: 'Ulisses Brisolara',
      tema: 'A definir',
      bio: 'Professor adjunto do Centro de Desenvolvimento Tecnológico da Universidade Federal de Pelotas (UFPel) e coordenador do Hub de Inovação em Inteligência Artificial (H2IA).',
      image: `${import.meta.env.BASE_URL}/img/ulisses.png`,
      social: {
        linkedin: 'https://www.linkedin.com/in/ubcorrea/'
      }
    },
    {
      nome: 'Leomar Rosa',
      tema: 'A definir',
      bio: 'Biografia do palestrante será adicionada em breve.',
      image: `${import.meta.env.BASE_URL}/img/palestrante.png`,
      social: {
        linkedin: '#',
      }
    },
    {
      nome: 'Adenauer Yamin',
      tema: 'A definir',
      bio: 'Graduação em Engenharia Elétrica pela Universidade Católica de Pelotas, mestrado e doutorado em Computação pela Universidade Federal do Rio Grande do Sul.',
      image: `${import.meta.env.BASE_URL}/img/adenauer.png`,
      social: {
        linkedin: 'https://www.linkedin.com/in/adenauer-yamin/',
      }
    },
    {
      nome: 'Geelsu Hwang',
      tema: 'A definir',
      bio: 'Associate Professor in the Department of Preventive & Restorative Sciences.',
      image: `${import.meta.env.BASE_URL}/img/geelsu.png`,
      social: {
        linkedin: 'https://www.linkedin.com/in/geelsu-hwang-8a608935/',
      }
    },
    {
      nome: 'Mateus Grellert',
      tema: 'A definir',
      bio: 'Atualmente é professor adjunto da Universidade Federal do Rio Grande do Sul (UFRGS), docente permanente do Programa de Pós-Graduação em Ciência da Computação (PPGCC) da Universidade Federal de Santa Catarina (UFSC).',
      image: `${import.meta.env.BASE_URL}/img/mateus.png`,
      social: {
        linkedin: 'https://www.linkedin.com/in/mateus-grellert/',
      }
    },
    {
      nome: 'Pedro Toledo',
      tema: 'Analog Design in the IP business unit at Synopsys',
      bio: 'Pedro Toledo (Member, IEEE) received the B.Sc. degree in electronic engineering from the Universidade Federal de Pernambuco (UFPE).',
      image: `${import.meta.env.BASE_URL}/img/toledo.png`,
      social: {
        linkedin: 'https://www.linkedin.com/in/eng-pedro-toledo/',
      }
    },
     {
      nome: 'Henrique Völz',
      tema: 'Proteção Elétrica e Ensaios de Relés de Média Tensão',
      bio: 'Biografia do palestrante será adicionada em breve.',
      image: `${import.meta.env.BASE_URL}/img/palestrante.png`,
      social: {
        linkedin: '#',
      }
    }

  ];

  return (
    <section id="participantes" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Participantes</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Conheça os especialistas que compartilharão seus conhecimentos durante a 11ª Semana Tecnológica.
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
      </div>
    </section>
  );
}