import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Mail, LinkedinIcon } from 'lucide-react';

export function Organizacao() {
  const organizadores = [
    {
      nome: 'Morgana Macedo Azevedo da Rosa',
      cargo: 'Coordenadora Geral',
      titulacao: 'Doutora - MEEC',
      linkedin: 'https://www.linkedin.com/in/morgana-macedo-547a21180/',
      image: `${import.meta.env.BASE_URL}/img/profMorgana.png`,
    },
    {
      nome: 'Leandro Zafalon Pieper',
      cargo: 'Coordenador',
      titulacao: 'Doutor - CCST',
      linkedin: 'https://www.linkedin.com/in/leandro-zafalon-pieper-b88a5510/',
      image: `${import.meta.env.BASE_URL}/img/leandro.png`,
    },
    {
      nome: 'Lizandro de Souza Oliveira',
      cargo: 'Coordenador',
      titulacao: 'Doutor - MEEC',
      linkedin: 'https://www.linkedin.com/in/lizandro-oliveira/',
      image: `${import.meta.env.BASE_URL}/img/lizandro.png`,
    },
  ];

  const colaboradores = [
    { nome: 'Everton Granemann Souza', area: 'MEEC', instituicao: 'UCPel' },
    { nome: 'Tiago Giesel', area: 'Graduação/Tecnologia', instituicao: 'UCPel' },
    { nome: 'Sergio Almeida', area: 'MEEC', instituicao: 'UCPel' },
    { nome: 'Rogério Albandes', area: 'MEEC', instituicao: 'UCPel' },
    { nome: 'Carlos Vinícius Alves', area: 'CCST', instituicao: 'UCPel' },
  ];

  const comissao = [
    {
      nome: 'Vicky Cavalheiro Bandeira',
      curso: 'CCST',
      atividades: 'Organização, criação da página web e apoio gerencial',
    },
  ];

  const instituicoes = [
    {
      nome: 'Universidade Católica de Pelotas',
      tipo: 'Organizadora Principal',
      logo: `${import.meta.env.BASE_URL}/img/UCPLG2.png`,
    },
  ];

  return (
    <section id="organizacao" className="relative py-24 overflow-hidden">

      {/* Fundo translúcido com blur e gradiente animado */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-900/60 via-purple-900/50 to-transparent backdrop-blur-xl animate-gradient" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Título principal */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight font-conthrax">
            Organização
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Conheça os docentes e colaboradores responsáveis pela realização da 11ª Semana Tecnológica.
          </p>
        </div>

        {/* Comitê Organizador */}
        <div className="mb-20">
          <h3 className="text-2xl lg:text-3xl font-semibold text-center text-purple-200 mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            Comitê Organizador
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {organizadores.map((organizador, index) => (
              <Card
                key={index}
                className="bg-white/10 border border-white/20 backdrop-blur-lg hover:bg-white/20 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
              >
                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-t-lg">
                  <ImageWithFallback
                    src={organizador.image}
                    alt={organizador.nome}
                    className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <CardContent className="p-6 text-white">
                  <h4 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight font-semibold text-lg mb-1">{organizador.nome}</h4>
                  <p className="text-purple-300 text-sm mb-1">{organizador.cargo}</p>
                  <p className="text-gray-300 text-sm mb-3">{organizador.titulacao}</p>

                  <div className="flex items-center space-x-2 text-sm mt-4">
                    <Mail size={16} className="text-gray-400" />
                    <a
                      href={`mailto:${organizador.email}`}
                      className="text-blue-400 hover:underline"
                    >
                      {organizador.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2 text-sm mt-2">
                    <LinkedinIcon size={16} className="text-gray-400" />
                    <a
                      href={organizador.linkedin}
                      target="_blank"
                      className="text-blue-400 hover:underline"
                    >
                      LinkedIn
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Docentes e Colaboradores */}
        <div className="mb-20">
          <h3 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight text-2xl font-semibold text-center text-purple-200 mb-8">
            Docentes / Colaboradores
          </h3>
          <div className="overflow-x-auto rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
            <table className="w-full text-sm text-gray-200">
              <thead className="bg-white/10 text-gray-100 uppercase text-xs tracking-wider">
                <tr>
                  <th className="px-6 py-3 text-left">Nome</th>
                  <th className="px-6 py-3 text-left">Curso/Área</th>
                  <th className="px-6 py-3 text-left">Instituição</th>
                </tr>
              </thead>
              <tbody>
                {colaboradores.map((colab, index) => (
                  <tr key={index} className="hover:bg-white/10 transition">
                    <td className="px-6 py-3">{colab.nome}</td>
                    <td className="px-6 py-3">{colab.area}</td>
                    <td className="px-6 py-3">{colab.instituicao}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Comissão Organizadora */}
        <div className="mb-20">
          <h3 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight text-2xl font-semibold text-center text-purple-200 mb-8">
            Comissão Organizadora
          </h3>
          <div className="overflow-x-auto rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
            <table className="w-full text-sm text-gray-200">
              <thead className="bg-white/10 text-gray-100 uppercase text-xs tracking-wider">
                <tr>
                  <th className="px-6 py-3 text-left">Nome</th>
                  <th className="px-6 py-3 text-left">Curso/Centro</th>
                  <th className="px-6 py-3 text-left">Atividades</th>
                </tr>
              </thead>
              <tbody>
                {comissao.map((membro, index) => (
                  <tr key={index} className="hover:bg-white/10 transition">
                    <td className="px-6 py-3">{membro.nome}</td>
                    <td className="px-6 py-3">{membro.curso}</td>
                    <td className="px-6 py-3">{membro.atividades}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Instituições */}
        <div>
          <h3 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight text-2xl font-semibold text-center text-purple-200 mb-12">
            Instituições Parceiras
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {instituicoes.map((instituicao, index) => (
              <Card
                key={index}
                className="bg-white/10 border border-white/20 backdrop-blur-lg text-center hover:bg-white/20 transition-all duration-300 hover:shadow-xl"
              >
                <CardContent className="p-6">
                  <ImageWithFallback
                    src={instituicao.logo}
                    alt={instituicao.nome}
                    className="w-full h-48 object-contain mb-4"
                  />
                  <h4 className="font-semibold text-white mb-2">
                    {instituicao.nome}
                  </h4>
                  <p className="text-sm text-purple-300">{instituicao.tipo}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
