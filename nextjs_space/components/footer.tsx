import { Zap, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const whatsappNumber = '5551997055060';
  const whatsappMessage = encodeURIComponent('Olá! Gostaria de saber mais sobre as automações da IZE.');

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <Zap className="w-8 h-8 text-[#A78BFA]" />
            <span className="text-2xl font-bold">IZE</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
            <Link href="/beneficios" className="text-gray-400 hover:text-white transition-colors">Benefícios</Link>
            <Link href="/planos" className="text-gray-400 hover:text-white transition-colors">Planos</Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© 2026 IZE Automações. Visualize, automatize, realize.</p>
        </div>
      </div>
    </footer>
  );
}
