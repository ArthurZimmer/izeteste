'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Users, Building2, User, MessageCircle, Bot, Calendar, Mail, Instagram, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const whatsappNumber = '5551997055060';

  const plans = [
    {
      name: 'Individual',
      icon: User,
      description: 'Perfeito para profissionais autônomos que querem automatizar tarefas repetitivas.',
      features: ['1 automação personalizada', 'Suporte por WhatsApp', 'Configuração incluída'],
    },
    {
      name: 'Equipe',
      icon: Users,
      description: 'Ideal para pequenas equipes que buscam mais produtividade.',
      features: ['Até 3 automações', 'Integração entre ferramentas', 'Treinamento da equipe'],
      featured: true,
    },
    {
      name: 'Empresa',
      icon: Building2,
      description: 'Soluções completas para empresas que querem escalar operações.',
      features: ['Automações ilimitadas', 'Consultoria personalizada', 'Suporte prioritário'],
    },
  ];

  const services = [
    { icon: MessageCircle, title: 'WhatsApp', desc: 'Responda automaticamente' },
    { icon: Instagram, title: 'Instagram', desc: 'Engaje seus seguidores' },
    { icon: Calendar, title: 'Agendamentos', desc: 'Organize sua agenda' },
    { icon: Mail, title: 'E-mails', desc: 'Gerencie mensagens' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-5" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-[#7C3AED]" />
              <span className="text-[#7C3AED] font-medium">Automações com Inteligência Artificial</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="gradient-text">visualize</span>,{' '}
              <span className="text-gray-800">automatize</span>,{' '}
              <span className="gradient-text">realize</span>.
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Transforme seu negócio com automações inteligentes. 
              Economize tempo, reduza custos e aumente sua produtividade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/produtos"
                className="inline-flex items-center justify-center gap-2 gradient-bg text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity hover-lift"
              >
                <Bot className="w-5 h-5" />
                Ver Automações
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre as automações da IZE.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transition-colors hover-lift"
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O que a <span className="gradient-text">IZE</span> faz?</h2>
            <p className="text-gray-600 text-lg">Automatizamos processos repetitivos para você focar no que importa.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services?.map((service, index) => (
              <motion.div
                key={service?.title ?? index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover-lift text-center"
              >
                {service?.icon && <service.icon className="w-12 h-12 text-[#7C3AED] mx-auto mb-4" />}
                <h3 className="font-semibold text-lg mb-1">{service?.title ?? ''}</h3>
                <p className="text-gray-500 text-sm">{service?.desc ?? ''}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Escolha seu <span className="gradient-text">Plano</span></h2>
            <p className="text-gray-600 text-lg">Soluções para todos os tamanhos de negócio.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans?.map((plan, index) => (
              <motion.div
                key={plan?.name ?? index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white p-8 rounded-2xl shadow-lg hover-lift ${
                  plan?.featured ? 'ring-2 ring-[#7C3AED]' : ''
                }`}
              >
                {plan?.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#7C3AED] text-white px-4 py-1 rounded-full text-sm font-medium">
                    Mais Popular
                  </span>
                )}
                {plan?.icon && <plan.icon className="w-12 h-12 text-[#7C3AED] mb-4" />}
                <h3 className="text-2xl font-bold mb-2">{plan?.name ?? ''}</h3>
                <p className="text-gray-600 mb-6">{plan?.description ?? ''}</p>
                <ul className="space-y-3 mb-8">
                  {plan?.features?.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#7C3AED] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre o plano ${plan?.name ?? ''}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 gradient-bg text-white py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="w-5 h-5" />
                  Entre em Contato
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
