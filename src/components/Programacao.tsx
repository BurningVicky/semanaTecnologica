import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';

export function Programacao() {
  const programacaoOficial = [
    {
      data: '10/11/2025',
      horario: '19h às 22h',
      atividade: 'Minicurso de Proteção Elétrica e Ensaios de Relés de Média Tensão',
      ministrante: 'Henrique Völz',
      local: 'D202 / Presencial',
    },
    {
      data: '11/11/2025',
      horario: '19h às 22h',
      atividade: 'Minicurso de Proteção Elétrica e Ensaios de Relés de Média Tensão',
      ministrante: 'Henrique Völz',
      local: 'D202 / Presencial',
    },
    {
      data: '12/11/2025',
      horario: '19h15 às 20h30',
      atividade: 'Revisitando o conceito de Inteligência Artificial em Tempos de GenAI',
      ministrante: 'Ulisses Brisolara',
      local: 'Via Meet',
    },
    {
      data: '12/11/2025',
      horario: '20h45 às 22h',
      atividade: 'Reflexões Sobre Um Quarto de Século da Presença da IoT',
      ministrante: 'Adenauer Yamin',
      local: 'Via Meet',
    },
    {
      data: '13/11/2025',
      horario: '19h15 às 20h30',
      atividade: 'Machine Learning meets Circuits and Systems',
      ministrante: 'Mateus Grellert',
      local: 'Via Meet',
    },
    {
      data: '13/11/2025',
      horario: '20h45 às 22h',
      atividade: 'Biossensores Eletroquímicos Seletivos',
      ministrante: 'Neftalí Lenin Villarreal Carreño',
      local: 'Via Meet',
    },
    {
      data: '14/11/2025',
      horario: '19h15 às 20h30',
      atividade: 'Analog Design in the IP business unit at Synopsys',
      ministrante: 'Pedro Toledo',
      local: 'Híbrido / C410',
    },
    {
      data: '14/11/2025',
      horario: '20h45 às 22h',
      atividade: 'Técnicas de Otimização em Síntese Lógica e Física Voltadas à Concepção de Circuitos Digitais',
      ministrante: 'Leomar Rosa',
      local: 'C410',
    },
  ];

  return (
    <section id="programacao" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-6xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight font-conthrax">Programação</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Confira a programação completa da 11ª Semana Tecnológica.
          </p>
        </div>

        <Card className="hover:shadow-lg transition-shadow duration-300 bg-white/10 backdrop-blur border border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-white">
              <Badge variant="outline" className="bg-indigo-900 text-white">2025</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-conthrax bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">Data</TableHead>
                  <TableHead className="font-conthrax bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">Horário</TableHead>
                  <TableHead className="font-conthrax bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">Programação</TableHead>
                  <TableHead className="font-conthrax bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">Ministrante(s)</TableHead>
                  <TableHead className="font-conthrax bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">Local / Formato</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
  {programacaoOficial.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-mono text-sm text-white">{item.data}</TableCell>
                  <TableCell className="font-mono text-sm text-white">{item.horario}</TableCell>
                  <TableCell className="text-white">{item.atividade}</TableCell>
                  <TableCell className="font-conthrax text-sm text-white">{item.ministrante}</TableCell>
                  <TableCell className="text-sm text-gray-200">
                    {item.local === 'Via Meet' || item.local === 'Híbrido / C410' ? (
                      <a
                        href={
                          item.local === 'Híbrido / C410'
                            ? 'https://meet.google.com/kcx-jysd-kct'
                            : 'https://meet.google.com/kvg-mjkz-vsx'
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-500 underline transition-colors"
                      >
                        {item.local}
                      </a>
                    ) : (
                      item.local
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-white mb-4">
            * A programação está sujeita a alterações. Acompanhe os canais oficiais da UCPEL para atualizações.
          </p>
        </div>
      </div>
    </section>
  );
}
