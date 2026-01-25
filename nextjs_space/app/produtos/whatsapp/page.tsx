'use client';

import { motion } from 'framer-motion';
import { MessageCircle, ArrowLeft, Check, Zap, Building2, Users } from 'lucide-react';
import Link from 'next/link';

export default function WhatsAppPage() {
  const whatsappNumber = '5551997055060';

  const products = [
    {
      name: 'Atendente Virtual Básico',
      icon: MessageCircle,
      description: 'Responda perguntas frequentes e capture leads automaticamente. Ideal para pequenos negócios.',
      benefits: [
        'Respostas automáticas 24/7',
        'Menu interativo com opções',
        'Captura de dados do cliente',
        'Encaminhamento para atendente humano',
        'Relatórios de atendimento',
      ],
      ideal: 'Profissionais autônomos e pequenas empresas',
    },
    {
      name: 'Qualificador de Leads',
      icon: Zap,
      description: 'Qualifique leads automaticamente com perguntas inteligentes e envie apenas os melhores para sua equipe.',
      benefits: [
        'Questionário automatizado',
        'Pontuação de leads (lead scoring)',
        'Segmentação automática',
        'Integração com CRM',
        'Notificações em tempo real',
      ],
      ideal: 'Equipes de vendas e marketing',
      featured: true,
    },
    {
      name: 'Central de Atendimento',
      icon: Building2,
      description: 'Solução completa para empresas com alto volume de mensagens. Múltiplos atendentes e departamentos.',
      benefits: [
        'Múltiplos atendentes simultâneos',
        'Roteamento por departamento',
        'Fila de atendimento inteligente',
        'Dashboard em tempo real',
        'Histórico completo de conversas',
        'APIs de integração',
      ],
      ideal: 'Médias e grandes empresas',
    },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/produtos"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#7C3AED] transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar para Produtos
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Respondedor de <span className="gradient-text">WhatsApp</span>
              </h1>
            </div>
          </div>
          <p className="text-gray-600 text-lg max-w-3xl">
            Automatize seu atendimento no WhatsApp e nunca mais perca um cliente. 
            Responda instantâneamente, qualifique leads e escale suas vendas.
          </p>
        </motion.div>

        {/* Products */}
        <div className="grid gap-8">
          {products?.map((product, index) => (
            <motion.div
              key={product?.name ?? index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-3xl shadow-lg overflow-hidden hover-lift ${
                product?.featured ? 'ring-2 ring-[#7C3AED]' : ''
              }`}
            >
              {product?.featured && (
                <div className="bg-[#7C3AED] text-white py-2 px-4 text-center text-sm font-medium">
                  Mais Vendido
                </div>
              )}
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                    {product?.icon && <product.icon className="w-7 h-7 text-green-600" />}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{product?.name ?? ''}</h3>
                    <p className="text-gray-600 mb-4">{product?.description ?? ''}</p>
                    <p className="text-sm text-[#7C3AED] font-medium mb-4">
                      Ideal para: {product?.ideal ?? ''}
                    </p>
                    <div className="grid md:grid-cols-2 gap-3 mb-6">
                      {product?.benefits?.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-700">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Olá! Gostaria de adquirir o produto ${product?.name ?? ''}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 gradient-bg text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Quero Este Produto
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
