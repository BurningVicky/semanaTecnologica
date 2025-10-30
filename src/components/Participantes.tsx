import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { LinkedinIcon, TwitterIcon, Globe } from 'lucide-react';

export function Participantes() {
  const participantes = [
    {
      nome: 'Ulisses Brisolara',
      tema: 'A definir',
      bio: 'Professor adjunto do Centro de Desenvolvimento Tecnológico da Universidade Federal de Pelotas (UFPel) e coordenador do Hub de Inovação em Inteligência Artificial (H2IA).',
      image: `${import.meta.env.BASE_URL}/img/ulisses.png`,
      social: {
        linkedin: 'https://www.linkedin.com/in/ubcorrea/',
      },
    },
    {
      nome: 'Leomar Rosa',
      tema: 'A definir',
      bio: 'Doutorado em Microeletrônica pela Universidade Federal do Rio Grande do Sul (2008) com período sanduíche na Universidade de Minnesota - EUA (2005-2006), mestrado em Ciência da Computação pela Universidade Federal do Rio Grande do Sul (2004) e graduação em Ciência da Computação pela Universidade Federal de Pelotas (2001).',
      image: `${import.meta.env.BASE_URL}/img/leomar.png`,
      social: {
        linkedin: 'http://lattes.cnpq.br/1423810014480514',
      },
    },
    {
      nome: 'Adenauer Yamin',
      tema: 'Reflexões Sobre Um Quarto de Século da Presença da IoT',
      bio: 'Graduação em Engenharia Elétrica pela Universidade Católica de Pelotas, mestrado e doutorado em Computação pela Universidade Federal do Rio Grande do Sul.',
      image: `${import.meta.env.BASE_URL}/img/adenauer.png`,
      social: {
        linkedin: 'https://www.linkedin.com/in/adenauer-yamin/',
      },
    },
    {
      nome: 'Geelsu Hwang',
      tema: 'A definir',
      bio: 'Associate Professor in the Department of Preventive & Restorative Sciences.',
      image: `${import.meta.env.BASE_URL}/img/geelsu.png`,
      social: {
        linkedin: 'https://www.linkedin.com/in/geelsu-hwang-8a608935/',
      },
    },
    {
      nome: 'Mateus Grellert',
      tema: 'A definir',
      bio: 'Atualmente é professor adjunto da Universidade Federal do Rio Grande do Sul (UFRGS), docente permanente do Programa de Pós-Graduação em Ciência da Computação (PPGCC) da Universidade Federal de Santa Catarina (UFSC).',
      image: `${import.meta.env.BASE_URL}/img/mateus.png`,
      social: {
        linkedin: 'https://www.linkedin.com/in/mateus-grellert/',
      },
    },
    {
      nome: 'Pedro Toledo',
      tema: 'Analog Design in the IP business unit at Synopsys',
      bio: 'Pedro Toledo (Member, IEEE) received the B.Sc. degree in electronic engineering from the Universidade Federal de Pernambuco (UFPE).',
      image: `${import.meta.env.BASE_URL}/img/toledo.png`,
      social: {
        linkedin: 'https://www.linkedin.com/in/eng-pedro-toledo/',
      },
    },
    {
      nome: 'Henrique Völz',
      tema: 'Proteção Elétrica e Ensaios de Relés de Média Tensão',
      bio: 'Estudante de Engenharia Elétrica na Universidade Católica de Pelotas (UCPel).',
      image: `${import.meta.env.BASE_URL}/img/UCPLG2.png`,
      social: {
        linkedin: 'https://ucpel.edu.br',
      },
    },
  ];

  return (
    <section
      id="participantes"
      className="relative py-24 overflow-hidden"
    >
      {/* Fundo translúcido com blur e gradiente animado */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-900/60 via-indigo-900/50 to-transparent backdrop-blur-xl animate-gradient" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight font-conthrax">
            Participantes
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Conheça os especialistas que compartilharão seus conhecimentos durante a 11ª Semana Tecnológica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {participantes.map((participante, index) => (
            <Card
              key={index}
              className="bg-white/10 border border-white/20 backdrop-blur-lg hover:bg-white/20 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
            >
              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-t-lg">
                <ImageWithFallback
                  src={participante.image}
                  alt={participante.nome}
                  className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <CardContent className="p-6 text-white">
                <h3 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight text-lg font-conthrax mb-1">{participante.nome}</h3>
                <div className="mb-4">
                  <Badge
                    variant="outline"
                    className="bg-purple-600/20 text-purple-300 border border-purple-400/40"
                  >
                    {participante.tema}
                  </Badge>
                </div>

                <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                  {participante.bio}
                </p>

                <div className="flex space-x-3">
                  {participante.social.linkedin && (
                    <a
                      href={participante.social.linkedin}
                      target="_blank"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <LinkedinIcon size={20} />
                    </a>
                  )}
                  {participante.social.twitter && (
                    <a
                      href={participante.social.twitter}
                      target="_blank"
                      className="text-gray-400 hover:text-sky-400 transition-colors"
                    >
                      <TwitterIcon size={20} />
                    </a>
                  )}
                  {participante.social.website && (
                    <a
                      href={participante.social.website}
                      target="_blank"
                      className="text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      <Globe size={20} />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
