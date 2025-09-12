import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

export function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular envio do formulário
    const emailBody = `Nome: ${formData.nome}%0D%0AEmail: ${formData.email}%0D%0AAssunto: ${formData.assunto}%0D%0A%0D%0AMensagem:%0D%0A${formData.mensagem}`;
    const mailtoLink = `mailto:semana.tecnologica@ucpel.edu.br?subject=${encodeURIComponent(formData.assunto)}&body=${emailBody}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contato</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entre em contato conosco para esclarecer dúvidas, sugerir palestras ou obter mais informações sobre o evento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário de Contato */}
          <Card>
            <CardHeader>
              <CardTitle>Envie uma Mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="nome">Nome Completo</Label>
                  <Input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="assunto">Assunto</Label>
                  <Input
                    id="assunto"
                    name="assunto"
                    type="text"
                    required
                    value={formData.assunto}
                    onChange={handleChange}
                    placeholder="Sobre o que você gostaria de falar?"
                  />
                </div>
                
                <div>
                  <Label htmlFor="mensagem">Mensagem</Label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    value={formData.mensagem}
                    onChange={handleChange}
                    placeholder="Descreva sua dúvida ou sugestão..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Informações de Contato */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-600">semana.tecnologica@ucpel.edu.br</p>
                    <p className="text-sm text-gray-500">Resposta em até 24 horas</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="text-green-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Telefone</h4>
                    <p className="text-gray-600">(53) 2123-8800</p>
                    <p className="text-sm text-gray-500">Segunda a sexta, 8h às 18h</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="text-red-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Endereço</h4>
                    <p className="text-gray-600">Rua Félix da Cunha, 412</p>
                    <p className="text-gray-600">Centro - Pelotas/RS</p>
                    <p className="text-gray-600">CEP: 96010-000</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Redes Sociais */}
            <Card>
              <CardHeader>
                <CardTitle>Redes Sociais</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Siga-nos nas redes sociais para ficar por dentro de todas as novidades:</p>
                <div className="grid grid-cols-2 gap-4">
                  <a href="#" className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <Facebook className="text-blue-600" size={20} />
                    <span className="text-blue-600">Facebook</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 p-3 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors">
                    <Instagram className="text-pink-600" size={20} />
                    <span className="text-pink-600">Instagram</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <Linkedin className="text-blue-700" size={20} />
                    <span className="text-blue-700">LinkedIn</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <Twitter className="text-blue-500" size={20} />
                    <span className="text-blue-500">Twitter</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mapa */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle>Localização</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.4982984772744!2d-52.34432468486!3d-31.771919781325476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9511b58f3e5e0f1b%3A0x7a9f0a0a0a0a0a0a!2sUniversidade%20Cat%C3%B3lica%20de%20Pelotas!5e0!3m2!1spt!2sbr!4v1635789012345!5m2!1spt!2sbr"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da UCPEL"
                  className="rounded-lg"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-600">
                  O evento será realizado no campus principal da Universidade Católica de Pelotas, 
                  localizada no centro da cidade com fácil acesso por transporte público.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}