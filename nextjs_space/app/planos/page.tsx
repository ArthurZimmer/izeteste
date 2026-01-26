'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Check, Zap, Crown, Rocket, Building2 } from 'lucide-react';

export default function PlanosPage() {
  const whatsappNumber = '5551997055060';

  const plans = [
    {
      name: 'Basic',
      icon: Zap,
      price: '89,90',
      // priceNote: 'A partir de R$',
      semestral: '75,90',
      anual: '59,90',
      features: [
        'Automação simples',
        'Sem agente de IA',
        '1 canal (WhatsApp OU Instagram)',
        'Suporte via e-mail',
        'Até 6 fluxos de automação',
        'Respostas automáticas 24/7',
        '1 integração básica (Google Agenda OU CRM simples)',
      ],
    },
    {
      name: 'Intermediary',
      icon: Rocket,
      price: '159,90',
      // priceNote: 'A partir de R$',
      semestral: '135,90',
      anual: '119,90',
      featured: true,
      features: [
        'Automação com agente de IA',
        'Até 2 canais',
        'Suporte via WhatsApp das 10:00 às 17:00',
        'Até 11 fluxos de automação',
        'Fluxo 24/7',
        'Até 2 integrações',
      ],
    },
    {
      name: 'Advanced',
      icon: Crown,
      price: '299,90',
      // priceNote: 'A partir de R$',
      semestral: '274,90',
      anual: '249,90',
      features: [
        'Automação com agente de IA',
        'Até 4 canais',
        'Suporte via WhatsApp das 07:00 às 22:00',
        'Até 17 fluxos de automação',
        'Fluxo 24/7',
        'Até 3 integrações',
      ],
    },
    {
      name: 'Enterprise',
      icon: Building2,
      price: 'Customizado',
      isCustom: true,
      features: [
        'Automação com agente de IA',
        'Canais customizáveis',
        'Suporte via WhatsApp e Meet',
        'Fluxos customizáveis',
        'Fluxo 24/7',
        'Integrações customizáveis',
      ],
    },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Escolha seu <span className="gradient-text">Plano</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Soluções flexíveis para todos os tamanhos de negócio. 
            Economize ainda mais com planos semestrais ou anuais.
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans?.map((plan, index) => (
            <motion.div
              key={plan?.name ?? index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white p-6 rounded-3xl shadow-lg hover-lift flex flex-col ${
                plan?.featured ? 'ring-2 ring-[#7C3AED] lg:scale-105' : ''
              }`}
            >
              {plan?.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#7C3AED] text-white px-4 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                  Mais Popular
                </span>
              )}

              <div className="text-center mb-6">
                {plan?.icon && (
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl gradient-bg flex items-center justify-center">
                    <plan.icon className="w-7 h-7 text-white" />
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan?.name ?? ''}</h3>
                
                {plan?.isCustom ? (
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-[#7C3AED]">Preço</span>
                    <p className="text-lg text-gray-600">Customizado</p>
                  </div>
                ) : (
                  <div className="mb-2">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-sm text-gray-500">R$</span>
                      <span className="text-4xl font-bold text-[#7C3AED]">{plan?.price ?? ''}</span>
                      <span className="text-gray-500">/mês</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Descontos */}
              {!plan?.isCustom && (
                <div className="bg-purple-50 rounded-xl p-3 mb-6">
                  <p className="text-sm text-center text-gray-600 mb-2">Economize com planos maiores:</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">Semestral:</span>
                    <span className="font-semibold text-[#7C3AED]">R$ {plan?.semestral ?? ''}/mês</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">Anual:</span>
                    <span className="font-semibold text-[#7C3AED]">R$ {plan?.anual ?? ''}/mês</span>
                  </div>
                </div>
              )}

              {/* Features */}
              <ul className="space-y-3 mb-6 flex-grow">
                {plan?.features?.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                    <Check className="w-5 h-5 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Olá! Gostaria de adquirir o plano ${plan?.name ?? ''}.`)}`}
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

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-purple-50 rounded-3xl p-8"
        >
          <h3 className="text-2xl font-bold mb-4">Não sabe qual plano escolher?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Fale com nossa equipe e receba uma consultoria gratuita para encontrar 
            a solução ideal para o seu negócio.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de uma consultoria para escolher o melhor plano.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Falar com Consultor
          </a>
        </motion.div>
      </div>
    </div>
  );
}
