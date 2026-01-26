'use client';

import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Clock, Users, Target, ShieldCheck, Rocket, Heart, BarChart3 } from 'lucide-react';
import Link from 'next/link';

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
      icon: Target,
      title: 'Automação de Agendamentos',
      stat: '45%',
      description: 'Corte custos de agendamento em até 45%. Elimine conflitos e trocas intermináveis de mensagens.',
      color: 'bg-pink-100 text-pink-600',
    },
    {
      icon: BarChart3,
      title: 'Decisões Inteligentes',
      stat: '20%',
      description: 'Empresas com análise preditiva registram até 20% de aumento nas vendas.',
      color: 'bg-cyan-100 text-cyan-600',
    },
    {
      icon: ShieldCheck,
      title: 'Menos Erros',
      stat: '70%',
      description: 'A IA pode reduzir falhas em processos manuais em até 70%, garantindo mais qualidade.',
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: Rocket,
      title: 'Escalabilidade',
      stat: '180%',
      description: 'Aumente sua capacidade de atendimento em até 180% sem crescer proporcionalmente a equipe.',
      color: 'bg-indigo-100 text-indigo-600',
    },
    {
      icon: Heart,
      title: 'Satisfação da Equipe',
      stat: '94%',
      description: 'Até 94% dos trabalhadores relatam que ferramentas de IA economizam tempo e permitem foco em atividades estratégicas.',
      color: 'bg-yellow-100 text-yellow-600',
    },
  ];

  return (
    <div className="pt-24 pb-20">
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] p-12 rounded-3xl text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-purple-100 mb-8 text-lg">
              Conheça nossas automações e comece a economizar tempo hoje.
            </p>
            <a
              href="https://wa.me/5551997055060?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos%20Ize."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#7C3AED] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              <Rocket className="w-5 h-5" />
              Falar com especialista
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
