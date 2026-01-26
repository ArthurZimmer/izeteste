'use client';

// remover esse arquivo

import { motion } from 'framer-motion';
import { Mail, ArrowLeft, Check, MessageCircle, Filter, Reply, Star } from 'lucide-react';
import Link from 'next/link';

export default function EmailPage() {
  const whatsappNumber = '5551997055060';

  const products = [
    {
      name: 'Filtro Inteligente',
      icon: Filter,
      description: 'Organize sua caixa de entrada automaticamente. A IA categoriza, prioriza e arquiva e-mails.',
      benefits: [
        'Categorização automática por tipo',
        'Detecção de spam avançada',
        'Priorização por urgência',
        'Pastas inteligentes dinâmicas',
        'Resumo diário de e-mails',
      ],
      ideal: 'Profissionais com alto volume de e-mails',
    },
    {
      name: 'Respostas Automáticas',
      icon: Reply,
      description: 'Responda e-mails rotineiros automaticamente. A IA entende o contexto e gera respostas personalizadas.',
      benefits: [
        'Respostas baseadas em contexto',
        'Templates personalizados',
        'Aprovação antes do envio',
        'Aprendizado contínuo',
        'Integração com Gmail e Outlook',
        'Histórico de respostas',
      ],
      ideal: 'Equipes de suporte e atendimento',
      featured: true,
    },
    {
      name: 'Assistente de Produtividade',
      icon: Star,
      description: 'Solução completa que combina filtros, respostas e ações automáticas para máxima produtividade.',
      benefits: [
        'Todas as funções anteriores',
        'Extração de tarefas de e-mails',
        'Agendamento de follow-ups',
        'Relatórios de produtividade',
        'Integração com calendrio',
        'Unsubscribe automático',
      ],
      ideal: 'Executivos e gerentes',
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
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Organizador de <span className="gradient-text">E-mails</span>
              </h1>
            </div>
          </div>
          <p className="text-gray-600 text-lg max-w-3xl">
            Recupere o controle da sua caixa de entrada. A IA organiza, prioriza 
            e responde e-mails para você nunca mais se perder em mensagens.
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
                  <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                    {product?.icon && <product.icon className="w-7 h-7 text-orange-600" />}
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
