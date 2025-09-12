import { Heart, Instagram, Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const linksRapidos = [
    { nome: 'Sobre o Evento', href: '#sobre' },
    { nome: 'Programação', href: '#programacao' },
    { nome: 'Participantes', href: '#participantes' },
    { nome: 'Organização', href: '#organizacao' },
    { nome: 'Eventos Anteriores', href: '#eventos-anteriores' },
    { nome: 'Contato', href: '#contato' }
  ];

  const sponsors = [
    { nome: 'TechCorp', tipo: 'Patrocinador Ouro' },
    { nome: 'DevSolutions', tipo: 'Patrocinador Prata' },
    { nome: 'CloudTech', tipo: 'Patrocinador Bronze' },
    { nome: 'StartupHub', tipo: 'Apoiador' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Informações */}
          <div className="lg:col-span-1">
            <div className="h-12 w-48 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex items-center justify-center mb-6">
              <span className="text-white font-semibold text-lg">UCPEL</span>
            </div>
            <p className="text-gray-300 mb-6">
              A Semana Tecnológica da UCPEL é o maior evento de tecnologia da região sul, 
              promovendo conhecimento, networking e inovação.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <span className="text-sm">semana.tecnologica@ucpel.edu.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-green-400" />
                <span className="text-sm">(53) 2123-8800</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-red-400" />
                <span className="text-sm">Rua Félix da Cunha, 412 - Pelotas/RS</span>
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {linksRapidos.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.nome}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Patrocinadores */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Patrocinadores</h3>
            <div className="space-y-4">
              {sponsors.map((sponsor, index) => (
                <div key={index} className="bg-gray-800 p-3 rounded-lg">
                  <h4 className="font-semibold text-sm">{sponsor.nome}</h4>
                  <p className="text-xs text-gray-400">{sponsor.tipo}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Redes Sociais</h3>
            <p className="text-gray-300 mb-4">
              Siga-nos para ficar por dentro de todas as novidades do evento.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Newsletter</h4>
              <p className="text-sm mb-3">Receba atualizações sobre o evento</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Seu email"
                  className="flex-1 px-3 py-2 bg-white text-gray-900 rounded-l text-sm"
                />
                <button className="bg-gray-800 px-4 py-2 rounded-r text-sm hover:bg-gray-700 transition-colors">
                  ✓
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-300">
                © 2025 Universidade Católica de Pelotas. Todos os direitos reservados.
              </p>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>at UCPEL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}