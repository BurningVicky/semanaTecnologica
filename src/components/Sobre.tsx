import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Users, Calendar, Award, Globe } from 'lucide-react';
import { useGlitch } from 'react-powerglitch';

export function Sobre() {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-400" />,
      title: 'Networking',
      description: 'Conecte-se com profissionais, estudantes e empresários do setor tecnológico.'
    },
    {
      icon: <Calendar className="h-8 w-8 text-purple-400" />,
      title: '5 Dias de Evento',
      description: 'Programação intensa com palestras e minicursos durante a noite.'
    },
    {
      icon: <Award className="h-8 w-8 text-green-400" />,
      title: 'Certificação',
      description: 'Todos os participantes recebem certificado conforme presença mínima.'
    },
    {
      icon: <Globe className="h-8 w-8 text-indigo-400" />,
      title: 'Tendências Globais',
      description: 'Descubra as últimas inovações e pesquisas do cenário tecnológico mundial.'
    }
  ];

  // Efeitos glitch
  const glitchCTA = useGlitch({
    playMode: 'hover',
    createContainers: true,
    hideOverflow: true,
    glitchTimeSpan: false,
    slice: { count: 4, velocity: 8, minHeight: 0.05, maxHeight: 0.15 },
    shake: { velocity: 5, amplitudeX: 0.1, amplitudeY: 0.1 },
    pulse: false,
  });

  const glitchInvite = useGlitch({
    playMode: 'always',
    createContainers: true,
    hideOverflow: true,
    glitchTimeSpan: false,
    slice: { count: 3, velocity: 6, minHeight: 0.05, maxHeight: 0.15 },
    shake: { velocity: 4, amplitudeX: 0.05, amplitudeY: 0.05 },
    pulse: false,
  });

  return (
    <section id="sobre" className="py-24 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Convite CASSW 2025 */}
        <div className="text-center mb-20">
          <h2
            
            className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight font-conthrax"
          >
            15th CASSW 2025 está chegando!
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
            The 15th IEEE Circuits and Systems Workshop will take place in Pelotas from November 10 to 11, 2025, with an in-person format.

            It is an event intended for academic and industrial exchange between local and foreign researchers. The speakers are renowned researchers from institutions with significant work in circuits and systems.

            The event will last for two days, and the program consists of a series of invited talks and poster sessions.
          </p>

          <div ref={glitchCTA.ref}>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3"
                  onClick={() => window.open('https://wp.ufpel.edu.br/cassw2025/', '_blank')}
                >
                  Site Oficial CASSW 2025
                </Button>
              </div>
        </div>

        {/* Seção "Sobre o Evento" */}
        <div className="text-center mb-16">
          <h3 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight font-conthrax">Sobre o Evento</h3>
          <p className="text-lg text-white max-w-3xl mx-auto">
            A <strong>11ª Semana Tecnológica UCPEL</strong>, promovida pelos cursos do Centro de Ciências Sociais e Tecnológicas, será realizada entre os dias <strong>10 e 14 de novembro de 2025</strong>.  
            A abertura ocorrerá no auditório da Universidade Católica de Pelotas, e as demais atividades noturnas também serão transmitidas via Google Meet.
          </p>
        </div>

        {/* Cards de Destaques */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white/10 border border-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Minicurso em destaque */}
        <div className="mt-16 bg-white/10 border border-white/10 rounded-xl p-8 text-left backdrop-blur-sm">
          <h4 className="text-2xl lg:text-2xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight font-conthrax">
            Minicurso em Destaque
          </h4>
          <h5 className="text-xl font-bold text-white mb-2">
            Proteção Elétrica e Ensaios de Relés de Média Tensão
          </h5>
          <p className="text-gray-200 mb-2">
            <strong>Ministrante:</strong> Henrique Völz<br />
            <strong>Datas:</strong> 10/11 e 11/11/2025 — das 19h às 22h<br />
            <strong>Vagas:</strong> 25 &nbsp;|&nbsp; <strong>Modalidade:</strong> Presencial<br />
            <strong>Local:</strong> Laboratório de Sistemas Embarcados (D202)<br />
            <strong>Valor:</strong> R$ 15,00 (incluso certificado)
          </p>

          <div className="mt-4" ref={glitchCTA.ref}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-lg px-8 py-3 rounded-full transition-all duration-300"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSc25Am-IaVrCw44laIYEdY5goHKhyEKhqAdjfebZ4jaemgMLg/viewform?usp=sharing&ouid=112873183507119668479', '_blank')}
            >
              Inscreva-se
            </Button>
          </div>

          <p className="text-white leading-relaxed mt-6">
            Este minicurso abordará métodos de proteção de transformadores de potência, esquemas de ligação, 
            curvas e proteções ANSI (50/51, 50/51N, 27, 59, 89), além da parametrização e aferição do relé Siemens 7SR1102 com testes práticos em campo.
          </p>
        </div>

        {/* O que esperar */}
        <div className="rounded-lg p-8 shadow-md pt-12"> <h3 className="text-2xl lg:text-2xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight font-conthrax">O que esperar?</h3> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h4 className="text-lg font-semibold mb-4 text-blue-400">Palestras Inspiradoras</h4> <p className="text-white mb-4"> Especialistas renomados compartilhando conhecimentos sobre IA, desenvolvimento web, segurança digital, e muito mais. </p> </div> <div> <h4 className="text-lg font-semibold mb-4 text-purple-400">Workshops Práticos</h4> <p className="text-white mb-4"> Sessões hands-on para aprender novas tecnologias e ferramentas do mercado. </p> </div> <div> <h4 className="text-lg font-semibold mb-4 text-green-400">Área de Exposição</h4> <p className="text-white mb-4"> Empresas parceiras apresentando suas soluções e oportunidades de carreira. </p> </div>  </div> </div> </div> </section> ); }
