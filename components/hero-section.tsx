import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Leaf } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-green-600 to-green-800 text-white py-20 px-4 md:px-8">
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center" />
      </div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="flex items-center mb-6">
            <Leaf className="h-10 w-10 mr-2" />
            <h1 className="text-4xl md:text-5xl font-bold">Recife Sustenta</h1>
          </div>
          <p className="text-xl md:text-2xl mb-8">
            Combatendo o desperdício de alimentos e promovendo o reaproveitamento orgânico em Recife
          </p>
          <p className="text-lg mb-10 max-w-2xl">
            Conectamos doadores de alimentos próximos do vencimento com pessoas em situação de vulnerabilidade social,
            criando um ciclo sustentável que beneficia toda a comunidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/cadastro-doador">
              <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100">
                Quero Doar Alimentos
              </Button>
            </Link>
            <Link href="/como-receber">
              <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100">
                Como Receber Alimentos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
