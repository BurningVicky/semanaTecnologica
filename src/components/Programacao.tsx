import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';

export function Programacao() {
  const programacaoTarde = [
    { horario: '14:00 - 14:30', atividade: 'Credenciamento e Welcome Coffee', palestrante: 'Organização' },
    { horario: '14:30 - 15:30', atividade: 'Inteligência Artificial: O Futuro é Agora', palestrante: 'A definir' },
    { horario: '15:30 - 15:45', atividade: 'Coffee Break', palestrante: '-' },
    { horario: '15:45 - 16:45', atividade: 'Desenvolvimento Web Moderno', palestrante: 'A definir' },
    { horario: '16:45 - 17:00', atividade: 'Encerramento do Período', palestrante: 'Organização' }
  ];

  const programacaoNoite1 = [
    { horario: '19:15 - 19:30', atividade: 'Recepção dos Participantes', palestrante: 'Organização' },
    { horario: '19:30 - 20:30', atividade: 'Segurança Cibernética em 2025', palestrante: 'A definir' },
    { horario: '20:30 - 20:45', atividade: 'Intervalo', palestrante: '-' },
    { horario: '20:45 - 21:45', atividade: 'Cloud Computing e DevOps', palestrante: 'A definir' }
  ];

  const programacaoNoite2 = [
    { horario: '19:15 - 19:30', atividade: 'Abertura da Noite', palestrante: 'Organização' },
    { horario: '19:30 - 20:30', atividade: 'UX/UI Design: Criando Experiências', palestrante: 'A definir' },
    { horario: '20:30 - 20:45', atividade: 'Pausa para Networking', palestrante: '-' },
    { horario: '20:45 - 21:45', atividade: 'Blockchain e Criptomoedas', palestrante: 'A definir' }
  ];

  const programacaoNoite3 = [
    { horario: '19:15 - 19:30', atividade: 'Início da Última Noite', palestrante: 'Organização' },
    { horario: '19:30 - 20:30', atividade: 'Startups e Empreendedorismo Tech', palestrante: 'A definir' },
    { horario: '20:30 - 20:45', atividade: 'Coffee Break Final', palestrante: '-' },
    { horario: '20:45 - 21:45', atividade: 'Mesa Redonda: O Futuro da Tecnologia', palestrante: 'Painelistas' }
  ];

  const TableComponent = ({ title, data, day, badge }: { title: string, data: any[], day: string, badge: string }) => (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{title}</span>
          <Badge variant="outline" className={badge}>{day}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Horário</TableHead>
              <TableHead>Atividade</TableHead>
              <TableHead>Palestrante</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-mono text-sm">{item.horario}</TableCell>
                <TableCell>{item.atividade}</TableCell>
                <TableCell className="text-sm text-gray-600">{item.palestrante}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );

  return (
    <section id="programacao" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Programação</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Confira a programação completa dos 3 dias de evento com palestras vespertinas e noturnas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <TableComponent 
            title="Dia 1 - Tarde"
            data={programacaoTarde}
            day="12/11"
            badge="bg-blue-100 text-blue-800"
          />
          
          <TableComponent 
            title="Dia 1 - Noite"
            data={programacaoNoite1}
            day="12/11"
            badge="bg-blue-900 text-blue-100"
          />
          
          <TableComponent 
            title="Dia 2 - Noite"
            data={programacaoNoite2}
            day="13/11"
            badge="bg-purple-900 text-purple-100"
          />
          
          <TableComponent 
            title="Dia 3 - Noite"
            data={programacaoNoite3}
            day="14/11"
            badge="bg-green-900 text-green-100"
          />
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            * A programação pode sofrer alterações. Mantenha-se atualizado através dos nossos canais oficiais.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="bg-blue-50 text-blue-700">Palestras</Badge>
            <Badge variant="outline" className="bg-green-50 text-green-700">Workshops</Badge>
            <Badge variant="outline" className="bg-purple-50 text-purple-700">Mesa Redonda</Badge>
            <Badge variant="outline" className="bg-orange-50 text-orange-700">Networking</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}