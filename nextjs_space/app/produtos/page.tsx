'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Calendar, Mail, Instagram, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ProdutosPage() {
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
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nossas <span className="gradient-text">Automações</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Escolha a categoria de automação que melhor atende seu negócio. 
            Cada categoria possui soluções específicas para suas necessidades.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {categories?.map((category, index) => (
            <motion.div
              key={category?.slug ?? index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/produtos/${category?.slug ?? ''}`}
                className="block group"
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
                  <div className="flex items-center gap-2 text-[#7C3AED] font-semibold">
                    Ver produtos
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
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
            Quer combinar automações? Confira nossos pacotes com desconto!
          </p>
          <Link
            href="/pacotes"
            className="inline-flex items-center gap-2 gradient-bg text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Ver Pacotes
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
