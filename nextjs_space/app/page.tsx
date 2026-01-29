'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Mail, Instagram, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { WorkflowBackground } from '@/components/workflow-background';
import Image from 'next/image';

function IzeNode({ delay, color }: { delay: number; color: 'lime' | 'purple' }) {
  const bgColor = color === 'lime'
    ? 'bg-gradient-to-r from-[#a3e635] to-[#84cc16]'
    : 'bg-gradient-to-r from-[#7C3AED] to-[#9333EA]';
  const shadowColor = color === 'lime' ? 'shadow-[#a3e635]/40' : 'shadow-[#7C3AED]/40';

  return (
    <motion.span
      className={`inline-flex items-center justify-center px-2 py-0.5 rounded-md ${bgColor} ${color === 'lime' ? 'text-gray-900' : 'text-white'} font-bold shadow-lg ${shadowColor} mx-0.5 border-2 ${color === 'lime' ? 'border-[#84cc16]' : 'border-[#9333EA]'}`}
      style={{ fontSize: 'inherit' }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.1, y: -2 }}
    >
      ize
    </motion.span>
  );
}

function ConnectorLine({ delay }: { delay: number }) {
  return (
    <motion.svg
      width="24"
      height="12"
      viewBox="0 0 24 12"
      className="inline-block mx-1 align-middle"
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.3, delay }}
    >
      <line x1="0" y1="6" x2="18" y2="6" stroke="#a3e635" strokeWidth="2" />
      <circle cx="21" cy="6" r="3" fill="#a3e635" />
    </motion.svg>
  );
}

export default function Home() {
  const categories = [
    {
      slug: 'whatsapp',
      icon: MessageCircle,
      title: 'Respondedor de WhatsApp',
      description: 'Automatize respostas, qualifique leads e atenda clientes 24/7 no WhatsApp.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
    },
    {
      slug: 'agendador',
      icon: Calendar,
      title: 'Agendador de Eventos',
      description: 'Gerencie agendamentos automaticamente para reuniões, consultas e serviços.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      slug: 'email',
      icon: Mail,
      title: 'Organizador de E-mails',
      description: 'Organize, priorize e responda e-mails automaticamente com IA.',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      slug: 'instagram',
      icon: Instagram,
      title: 'Respondedor de Instagram',
      description: 'Responda DMs, comentários e engaje seus seguidores automaticamente.',
      color: 'from-pink-500 to-purple-600',
      bgColor: 'bg-pink-50',
    },
  ];

  return (
    <div>
      {/* Hero Section - Dark Style with Workflow Background */}
      <section className="min-h-screen flex items-center justify-center hero-dark-bg pt-16 relative overflow-hidden">
        <WorkflowBackground />
        <div className="max-w-5xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl sm:text-5xl md:text-6xl lg:text-6xl font-bold mb-20 leading-tight flex items-center justify-center gap-1 flex-wrap">
              <span className="--foreground">Visual</span>
              <IzeNode delay={0.5} color="lime" />
              <span className="--foreground">,</span>
              <ConnectorLine delay={0.7} />
              <span className="gradient-text-hero">automat</span>
              <IzeNode delay={0.9} color="purple" />
              <span className="--foreground">,</span>
              <ConnectorLine delay={1.1} />
              <span className="--foreground">real</span>
              <IzeNode delay={1.3} color="lime" />
              <span className="--foreground">.</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-1xl text-foreground mb-20 font-bold max-w-1xl mx-auto leading-relaxed">
              A plataforma completa para <span className="gradient-text-hero">automações com IA</span>. Centralize seus canais,
              automatize o atendimento e escale sua operação com eficiência.
            </p>

            <Link
              href="/planos"
              className="inline-flex items-center justify-center gap-2 bg-[#a3e635] hover:bg-[#bef264] text-gray-900 px-10 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg shadow-[#a3e635]/30 border border-[#bef264]/50"
            >
              Conheça nossos planos
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Por que fazemos isso? Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Por que <span className="gradient-text">fazemos isso?</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Acreditamos que toda empresa, independente do tamanho, merece ter acesso a 
                  tecnologias que transformam a sua eficiência e produtividade.
                </p>
                <p>
                  Nossa missão é democratizar o poder da automação utilizando agentes de IA, 
                  tornando-as acessíveis e fáceis de implementar para negócios de todos os portes.
                </p>
                <p>
                  Queremos que você possa focar no que realmente importa: fazer seu negócio 
                  crescer, enquanto nossa tecnologia cuida do resto.
                </p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-lift">
                <Image
                  src="/img/home_page_1.svg"
                  alt="Por que fazemos isso"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#7C3AED]/10 to-[#a3e635]/10 pointer-events-none"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#a3e635]/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#7C3AED]/20 rounded-full blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Automações Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossas <span className="gradient-text">Automações</span></h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Escolha a categoria de automação que melhor atende seu negócio. 
              Cada categoria possui soluções específicas para suas necessidades.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {categories?.map((category, index) => (
              <motion.div
                key={category?.slug ?? index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                  <div className={`${category?.bgColor ?? ''} p-8 rounded-3xl hover-lift transition-all group-hover:shadow-2xl`}>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category?.color ?? ''} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      {category?.icon && <category.icon className="w-8 h-8 text-white" />}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-[#7C3AED] transition-colors">
                      {category?.title ?? ''}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {category?.description ?? ''}
                    </p>
                  </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-gray-600 mb-4">
              Quer um plano completo? Confira nossos planos com os melhores benefícios!
            </p>
            <Link
              href="/planos"
              className="inline-flex items-center gap-2 gradient-bg text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Ver Planos
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
