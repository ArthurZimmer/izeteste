'use client';

import { motion } from 'framer-motion';
import { Package, Star, Crown, MessageCircle, Check } from 'lucide-react';

export default function PacotesPage() {
  const whatsappNumber = '5551997055060';

  const packages = [
    {
      name: '2 Automações com 25% de Desconto',
      icon: Package,
      description: 'Combine duas automações e economize! Perfeito para quem quer começar a automatizar.',
      features: [
        'Escolha 2 automações do nosso catálogo',
        '25% de desconto no valor total',
        'Configuração completa incluída',
        'Suporte por 30 dias',
      ],
      // price: 'A partir de R$',
      price: 'Entre em contato',
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: '3 Automações pelo Preço de 2',
      icon: Star,
      description: 'O pacote mais escolhido! Leve 3 automações e pague apenas 2.',
      features: [
        'Escolha 3 automações do nosso catálogo',
        '1 automação totalmente grátis',
        'Integração entre as automações',
        'Suporte por 60 dias',
        'Treinamento incluso',
      ],
      // price: 'A partir de R$',
      price: 'Entre em contato',
      color: 'from-[#7C3AED] to-[#5B21B6]',
      featured: true,
    },
    {
      name: 'Super Pacote Ecossistema',
      icon: Crown,
      description: 'O pacote completo para empresas que querem automatizar tudo. Ecossistema completo de automações.',
      features: [
        'Todas as 4 categorias de automação',
        'WhatsApp + Instagram + Email + Agendamentos',
        'Integrações personalizadas',
        'Consultoria de processos',
        'Suporte prioritário por 90 dias',
        'Atualizações gratuitas',
      ],
      // price: 'A partir de R$',
      price: 'Entre em contato',
      color: 'from-amber-500 to-orange-500',
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
            Nossos <span className="gradient-text">Pacotes</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Economize combinando automações. Quanto mais você automatiza, mais você economiza.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {packages?.map((pkg, index) => (
            <motion.div
              key={pkg?.name ?? index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-3xl shadow-xl overflow-hidden hover-lift ${
                pkg?.featured ? 'ring-2 ring-[#7C3AED]' : ''
              }`}
            >
              {pkg?.featured && (
                <div className="absolute top-0 right-0 bg-[#7C3AED] text-white px-4 py-1 text-sm font-medium rounded-bl-xl">
                  Mais Popular
                </div>
              )}

              <div className={`bg-gradient-to-r ${pkg?.color ?? ''} p-6 text-white`}>
                {pkg?.icon && <pkg.icon className="w-12 h-12 mb-4" />}
                <h3 className="text-xl font-bold">{pkg?.name ?? ''}</h3>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-6">{pkg?.description ?? ''}</p>

                <ul className="space-y-3 mb-8">
                  {pkg?.features?.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t pt-6">
                  <p className="text-2xl font-bold text-[#7C3AED] mb-4">{pkg?.price ?? ''}</p>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Olá! Gostaria de adquirir o produto ${pkg?.name ?? ''}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 gradient-bg text-white py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Quero Este Pacote
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-purple-50 p-8 rounded-2xl text-center"
        >
          <h3 className="text-xl font-bold mb-2">Não encontrou o pacote ideal?</h3>
          <p className="text-gray-600 mb-4">
            Entre em contato e montamos um pacote personalizado para suas necessidades.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de um pacote personalizado de automações.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#7C3AED] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#5B21B6] transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Solicitar Pacote Personalizado
          </a>
        </motion.div>
      </div>
    </div>
  );
}
