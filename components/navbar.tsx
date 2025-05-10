"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Leaf, Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Leaf className="h-6 w-6 text-green-600 mr-2" />
            <span className="font-bold text-xl text-green-700">Recife Sustenta</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/ranking" className="text-gray-600 hover:text-green-600 transition-colors">
              Ranking
            </Link>
            <Link href="/alimentos" className="text-gray-600 hover:text-green-600 transition-colors">
              Alimentos Disponíveis
            </Link>
            <Link href="/como-receber" className="text-gray-600 hover:text-green-600 transition-colors">
              Como Receber
            </Link>
            <Link href="/sobre" className="text-gray-600 hover:text-green-600 transition-colors">
              Sobre o Projeto
            </Link>
            <Link href="/contato" className="text-gray-600 hover:text-green-600 transition-colors">
              Contato
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                Entrar
              </Button>
            </Link>
            <Link href="/cadastro-doador">
              <Button className="bg-green-600 hover:bg-green-700">Cadastrar</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600 focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/alimentos"
              className="text-gray-600 hover:text-green-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Alimentos Disponíveis
            </Link>
            <Link
              href="/ranking"
              className="text-gray-600 hover:text-green-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Ranking
            </Link>
            <Link
              href="/como-receber"
              className="text-gray-600 hover:text-green-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Como Receber
            </Link>
            <Link
              href="/sobre"
              className="text-gray-600 hover:text-green-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre o Projeto
            </Link>
            <Link
              href="/contato"
              className="text-gray-600 hover:text-green-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            <div className="pt-2 flex flex-col space-y-3">
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                  Entrar
                </Button>
              </Link>
              <Link href="/cadastro-doador" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-green-600 hover:bg-green-700">Cadastrar</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
