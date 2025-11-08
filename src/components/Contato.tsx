import { useForm, ValidationError } from '@formspree/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import { Toaster, toast } from 'sonner';
import { useGlitch } from 'react-powerglitch';

export function Contato() {
  const [state, handleSubmit, reset] = useForm("xzzanbvw");

  if (state.succeeded) {
    toast.success("Mensagem enviada com sucesso!");
    reset(); 
  }

  const glitchCTA = useGlitch({
    playMode: 'hover',
    createContainers: true,
    hideOverflow: true,
    glitchTimeSpan: false,
    slice: { count: 3, velocity: 8, minHeight: 0.05, maxHeight: 0.15 },
    shake: { velocity: 5, amplitudeX: 0.1, amplitudeY: 0.1 },
    pulse: false,
  });

  return (
    <section id="contato" className="relative py-20">

      {/* Fundo translúcido com glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 to-purple-50/30 backdrop-blur-2xl pointer-events-none -z-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold drop-shadow-lg mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight font-conthrax">Contato</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Entre em contato conosco para esclarecer dúvidas, sugerir palestras ou obter mais informações sobre o evento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário de Contato */}
          <Card className="bg-white/10 backdrop-blur-md border border-white/40 shadow-md hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">Envie uma Mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6 text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text leading-tight">
                {['nome', 'email', 'assunto'].map((field) => (
                  <div key={field}>
                    <Label htmlFor={field}>
                      {field === 'nome' ? 'Nome Completo' : field === 'email' ? 'Email' : 'Assunto'}
                    </Label>
                    <Input
                    
                      id={field}
                      name={field}
                      type={field === 'email' ? 'email' : 'text'}
                      required
                      placeholder={field === 'nome' ? 'Seu nome completo' : field === 'email' ? 'seu.email@exemplo.com' : 'Sobre o que você gostaria de falar?'}
                    />
                    <ValidationError prefix={field} field={field} errors={state.errors} />
                  </div>
                ))}

                <div>
                  <Label className="text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight" htmlFor="mensagem">Mensagem</Label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    placeholder="Descreva sua dúvida ou sugestão..."
                    className="min-h-[120px]"
                  />
                  <ValidationError prefix="Mensagem" field="mensagem" errors={state.errors} />
                </div>
                
                <Button type="submit" disabled={state.submitting} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  {state.submitting ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Informações de Contato e Redes Sociais */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-md border border-white/40 shadow-md hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-white">
                {[
                  { icon: <Mail className="text-blue-600 mt-1" size={20} />, title: 'Email', lines: ['vicky.bandeira@ucpel.edu.br', 'Resposta em até 24 horas'] },
                  { icon: <Phone className="text-green-600 mt-1" size={20} />, title: 'Telefone', lines: ['(53) 32123-3322', 'Segunda a sexta, 8h às 18h'] },
                  { icon: <MapPin className="text-red-600 mt-1" size={20} />, title: 'Endereço', lines: ['Rua Gonçalves Chaves, 373', 'Centro - Pelotas/RS', 'CEP: 96015-560'] },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    {item.icon}
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      {item.lines.map((line, idx) => (
                        <p key={idx} className={idx === item.lines.length - 1 ? "text-sm text-white" : ""}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Redes Sociais */}
            <Card className="bg-white/10 backdrop-blur-md border border-white/40 shadow-md hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">Redes Sociais</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white mb-4">Siga-nos nas redes sociais para ficar por dentro de todas as novidades:</p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { href: "https://www.facebook.com/UCPel", icon: <Facebook className="text-blue-600" size={20} />, label: "Facebook", color: "bg-blue-50 hover:bg-blue-100" },
                    { href: "https://www.instagram.com/ucpel", icon: <Instagram className="text-pink-600" size={20} />, label: "Instagram", color: "bg-pink-50 hover:bg-pink-100" },
                    { href: "https://www.linkedin.com/school/ucpel/posts/?feedView=all", icon: <Linkedin className="text-blue-700" size={20} />, label: "LinkedIn", color: "bg-blue-50 hover:bg-blue-100" },
                    { href: "https://x.com/ucpel", icon: <Twitter className="text-blue-500" size={20} />, label: "Twitter", color: "bg-blue-50 hover:bg-blue-100" },
                  ].map((item, idx) => (
                    <a key={idx} ref={glitchCTA.ref} href={item.href} target="__blank" className={`flex items-center space-x-3 p-3 ${item.color} rounded-lg transition-colors`}>
                      {item.icon}
                      <span className={`${item.color.split(' ')[0] === 'bg-blue-50' ? 'text-blue-600' : 'text-pink-600'}`}>{item.label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mapa */}
        <div className="mt-16">
          <Card className="bg-white/30 backdrop-blur-md border border-white/40 shadow-md hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">Localização</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3391.849446106952!2d-52.34363682437834!3d-31.77459197409863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9511b59569451f1b%3A0x2512d7bca00e1ed0!2sUniversidade%20Cat%C3%B3lica%20de%20Pelotas%20-%20UCPEL%2C%20Campus%20I!5e0!3m2!1spt-BR!2sbr!4v1757709719599!5m2!1spt-BR!2sbr"
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
              <div className="mt-4 text-center text-white">
                <p>
                  O evento será realizado no campus principal da Universidade Católica de Pelotas, 
                  localizada no centro da cidade com fácil acesso por transporte público.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Toaster richColors />
    </section>
  );
}
