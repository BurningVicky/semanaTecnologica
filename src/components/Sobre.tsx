import { Card, CardContent } from './ui/card';
import { Users, Calendar, Award, Globe } from 'lucide-react';

export function Sobre() {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Networking',
      description: 'Conecte-se com profissionais, estudantes e empresários do setor tecnológico.'
    },
    {
      icon: <Calendar className="h-8 w-8 text-purple-600" />,
      title: '3 Dias de Evento',
      description: 'Programação completa com palestras durante a tarde e noite.'
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: 'Certificação',
      description: 'Certificado de participação para todos os inscritos com presença mínima confirmada.'
    },
    {
      icon: <Globe className="h-8 w-8 text-indigo-600" />,
      title: 'Tendências Globais',
      description: 'Conheça as últimas tendências e inovações tecnológicas do mercado.'
    }
  ];

  return (
    <section id="sobre" className="py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Sobre o Evento</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
             A 11ª Semana Tecnológica da UCPEL, promovida pelos cursos do Centro de Ciências Sociais e Tecnológicas, será realizada entre os dias 12 a 14 de novembro de 2025.
             A abertura ocorrerá no dia 12, na sala não definida da Universidade Católica de Pelotas, e as demais atividades noturnas serão transmitidas pela plataforma Google Meet.
          </p>          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-xl text-white max-w-3xl mx-auto pb-12">
                Os minicursos da tarde serão presenciais, em laboratórios definidos na programação.
                O evento tem como objetivo reunir estudantes, pesquisadores e profissionais para discutir avanços tecnológicos e inovações em inteligência artificial, consolidando-se como espaço de integração acadêmica e científica.
              </p>

        <div className="rounded-lg p-8 shadow-md pt-12">
          <h3 className="text-2xl font-semibold mb-6 pt-12 text-white">O que esperar?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Palestras Inspiradoras</h4>
              <p className="text-white mb-4">
                Especialistas renomados compartilhando conhecimentos sobre IA, desenvolvimento web, 
                segurança digital, e muito mais.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-purple-400">Workshops Práticos</h4>
              <p className="text-white mb-4">
                Sessões hands-on para aprender novas tecnologias e ferramentas do mercado.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-400">Área de Exposição</h4>
              <p className="text-white mb-4">
                Empresas parceiras apresentando suas soluções e oportunidades de carreira.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-indigo-800">Coffee Break</h4>
              <p className="text-white mb-4">
                Momentos de descontração e networking entre os participantes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}