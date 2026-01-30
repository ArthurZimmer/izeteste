'use client';

import { TrendingUp, DollarSign, Clock, Users, Target, ShieldCheck, Rocket, Heart, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Mail, Instagram, MessageCircle } from 'lucide-react';
import { WorkflowBackground } from '@/components/workflow-background';
import Image from 'next/image';

export default function BeneficiosPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Aumento de Produtividade',
      stat: '40%',
      description: 'Empresas que implementam IA podem ver um aumento de produtividade de até 40%. Trabalhadores economizam até 122 horas por ano.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: DollarSign,
      title: 'Redução de Custos',
      stat: '30%',
      description: 'Reduza custos operacionais em até 30% com processos otimizados e menos erros humanos.',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Users,
      title: 'Atendimento 24/7',
      stat: '35%',
      description: 'Chatbots com IA reduzem o custo de aquisição de clientes em 35%. Atenda seus clientes a qualquer hora.',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: Clock,
      title: 'Economia de Tempo',
      stat: '50%',
      description: 'Reduza o tempo gasto em tarefas administrativas em até 50% com automações inteligentes.',
      color: 'bg-orange-100 text-orange-600',
    },
    {
      icon: BarChart3,
      title: 'Decisões Inteligentes',
      stat: '20%',
      description: 'Empresas com análise preditiva registram até 20% de aumento nas vendas.',
      color: 'bg-cyan-100 text-cyan-600',
    },
    {
      icon: Rocket,
      title: 'Escalabilidade',
      stat: '180%',
      description: 'Aumente sua capacidade de atendimento em até 180% sem crescer proporcionalmente a equipe.',
      color: 'bg-indigo-100 text-indigo-600',
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Por que <span className="gradient-text">Automatizar</span>?
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Descubra como automações com IA podem transformar seu negócio e potencializar seus resultados.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits?.map((benefit, index) => (
            <motion.div
              key={benefit?.title ?? index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover-lift"
            >
              <div className={`w-14 h-14 rounded-xl ${benefit?.color ?? ''} flex items-center justify-center mb-4`}>
                {benefit?.icon && <benefit.icon className="w-7 h-7" />}
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold gradient-text">{benefit?.stat ?? ''}</span>
                <span className="text-gray-400 text-sm">de melhoria</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit?.title ?? ''}</h3>
              <p className="text-gray-600">{benefit?.description ?? ''}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MOVIDO PARA FORA DO CONTAINER - Por que fazemos isso? Section */}
      <section className="py-20 bg-gray-50 mt-20">
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
                Você <span className="gradient-text">sabia?</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-[#510ac2] mt-3"></div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    No Brasil mais de 22 milhões de empresas utilizam o WhatsApp, e apenas <span className="gradient-text font-semibold">0.3%</span> delas utilizam agentes de IA.
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-[#510ac2] mt-3"></div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    <span className="gradient-text font-semibold">68%</span> (14,9 milhões) das empresas não utilizam pelo <span className="gradient-text font-semibold">alto preço</span> que as plataformas cobram.
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-[#510ac2] mt-3"></div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Dessas 14,9 milhões de empresas, pelo menos <span className="gradient-text font-semibold">60%</span> são <span className="gradient-text font-semibold">pequenos empreendedores</span>, que poupam na contratação de funcionários.
                  </p>
                </div>
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
                  src="/img/benefits_graph.svg"
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
      <div className="bg-gray-50 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-[#9c63ff] to-[#510ac2] p-12 rounded-3xl text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pronto para transformar seu negócio?
              </h2>
              <p className="text-purple-100 mb-8 text-lg">
                Conheça nossas automações e comece a economizar tempo hoje.
              </p>
              <Link
                href="https://wa.me/5551997055060?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos%20Ize."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#7C3AED] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                <Rocket className="w-5 h-5" />
                Falar com especialista
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}