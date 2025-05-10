import Link from "next/link"
import { Leaf, Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-green-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Leaf className="h-6 w-6 mr-2" />
              <span className="font-bold text-xl">Recife Sustenta</span>
            </div>
            <p className="text-green-100 text-sm">
              Plataforma digital para combater o desperdício de alimentos e promover o reaproveitamento orgânico em
              Recife.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-green-200 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-green-200 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-green-200 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-green-100 hover:text-white transition-colors">
                  Página Inicial
                </Link>
              </li>
              <li>
                <Link href="/alimentos" className="text-green-100 hover:text-white transition-colors">
                  Alimentos Disponíveis
                </Link>
              </li>
              <li>
                <Link href="/como-receber" className="text-green-100 hover:text-white transition-colors">
                  Como Receber
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-green-100 hover:text-white transition-colors">
                  Sobre o Projeto
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-green-100 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Para Doadores</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cadastro-doador" className="text-green-100 hover:text-white transition-colors">
                  Cadastro de Doador
                </Link>
              </li>
              <li>
                <Link href="/cadastro-alimento" className="text-green-100 hover:text-white transition-colors">
                  Cadastrar Alimento
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-green-100 hover:text-white transition-colors">
                  Área do Doador
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-100 hover:text-white transition-colors">
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-100 hover:text-white transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 text-green-300" />
                <span className="text-green-100">contato@recifesustenta.recife.pe.gov.br</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 text-green-300" />
                <span className="text-green-100">(81) 3355-8000</span>
              </li>
              <li className="mt-4">
                <p className="text-green-100">Central de Atendimento:</p>
                <p className="text-green-100 font-bold">156</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 mt-10 pt-6 text-center text-green-200 text-sm">
          <p>© 2025 Recife Sustenta. Todos os direitos reservados.</p>
          <p className="mt-2">Uma iniciativa da Prefeitura do Recife</p>
        </div>
      </div>
    </footer>
  )
}
